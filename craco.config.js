/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const CracoAlias = require("craco-alias");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": resolve("src/components"),
          "@constants": resolve("src/constants"),
          "@containers": resolve("src/containers"),
        },
      },
    },
  ],
};
