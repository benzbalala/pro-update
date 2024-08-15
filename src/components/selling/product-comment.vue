<template>
    <div class="container">
        <p>เขียนรีวิว</p>

        <div class="product-con">
            product
        </div>

        <div class="star-container">
            <div class="star-widget">
                <input type="radio" name="rate" id="rate-5">
                <label for="rate-5"><font-awesome-icon :icon="['fas', 'star']" /></label>
                <input type="radio" name="rate" id="rate-4">
                <label for="rate-4"><font-awesome-icon :icon="['fas', 'star']" /></label>
                <input type="radio" name="rate" id="rate-3">
                <label for="rate-3"><font-awesome-icon :icon="['fas', 'star']" /></label>
                <input type="radio" name="rate" id="rate-2">
                <label for="rate-2"><font-awesome-icon :icon="['fas', 'star']" /></label>
                <input type="radio" name="rate" id="rate-1">
                <label for="rate-1"><font-awesome-icon :icon="['fas', 'star']" /></label>
                <form action="#">
                    <p></p>
                    <header></header>
                </form>
            </div>
        </div>
        

        <div class="review-container">
            <p>เขียนรีวิวสินค้า</p>
            <textarea
                id="review"
                v-model="review"
                placeholder="รายละเอียดต่างๆ ของสินค้า"
                @input="adjustTextareaHeight($event.target)"
            ></textarea>
        </div>

        <div class="upload-container">
            <p>เพิ่มรูปภาพเเละวิดีโอ</p>
            <div class="images-container" id="container-product-images">
                <div v-for="(image, index) in images" :key="image.id" class="image-wrapper">
                <img :src="image.src" alt="Product Image" class="uploaded-image" />
                <span class="delete-icon" @click="removeImage(index)">x</span>
                </div>
            </div>

            <div class="upload-icon-container">
                <font-awesome-icon
                :icon="['fas', 'image']"
                @click="triggerFileInput('product')"
                class="upload-icon"
                />
            </div>

            <input
                type="file"
                ref="productImageInput"
                class="image-upload"
                accept="image/*"
                @change="previewImage($event, 'images')"
                multiple
                style="display: none"
            />
        </div>

        <button type="button" class="btn" @click="submit()">
            ยืนยัน
        </button>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

library.add(faImage)
export default {
    data() {
        return {
            review: '',
            images: [],
            nextImageId: 1, 
        };
    },
    components: {
        FontAwesomeIcon,
    },
    methods: {
        adjustTextareaHeight(textarea) {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + 2 + "px";
        },
        triggerFileInput(inputName) {
            const refMap = {
                product: "productImageInput",
            };
            const refName = refMap[inputName];
            const input = this.$refs[refName];
            if (input) {
                input.click();
            }
        },
        previewImage(event) {
        const files = event.target.files; // Get the selected files
        Array.from(files).forEach((file) => {
            if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.images.push({
                id: `image${this.nextImageId++}`, // Increment and assign ID
                src: e.target.result,
                });
            };
            reader.readAsDataURL(file);
            }
        });
        
        event.target.value = "";
        },
        removeImage(index) {
        this.images.splice(index, 1); // Remove image from list
        },
        submit(){

        },
    }
}
</script>

<style scoped>
.container{
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: white;
}

p {
    font-size: 1.2rem;
}

.review-container{
    width: 90%;
    height: auto;
    margin: 20px auto;
    text-align: center;
    align-items: center;
}

#review{
    height: auto;
    box-sizing: border-box;
    width: 80%;
    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    overflow: hidden;
}

textarea {
    font-size: 20px;
    width: 40%;
    resize: none;
}

.product-con {
    padding: 20px;
}

.btn {
    width: 40%;
    padding: 10px;
    font-size: 20px;
    border: #efa0a0;
    background: #f6b7b7;
    border-radius: 20px;
    cursor: pointer;
}

.btn:hover {
    background: rgb(244, 114, 114);
    color: white;
}

/* ให้คะแนนดาว */

.star-container {
    width: 400px;
    background: #f4f4f4;
    padding: 20px 30px;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.star-container .star-widget input{
    display: none;
    cursor: pointer;
}

.star-widget label {
    font-size: 40px;
    color: #444;
    padding: 10px;
    float: right;
    transition: all 0.2s ease;
    cursor: pointer;
}

input:not(:checked) ~ label:hover,
input:not(:checked) ~ label:hover ~ label {
    color: rgb(238, 196, 60);
}

input:checked ~ label {
    color: #ffcc00;
}

input#rate-5:checked ~ label {
    color: #f5d34d;
    text-shadow: 0 0 20px #952;
}

#rate-1:checked ~ form header:before{
    content: "Very Bad";
}
#rate-1:checked ~ form p:before{
    content: "😔";
}

#rate-2:checked ~ form header:before{
    content: "Bad";
}
#rate-2:checked ~ form p:before{
    content: "☹️";
}

#rate-3:checked ~ form header:before{
    content: "Good";
}
#rate-3:checked ~ form p:before{
    content: "🙂";
}

#rate-4:checked ~ form header:before{
    content: "Very Good";
}
#rate-4:checked ~ form p:before{
    content: "🥰";
}

#rate-5:checked ~ form header:before{
    content: "Excellent";
}
#rate-5:checked ~ form p:before{
    content: "😍🤗";
}

form header,
form p {
    width: 100% ;
    font-size: 25px;
    color: rgb(124, 83, 5);
    text-align: center;
    font-weight: 500;
    margin: 5px 0 20px 0;
    transition: all 0.2s ease;
}

/* photo */
.upload-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
}

.image-wrapper {
    position: relative;
    display: inline-block;
    margin: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 8px;
    width: 200px; /* Adjust the size as needed */
    height: 200px; /* Adjust the size as needed */
}

.upload-icon {
    font-size: 70px; /* Increased font size for the icon */
    color: #888;
    cursor: pointer;
    margin-bottom: 20px;
}

.upload-icon:hover {
    color: #555;
}

.image-upload {
  display: none;
}

.delete-icon {
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    color: white;
    cursor: pointer;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 14px;
}

.images-container {
    display: flex;
    flex-wrap: wrap;
}

.uploaded-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.upload-icon {
    font-size: 50px;
    color: #888;
    cursor: pointer;
    margin-bottom: 20px;
}

.upload-icon:hover {
    color: #555;
}

</style>