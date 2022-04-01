<template>
    
    <div v-if="product">
        
        <div class="container my-5 py-5 border rounded shadow">

            <!--Section: Content-->
            <section class="text-center">

                <!-- Section heading -->
                <h1 class="mb-5">Product Details</h1>

                <div class="row">

                    <div class="col-lg-6 pt-lg-5">
                        <div class="product-image">
                            <img :src="product.imageURL" class="img-fluid">
                        </div>
                    </div>

                    <div class="col-lg-5 text-center text-lg-start">

                        <h2>{{ product.name }}</h2>
                        <span class="badge badge-danger shadow">bestseller</span>
                        <h4 class="text-danger mt-3">${{ product.price }}</h4>

                        <!--Accordion wrapper-->
                        <div class="accordion accordion-flush mt-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Description
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                                <div class="accordion-body">
                                    <small>{{ product.desc }}</small>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Details
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                                <div class="accordion-body">
                                    <small>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, magnam? Maxime,
                                    quibusdam veritatis at sed ut quaerat magni saepe, totam voluptatem, vero quasi 
                                    perspiciatis architecto. Aspernatur repellat corrupti error provident ullam dolorum
                                    optio esse itaque rerum natus nulla magni sapiente possimus consectetur porro
                                    cupiditate, dolor eius. Aliquam excepturi dolores veritatis?
                                    </small>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Shipping
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                                <div class="accordion-body">
                                    <small>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, magnam? Maxime,
                                    quibusdam veritatis at sed ut quaerat magni saepe, totam voluptatem, vero quasi 
                                    perspiciatis architecto. Aspernatur repellat corrupti error provident ullam dolorum
                                    optio esse itaque rerum natus nulla magni sapiente possimus consectetur porro
                                    cupiditate, dolor eius. Aliquam excepturi dolores veritatis?
                                    </small>
                                </div>
                                </div>
                            </div>
                        </div>
                        <!--/.Accordion wrapper-->

                        <!-- Add to Cart -->
                        <div class="mt-5">
                            <div class="row mt-3">
                                <div class="col-md-12 text-center text-md-start text-md-end">
                                    <button @click="addToCart({ product, quantity: qty })" class="btn btn-success">
                                        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- /.Add to Cart -->

                    </div>

                </div>

            </section>
            <!--Section: Content-->

        </div>

    </div>


</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            qty: 1
        }
    },
    methods: {
        ...mapActions(['fetchProductByIdFromMongoDB', 'addToCart'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.fetchProductByIdFromMongoDB(this.id)
        
    }
}
</script>

<style>

</style>