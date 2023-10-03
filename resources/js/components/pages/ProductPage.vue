<template>
<div class="nav-container">
    <header-component :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />
</div>
<main>
    <page-hero />
</main>
</template>

<script>
import HeaderComponent from '../navbar/NavBar.vue';
import PageHero from '../PageHero.vue';
export default {
    components: {
        HeaderComponent,
        PageHero,
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
    box-sizing: border-box;
    padding: 4rem clamp(5rem, 10vw, 15rem);
    font-family: 'Red Hat Display', sans-serif;
}

</style>
