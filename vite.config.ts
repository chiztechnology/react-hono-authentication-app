// require('dotenv').config();
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // configure a proxy for hono
  server : {
    proxy : {
      "/auth/login" : {
        target : "https://7qk9m2xvu2.us-west-2.awsapprunner.com/v1",
        changeOrigin : true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
