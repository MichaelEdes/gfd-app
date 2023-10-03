<template>
  <div class="nav-container">
      <header-component :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />
  </div>
  <main>
      <page-hero />
      <colours-section />
      <features-section />
      <tab-section :tabs="tabsData.tabsData" />
  </main>
</template>

<script>
import HeaderComponent from '../navbar/NavBar.vue';
import PageHero from '../PageHero.vue';
import ColoursSection from '../ColoursSection.vue';
import FeaturesSection from '../FeaturesSection.vue';
import TabSection from '../TabSection.vue';
import TabData from '../data/TabData.vue';

export default {
    components: {
        HeaderComponent,
        PageHero,
        ColoursSection,
        FeaturesSection,
        TabSection,
        TabData  // Register the new component
    },
    name: "product-page",
    data() {
        return {
            menuOpen: false,
            tabsData: TabData.data()
        };
    },
    watch: {
        menuOpen(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-container {
    font-family: 'Inter', sans-serif;
}

main {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 2em;
    box-sizing: border-box;
    font-family: 'Red Hat Display', sans-serif;
}
</style>
