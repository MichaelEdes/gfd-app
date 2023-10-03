<template>
    <button :class="variant">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary'].includes(value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

button {
    text-transform: uppercase;
    padding: 0.6em 3em;
    width: 100%;
    font-weight: 500;
    border: none;
    border-radius: 2em;
    color: white;

    &.primary {
        background-color: $primary;
    }

    &.secondary {
        background-color: $black;  
    }
}
</style>
