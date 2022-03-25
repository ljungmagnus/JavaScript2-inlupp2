<template>
  
  <header>
      <!-- Background image -->
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('https://mdbootstrap.com/img/Photos/Others/ecommerce3.jpg');
        height: 100vh;
      "
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Heading</h1>
            <h4 class="mb-3">Subheading</h4>
            <router-link class="btn btn-outline-light btn-lg" to="/products" role="button">Browse Products</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
  


</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
