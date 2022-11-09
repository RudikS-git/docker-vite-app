import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(( { mode } ) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return {
	plugins: [react()]
	server: {
      host: true,
      port: Number(process.env.DOCKER_NODE_PORT),
      strictPort: true,
      hmr: {
        path: '/ws',
        port: Number(process.env.DOCKER_NODE_PORT),
      },
      proxy: {
        '/api': 'BACKEND URL',
      }
    }
  }
  
})
