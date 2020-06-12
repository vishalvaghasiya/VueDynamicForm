<template>
    <div>
        <input :name="name" :placeholder="number" class="form-control form-control-sm" min="0" type="number"
               v-model="num"
               v-on:change.prevent="callback">
    </div>

</template>

<script>
    export default {
        name: "numberComponent",
        props: ['number', 'name'],
        data() {
            return {
                num: undefined,
            }
        },
        methods: {
            callback: function () {
                this.$emit('callback', this.num);
            }
        }
    }
</script>

<style scoped>

</style>
