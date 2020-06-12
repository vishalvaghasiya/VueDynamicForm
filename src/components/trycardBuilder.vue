<template>
    <div>
        <div class="container-fluid mt-2">

            <div id="myTabContent" class="tab-content mt-4 mb-4">
                <div class="ml-2 mr-3 mt-3">
                    <cardBuilder></cardBuilder>
                </div>
                <div class="ml-2 mr-3 mt-3">
                    <cardBuilder></cardBuilder>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cardBuilder from "./cardBuilder";

    export default {
        name: "formBuilder",
        components: {
            cardBuilder
        },
    }
</script>

<style scoped>
</style>