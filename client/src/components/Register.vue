<template>
  <div class="hello">
    <h2>Register</h2>
    <input type="email"
      name="email"
      v-model="email"
      id="email"
      placeholder="email"
    />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      id="password"
      placeholder="password"
    />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    async register () {
      const res = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
