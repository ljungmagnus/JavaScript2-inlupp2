<template>
  
    <div class="col">
        <div class="card h-100">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </p>
            </div>
            <div class="card-footer bg-light">
                <div class="d-flex justify-content-evenly">
                    <router-link to="/products/details/id">
                        <button type="button" class="btn btn-info"><i class="fa-solid fa-circle-info"></i> details</button>
                    </router-link>
                    <button type="button" class="btn btn-success"><i class="fa-solid fa-cart-plus"></i> add</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ProductCard',
}
</script>

<style>

</style>