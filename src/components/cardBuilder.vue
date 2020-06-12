<template>
    <div>
        <!-- Section -->

        <div class="row justify-content-center">
            <div class="col-md-10 mb-4 col-lg-8 text-center">
                <hr class="hr-sm border-warning mb-10 mb-md-12">
                <h2 class="display-3 mb-1">Dynamic Card</h2>
                <p class="mb-9">To be develop Dynamic Card</p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="card rounded-top-left-lg rounded-bottom-right-lg mt-6">
                    <div class="card-body">
                        <h6 class="text-center text-uppercase text-warning">Form</h6>
                        <form>
                            <div class="form-group" v-for="(field , key) in orignalData" :key="key">
                                <label>{{field.label}}</label>
                                <component :is="field.showWhich"
                                           :name="field.name"
                                           :class="field.class"
                                           :params="field.params"
                                           :custom="field.custom"
                                           :social="field.social"
                                           :data-vv-as="field.label"
                                           @input="updateField($event, field.name, index)">
                                </component>
                            </div>
                            <div class="newTableRow" v-for="(column , index) in columns" :key="column">
                                <NameTextComponent :placeholder="column.title"
                                                   :value="column.title"
                                                   name="name"
                                                   v-on:callback="setProp($event, 'title' , index)"></NameTextComponent>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <!-- Card -->
                <div class="card rounded-top-left-lg rounded-bottom-right-lg mt-6">
                    <div class="card-body">
                        <h6 class="text-center text-uppercase text-warning">Preview</h6>
                        <p class="display-4 font-weight-bold text-center">Preview data</p>
                        <div>
                            <pre>{{columns}}</pre>
                            <pre>{{orignalData}}</pre>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    // import Vue from 'vue';
    import TextComponent from "../FormElements/TextComponent";
    import CheckboxComponent from "../FormElements/CheckboxComponent";
    import CustomComponent from "../FormElements/CustomComponent";
    import ImageComponent from "../FormElements/ImageComponent";
    import RadioComponent from "../FormElements/RadioComponent";
    import SocialComponent from "../FormElements/SocialComponent";

    export default {
        name: "formBuilder",
        props: ['config'],
        components: {
            NameTextComponent: TextComponent,
            CheckboxComponent,
            CustomComponent,
            ImageComponent,
            RadioComponent,
            SocialComponent
        },
        data() {
            return {
                orignalData: this.config,
                columns: [
                    {
                        title: 'id',
                        type: 'integerIncrements',
                        size: '11',
                        isNotNull: true,
                        isUnsigned: false,
                        isAutoIncrement: true,
                        index: 'PRIMARY',
                        defaultVal: ''
                    }
                ],
            }
        },
        methods: {

            /*updateField(field, value) {
                this.formValues[field] = value;
            },
            input(value, field, index) {
                this.orignalData[index][field] = value;
            },
            */
            setProp(numb, prop, index) {
                if (this.columns[index] !== undefined) {
                    this.columns[index][prop] = numb;
                    alert(this.columns[index][prop]);
                }
                //todo: Onchange Object data save in array
            },
            /*imageShow(value, prop, index) {
                alert(this.config.length);
                if (this.config.length > 1) {
                    this.config[index][prop] = value
                }
            }*/

        },
        /* Output */
        /*created() {
            this.config.map(f => {
                Vue.set(this.formValues, f.name, f.default)
            })
        }*/
    }
</script>

<style scoped>

</style>