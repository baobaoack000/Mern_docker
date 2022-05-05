/*eslint no-undef: "error"*/
/*eslint-env node*/
// prettier-ignore
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": ["Hello.js"],
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
}
