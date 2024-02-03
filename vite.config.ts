import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  root: './',
  optimizeDeps: {
    entries: [],
  },
  publicDir: 'dist',
  plugins: [tsconfigPaths()],
  server: {
    port: 5000,
  },
})