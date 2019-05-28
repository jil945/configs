// require("./check-versions")();

const path = require("path");
function resolve(...dir) {
    return path.resolve(...dir);
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    /// Project deployment base
    publicPath: process.env.BASE_URL,

    // Where to output built files
    // outputDir: "dist",

    // Where to put static assets (js/css/img/font/...)
    // assetsDir: "",
    
    // Whether to use eslint-loader for lint on save.
    // Types: boolean | 'warning' | 'default' | 'error'
    // lintOnSave: true,

    // Use the full build with in-browser compiler? 
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // runtimeCompiler: false,

    // Configure 'crossorigin' attribute on <link rel="stylesheet"> and <script> tags in generated HTML
    // crossorigin: undefined,

    // Tweak internal webpack configuration
    // See https://cli.vuejs.org/config/#chainwebpack
    chainWebpack: config => {
        // Turn off devtool when in production
        if (isProduction) {
            config.devtool(false);
        }

        // Preserve whitespaces in .vue files
        // See https://stackoverflow.com/questions/51304187/spaces-are-gone-in-html-after-upgrading-to-vue-cli-3
        config.module.rule("vue").use("vue-loader").loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });


        // Need to check if plugin exists, esp in Modern Mode
        // See https://github.com/vuejs/vue-cli/issues/3845#issuecomment-484670336
        const removePlugin = (plugin) => {
            if (config.plugins.has(plugin)) {
                config.plugins.delete(plugin);
            }
        }

        // No idea what this plugin does expect that it helps with code splitting??
        // See https://github.com/webpack/webpack.js.org/issues/2545
        removePlugin("named-chunks");

        // Remove default prefetch/preload
        // See https://cli.vuejs.org/guide/html-and-static-assets.html#preload
        removePlugin("prefetch");
        removePlugin("preload");
        

        // Use OptimizeCssnanoPlugin to minify CSS files by removing comments and merging rules
        // See https://stackoverflow.com/questions/52014764/how-do-i-add-cssnano-optimization-rules-in-vue-cli-3
        if (config.plugins.has("optimize-css") && isProduction) {
            config.plugin("optimize-css")
                .tap(args => [{
                    sourceMap: true,
                    cssnanoOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: {
                                    removeAll: true
                                },
                                mergeRules: true,
                            }
                        ]
                    }
                }]);
        }

        // Use CopyWebpackPlugin to copy .htaccess
        if (config.plugins.has("copy") && isProduction) {
            const to = config.output.get("path");
            config.plugin("copy")
                .tap(args => [
                    [{
                        from: resolve("public"),
                        to,
                        ignore: [".htaccess"]
                    }, {
                        from: resolve("public", ".htaccess"),
                        to,
                        transform: (content, path) => {
                            return content.toString().replace("${WEB_URL}", process.env.BASE_URL);
                        }
                    }], 
                    { copyUnmodified: true }
                ]);
        }
    },

    // CSS related options
    css: {
        // Whether to extract CSS in components into standalone CSS files
        // Can also be object of options to pass to extract-text-webpack-plugin
        extract: true,

        // Enable source maps for CSS?
        sourceMap: isProduction,

        // Pass custom options to pre-processors loaders.
        // loaderOptions: {}
    },

    // Options for webpack-dev-server 
    devServer: {
        host: "localhost",
        port: 8888,
        hot: true,
    },
}
