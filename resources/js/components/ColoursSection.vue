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

import ColoursSectionItem from './ColoursSectionItem.vue';

<script>
import ColoursSectionItem from './ColoursSectionItem.vue';

export default {
    name: "ColourSectionList",
    components: {
        ColoursSectionItem
    },
    data() {
        return {
            colors: [{
                    name: 'French Grey',
                    hex: '#D3D3D3'
                },
                {
                    name: 'Foiled White',
                    hex: '#FFFFFF'
                },
                {
                    name: 'Anthracite Grey',
                    hex: '#414A4C'
                },
                {
                    name: 'Golden Oak',
                    hex: '#DAA520'
                },
                {
                    name: 'Schwarzbraun',
                    hex: '#321414'
                },
                {
                    name: 'Rosewood',
                    hex: '#674846'
                },
                {
                    name: 'Cream',
                    hex: '#FFFDD0'
                },
                {
                    name: 'Chartwell Green',
                    hex: '#7E9B76'
                },
                {
                    name: 'Irish Oak',
                    hex: '#916E3A'
                },
                {
                    name: 'Duck Egg Blue',
                    hex: '#C3E0E5'
                },
                {
                    name: 'Off-White',
                    hex: '#F8F8F8'
                },
                {
                    name: 'Charcoal',
                    hex: '#36454F'
                },
                {
                    name: 'Blue',
                    hex: '#0000FF'
                },
                {
                    name: 'Moss Green',
                    hex: '#4A766E'
                }
            ]
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
    width: 100%;
    background-color: $lightGray;
    padding: 0.5em 1em 1em 1em;
    box-sizing: border-box;
    margin-bottom: 3em;
    .section-header {
        display: flex;
        align-items: center;
        margin: unset;
        font-size: clamp(0.2em, 0.7em, 0.6em);
        justify-content: space-between;
        line-height: 0;

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
            gap: 1em;
            width: fit-content;
            align-items: center; 
            justify-content: center;
        }
    }
}
</style>
