<template>
<div>
    <div :style="style">
        <span />
        <span />
        <span />
        <span />
    </div>
    <p class="colour-label">{{ colour }}</p>
</div>
</template>

<script>
export default {
    name: "ColourSectionItem",
    props: ['colour', 'colourHexCode'],
    computed: {
        style() {
            return {
                'background-color': this.colourHexCode
            };
        }
    },
}
</script>

<style lang="scss" scoped>
div {
    @import '../../sass/app.scss';

    height: 10em;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    align-items: center;
    gap: 24%;
    box-sizing: border-box;

    span { 
        display: block;
        background-color: $black;
        height: 100%;
        width: 1px;

        &:first-of-type {
            visibility: hidden;
        }
    }

    .colour-label {
        color: $white;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.5em;
        margin: 0;
        box-sizing: border-box;
        text-transform: capitalize;
    }
}
</style>
