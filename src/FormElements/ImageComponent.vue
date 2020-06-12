<template>
    <div>
        <div class="file-upload-form">
            <input type="file" accept=".png, .jpg, .jpeg" v-on:change="previewImage"/>
        </div>
        <!--<div class="image-preview" v-if="imageData.length > 0">
            <img class="preview" :src="imageData">
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "ImageComponent",
        data() {
            return {
                imageData: '',
            }
        },
        methods: {

            previewImage: function (event) {
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.imageData = e.target.result;
                        // console.log(this.imageData);
                        // console.log(this.imageData);
                        this.$emit('callback', this.imageData)

                    }
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }

            }
            /*callback: function (event) {
               console.log(event.target.files[0]);
               this.$emit('callback', event.target.files[0])
           },*/
        }
    }
</script>

<style scoped>
    .file-upload-form, .image-preview {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 20px;
    }

    img.preview {
        width: 200px;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>