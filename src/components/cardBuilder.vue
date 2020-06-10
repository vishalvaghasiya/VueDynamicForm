<template>
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

                        <!-- Preheading -->
                        <h6 class="text-center text-uppercase text-warning">Form</h6>
                        <form>
                            <div class="form-group" v-for="(field , key) in config" :key="key">

                                <label>{{field.label}}</label>

                                <component :is="field.type"
                                           :name="field.name"
                                           :class="field.class"
                                           :params="field.params"
                                           :custom="field.custom"
                                           :social="field.social"
                                           :data-vv-as="field.label"
                                           @input="updateField(field.name ,$event)">
                                </component>
                            </div>
                        </form>
                        <!-- Button -->
                        <!--<a class="col-3 btn btn-block btn-primary lift">
                            Buy now
                        </a>-->
                        <!--<button type="submit" class="btn btn-primary">Submit</button>-->

                    </div>
                </div>

            </div>
            <div class="col-lg-6">

                <!-- Card -->
                <div class="card rounded-top-left-lg rounded-bottom-right-lg mt-6">
                    <div class="card-body">

                        <!-- Preheading -->
                        <h6 class="text-center text-uppercase text-warning">
                            Preview
                        </h6>

                        <!-- Price -->
                        <p class="display-4 font-weight-bold text-center">
                            Preview data
                        </p>
                        <div>
                            {{formValues}}
                            {{formValues[0]}}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import InputComponent from "../FormElements/InputComponent";
    import CheckboxComponent from "../FormElements/CheckboxComponent";
    import CustomComponent from "../FormElements/CustomComponent";
    import ImageComponent from "../FormElements/ImageComponent";
    import RadioComponent from "../FormElements/RadioComponent";
    import SocialComponent from "../FormElements/SocialComponent";

    export default {
        name: "formBuilder",
        props: ['config'],
        components: {
            InputComponent,
            CheckboxComponent,
            CustomComponent,
            ImageComponent,
            RadioComponent,
            SocialComponent
        },
        data() {
            return {
                formValues: {},
            }
        },
        methods: {
            updateField(field, value) {
                this.formValues[field] = value;
            }
        },
        /* Output */
        created() {
            this.config.map(f => {
                Vue.set(this.formValues, f.name, null)
            })
        }
    }
</script>

<style scoped>

</style>