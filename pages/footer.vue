<template>
  <div>
    <div class="bg-image-first bg-color w-full p-10">
        <div class="max-w-6xl mx-auto">
            <div class="flex justify-between items-center">
                <div class="float-left"><nuxt-link to="/"><p class="text-yellow-500 font-bold md:text-4xl text-2xl">ARShakir</p></nuxt-link></div>
                <div class="flex">
                    <div class="md:w-10 w-8 md:h-10 h-8 rounded-full bg-gray-500 flex justify-center items-center md:mx-3 mx-2"><a href="#"><img src="../assets/google-glass-logo.png" width="18"></a></div>
                    <div class="md:w-10 w-8 md:h-10 h-8 rounded-full bg-gray-500 flex justify-center items-center md:mx-3 mx-2"><a href="#"><img src="../assets/twitter.png" width="18"></a></div>
                    <div class="md:w-10 w-8 md:h-10 h-8 rounded-full bg-gray-500 flex justify-center items-center md:mx-3 mx-2"><a href="#"><img src="../assets/facebook.png" width="18"></a></div>
                </div>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 px-4 mx-auto pt-10">
                <div>
                    <p class=" py-2 text-xl font-bold text-white">First</p>
                    <nuxt-link to="/"><p class=" py-2 text-white">First page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Second page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Third page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Fourth page</p></nuxt-link>
                </div>
                <div>
                    <p class=" py-2 text-xl font-bold text-white">Second</p>
                    <nuxt-link to="/"><p class=" py-2 text-white">First page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Second page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Third page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Fourth page</p></nuxt-link>
                </div>
                <div>
                    <p class=" py-2 text-xl font-bold text-white">Third</p>
                    <nuxt-link to="/"><p class=" py-2 text-white">First page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Second page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Third page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Fourth page</p></nuxt-link>
                </div>
                <div>
                    <p class=" py-2 text-xl font-bold text-white">Fourth</p>
                    <nuxt-link to="/"><p class=" py-2 text-white">First page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Second page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Third page</p></nuxt-link>
                    <nuxt-link to="/"><p class=" py-2 text-white">Fourth page</p></nuxt-link>
                </div>
            </div>

            <div class="flex justify-center pt-5">
                <div class="text-gray-500 md:text-lg text-xs px-3">© Copyrights 2021</div>
                <div class="text-gray-500 md:text-lg text-xs px-3">Privacy policy</div>
                <div class="text-gray-500 md:text-lg text-xs px-3">Terms of service</div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg-image-first {
  padding: 20px;
  background-image: url('../assets/Frame (1).png');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-color{
    background-color: #3b1d60;
}
</style>
