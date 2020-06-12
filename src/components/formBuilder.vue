<template>
    <div>
        <div>
            <!-- Section -->

            <div class="row justify-content-center">
                <div class="col-md-10 mb-4 col-lg-8 text-center">
                    <!-- Divider -->
                    <hr class="hr-sm border-warning mb-10 mb-md-12">
                    <!-- Heading -->
                    <h2 class="display-3 mb-1">Dynamic Form</h2>
                    <!-- Text -->
                    <p class="mb-9">To be develop Dynamic Form</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <!-- Card -->
                    <div class="card rounded-top-left-lg rounded-bottom-right-lg mt-6">
                        <div class="card-body">
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
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                        anyone
                                        else.</small>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    {{formValues}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Input from "../FormElements/TextComponent";
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