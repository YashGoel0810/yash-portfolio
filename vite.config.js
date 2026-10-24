import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages serves the site from /yash-portfolio/, local dev from /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/yash-portfolio/' : '/',
  plugins: [react()],
}))
