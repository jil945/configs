module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/essential",
        "plugin:vue/strongly-recommended"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "curly": ["error", "all"],
        "brace-style": ["error", "1tbs"],
        "no-unused-vars": ["warn"],
        "no-empty": ["error", {
            "allowEmptyCatch": true
        }],
        "newline-per-chained-call": "error",
        "indent": ["error", 4],
        "linebreak-style": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/no-unused-vars": "error",
        "vue/v-bind-style": [ "error", "longform" ],
        "vue/v-on-style"  : [ "error", "longform" ],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-indent": ["error", 4,{
            "alignAttributesVertically": true,
            "ignores": [ "VAttribute" ]
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "never",
                "component": "never"
            },
            "svg": "always",
            "math": "always"
        }],
        "vue/max-attributes-per-line": [
            5,
            {
                "singleline": 1,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": true
                }
            }
        ]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
