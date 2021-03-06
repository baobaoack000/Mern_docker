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
    "rules": {
        "no-undef": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "off",
        "react/react-in-jsx-scope": "off",
        "semi": "off",
        "no-unused-vars": "off"
    
    }
}
