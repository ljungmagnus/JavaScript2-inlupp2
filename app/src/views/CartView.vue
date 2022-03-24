<template>
    
    <!-- <div>
        <h1>CartView</h1>
    </div> -->
    <div class="table-responsive container my-5 border rounded shadow">
        
        <table class="table align-middle">
            <thead class="bg-light">
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- First row -->
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="image-container">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" class="img-fluid">
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-bold m-0">iPad</p>
                    </td>
                    <td>
                        <p class="fw-normal m-0">849 SEK</p>
                    </td>
                    <td>
                        <div class="input-container">
                            <input type="number" value="1" class="form-control">
                        </div>
                    </td>
                    <td>
                        <p class="fw-bold m-0"> 849 SEK</p>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
                <!-- First row -->

            </tbody>


        </table>


    </div>

    


</template>

<script>
export default {

}
</script>

<style scoped>
    .image-container {
        max-width: 200px;
        min-width: 100px;
    }
    .input-container {
        width: 70px;
    }

</style>