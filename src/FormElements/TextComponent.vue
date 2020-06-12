<template>
    <div class="form-group">

        <label :for="name" v-if="labelName">{{labelName}}
            <span :title="title" v-if="title"></span></label>

        <input :id="id"
               :name="name"
               :pattern="pattern"
               :placeholder="placeholder"
               :readonly="readonlyData"
               :class="inputClass"
               required
               type="text"
               v-model="nameEmit"
               v-on:change="callback">
    </div>
</template>

<script>
    export default {
        name: "TextComponent",
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
                // nameEmit: "",
                nameEmit: null,
            }
        },
        watch: {
            placeholder: function (newVal) {
                this.nameEmit = newVal;
                console.log(newVal)
            }
        },
        methods: {
            callback: function () {
                this.$emit('callback', this.nameEmit);
                alert((this.nameEmit));
            }
        }
    }
</script>

<style scoped>

</style>