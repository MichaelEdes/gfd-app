<template>
<div>
    <p>CALL</p>
    <p><span>
            01642 309 576
        </span></p>
    <p>(OPEN TODAY 9AM-5PM)</p>
</div>
</template>

<script>
export default {
    name: "NavDetailsBar"
}
</script>

<style lang="scss" scoped>
@import '../../../sass/app.scss';

div {
    display: none;
    background-color: $dark;
    color: $white;
    width: 100%;
    padding: clamp(0.1em, 1.5vw, 0.5em) 1em;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border-top: 2px solid $white;
    border-bottom: 2px solid $white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    p {
        margin: unset;
        text-align: center;
        font-size: clamp(0.8em, 2vw, 1.2em);

        span {
            color: $primary
        }
    }

    @media (min-width: 1261px) {
        display: none;
    }
}
</style>
