<template>
<div>
    <ul id="nav-dropdowns-bar">
        <li>
            <ul>Entrance Doors</ul>
        </li>
        <li>
            <ul>Fully Glazed</ul>
        </li>
        <li>
            <ul>Bi-Fold Doors</ul>
        </li>
        <li>
            <ul>Sliding Doors</ul>
        </li>
        <li>
            <ul>French Doors</ul>
        </li>
        <li>
            <ul>Roof Lanters/Lights</ul>
        </li>
        <li>
            <ul>Windows</ul>
        </li>
        <li>
            <ul>Outdoors</ul>
        </li>
        <li>
            <ul>Be Inspired</ul>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "NavDropdownSection"
}
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';
div{
    border-bottom: 1px solid $gray;

    @media (max-width: 1067px) {
        display: none;
    }
}
ul{
    list-style: none;
    margin: unset;
    display: flex;
    padding: unset;
    justify-content: space-evenly;
    height: 3em;
    align-items: center;

    li {
        margin: unset;
        padding: unset;
        cursor: pointer;
        font-size: smaller;

        ul {
            &::after {
                display: inline-block;
                content: '>';
                transform: translateY(5%) rotate(90deg);
                margin-left: 0.5em;
                color: $primary;
            }
        }
    }
}

</style>
