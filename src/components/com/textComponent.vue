<template>
    <div :class="classStyle">
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
        <!--:placeholder="placeholder"-->
    </div>
</template>

<script>
    export default {
        name: "textComponent",
        /*props: ['name', 'placeholder'],*/
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
        // props data get and set in v-model
        watch: {
            placeholder: function (newVal) {
                this.nameEmit = newVal;
                // console.log(newVal)
            }
        },
        methods: {
            callback: function () {
                this.$emit('callback', this.nameEmit);
                // alert((this.nameEmit));
            },
            getTextBoxValue() {
                // this.nameEmit = this.$props.value;
                // console.log(this.nameEmit);
                // this.nameEmit = this.$props.value[0].toUpperCase() + this.$props.value.slice(1);
                /*let a = this.$props.value;
                let cap = a.toUpperCase();
                alert(cap);*/

                this.nameEmit = this.$props.value;
                // alert(this.$props.inputClass);
            }
        },
        mounted() {
            this.getTextBoxValue();
        }
    }
</script>

<style scoped>

</style>
