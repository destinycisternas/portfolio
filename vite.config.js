import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde redes externas (como ngrok)
    port: 5173, // Puedes cambiarlo si usas otro puerto
    allowedHosts: ['.ngrok-free.app'], // Permite cualquier subdominio ngrok
  },
})
