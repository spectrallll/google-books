import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor";
import { DefinePlugin } from "webpack";
const path = require("path");

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", webpackPreprocessor({
        webpackOptions: {
          mode: "development",
          module: {
            rules: [
              {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: [{
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                }],
              },
              {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                  // Creates "style" nodes from JS strings
                  "style-loader",
                  // CSS -> CommonJS
                  {
                    loader: "css-loader",
                    options: {
                      modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.scss")),
                        localIdentName: "[hash:base64:8]",
                      },
                    },
                  },
                  // S[CA]SS -> CSS
                  "sass-loader",

                ],
              }
            ],
          },
          resolve: {
            extensions: [".tsx", ".ts", ".js"],
            preferAbsolute: true,
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            mainFiles: ["index"],
            alias: {
              "@": path.resolve(__dirname, "src"),
            },
          },
          plugins: [
            new DefinePlugin({
              __API__: JSON.stringify("https://www.googleapis.com/books/v1/"),
              __API_KEY: JSON.stringify("AIzaSyAvzsbLl4np9HzbsTtuds3OXpbpD6ziTmQ")
            })
          ]
        }
      }));
    },
    baseUrl: "http://localhost:3000"
  },
});



