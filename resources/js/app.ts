// @ts-nocheck

window.axios = require('axios')
axios.defaults.xsrfCookieName = 'xsrf-token'

require('../sass/partials/fake.scss')
import { createApp } from 'vue'

import { defineAsyncComponent } from 'vue'
const HeaderComponent = defineAsyncComponent(
  () => import('./components/layouts/HeaderComponent.vue')
)
const FooterComponent = defineAsyncComponent(
  () => import('./components/layouts/FooterComponent.vue')
)
const RegisterComponent = defineAsyncComponent(
  () => import('./components/auth/RegisterComponent.vue')
)
const LoginComponent = defineAsyncComponent(() => import('./components/auth/LoginComponent.vue'))
const WelcomeComponent = defineAsyncComponent(() => import('./components/WelcomeComponent.vue'))
const TypescriptComponent = defineAsyncComponent(
  () => import('./components/TypescriptComponent.vue')
)

createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    TypescriptComponent,
  },
}).mount('#app')

window.addEventListener('load', function () {})

document.addEventListener('DOMContentLoaded', function () {})
