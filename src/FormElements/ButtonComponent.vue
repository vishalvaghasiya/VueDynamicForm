<template>
    <div>
        <div @click="callback" :class="buttonClass">{{name}}</div>

        <!--<input class="favorite styled"
               type="button"
               value="Add to favorites">-->
    </div>
</template>

<script>
    export default {
        name: "ButtonComponent",
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