<template>
    <div>
        <label :for="name" v-if="labelName">{{labelName}}
            <span :title="title" v-if="title"></span></label>

        <textarea :class="classStyle"
                  v-model="nameEmit"
                  v-on:change="callback"
                  rows="4" cols="50"></textarea>
        <!--<textarea v-model="message" placeholder="add multiple lines"></textarea>-->
    </div>
</template>

<script>
    export default {
        name: "TextAreaComponent",
        props: {
            name: {type: String},
            labelName: {type: String},
            title: {type: String},
            classStyle: {type: String},
        },
        data() {
            return {
                // nameEmit: "",
                nameEmit: null,
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