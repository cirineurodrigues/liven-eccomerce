/* eslint-disable no-undef */
module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
  plugins: ["babel-plugin-transform-import-meta"],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, modules: false }],
    [
      "@babel/preset-react",
      { targets: { node: "current" }, runtime: "automatic" },
    ],
    "@babel/preset-typescript",
  ],
};
