import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  ssr: {
    noExternal: ['react-helmet-async'], // Force Vite à traiter ce module en ESM
  },
})
