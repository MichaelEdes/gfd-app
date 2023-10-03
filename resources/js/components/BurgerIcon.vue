<template>
<div id="burger-icon" @click="toggleOpen">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
</template>

<script>
export default {
    name: "BurgerIcon",
    methods: {
        toggleOpen() {
            const icon = document.getElementById("burger-icon");
            icon.classList.toggle("open");
            this.$emit('toggleMenu', icon.classList.contains("open"));
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

* {
    margin: 0;
    padding: 0;
}

#burger-icon {
    width: 40px;
    height: 40px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    z-index: 10;

    span {
        display: block;
        position: absolute;
        height: 6px;
        width: 100%;
        background-color: $primary;
        border-radius: 2px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;

        &:nth-child(1) {
            top: 0px;
        }

        &:nth-child(2),
        &:nth-child(3) {
            top: 15px;
        }

        &:nth-child(4) {
            top: 30px;
        }
    }

    &.open {
        span {
            &:nth-child(1) {
                top: 18px;
                width: 0%;
                left: 50%;
            }

            &:nth-child(2) {
                transform: rotate(45deg);
            }

            &:nth-child(3) {
                transform: rotate(-45deg);
            }

            &:nth-child(4) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
        }
    }
}
</style>
