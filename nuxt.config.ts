// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
    app: {
        // head
        head: {
            title: 'НОМБ',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'НОМБ',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
    },

    modules: [
        'nuxt3-pinia',
        '@unocss/nuxt',
        '@vueuse/nuxt',
    ],

    // css
    css: [
        '~/assets/scss/index.scss',
        '~/assets/scss/darkTheme.scss',
        '~/assets/scss/lightTheme.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],

    runtimeConfig: {
        isCustomElement: true,
        public: {
            NUXT_STATIC_URL: process.env.NUXT_STATIC_URL
        }

    },

    // build
    build: {
        transpile: ['element-plus/es'],
    },

    typescript: {
        strict: true,
        shim: false,
    },

    vite: {
        plugins: [ElementPlus()],
    },

    // auto import components
    components: true,

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    unocss: {
        uno: true,
        attributify: true,
        icons: {
            scale: 1.2,
        },
    },
})
