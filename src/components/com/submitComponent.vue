<template>
    <div :class="btnAlign">
        <!--        <input @click="callback" :class="btnStyle" type="submit" :v-model="value">-->
        <input :class="btnStyle" :type="cusType" @click.prevent="callback" :value="value">
    </div>
</template>

<script>
    export default {
        name: "submitComponent",
        props: ['btnAlign', 'btnStyle', 'value', 'cusType'],
        methods: {
            callback: function () {
                this.$emit('callback');
            }
        }
    }
</script>

<style scoped>

</style>
