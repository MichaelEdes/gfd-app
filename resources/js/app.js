import "./bootstrap";
import { createApp } from "vue";
import ProductPage from "./components/pages/ProductPage.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faShoppingBasket,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import PageHero from "./components/PageHero.vue";

library.add( faShoppingBasket, faCheck );

const app = createApp({});

app.component("product-page", ProductPage);
app.component("page-hero", PageHero);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
