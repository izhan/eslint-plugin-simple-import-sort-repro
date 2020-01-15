module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/sort": "error"
  }
};
