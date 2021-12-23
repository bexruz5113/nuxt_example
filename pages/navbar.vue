<template>
  <div class="max-w-full container" :class="theme">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="w-2/3 flex items-center">
        <div>
          <nuxt-link to="#">
            <img src="../assets/Group 1.png" />
          </nuxt-link>
        </div>
        <div class="ml-2 lg:flex hidden">
          <ul class="md:flex hidden justify-around items-center">
            <li class="font-normal text-black">
              <nuxt-link to="#"> Курсы </nuxt-link>
            </li>
            <li class="font-normal text-black">
              <nuxt-link to="#"> О нас </nuxt-link>
            </li>
            <li class="font-normal text-black">
              <nuxt-link to="#"> Цент Карьеры </nuxt-link>
            </li>
            <li class="font-normal text-black">
              <nuxt-link to="#"> Новости </nuxt-link>
            </li>
            <li class="font-normal text-black">
              <nuxt-link to="#"> Мероприятии </nuxt-link>
            </li>
            <li class="font-normal text-black">
              <nuxt-link to="#"> Контакты </nuxt-link>
            </li>
            <!--  <li class="font-sans text-white flex justify-between">
          <button class="btn border border-white capitalize" @click="changeMode">
            mode
          </button>
          </li>-->
            <!-- <li>
            <select required class="bg-transparent text-white">
              <option disabled selected hidden value="theme">Theme</option>
              <option value="light" class="text-black">Light</option>
              <option value="dark" class="text-black">Dark</option>
             </select>
          </li>-->
          </ul>
        </div>
      </div>
      <div class="sm:w-1/3 w-3/4 my-3 text-right flex justify-end">
        <!-- <button
          class="transition duration-500 mr-4 text-yellow-500 border-2 hover:bg-yellow-500 hover:text-white px-2 py-1 text-sm md:text-lg md:px-8 md:py-2 border-yellow-500 rounded-md font-sans"
          type="submit"
        >
          Sign in
        </button> -->
        <!-- <button
          class="text-white border-2 boxShadow border-yellow-500 px-2 py-1 text-sm md:text-lg md:px-8 md:py-2 bg-yellow-500 rounded-md font-sans"
          type="submit"
        >
          Sign up
        </button> -->
        <p class="text-black m-3">+998 98 900 9090</p>
        <div class="flex justify-between">
          <div class="border-green-200 border-2 rounded-lg mx-3 p-3">
            <img src="../assets/insta.png" alt="" />
          </div>
          <div class="border-green-200 border-2 rounded-lg mx-3 p-3">
            <img src="../assets/Vector.png" alt="" />
          </div>
        </div>
      </div>

      <div class="max-w-1/2 w-8 h-8 md:hidden flex" @click="addMenu()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          class="text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
        <div v-if="sidebar" class="block addMenu">
          <div
            class="w-100 text-right font-bold text-2xl cursor-pointer text-white pt-6 pr-6"
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
      // theme: 'light',
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
.container {
  padding: 20px;
  background-color: white;
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
