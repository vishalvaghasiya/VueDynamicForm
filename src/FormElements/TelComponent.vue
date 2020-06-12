<template>
    <div>
        <label :for="name" v-if="labelName">{{labelName}}
            <span :title="title" v-if="title"></span></label>

        <input :id="id"
               :name="name"
               :pattern="pattern"
               :placeholder="placeholder"
               :readonly="readonlyData"
               :class="inputClass"
               type="tel"
               v-model="nameEmit"
               required
               v-on:change="callback">

        <br>
        <small>Format: 123-456-7890</small>

    </div>
</template>

<script>
    export default {
        name: "TelComponent",
        props: {
            name: {type: String},
            id: {type: String},
            placeholder: {type: String},
            value: {type: String},
            labelName: {type: String},
            pattern: {type: String},
            classStyle: {type: String},
            inputClass: {type: String},
            title: {type: String},
            readonlyData: {type: Boolean}
        },
        data() {
            return {
                nameEmit: null,
            }
        },
        methods: {
            callback() {
                this.$emit('callback', this.nameEmit)

            }
        }
    }
</script>

<style scoped>

</style>