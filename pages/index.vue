<template>
  <div>
    <Navbar />
    <Header />
    <Footer />
  </div>
</template>

<script>
import Navbar from './navbar'
import Header from './header'
import Footer from './footer.vue'
export default {
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
