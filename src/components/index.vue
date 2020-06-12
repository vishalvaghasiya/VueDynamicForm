<template>
    <div class="hello">
        <!--<form-builder :config="formConfig"></form-builder>-->
        <!--<try-page></try-page>-->
        <!--<card-builder :config="formConfig"></card-builder>-->
    </div>
</template>

<script>
    // import Config from '../config/cardConfig.json'
    // import formBuilder from "./formBuilder";
    // import cardBuilder from "./cardBuilder";
    // import tryPage from "./tryPage";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            // cardBuilder
            // formBuilder
            // tryPage
        },
        computed: {
            // formConfig() {
            //     return Config
            // }
        },
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
