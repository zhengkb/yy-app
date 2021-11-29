module.exports = {
  root: false,
  env: {
    node: false,
  },
  extends: [],
  parserOptions: {
    parser: "babel-eslint",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
  },
};
