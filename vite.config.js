import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Permite exponer el servidor en Docker
    port: 5173,
    watch: {
      usePolling: true, // Detecta cambios en vivo en Windows + Docker
    },
  },
})