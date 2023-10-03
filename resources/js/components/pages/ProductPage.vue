<template>
<div class="nav-container">
    <header-component :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />
</div>
<main>
    <page-hero />
    <colours-section />
    <features-section />
</main>
</template>

<script>
import HeaderComponent from '../navbar/NavBar.vue';
import PageHero from '../PageHero.vue';
import ColoursSection from '../ColoursSection.vue';
import FeaturesSection from '../FeaturesSection.vue';

export default {
    components: {
        HeaderComponent,
        PageHero,
        ColoursSection,
        FeaturesSection
    },
    name: "product-page",
    data() {
        return {
            menuOpen: false,
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
