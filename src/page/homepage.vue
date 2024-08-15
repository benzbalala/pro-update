<template>
    <div class="container">
        <div class="item">
            <!-- <CategoryComponent></CategoryComponent> -->
            <!-- <productsrecommend></productsrecommend> -->
            <!-- <sellingLogin></sellingLogin> -->
            <startSelling></startSelling>
            <footerComponent></footerComponent>
            
        </div>

    </div>
</template>

<script>
//import productsrecommend from "../components/homepage/Product-reccomment.vue";
//import sellingLogin from "../components/selling/selling-login.vue";
import startSelling from "../components/selling/start-selling.vue";
export default {
    name: "App",
    components: {
        //productsrecommend,
        //sellingLogin,
        startSelling,
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