<template>
  <div class="max-w-full p-3 font-sans bg-gray-100" :class="theme">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="w-2/3 flex items-center">
        <div>
          <nuxt-link to="#">
            <img src="../assets/Group 1.png" />
          </nuxt-link>
        </div>
        <div class="ml-2 lg:flex hidden">
          <ul class="md:flex hidden justify-around items-center">
            <li class="text-black">
              <nuxt-link to="#"> Курсы </nuxt-link>
            </li>
            <li class="text-black">
              <nuxt-link to="#"> О нас </nuxt-link>
            </li>
            <li class="text-black">
              <nuxt-link to="#"> Цент Карьеры </nuxt-link>
            </li>
            <li class="text-black">
              <nuxt-link to="#"> Новости </nuxt-link>
            </li>
            <li class="text-black">
              <nuxt-link to="#"> Мероприятии </nuxt-link>
            </li>
            <li class="text-black">
              <nuxt-link to="#"> Контакты </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="sm:w-1/3 w-3/4 my-3 text-right lg:flex hidden justify-end">
        <p class="text-black m-3">+998 98 900 9090</p>
        <div class="flex justify-between">
          <div class="border-green-100 border-2 rounded-lg mx-3 p-3">
            <img src="../assets/insta.png" alt="" />
          </div>
          <div class="border-green-100 border-2 rounded-lg mx-3 p-3">
            <img src="../assets/Vector.png" alt="" />
          </div>
        </div>
      </div>

      <div class="my-3.5 max-w-1/2 lg:hidden flex z-30">
        <p class="font-medium p-0 mr-3 my-1">Меню</p>
        <div class="w-8 h-8" @click="addMenu()">
          <img src="../assets/menu.png" alt="" />
        </div>

        <div v-if="sidebar" class="block addMenu">
          <div
            class="w-100 text-right font-bold text-2xl cursor-pointer text-white pt-6 pr-6"
            @click="!addMenu()"
          >
            X
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> Курсы </nuxt-link>
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> О нас </nuxt-link>
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> Цент Карьеры </nuxt-link>
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> Новости </nuxt-link>
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> Мероприятии </nuxt-link>
          </div>
          <div class="text-xl font-bold text-center py-4 text-white">
            <nuxt-link to="/"> Контакты </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      theme: 'light',
    }
  },
  methods: {
    addMenu() {
      this.sidebar = !this.sidebar
    },
    toggle() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.boxShadow {
  box-shadow: 0 10px 25px -3px rgba(211, 134, 19, 0.534);
}
ul li {
  margin: 0 15px;
}
.addMenu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  animation: slide 1s forwards;
}
@keyframes slide {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
