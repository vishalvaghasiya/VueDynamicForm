<template>
    <div>
        <form>
            <div class="form-group" v-for="(field , key) in config" :key="key">

                <label>{{field.label}}</label>

                <component :is="field.type"
                           :name="field.name"
                           :class="field.class"
                           :params="field.params"
                           v-validate="field.validation"
                           :data-vv-as="field.label"
                           @input="updateField(field.name ,$event)"
                           class="form-control">
                </component>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br>
        {{formValues}}
    </div>
</template>

<script>
    import Vue from 'vue';
    import Input from "../FormElements/InputComponent";
    import Checkbox from "../FormElements/CheckboxComponent";
    import RadioButton from "../FormElements/RadioComponent";

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