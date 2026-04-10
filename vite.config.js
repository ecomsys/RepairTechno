import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";
import Handlebars from 'handlebars'
import path from "path";

Handlebars.registerHelper('times', function (n, block) {
  let accum = ''
  for (let i = 0; i < n; i++) {
    accum += block.fn(i)
  }
  return accum
})

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: [
        path.resolve(__dirname, "src/html"),
        path.resolve(__dirname, 'src/partials'),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    fs: {
      strict: false, // разрешаем доступ к файловой системе
    },
    host: true, // разрешаем все хосты
    strictPort: true
  },
  build: {
    outDir: './docs',
    emptyOutDir: true
  }
});