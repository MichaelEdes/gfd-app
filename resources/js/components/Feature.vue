<template>
<div>
    <div class="icon">
        <font-awesome-icon :icon="['fas', iconName]" />
    </div>
    <p>{{ label }}</p>
</div>
</template>

<script>
export default {
    name: "Feature",
    props: {
        iconName: {
            type: String,
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
    width: 7em;

    .icon {
        border: 1px solid $dark;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3em;
        aspect-ratio: 1;
        border-radius: 50%;
        transform: scale(1.4);
    }

    p {
        margin: 1em 0;
    }
}
</style>
