<template>
    <section class="section" id="portfolio">
        <div class="container">
            <h4 class="subtitle is-5">Sign up</h4>
            <input type="text" placeholder="Username" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button>Register</button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>