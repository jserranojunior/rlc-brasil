<template>
  <div>
    <div class="w-full h-32 bg-black">
      <div class="flex justify-center items-center p-4">
        <div class="w-1/2"><span class="text-white">Logo</span></div>
        <div class="w-1-4">
          <div class="items-center my-auto">
            <span class="text-white"
              ><input type="text" class="form-tail"
            /></span>
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
import { inject } from "vue";

export default {
  setup() {
    const useAuth = inject("auth");
    const appName = process.env.VUE_APP_NAME;

    const { closeSidebar, open, itensMenu } = useLayouts();

    const { Logout, auth, fields } = useAuth;

    return { Logout, auth, closeSidebar, open, fields, appName, itensMenu };
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
</style>