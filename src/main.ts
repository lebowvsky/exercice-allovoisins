import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as icons from "./icons";

addIcons(...Object.values(icons));

createApp(App).component("VIcon", OhVueIcon).mount("#app");
