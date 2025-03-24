import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Aafreen2203/Metricoid.git",
  plugins: [ tailwindcss(),react()],
})
