<template>
<div class="nav-container">
    <header-component :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />
</div>
</template>

<script>
import HeaderComponent from './NavBar.vue';

export default {
    components: {
        HeaderComponent
    },
    name: "nav-bar",
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
</style>
