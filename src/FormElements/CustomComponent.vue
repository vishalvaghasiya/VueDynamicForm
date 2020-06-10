<template>
    <div class="form-group">
        <div v-for="(option, key) in options" :key="key">
            <label>{{option.label}}</label>

            <input type="text"
                   :name="option.name"
                   class="form-control form-control-sm"
                   @input="$emit('input', $event.target.value)"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomComponent",
        props: ['name', 'custom'],
        computed: {
            options() {
                console.log(this.custom.options);
                return this.custom.options
            }
        }
    }
</script>

<style scoped>
    input {
        margin-left: 10px;
    }
</style>