<template>
    <div class="form-group">

        <input @input="$emit('input', $event.target.value)"
               class="form-control form-control-sm"/>
    </div>
</template>

<script>
    export default {
        name: "InputComponent"
    }
</script>

<style scoped>

</style>