import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const Unocss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),
      Unocss(),
    ],
  }
})
