import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: " https://popsi-techy.github.io/amanportfolioweb/",
  plugins: [react()],
})
