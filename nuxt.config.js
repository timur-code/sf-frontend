export default {
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],
    build: {
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
    },
    axios: {
        baseUrl: 'https://sf-rant-backend.herokuapp.com'
    },
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        directivePlugins: [],
        components: [],
        directives: []
    },
    css: ['~/assets/scss/main.scss']
}
