import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/ddc23b92-3454-42ee-8998-42914b0ebca9/preview/',
  plugins: [react()],
  server: {
    port: 5111,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5111,
    }
  }
})
