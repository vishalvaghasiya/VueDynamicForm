<template>
    <div class="form-group">
        <input type="checkbox"
               v-model="model"
               class="form-control form-control-sm"
               @change="$emit('input', model)"/>
    </div>
</template>

<script>
    export default {
        name: "CheckboxComponent",
        data() {
            return {
                model: false
            }
        }
    }
</script>

<style scoped>

</style>