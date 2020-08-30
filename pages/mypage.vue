<template>
  <!-- Portfolio -->
  <section class="section" id="portfolio">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">Portfolio</h3>
        <h4 class="subtitle is-5">My latest works</h4>
      </div>
      <br>
    </div>
    <div class="container">
        <div class='hello'>
            <h1>{{ msg }}</h1>
            <h2>Essential Links</h2>
            <button @click="apiPublic">public</button>
            <button @click="apiPrivate">private</button>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    apiPublic: async function () {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://localhost:8000/private')
      this.msg = res.data
    }
  }
}
</script>
