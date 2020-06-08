<template>
    <div>
        <div v-for="(field , key) in config" :key="key">

            <label>{{field.label}}</label>

            <component :is="field.type"
                       :name="field.name"
                       :params="field.params"
                       @input="updateField(field.name ,$event)"
                       v-validate="field.validation"
                       :data-vv-as="field.label">
            </component>
        </div>
        <!--                <div>
                            <button type="submit" :disabled="disabled">submit</button>
                        </div>-->
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "formBuilder",
        props: ['config'],

        data() {
            return {
                formValues: '',
            }
        },
        /*
          computed: {
                            disabled() {
                                return Object.keys(this.fields).some(key => this.fields[key].invalid)
                            }
                        },*/

        created() {
            this.config.map(f => {
                Vue.set(this.formValues, f.name, null)
            })
        }
    }
</script>

<style scoped>

</style>