import { RuleSetRule, Configuration, DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import path from "path";
export default {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config: Configuration) => {
    const paths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
      locales: "",
      buildLocales: "",
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push(".ts", ".tsx");
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      "@": paths.src,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config!.module!.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("https://api.ru"),
        __PROJECT__: JSON.stringify("storybook"),
      }),
    );
    // Return the altered config
    return config;
  },
}