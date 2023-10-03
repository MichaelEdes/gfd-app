<template>
<div>
    <div class="icon">
        <component :is="iconComponent" />
    </div>
    <p>{{ label }}</p>
</div>
</template>

<script>
export default {
    name: "Feature",
    props: {
        iconComponent: {
            type: Object,
            required: true
        },
        label: {
            type: String,
            default: ''
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: fit-content;
    .icon {
        border: 1px solid $dark;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5;
        width: 4em;
        aspect-ratio: 1;
        border-radius: 50%;
    }
    
    p {
        margin: unset;
    }
}
</style>
