<template>
    <div class="hello">
        <h1>Dynamic Form Try</h1>
        <p>To be develop Dynamic Form Try</p>
        <form-builder :config="formConfig"></form-builder>
    </div>
</template>

<script>
    import Config from '../config/formConfig.json'
    import formBuilder from "./formBuilder";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        computed: {
            formConfig() {
                return Config
            }
        },
        components: {
            formBuilder
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
