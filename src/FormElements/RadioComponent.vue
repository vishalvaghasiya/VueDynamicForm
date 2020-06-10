<template>
    <div class="form-group">
        <label v-for="(option, key) in options" :key="key">
            <input type="radio"
                   :name="name"
                   :value="option.value"
                   class="form-control form-control-sm"
                   @input="$emit('input', $event.target.value)"/>
            {{option.label}}
        </label>
    </div>
</template>

<script>
    export default {
        name: "RadioComponent",
        props: ['name', 'params'],
        computed: {
            options() {
                return this.params.options
            }
        }
    }
</script>

<style scoped>
input{
    margin-left: 10px;
}
</style>