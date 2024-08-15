<template>
    <div class="container">
        <div class="item">
            <CategoryComponent></CategoryComponent>
            <productsrecommend></productsrecommend>
            <!-- <sellingLogin></sellingLogin> -->
            <!-- startSelling></startSelling> -->
            <!-- <FormOneSeller></FormOneSeller> -->
            <footerComponent></footerComponent>
            
        </div>

    </div>
</template>

<script>
import productsrecommend from "../components/homepage/Product-reccomment.vue";
//import sellingLogin from "../components/selling/selling-login.vue";
//import startSelling from "../components/selling/start-selling.vue";
//import FormOneSeller from "../components/selling/form-one-seller.vue";
export default {
    name: "App",
    components: {
        productsrecommend,
        //sellingLogin,
        //startSelling,
        //FormOneSeller,
    },
};
</script>
<style scoped>
.continaer {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.item{
    width: 1300px;  
}
</style>