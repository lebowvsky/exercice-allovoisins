import { defineStore } from "pinia";
import { ref } from "vue";

export const useAsideStatesStore = defineStore("asideStates", () => {
  const isAsideActive = ref<boolean>(false);

  const activeAside = () => (isAsideActive.value = true);

  const unActiveAside = () => (isAsideActive.value = false);

  return { isAsideActive, activeAside, unActiveAside };
});
