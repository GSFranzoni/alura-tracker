import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faPlay,
  faStop,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPlay,
  faStop,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faMoon,
  faSun
);

import "./index.css";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
