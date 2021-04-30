<template>
  <div class="flex flex-col md:flex-row justify-around bg-red-500 p-8 mx-auto w-full max-w-6xl">
    <div
      v-for="i in 5"
      :key="i"
      class="flex flex-row p-8 m-5 items-center bg-yellow-500"
    >
      <span class="text-sm md:text-2xl text-white md:text-black">{{ i }}</span>
    </div>
  </div>
</template>
