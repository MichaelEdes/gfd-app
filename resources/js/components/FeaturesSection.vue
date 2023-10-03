<template>
<div class="features-container">
    <feature v-for="feature in features" :key="feature.label" :iconName="feature.icon" :label="feature.label" />
</div>
</template>

<script>
import Feature from './Feature.vue';

export default {
    name: "FeatureSection",
    components: {
        Feature
    },
    data() {
        return {
            features: [{
                    icon: "clipboard",
                    label: "Home survey option"
                },
                {
                    icon: "hard-hat",
                    label: "Installation option"
                },
                {
                    icon: "ruler",
                    label: "Bow/Ward resistant"
                },
                {
                    icon: "check",
                    label: "New build approved"
                },
                {
                    icon: "door-open",
                    label: "Triple sealed frame"
                },
                {
                    icon: "tree",
                    label: "Solid timber core"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.features-container {
    margin: 3em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    width: fit-content;
    align-items: center;
    justify-content: center;
}
</style>
