import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "@vue/compat"
    }
  },
  build: {
    cssCodeSplit: true
  },
  plugins: [
    eslintPlugin(),
    vue({
      reactivityTransform: true,
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    vuetify({
      autoImport: { labs: true }
    })
  ]
});
