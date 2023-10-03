<template>
<div class="tabs-container">
    <ul class="tabs-list">
        <li v-for="tab in tabs" :key="tab.label" :class="{ active: currentTab === tab.label }" @click="switchTab(tab.label)">
            <i :class="tab.icon"></i>
            {{ tab.label }}
        </li>
    </ul>
    <div class="tab-content" v-if="currentTab">
        <pre>{{ currentContent }}</pre>
    </div>
</div>
</template>

<script>
export default {
    name: "TabComponent",
    props: {
        tabs: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentTab: this.tabs.length ? this.tabs[0].label : ''
        };
    },
    computed: {
        currentContent() {
            const tab = this.tabs.find(t => t.label === this.currentTab);
            return tab ? tab.content : '';
        }
    },
    methods: {
        switchTab(label) {
            this.currentTab = label;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

.tabs-list {
    display: flex;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    column-gap: 0.5em;

    @media (max-width: 768px) {
        column-gap: 0;
    }

    li {
        cursor: pointer;
        padding: 10px;
        transition: background 0.3s;
        flex-grow: 1;
        color: $white;
        background-color: $dark;

        &.active {
            background: $primary;
        }

        @media (max-width: 768px) {
            border: solid 0.5px $lightGray
        }
    }
}

.tab-content {
    padding: 20px;
    margin-top: -1em;
    background-color: $lightGray;

    pre {
        font-family: 'Inter', sans-serif;
        white-space: pre-wrap;
    }
}
</style>
