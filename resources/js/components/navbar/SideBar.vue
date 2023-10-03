<template>
<div :class="['menu', { 'menu-open': menuOpen }]">
    <div class="logo">
        <Logo />
        <hr />
    </div>
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
</template>

<script>
import Logo from '../icons/Logo.vue';

export default {
    name: 'SideBar',
    props: {
        menuOpen: {
            type: Boolean,
            required: true
        }
    },
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/app.scss';

.menu {
    position: absolute;
    left: -280px;
    top: 0;
    background-color: $dark;
    color: white;
    height: 100%;
    width: 280px;
    z-index: 2;
    transition: 0.5s;

    &.menu-open {
        left: 0;
    }

    .logo {
        h1 {
            font-size: 2em;
        }
    }

    ul {
        list-style: none;
        margin: unset;
        padding-left: 1em;
        margin-top: 2em;

        li {
            margin: unset;
            padding: unset;
            cursor: pointer;

            ul {
                &::after {
                    display: inline-block;
                    content: '>';
                    transform: translateY(5%) rotate(90deg);
                    margin-left: 1em;
                }
            }
        }
    }

    div:first-of-type {
        height: 5em;
        display: flex;
        position: relative;
        align-items: center;
        padding: 0 1em;

        h1 {
            margin: unset;
        }

        hr {
            position: absolute;
            right: 0;
            width: 30rem;
            top: 4.5em;
            background-color: $white;
        }
    }
}
</style>
