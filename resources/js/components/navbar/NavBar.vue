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
        <div class="logo">
            <logo />
        </div>
        <div class="nav-tagline">
            <h4>SECURING HOMES SINCE 2008</h4>
        </div>
        <div class="nav-details">
            <h4>01642 309 576</h4>
            <p>(OPEN TODAY 9AM-5PM)</p>
        </div>
        <div class="nav-options">
            <ul>
                <li><a href="#">In The Trade?</a></li>
                <li><a id="trust-pilot" href="#">
                        <span>
                            <trust-pilot-icon /></span> Trust Pilot</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Brochures</a></li>
            </ul>
            <div>
                <h1>
                    <font-awesome-icon :icon="['fas', 'basket-shopping']" />
                </h1>
                <Button text="Submit" variant="primary" />
            </div>
        </div>
    </div>
    <nav-dropdown-section/>
    <nav-details-bar />
</header>
</template>

<script>
import BurgerIcon from '../icons/BurgerIcon.vue';
import NavDetailsBar from './NavSubBar.vue';
import SideBar from './SideBar.vue';
import Logo from '../icons/Logo.vue';
import Button from '../Button.vue';
import TrustPilotIcon from '../icons/TrustPilotIcon.vue';
import NavDropdownSection from './NavDropdownSection.vue';

export default {
    name: 'Header',
    components: {
        BurgerIcon,
        NavDetailsBar,
        SideBar,
        Logo,
        Button,
        TrustPilotIcon,
        NavDropdownSection
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
@import '../../../sass/app.scss';

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
        opacity: 0; 
        transition: opacity 0.3s ease-in-out;
        touch-action: none;
    }

    @media (min-width: 1067px) {
        display: none;
    }
}

.desktop-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    height: 5em;
    border-bottom: 1px solid $gray;

    .logo {
        width: 250px;
        border-right: 1px solid $gray;
        display: flex;
        height: 5em;
        align-items: center;
        justify-content: center;
        padding: 0 1em 0 0;
    }

    .nav-tagline {
        margin: 0 auto 0 1em;

        @media (max-width: 1500px) {
            display: none;
        }
    }

    h4,
    p {
        margin: unset;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 1em;
        align-items: center;

        a {
            text-decoration: none;
            color: inherit;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .nav-options {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
        margin: 0 0 0 auto;

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1em;
        }

        #trust-pilot {
            display: flex;
            align-items: center;
            gap: 0.1em;

            span {
                margin-bottom: 0.3em;
            }
        }
    }

    .nav-details {
        text-align: center;
        margin-left: auto;
        padding-inline-start: 2em;
        
        h4 {
            letter-spacing: clamp(0.1vw, 0.2vw, 1em);
            font-size: clamp(1vw, 1.5vw, 2.5em);
            font-weight: 700;
        }

        p {
            font-size: clamp(1em, 0.5vw, 2.5em);
            font-weight: lighter;
        }

        @media (max-width: 1260px) {
            display: none;
        }
    }

    @media (max-width: 1067px) {
        display: none;
    }
}
</style>
