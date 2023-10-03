<template>
<header-component :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />
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

<style lang="sass" scoped>

</style>
