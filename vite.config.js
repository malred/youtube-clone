import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // outDir: 'build',
    manifest: true,  //配置后才能让编译后的vue路径被正确识别
  },
  base: './',
})

