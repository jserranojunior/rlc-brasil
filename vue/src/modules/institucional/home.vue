<template>
  <div class="p-4 bg-gray-900">
    <div class="flex justify-center">
      <div class="w-2/3 rounded-sm shadow p-2 bg-gray-800">
        <iframe
          class="w-full"
          src="https://playerv.srvif.com/video/rcl/1/true/false/YzNSdGRqRXVjM0oyYVdZdVkyOXQrWg"
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
      <div class="w-2/3  mt-2">
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
      const mediumSize = 2.8;
      let videoHeigth = ref(screen.width / mediumSize);
      onMounted(() => {
        console.log(screen.width);
        videoHeigth.value = screen.width / mediumSize;
        window.addEventListener("resize", () => {
          windowWinnerWidth.value = window.innerWidth;
        });
      });

      watch(windowWinnerWidth, () => {
        videoHeigth.value = screen.width / mediumSize;
      });
      const msg = "Seja bem vindo a " + process.env.VUE_APP_NAME;
      return { msg, videoHeigth };
    },
  };
</script>
