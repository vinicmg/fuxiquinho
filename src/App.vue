<template>
  <div id="app">
    <Header />
    <router-view path="$router.key" />
    <Footer />
  </div>
</template>

<script>
import './styles/global.css'

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>