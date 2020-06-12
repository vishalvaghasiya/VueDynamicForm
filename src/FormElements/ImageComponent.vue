<template>
    <div>
        <!--<input type="file" accept=".png, .jpg, .jpeg"
               @input="$emit('input', $event.target.URL.createObjectURL(e.target.files[0]))"/>-->
        <input type="file" accept=".png, .jpg, .jpeg" @click="callback"/>
    </div>
</template>

<script>
    export default {
        name: "ImageComponent",
        methods:{
            callback:function () {
                this.$emit('callback')
            }
        }
    }
</script>

<style scoped>

</style>