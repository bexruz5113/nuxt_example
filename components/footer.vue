<template>
  <div class="bg-black z-10 relative">
    <div class="flex px-5 pt-5">
      <div>
        <div class="mb-8">
          <p
            class="font-sans md:text-5xl text-3xl md:pt-4 pt-24 text-white font-bold z-20"
          >
            Успей записаться на пробный урок!
          </p>
        </div>
        <div>
          <div class="md:flex block justify-around">
            <div class="w-full">
              <input
                class="md:w-11/12 w-full mx-auto placeholder-white placeholder-opacity-100 rounded-2xl py-4 px-3 bg-gray-800 text-white my-2"
                placeholder="Ваше имя"
                type="text"
              />
            </div>
            <div class="w-full">
              <input
                class="md:w-11/12 w-full mx-auto placeholder-white placeholder-opacity-100 rounded-2xl py-4 px-3 bg-gray-800 text-white my-2"
                placeholder="Номер телефона"
                type="text"
              />
            </div>
            <div class="w-full">
              <button
                class="w-2/3 z-5 mx-auto bgColorFirst py-4 px-4 text-white rounded-2xl flex items-center my-2"
              >
                <p class="mx-auto flex">
                  Записаться
                  <img class="ml-2 hoverImg" src="../assets/left.png" alt="" />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute lg:top-5 md:top-20 top-48 md:left-0 right-0">
      <svg
        style="width: 100%; max-width: 1336px; z-index: -1"
        height="281"
        viewBox="0 0 1936 281"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_147_27)">
          <rect
            x="412"
            y="402"
            width="1095"
            height="740"
            rx="370"
            fill="#288800"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_147_27"
            x="-88"
            y="-98"
            width="2095"
            height="1740"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_147_27"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="absolute right-0 top-0 z-0">
      <img class="md:w-72 w-36" src="../assets/image 20.png" alt="" />
    </div>
    <div class="md:flex block text-center justify-between px-5 pt-20 pb-5">
      <div class="md:mx-0 mx-auto">
        <img class="md:mx-0 mx-auto" src="../assets/Logo.png" alt="" />
        <br />
        <div class="flex justify-around">
          <div class="mx-1">
            <img width="18" src="../assets/telegram.png" />
          </div>
          <div class="mx-1">
            <img width="18" src="../assets/youtube.png" />
          </div>
          <div class="mx-1">
            <img width="18" src="../assets/instagram.png" />
          </div>
          <div class="mx-1">
            <img width="18" src="../assets/-facebook.png" />
          </div>
        </div>
        <p class="text-center text-gray-700 mt-5">Сертифика №498465</p>
      </div>
      <div class="my-2">
        <p class="font-bold text-xl pStyle">Информация</p>
        <br />
        <p class="pStyle">О учебным центре</p>
        <p class="pStyle">Мероприятия</p>
        <p class="pStyle">Вакансии It-Unity</p>
        <p class="pStyle">Сертификаты</p>
      </div>
      <div class="my-2">
        <p class="font-bold text-xl pStyle">Курсы</p>
        <br />
        <p class="pStyle">Разработка Python</p>
        <p class="pStyle">Разработка С#</p>
        <p class="pStyle">Разработка Django</p>
        <p class="pStyle">Работотехника</p>
        <p class="pStyle">UI/UX Дизайн</p>
        <p class="pStyle">CISCO - administration</p>
      </div>
      <div class="my-2">
        <p class="pStyle text-xl font-bold">Контакты:</p>
        <br />
        <p class="text-2xl font-bold pStyle">+998 90 9559595</p>
        <p class="pStyle">
          Ленинградский проспект, д.39, стр.79 <br />
          этаж 23, помещение XXXIV, часть <br />
          комнаты 1
        </p>
        <span
          ><a
            class="flex bg-gray-700 rounded-xl py-3 text-white justify-center"
            href="https://www.itunity.uz/map"
            ><img class="mr-2" src="../assets/GPS.png" />Показать на карте</a
          ></span
        >
      </div>
    </div>
    <hr />
    <div class="md:flex block justify-around p-5">
      <div>
        <p class="pStyle">Учебный центр It-Unity 2020 ©. Все права защишены.</p>
      </div>
      <div>
        <p>Сайт разработал <b class="text-white">SPACEMOS</b></p>
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
.pStyle {
  color: white;
  padding: 6px 0;
  font-family: sans-serif;
}
</style>
