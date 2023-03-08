import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.js'),
            name: 'test-ui-design',
            formats: ['es'],
            fileName: 'test-ui-design'
        },
        sourcemap: true,
        rollupOptions:{
            external:['vue','element-ui'],
            output:{
                globals:{
                    vue:'Vue',
                    "element-ui":'element-ui'
                }
            }
        }
    },
    plugins: [
        createVuePlugin({jsx:true})
    ]
})
