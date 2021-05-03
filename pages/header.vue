<template>
  <div class="max-w-full pt-16 bg-color">
    <div class="max-w-6xl mx-auto md:flex justify-center block">
    <div class="w-1/2 order-2 md:w-full md:order-1 pt-5">
        <p class="text-5xl text-blue-300 font-bold">Many reasons to get up and start to get back in the business</p>
        <p class="text-gray-500 text-2xl pr-2 pt-4">The harder you work for something, the greater you’ll feel when you achieve it.</p>
    <div class="pt-8 flex justify-start">
        <button class="border-2 px-8 py-2 mr-6 rounded-md text-white bg-yellow-600 border-yellow-600" type="submit">Learn More</button>
        <button class="border-2 px-12 py-2 rounded-md hover:bg-yellow-600 hover:text-white border-yellow-600 text-yellow-600" type="submit">Demo</button>
    </div>
    <div class="pt-10 flex">
    <div class="w-28 h-18 rounded-md bg-color-play flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:h-12 hover:w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
                <p class="text-gray-400 text-md w-10/12 mx-auto">The harder you work for something, the greater you’ll feel when you achieve it.</p>
                <p class="text-gray-500 text-md ml-10">Watch preview</p>
            </div>
        </div>
        </div>
        <div class="w-1/2 order-1 md:w-full md:order-2"><img src="../assets/Vector.png"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.bg-color{
    background-color: #3b1d60;
}
.bg-color-play{
    background-color: rgb(39, 14, 77)
;
}
</style>
