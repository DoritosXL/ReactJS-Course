import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// import babel from 'vite-plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // babel({
        //     babelConfig: {
        //         plugins: ['babel-plugin-react-compiler'],
        //     },
        // }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
