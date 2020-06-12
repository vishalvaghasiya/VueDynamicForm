<template>
    <div>
        <!--<input :true-value="1" type="checkbox" v-model="ischecked" v-on:change="callback">-->
        <input :id="id" type="checkbox" v-model="checked" v-on:change="callback">
        <label v-if="label">{{label}}</label>
    </div>
</template>

<script>
    export default {
        name: "checkboxComponent",
        props: {
            ischecked: {
                type: Number
            },
            isEditchecked: {
                type: Number
            },
            label: {
                type: String
            },
            id: {
                type: String
            }
        },
        data() {
            return {
                checked: '',
                // Here '' value is not checked and any value is checked
            }
        },
        /*watch: {
            ischecked: function (newVal) {
                this.checked = newVal;
            }
        },*/
        methods: {
            callback() {
                /*if (!$("#checkbox").is("checked")) {
                    this.$emit('callback', 'false');
                } else {
                    this.$emit('callback', 'true');
                }*/
                // alert(this.checked);
                if (this.checked != "") {
                    // alert('isSelected');
                    // alert(this.checked); // OP : true
                    this.$emit('callback', 1);
                } else {
                    // alert(this.checked);
                    this.$emit('callback', 0);
                }
            },
            getChecked() {
                // this.$props.ischecked === "true" ||
                if (this.$props.ischecked === 1) {
                    console.log(this.$props.ischecked);
                    this.checked = this.$props.ischecked;
                }
            }
        },
        mounted() {
            this.getChecked();
        }
    }
    /*props: ['ischecked', 'label'],*/
</script>

<style scoped>

</style>
