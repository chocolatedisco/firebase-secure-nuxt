<template>
  <section class="sectoin">
      <div class="container">
        <br>
          <div class="section-heading">
            <h4 class="title is-2">Login</h4>
          </div>
        <br>
      </div>
      <div class="container">
        <b-field label="Email">
            <b-input placeholder="Email" type="email" v-model="email"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal>
            </b-input>
        </b-field>
          <a class="button is-success" @click="signIn">
            Sign In
          </a>
      </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        let user = new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged((user) => resolve(user))
        })
        this.setUser(user) // setUser is mapped action from vuex
        // const token = await user.getIdToken(true);
        // localStorage.setItem('jwt', token)
        this.$router.push('/mypage')
      }, err => {
        alert(err.message)
      })
    }
  },
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })
    this.setUser(user) // setUser is mapped action from vuex
    if (user) {
      this.$router.push('/mypage') // if non-null user given, go to my page.
    }
  }
}

</script>
