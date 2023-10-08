import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import TheModal from "./components/TheModal.vue";

const app = createApp(App);

app.component("the-modal", TheModal);

app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
