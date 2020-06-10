<template>
    <div class="form-group">

        <div v-for="(option, key) in media" :key="key">
            <label>{{option.name}}</label>

            <input type="image"
                   :src="option.icon"
                   alt="Submit"
                   width="48"
                   height="48"
                   @input="$emit('input', $event.target.value)"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SocialComponent",
        props: ['name', 'social'],
        computed: {
            media() {
                return this.social.media
            }
        }
    }
</script>

<style scoped>
    input {
        margin-left: 10px;
    }
</style>