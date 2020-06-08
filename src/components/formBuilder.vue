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

        {{formValues}}
        <!--                <div>
                            <button type="submit" :disabled="disabled">submit</button>
                        </div>-->
    </div>
</template>

<script>
    import Vue from 'vue';
    import Input from "../FormElements/Input";
    import Checkbox from "../FormElements/Checkbox";
    import RadioButton from "../FormElements/RadioButton";

    export default {
        name: "formBuilder",
        props: ['config'],
        components: {
            Input,
            Checkbox,
            RadioButton

        },
        data() {
            return {
                formValues: {},
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
        },
        methods: {
            updateField(field, value) {
                this.formValues[field] = value;
            }
        }
    }
</script>

<style scoped>

</style>