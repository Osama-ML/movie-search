import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  { ignores: ["webpack.config.js", "babel.config.js", "build/*"] },
];
