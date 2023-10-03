<template>
<header>
    <div class="mobile-nav-sideBar">
        <div>
            <h1>gfd<span>trading</span></h1>
        </div>
        <BurgerIcon @toggleMenu="toggleMenu"/>
        <div class="menu">
            <ul>
                <li>
                    <ul>Entrance Doors</ul>
                </li>
                <li>
                    <ul>Fully Glazed</ul>
                </li>
                <li>
                    <ul>Bi-Fold Doors</ul>
                </li>
                <li>
                    <ul>Sliding Doors</ul>
                </li>
                <li>
                    <ul>French Doors</ul>
                </li>
                <li>
                    <ul>Roof Lanters/Lights</ul>
                </li>
                <li>
                    <ul>Windows</ul>
                </li>
                <li>
                    <ul>Outdoors</ul>
                </li>
                <li>
                    <ul>Be Inspired</ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="desktop-nav">desktop</div>
    <nav-details-bar />
</header>
</template>

<script>
import BurgerIcon from './BurgerIcon.vue';
import NavDetailsBar from './NavSubBar.vue';

export default {
    name: 'Header',
    components: {
        BurgerIcon,
        NavDetailsBar
    },
    methods: {
        toggleMenu(isOpen) {
            this.$emit('toggleMenu', isOpen);
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

    h1 {
        padding: unset;
        margin: unset;
        font-weight: bold;
        font-size: 3em;

        span {
            font-weight: 100;
        }
    }

    .menu {
        position: absolute;
        left: -100vw;
        top: 0;

        ul {
            list-style: none;
            margin: unset;
            padding-left: 1em;

            li {
                margin: unset;
                padding: unset;
            }
        }
    }
}

.desktop-nav {
    display: none;
}
</style>
