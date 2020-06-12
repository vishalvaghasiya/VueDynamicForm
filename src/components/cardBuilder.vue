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
                            <div class="form-group" v-for="(field , index) in orignalData" :key="index">
                                <label>{{field.label}} {{index}} </label>
                                <component :is="field.show"
                                           :name="field.name"
                                           :class="field.class"
                                           :params="field.params"
                                           :custom="field.custom"
                                           :social="field.social"
                                           :data-vv-as="field.label"
                                           v-on:callback="setProp($event , 'value' , index)">
                                </component>
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
                            <!--<div v-for="(column , index) in columns" :key="index">
                                {{column.defaultVal.name}}
                                <div v-if="index === 0">
                                    {{column.value}}
                                    {{column}}
                                </div>
                            </div>-->
                            <pre></pre>
                            <!--                            <pre>{{columns}}</pre>-->
                            <hr>
                            <hr>
                            <div v-for="(column , index) in orignalData" :key="index">
                                <div v-if="index === 0" class="text-center">
                                    <div v-if="column.value === '' ">
                                        <img :src="column.default" alt="logo" class="img-thumbnail"
                                             :width="column.datatype.size.width"
                                             :height="column.datatype.size.height">
                                    </div>
                                    <div v-else>
                                        <img :src="column.value" alt="logo" class="img-thumbnail"
                                             :width="column.datatype.size.width"
                                             :height="column.datatype.size.height"
                                        >
                                    </div>
                                </div>
                                <div v-if="index === 1" class="text-center">
                                    <div v-if="column.value === '' ">
                                        <img :src="column.default" alt="logo" class="img-thumbnail"
                                             :width="column.datatype.size.width"
                                             :height="column.datatype.size.height">
                                    </div>
                                    <div v-else>
                                        <img :src="column.value" alt="logo" class="img-thumbnail"
                                             :width="column.datatype.size.width"
                                             :height="column.datatype.size.height"
                                        >
                                    </div>
                                </div>
                                <div v-if="index !== 0 && index !== 1" class="text-left mt-2">
                                    <!--<div v-for="(col , key) in column" :key="key">
                                        <div v-if="key === 'name'">
                                            {{key}}:{{col}}
                                        </div>
                                    </div>-->
                                    <div v-if="column.value === '' ">
                                        <h3 class="text-center">
                                            {{column.label}}: <u>{{column.default}}</u>
                                        </h3>
                                    </div>
                                    <div v-else>
                                        <h3>
                                            {{column.label}}: <u>{{column.value}}</u>
                                        </h3>
                                    </div>
                                </div>
                                <!--                                {{column}}-->
                            </div>
                            <!--<pre>{{orignalData}}</pre>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Config from '../config/cardConfig.json'
    import TextComponent from "../FormElements/TextComponent";
    import CheckboxComponent from "../FormElements/CheckboxComponent";
    import CustomComponent from "../FormElements/CustomComponent";
    import ImageComponent from "../FormElements/ImageComponent";
    import RadioComponent from "../FormElements/RadioComponent";
    import SocialComponent from "../FormElements/SocialComponent";

    export default {
        name: "formBuilder",
        components: {
            TextComponent,
            CheckboxComponent,
            CustomComponent,
            ImageComponent,
            RadioComponent,
            SocialComponent
        },
        data() {
            return {
                orignalData: Config,
            }
        },
        methods: {
            setProp(value, props, index) {
                console.log(value);
                console.log(props);
                console.log(index);
                if (this.orignalData[index] !== undefined) {
                    this.orignalData[index][props] = value;
                }
            }
        },
    }
</script>

<style scoped>
</style>