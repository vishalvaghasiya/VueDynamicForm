<template>
    <div>
        <div class="newTableRow" v-for="(column , index) in columns" :key="column">
            <div>
                <NameTextComponent :placeholder="column.title"
                                   :value="column.title"
                                   name="name"
                                   v-on:callback="setProp($event, 'title' , index)"></NameTextComponent>
            </div>
            <div>
                <numberValueComponent :number="column.size"
                                      :placeholder="column.size"
                                      name="size"
                                      v-on:callback="setProp($event, 'size' , index)"></numberValueComponent>
            </div>
            <div>
                <checkboxInputComponent
                        :isChecked="column.isNotNull"
                        v-on:callback="setProp($event, 'isNotNull' , index)"></checkboxInputComponent>
            </div>
            <div>
                <checkboxInputComponent
                        :isChecked="column.isUnsigned"
                        v-on:callback="setProp($event, 'isUnsigned' , index)"></checkboxInputComponent>
            </div>
            <div>
                <checkboxInputComponent
                        :isChecked="column.isAutoIncrement"
                        v-on:callback="setProp($event, 'isAutoIncrement' , index)"></checkboxInputComponent>
            </div>
            <div>
                <numberValueComponent
                        :name="'default'"
                        v-on:callback="setProp($event, 'defaultVal' , index)"></numberValueComponent>
            </div>
            <div>
                <buttonComponent buttonClass="btn btn-sm btn-danger"
                                 name="Delete"
                                 v-on:callback="removeColumn(index)"></buttonComponent>
            </div>
        </div>
        <div>
            preview
            <pre>
                {{columns}}
            </pre>
        </div>
    </div>
</template>

<script>
    import Config from '../config/myformConfig.json'
    import textComponent from "./com/textComponent";
    import numberComponent from "./com/numberComponent";
    import checkboxComponent from "./com/checkboxComponent";
    import buttonComponent from "./com/buttonComponent";


    export default {
        name: "try",
        components: {
            NameTextComponent: textComponent,
            numberValueComponent: numberComponent,
            checkboxInputComponent: checkboxComponent,
            buttonComponent: buttonComponent,
        },
        data() {
            return {
                tableName: '',
                createModel: 'false',
                columns: Config
            }
        },
        methods: {
            tableStore(tbName) {
                this.tableName = tbName;
                //todo: Table Name Store
            },
            modelToggle(modelStatu) {
                this.createModel = JSON.parse(modelStatu);
                //todo: Model True False Store
            },
            setProp(numb, prop, index) {
                if (this.columns[index] !== undefined) {
                    this.columns[index][prop] = numb;
                    alert(this.columns[index][prop]);
                }
                //todo: Onchange Object data save in array
            },
            addNewRow: function () {
                this.columns.push({...this.baseColumn}); // todo: {...} is Spreding and this is use copy of reference
                // todo: Onclick Add New Row
            },
            addTimeStamps: function () {
                this.timeStampColumns.forEach(col => {
                    this.columns.push(col);
                });
                //todo: Onclick Add TimeStamp
            },
            addSofdivelete: function () {
                this.columns.push(this.sofdiveleteColumn);
                // todo: Onclick Add Sofdivelete
            },
            removeColumn: function (index) {
                if (this.columns.length > 1) {
                    this.columns.splice(index, 1);
                }
                // todo: Onclick remove specific index using Row
            }
        }
    }
</script>

<style scoped>

</style>