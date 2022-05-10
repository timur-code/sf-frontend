export default {
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
    plugins: [
        '~/plugins/bootstrap.js'
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        baseUrl: 'https://sf-rant-backend.herokuapp.com'
    },

}
