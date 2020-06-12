<template>
    <div :class="classStyle">
        <label v-if="labelName">{{labelName}}</label>
        <br>
        <div v-if="isOpen">
            <button class="btn btn-sm btn-primary" type="button" v-on:click.prevent='callback'>Yes, Please</button>
        </div>
        <div v-else>
            <button class="btn btn-sm btn-secondary" type="button" v-on:click.prevent='callback'>No, Thanks</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toggleComponent",
        props: {
            classStyle: String,
            labelName: String,
            value: Number
        },
        data() {
            return {
                isOpen: null
            }
        },
        methods: {
            callback: function () {
                this.isOpen = !this.isOpen;
                this.$emit('callback', this.isOpen);
                // alert(this.isOpen);
            },
            getValue() {
                // alert(this.$props.value);
                this.isOpen = this.$props.value;
            }
        }
        ,
        mounted() {
            this.getValue();
        }
    }
</script>

<style scoped>
</style>
