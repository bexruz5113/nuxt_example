<template>
  <div class="bg-black relative p-5">
    <div class="absolute top-0 right-0">
      <svg
        width="821"
        height="634"
        viewBox="0 0 1321 934"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_62_1477)">
          <rect
            x="500"
            y="-149"
            width="799"
            height="800"
            rx="399.5"
            fill="#288800"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_62_1477"
            x="0"
            y="-649"
            width="1799"
            height="1800"
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
              result="effect1_foregroundBlur_62_1477"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div>
      <p class="md:text-8xl text-5xl font-sans font-bold text-white">
        Наши преподы
      </p>
      <p class="text-white text-2xl font-sans">
        Каждый студент и выпускник является частю <br />семьи IT-Unity.
      </p>
    </div>
    <div class="md:block hidden"><TeamVertical /></div>
    <div class="md:hidden block"><TeamHR /></div>
  </div>
</template>

<script>
import TeamHR from './teamHR.vue'
import TeamVertical from './teamVertical.vue'
export default {
  components: { TeamVertical, TeamHR },
}
</script>

<style scoped></style>
