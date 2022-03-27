<template>
    <section class="light-background">
        <div class="container">
          <h2 class="title text-center">Register</h2>
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
              <div class="margin-top">
                <label>Password</label>
                <input type="password" name="password_confirmation" v-model="password_confirmation"/>
              </div>
              <div class="margin-top right">
                  <button type="submit">Register</button>
              </div>
              <div class="margin-top right">
                  <a href="/login" class="">Already have an account ? Login here</a>
              </div>
            </form>
          </div>
        </div>
      </section>
</template>

<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            email: 'johndoe@test.com',
            password: 'secret',
            password_confirmation: 'secret'
        }
    },
    methods: {
      submit(){
        axios.post('/register', {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }).then(response => {
          window.location.replace(window.location.protocol + "//" + window.location.host + "/products" );
        }).catch(error => {
            console.log('error', error);
        })
      }
    }
}
</script>

