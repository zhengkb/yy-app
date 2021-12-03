module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
    },
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    },
};
