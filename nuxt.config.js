export default {
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
