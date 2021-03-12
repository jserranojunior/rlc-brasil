<template>
  <div class="m-4 text-center">
    <h2 class="text-gray-500 font-bold text-3xl mt-16">MAIS NOTÍCIAS</h2>
    <div class="flex justify-center">
      <div class="w-10/12">
        <div class="flex flex-wrap">
          <div
            class="w-full sm:w-full md:w-1/3 lg:w-1/3 p-6"
            v-for="post in posts"
            :key="post.id"
          >
            <div
              :style="
                'background-image: url(' +
                post.thumbnail +
                '); background-repeat: no-repeat, repeat; background-position: center; background-size: cover; '
              "
              class="h-52 cursor-pointer"
            ></div>
            <span class="text-gray-500 font-bold text-xl mt-3">
              {{ post.title }}
            </span>
          </div>
        </div>
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
            "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
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
        },
        {
          id: 4,
          thumbnail:
            "https://images.unsplash.com/photo-1609568086753-9568e770a199?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhZGlvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Assista ao vivo, acima"
        },
        {
          id: 5,
          thumbnail:
            "https://images.unsplash.com/photo-1502798985865-1ab60332f46c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 6,
          thumbnail:
            "https://images.unsplash.com/photo-1514451966516-6fa724a62afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 7,
          thumbnail:
            "https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 8,
          thumbnail:
            "https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Assista ao vivo, acima"
        },
        {
          id: 9,
          thumbnail:
            "https://images.unsplash.com/photo-1604838577951-fc3334039881?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          title: "Assista ao vivo, acima"
        }
      ]
    });
    return { ...toRefs(state) };
  }
};
</script>

<style>
.img-thumbnail {
  width: 100%;
}
</style>