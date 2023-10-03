<template>
    <div class="features-container">
        <feature :iconComponent="StarIcon" label="Star Feature" />
    </div>
</template>

<script>
import Feature from './Feature.vue';
export default {
    name: "FeatureSection",
    components: {
        Feature
    }
}
</script>

<style lang="scss" scoped>
    .features-container {
        width: 100%;
        background-color: red;
        margin: 3em 0
    }
</style>