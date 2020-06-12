<template>
    <div @click="callback" :class="buttonClass">{{name}}</div>
</template>
<script>
    export default {
        name: "buttonComponent",
        props: ['buttonClass', 'name'],
        methods: {
            callback: function () {
                this.$emit('callback');
            }
        }
    }
</script>

<style scoped>
</style>
