<template>
    <section class="light-background">
        <div class="container">
          <h2 class="title text-center">Login</h2>
          <div class="center-hz">
            <form @submit.prevent="submit" id="login-form">
              <div>
                <label>Email</label>
                <input type="email" name="email" v-model="email"/>
              </div>
              <div class="margin-top">
                <label>Password</label>
                <input type="password" name="password" v-model="password"/>
              </div>
              <div class="margin-top right">
                <button type="submit">Login</button>
              </div>
              <div class="margin-top right">
                <a href="/register" class="">Don't have an account ? Register here</a>
              </div>
            </form>
          </div>
        </div>
      </section>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        intended_url_prop: {
            type: String,
            required: false,
        }
    },
    data() {
        return {
            email: 'johndoe@test.com',
            password: 'secret',
            intendedUrl: this.intended_url_prop === 'undefined' ? '/account' : this.intended_url_prop
        }
    },
    methods: {
      submit(){
        axios.post('/login', {
          email: this.email,
          password: this.password,
        }).then(response => {
          window.location.replace(window.location.protocol + "//" + window.location.host + this.intendedUrl)
        }).catch(error => {
            console.log('error', error);
        })
      }
    }
}
</script>

