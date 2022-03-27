const mix = require('laravel-mix')

// NOTE: Don't remove this, Because it's the default public folder path on AdonisJs
mix.setPublicPath('public')
mix.disableNotifications()

// Add your assets here
mix.vue().ts('resources/js/app.ts', 'js').sass('resources/sass/app.scss', 'css')
