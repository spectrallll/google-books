import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";

export function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }
  if (mode === "production") {
    return "https://www.googleapis.com/books/v1/";
  }
  return "https://www.googleapis.com/books/v1/";
}
export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src")
  };

  const mode = env?.mode || "development";
  const PORT = env?.port || 3000;
  const apiUrl = getApiUrl(mode, env?.apiUrl);
  const apiKey = env?.apiKey || "";

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    apiKey,
    project: "frontend",
  });

  return config;
};