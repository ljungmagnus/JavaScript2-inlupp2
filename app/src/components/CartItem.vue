<template>
  
    <tbody>
        <tr>
            <th scope="row">
                <div class="image-container">
                    <img :src="item.product.imageURL" class="img-fluid">
                </div>
            </th>
            <td>
                <h5 class="fw-bold m-0">{{ item.product.name }}</h5>
            </td>
            <td>
                <p class="fw-normal m-0">${{ item.product.price }}</p>
            </td>
            <td>
                <div class="input-container">
                    <input type="number" min="1" class="form-control" v-model="itemQuantity" @change="handleChange">
                    
                </div>
            </td>
            <td>
                <!-- <p class="fw-bold m-0">{{ item.quantity }} x ${{ item.product.price }}</p> -->
                <p class="fw-bold m-0">${{ cartItemTotalAmount }}</p>
            </td>
            <td>
                <button @click="removeItemFromCart(item.product)" type="button" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Remove item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    </tbody>
    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CartItem',
    props: ['item'],
    data() {
        return {
            itemQuantity: 0
        }
    },
    computed: {
        
        cartItemTotalAmount() {
            return this.item.product.price * this.item.quantity
        }
    },
    methods: {
        ...mapActions(['changeQuantity', 'removeItemFromCart']),
        handleChange() {
            // console.log(this.itemQuantity, this.item)
            if(this.itemQuantity > 0) {
                this.changeQuantity({ item: this.item, newQuantity: this.itemQuantity})
            } 
            
        }
    },
    created() {
        this.itemQuantity = this.item.quantity
    }
    
}

</script>

<style scoped>
    .image-container {
        max-width: 100px;
        min-width: 50px;
    }
    .input-container {
        width: 70px;
    }
</style>