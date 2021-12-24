<template>
  <div class="bg-gray-100 px-5 py-12 md:flex block justify-between">
    <div>
      <p
        class="text-5xl font-sans font-bold text-black md:leading-normal leading-none"
      >
        Станьте наших <br />партнеров
      </p>
      <br />
      <p>
        Лучших выпускников IT-UNITY <br />
        трудоустраивают наши партнеры — <br />ведущие IT-компании Узбекистана
      </p>
      <div class="my-5">
        <button
          class="bgColorFirst py-4 px-4 text-white rounded-2xl flex items-center my-2"
        >
          <p class="mx-auto flex">
            Стать партнёром
            <img class="ml-2 hoverImg" src="../assets/left.png" />
          </p>
        </button>
      </div>
    </div>

    <div>
      <div class="flex">
        <div class="frameFirst md:px-10 px-6 md:py-10 py-4">
          <img class="my-3" src="../assets/image 5.png" />
        </div>
        <div class="frameFirst md:px-10 px-6 md:py-10 py-4 mx-3">
          <img class="my-3" src="../assets/image 5.png" alt="" />
        </div>
        <div class="frameFirst md:px-10 px-6 md:py-10 py-4">
          <img class="my-3" src="../assets/image 6.png" alt="" />
        </div>
      </div>
      <div class="flex my-3">
        <div class="frameFirst md:px-10 px-6 md:py-10 py-4">
          <img class="my-3" src="../assets/image 10.png" alt="" />
        </div>
        <div class="frameSecond md:px-10 px-6 md:py-10 py-4 mx-3">
          <img class="my-3" src="../assets/image 7.png" alt="" />
        </div>
        <div class="frameSecond md:px-10 px-6 md:py-10 py-4 mr-3">
          <img class="my-2" src="../assets/image 8.png" alt="" />
        </div>
        <div class="frameSecond md:px-10 px-6 md:py-10 py-4">
          <img class="my-3" src="../assets/Logo (1).png" alt="" />
        </div>
      </div>
      <div class="flex">
        <div class="frameLast md:px-12 px-6 md:py-10 py-4 flex justify-around">
          <img
            class="md:mr-4 mr-2 md:my-3 my-4"
            src="../assets/image 5.png"
            alt=""
          />
          <p class="md:text-xl text-xs">
            Ведущая IT-компания <br />
            Узбекистана
          </p>
        </div>
        <div class="frameFirst md:px-12 px-6 md:py-10 py-4 ml-3">
          <img class="my-3" src="../assets/image 6.png" alt="" />
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
.bgColorFirst {
  background: #3fd700;
}
.hoverImg {
  transition: all 0.5s ease;
}
.bgColorFirst:hover .hoverImg {
  margin-left: 15px;
}
.frameFirst {
  width: 100%;
  max-width: 236px;
  height: 137px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
}
.frameSecond {
  width: 100%;
  max-width: 154px;
  height: 137px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
}
.frameLast {
  width: 100%;
  max-width: 483px;
  height: 137px;
  background: #ffffff;
  border-radius: 20px;
}

@media screen and (max-width: 600px) {
  .frameFirst {
    width: 154px;
    height: 90px;
  }
  .frameSecond {
    width: 100px;
    height: 90px;
  }
  .frameLast {
    width: 350px;
    height: 90px;
  }
}
</style>
