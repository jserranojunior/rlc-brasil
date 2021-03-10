<template>
  <div class="m-4 text-center">
    <h2 class="text-gray-500 font-bold text-3xl mt-16">MAIS NOTÍCIAS</h2>
    <div class="flex">
      <div class="w-1/3 p-6" v-for="post in posts" :key="post.id">
        <img :src="post.thumbnail" alt="" />
        <h3 class="text-gray-500 font-bold text-xl mt-3">
          {{ post.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      posts: [
        {
          id: 1,
          thumbnail:
            " https://images.unsplash.com/photo-1598743400863-0201c7e1445b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 2,
          thumbnail:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 3,
          thumbnail:
            "https://images.unsplash.com/photo-1512024221064-95d1aca6dc81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80",
          title: "Assista ao vivo, acima"
        }
      ]
    });
    return { ...toRefs(state) };
  }
};
</script>

