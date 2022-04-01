<template>
  
    <div class="col">
        <div class="card h-100">
            <img :src="product.imageURL" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.desc }}</p>
            </div>
            <div class="card-footer bg-light">
                <div class="d-flex justify-content-evenly">
                    <router-link :to="{name: 'productDetails', params: { id: product._id }}">
                        <button type="button" class="btn btn-info"><i class="fa-solid fa-circle-info"></i> details</button>
                    </router-link>
                    
                    <button @click="addToCart({ product, quantity: qty })" type="button" class="btn btn-success">
                        <i class="fa-solid fa-cart-plus"></i> add
                    </button>
                    
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ProductCard',
    props: ['product'],
    data() {
        return {
            qty: 1
        }
    },
    methods: {
        ...mapActions(['addToCart'])
    }
}
</script>

<style>

</style>