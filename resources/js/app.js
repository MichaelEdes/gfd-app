import "./bootstrap";
import { createApp } from "vue";
import Header from "./components/Header.vue";

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add( faShoppingBasket); // Add faShoppingBasket if you want to use it

const app = createApp({});

// Register components
app.component("header-component", Header);
app.component("font-awesome-icon", FontAwesomeIcon); // Register FontAwesome icon component

app.mount("#app");
