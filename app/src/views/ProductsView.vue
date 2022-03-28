<template>
  
    <div class="container mt-5">

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
            <ProductCard v-for="product in products" :key="product._id" :product="product" />
        </div>

    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard.vue'
export default {
    components: { ProductCard },
    computed: {
        ...mapGetters(['products'])
    },
    methods: {
        ...mapActions(['fetchProductsFromMongoDB'])    
    },
    created() {
        this.fetchProductsFromMongoDB()
    }
}
</script>

<style>

</style>