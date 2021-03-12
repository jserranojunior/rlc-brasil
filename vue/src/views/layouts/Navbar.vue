<template>
  <div>
    <!-- <img :src="imgHeader" alt="" /> -->
    <div class="w-full">
      <div
        class="flex justify-center items-center p-4 h-32"
        :style="'background-image: url(' + imgHeader + ')'"
      >
        <div class="w-1/2">
          <img :src="imgLogo" alt="Logo" />
        </div>
        <div class="w-1-4">
          <div class="items-center my-auto">
            <span class="text-dark">
              <div class="input-wrapper">
                <input type="text" class="form-tail input-wrapper" />
                <label
                  for="stuff"
                  class="fas fa-search input-icon pl-2"
                ></label>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full menu-background">
      <div
        class="flex max-w-screen px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-2 lg:px-2 flex-col items-center py-2"
      >
        <nav
          :class="'flex flex-wrap  pb-4' + { flex: open, hidden: !open }"
          v-for="itemMenu in itensMenu"
          :key="itemMenu.name"
        >
          <router-link :to="{ name: 'Home' }" class="btn-menu"
            >{{ itemMenu.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { useLayouts } from "./use";
import { inject, reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      imgHeader: require("@/assets/imgs/header-img.jpg"),
      imgLogo: require("@/assets/imgs/logo.png")
    });
    const useAuth = inject("auth");
    const appName = process.env.VUE_APP_NAME;

    const bgHeader = `background-image: url(${state.imgHeader})" `;

    const { closeSidebar, open, itensMenu } = useLayouts();

    const { Logout, auth, fields } = useAuth;

    return {
      ...toRefs(state),
      Logout,
      auth,
      closeSidebar,
      open,
      fields,
      appName,
      itensMenu,
      bgHeader
    };
  }
};
</script>
<style scoped>
.menu-background {
  background: rgb(207, 30, 108);
  background: linear-gradient(
    90deg,
    rgba(207, 30, 108, 1) 0%,
    rgba(121, 42, 134, 1) 100%
  );
}

.input-icon {
  position: absolute;
  left: 3px;
  top: calc(
    50% - 0.5em
  ); /* Keep icon in center of input, regardless of the input height */
}
input {
  padding-left: 17px;
}
.input-wrapper {
  position: relative;
}
</style>



