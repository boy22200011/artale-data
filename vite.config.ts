import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { ghPages } from "vite-plugin-gh-pages";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  base: "/artale-data/",
  plugins: [vue(), ghPages()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
