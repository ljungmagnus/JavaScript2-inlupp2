<template>
  
    <div class="container mt-5">

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">

            <ProductCard />
            <ProductCard />
            <ProductCard />
           
            
            
            
        </div>

    </div>

</template>

<script>
import { mapActions } from 'vuex'
import ProductCard from '../components/ProductCard.vue'
export default {
    components: { ProductCard },
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