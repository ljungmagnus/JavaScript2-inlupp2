<template>
    
    <!-- <div>
        <h1>CartView</h1>
    </div> -->
    <div class="table-responsive container my-5 py-3 border rounded shadow">
        
        <table class="table align-middle mb-0">
            <thead class="bg-custom">
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            
            <CartItem v-for="item in shoppingCart" :key="item.product._id" :item="item"/>
                     
        </table>
        <div class="mt-3 d-flex justify-content-end align-items-center">
            <div class="me-5">
                <h3 class="m-0">Total: ${{ cartTotalAmount }}</h3>
                
            </div>
            
            <button class="btn btn-primary">checkout basket  <i class="fas fa-angle-right right"></i></button>

        </div>

    </div>


</template>

<script>
import CartItem from '../components/CartItem.vue'
import { mapGetters } from 'vuex'
export default {
    components: { CartItem }, 
    computed: {
        ...mapGetters(['shoppingCart', 'cartTotalAmount'])
        
    },
        
}


</script>

<style scoped>
    
    
</style>