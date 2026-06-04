import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://kavinparithi-works.github.io/my-portfolio/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
})
