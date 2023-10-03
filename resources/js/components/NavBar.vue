<template>
<header>
    <div class="mobile-nav-sideBar">
        <div>
            <logo />
        </div>
        <BurgerIcon @toggleMenu="toggleMenu" />
        <side-bar :menu-open="menuOpen" />
        <div class="overlay" :style="{ opacity: menuOpen ? '0.7' : '0', pointerEvents: menuOpen ? 'auto' : 'none' }" @click="toggleMenu" />
    </div>
    <div class="desktop-nav">
       <Logo/>
    </div>
    <nav-details-bar style="display: none;" />
</header>
</template>

<script>
import BurgerIcon from './BurgerIcon.vue';
import NavDetailsBar from './NavSubBar.vue';
import SideBar from './SideBar.vue';
import Logo from './Logo.vue';

export default {
    name: 'Header',
    components: {
    BurgerIcon,
    NavDetailsBar,
    SideBar,
    Logo,
    Logo
},
    methods: {
        toggleMenu(isOpen) {
            this.$emit('toggleMenu', isOpen);
        },
        closeMenu() {
            this.$emit('toggleMenu', false);
        }
    },
    props: {
        menuOpen: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        menuOpen(newValue) {
            if (newValue) {
                this.$el.querySelector('#burger-icon').classList.add('open');
            } else {
                this.$el.querySelector('#burger-icon').classList.remove('open');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile-nav-sideBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5em;
    padding: 0 1em;
    max-width: 100vw;
    overflow: hidden;

    .overlay {
        position: absolute;
        right: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 0; // Start off invisible
        transition: opacity 0.3s ease-in-out; // 0.3s can be adjusted to your preference
        touch-action: none;
    }
}

.desktop-nav {
    display: none;
}
</style>
