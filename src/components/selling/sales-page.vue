<template>
    <div class="product-container">
        <h1 class="product-name">{{ nameProduct }}</h1>

        <div class="images-container">
            <div v-for="(image, index) in images" :key="image.id" class="image-wrapper">
            <img :src="image.src" :alt="`Image ${index}`" class="product-image" />
            </div>
        </div>
        <p class="details">รายละเอียดสินค้า</p>
        <div class="details-container">
            <p class="product-details">{{ productDetails }}</p>
        </div>
        

        <ul class="product-types">
            <li v-for="(productType, index) in productTypes" :key="index" class="product-type">
            <p>ประเภท <br>
                <strong>{{ productType.productType1 }} : {{ productType.inputProductType1 }}</strong><br>
                <strong>{{ productType.productType2 }} : {{ productType.inputProductType2 }}</strong></p>
            <p>ราคา : <strong>{{ productType.price }}</strong></p>
            <p>จำนวนสินค้าในคลัง : <strong>{{ productType.numberProducts }}</strong></p>
            </li>
        </ul>
    </div>
</template>

<script>
import productData from '/product.json';

export default {
    data() {
        return {
            images: productData.images,
            nameProduct: productData.nameProduct,
            productDetails: productData.productDetails,
            productTypes: productData.productTypes,
        };
    },
};
</script>

<style scoped>
.product-container {
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
}

p {
    font-size: 18px;
}

.details {
    text-align: center;
}

.product-name {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.images-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
}

.image-wrapper {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-details {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    max-width: 100%;
    background: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
}

.product-details {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #000000;
    white-space: pre-wrap;
    overflow-wrap: break-word;
}


.product-types {
    list-style: none;
    padding: 0;
    margin: 0;
}

.product-type {
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
}

.product-type p {
    margin: 5px 0;
}

.product-type strong {
    color: #333;
}

@media (max-width: 600px) {
    .images-container {
        flex-direction: column;
        align-items: center;
    }

    .product-container {
        padding: 10px;
    }

    .image-wrapper {
        width: 100%;
        max-width: 250px;
    }
}
</style>