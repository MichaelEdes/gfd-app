<template>
<div class="section-container">
    <div class="section-header">
        <h1>AVAILABLE COLOURS</h1>
        <h1><i>Over 16 stunning colours</i></h1>
    </div>
    <div class="section-content">
        <div>
            <colours-section-item v-for="color in colors" :key="color.name" :colour="color.name" :colourHexCode="color.hex" />
        </div>
    </div>
</div>
</template>

<script>
import ColoursSectionItem from './ColoursSectionItem.vue';
import ColoursData from './data/ColourData.vue';

export default {
    name: "ColourSectionList",
    components: {
        ColoursSectionItem
    },
    data() {
        return {
            colors: ColoursData.data().colors
        };
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

.section-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: calc(100% - 1em);
    margin: 0 auto;
    background-color: $lightGray;
    padding: 1em 1em 3em 1em;
    box-sizing: border-box;
    margin-bottom: 3em;

    .section-header {
        display: flex;
        align-items: center;
        margin: unset;
        justify-content: space-between;
        line-height: 0;

        h1 {
            font-size: clamp(0.8em, 2vw, 1.5rem);
        }

        h1:nth-of-type(2) {
            font-weight: lighter;

            @media (max-width: 600px) {
                display: none;
            }
        }
    }

    .section-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2em;
            width: fit-content;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
