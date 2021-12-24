<template>
  <div
    class="pt-12 pb-36 sm:flex block justify-between bg-gray-100 px-5 font-sans"
  >
    <div>
      <div class="static z-20">
        <div class="sm:hidden block">
          <p class="text-3xl font-bold text-center text-block">
            Начните <b class="textColor">перспективную </b> карьеру прямо сейчас
            с ItUnity
          </p>
        </div>
        <div class="sm:block hidden">
          <p
            class="font-sans xl:text-9xl lg:text-7xl text-5xl text-black font-bold leading-none z-20"
          >
            Education <br />center
          </p>
        </div>
        <div class="mt-16 sm:block hidden">
          <p class="md:text-3xl sm:text-xl font-medium text-black">
            Востребованных профессий
          </p>
          <p class="sm:text-md font-medium">
            Для студентов It-Unity на нашем платформе может <br />
            зарабатывать с первых дней выполняя заказы.
          </p>
        </div>
      </div>
    </div>
    <div class="rounded-full mt-24 z-10 md:block hidden">
      <img src="../assets/image 12.png" alt="" />
    </div>
    <div class="rounded-full md:block flex justify-center mr-5 mt-5 z-10">
      <img width="300" src="../assets/image 11.png" alt="" />
    </div>
    <div
      class="leading-none xl:text-9xl lg:text-7xl text-5xl text-gray-200 font-bold absolute top-36 left-1/2 z-0"
    >
      <p class="md:block hidden">Cooworking <br />center</p>
    </div>
    <div class="md:flex hidden justify-start md:absolute -bottom-32 left-12">
      <div
        class="flex items-center justify-between rounded-2xl py-4 px-6 drop-shadow-xl bg-white"
      >
        <div class="rounded-2xl bg-gray-100 p-3 flex">
          <img src="../assets/image 19.png" />
        </div>
        <div class="px-4">
          <div>
            <p class="font-bold text-2xl text-black mb-3">Курсы: Бэк-энд</p>
          </div>
          <div>
            <button
              class="bgColorFirst py-2 px-4 text-white rounded-2xl flex items-center"
            >
              Записаться
              <img class="ml-2 hoverImg" src="../assets/left.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between rounded-xl py-4 px-6 drop-shadow-xl bg-white ml-8"
      >
        <div class="rounded-2xl bg-gray-100 p-3 flex">
          <img src="../assets/image 17.png" />
        </div>
        <div class="px-4">
          <div>
            <p class="font-bold text-2xl text-black mb-3">Курсы: Фронт-энд</p>
          </div>
          <div>
            <button
              class="bgColorSecond py-2 px-4 bgColor text-white rounded-xl flex items-center"
            >
              Записаться
              <img class="ml-2 hoverImg" src="../assets/left.png" alt="" />
            </button>
          </div>
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.textColor {
  color: #3fd700;
}
.bgColorFirst {
  background: #3fd700;
}
.hoverImg {
  transition: all 0.5s ease;
}
.bgColorFirst:hover .hoverImg {
  margin-left: 15px;
}
.bgColorSecond {
  background: black;
}

.bgColorSecond:hover .hoverImg {
  margin-left: 15px;
}
</style>
