<template>
  <div>
    <Navbar />
    <HeaderFirst />
    <Swiper />
    <LearningStage />
    <Teachers />
    <EduCenter />
    <SectionLast />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import HeaderFirst from '../components/headerFirst.vue'
import Swiper from '../components/swiper.vue'
import Footer from '../components/footer.vue'
import SectionLast from '../components/sectionLast.vue'
import EduCenter from '../components/eduCenter.vue'
import LearningStage from '../components/learningStage.vue'
import Teachers from '../components/teachers.vue'
export default {
  components: {
    Navbar,
    HeaderFirst,
    Swiper,
    LearningStage,
    Teachers,
    Footer,
    SectionLast,
    EduCenter,
    Teachers,
  },
}
</script>

<styl,
    LearningStagee>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
