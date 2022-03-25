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
            
            <CartItem />
                     
        </table>

    </div>


</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
    components: { CartItem }    
}
</script>

<style scoped>
    
    
</style>