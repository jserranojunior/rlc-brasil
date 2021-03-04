<template>
  <div class="p-4 bg-gray-900">
    <div class="flex justify-center">
      <div
        class="w-full sm:w-full md:w-2/3 lg:w-2/3 rounded-sm shadow p-2 bg-gray-800"
      >
        <iframe
          class="w-full"
          src="https://playerv.srvif.com/video/rcl/1/true/true/c3RtdjEuc3J2aWYuY29tKzE=/16:9/"
          scrolling="no"
          width="100%"
          :height="videoHeigth"
          frameborder="0"
          allowfullscreen
          autoplay
        ></iframe>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 mt-2">
        <iframe
          src="https://player.streaminghd.net.br/luna-small/7212"
          frameborder="0"
          width="100%"
          height="100"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  setup() {
    const windowWinnerWidth = ref(window.innerWidth);
    function setHeight() {
      if (screen.width < 300) {
        const mediumSize = 0.5;
        return screen.width / mediumSize;
      } else if (screen.width < 330) {
        const mediumSize = 0.5;
        return screen.width / mediumSize;
      } else if (screen.width < 350) {
        const mediumSize = 0.6;
        return screen.width / mediumSize;
      } else if (screen.width <= 400) {
        const mediumSize = 0.7;
        return screen.width / mediumSize;
      } else if (screen.width <= 470) {
        const mediumSize = 0.9;
        return screen.width / mediumSize;
      } else if (screen.width >= 812) {
        const mediumSize = 2.8;
        return screen.width / mediumSize;
      } else {
        const mediumSize = 2;
        return screen.width / mediumSize;
      }
    }

    let videoHeigth = ref(setHeight());

    onMounted(() => {
      videoHeigth.value = setHeight();
      window.addEventListener("resize", () => {
        windowWinnerWidth.value = window.innerWidth;
      });
    });

    watch(windowWinnerWidth, () => {
      videoHeigth.value = setHeight();
    });
    const msg = "Seja bem vindo a " + process.env.VUE_APP_NAME;
    return { msg, videoHeigth };
  }
};
</script>
