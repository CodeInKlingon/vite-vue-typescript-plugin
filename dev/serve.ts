import { createApp } from "vue";
import App from "./App.vue";
import { default as lib } from "../src/main";
let app = createApp(App);

app.use(lib);

app.mount("#app");
