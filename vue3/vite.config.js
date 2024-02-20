import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// noinspection JSUnresolvedReference
const base = process.env.VITE_BASE || '/'

export default defineConfig({
    base,
    plugins: [vueJsx()],
})
