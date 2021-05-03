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
