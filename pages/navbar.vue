<template>
  <div class="max-w-full container">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="w-1/2 hidden md:block">
        <ul class="md:flex hidden justify-around items-center">
          <li
            class="w-10 h-10 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img src="../assets/equal.png" width="24" />
          </li>
          <li class="font-sans text-white">About</li>
          <li class="font-sans text-white">Gallery</li>
          <li class="font-sans text-white">Pricing</li>
          <li class="font-sans text-white">FAQ</li>
          <li class="font-sans text-white">Benefite</li>
        </ul>
      </div>
      <div class="max-w-1/2 w-8 h-8 md:hidden flex">
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
      </div>
      <div class="w-1/2 flex justify-end">
        <button
          class="mr-4 text-yellow-500 border-2 hover:bg-yellow-500 hover:text-white px-2 py-1 text-sm  md:text-lg md:px-8  md:py-2 border-yellow-500 rounded-md font-sans"
          type="submit"
        >
          Sing in
        </button>
        <button
          class="text-white border-2 boxShadow border-yellow-500 px-2 py-1 text-sm md:text-lg md:px-8  md:py-2 bg-yellow-500 rounded-md font-sans"
          type="submit"
        >
          Sing up
        </button>
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
.container {
  padding: 25px;
  background-color: #3b1d60;
}
.boxShadow{
  box-shadow: 0 10px 25px -3px rgba(211, 134, 19, 0.534);
}
</style>
