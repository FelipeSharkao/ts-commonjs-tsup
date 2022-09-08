import { defineConfig } from "tsup";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  entry: ["src/index.js"],
  outDir: "dist/build",
  sourcemap: isDev,
  dts: isDev,
  onSuccess: isDev ? "npm start" : undefined,
  clean: !isDev,
  minify: !isDev,
});
