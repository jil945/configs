module.export = {
    parser: "babel-eslint",
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    globals: {
        "__DEV__": "readonly"
    },
    rules: {
        "curly": ["error", "all"],
        "brace-style": ["error", "1tbs"],
        "no-unused-vars": ["warn", {"varsIgnorePattern": "^React$"}],
        "no-console": "warn",
        "no-empty": ["error", {"allowEmptyCatch": true}], 
        "newline-per-chained-call": "error",
        "indent": ["error", 4],
        "linebreak-style": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/display-name": "off",
        "react/prop-types": "warn"
    }
}
