<template>
    <div>
        <input type="checkbox"
               v-model="model"
               @change="$emit('input', model)" />
    </div>
</template>

<script>
    export default {
        name: "Checkbox",
        data(){
            return{
                model:false
            }
        }
    }
</script>

<style scoped>

</style>