import { reactive, toRefs } from "vue";

export const useLayouts = () => {
  const state = reactive({
    closeSidebar,
    open: false,
    itensMenu: [
      { name: "Política" },
      { name: "Brasil" },
      { name: "Economia" },
      { name: "Mundo" },
      { name: "Esportes" },
      { name: "Entretenimento" },
      { name: "Colunistas" },
      { name: "Programas" },
      { name: "Últimas" },
    ],
  });
  function closeSidebar() {
    const Sidebar = document.getElementById("sidebar");
    Sidebar.classList.toggle("hidden");
  }
  return toRefs(state);
};
