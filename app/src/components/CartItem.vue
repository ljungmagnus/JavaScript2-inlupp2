<template>
  
    <tbody>
        <tr>
            <th scope="row">
                <div class="image-container">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" class="img-fluid">
                </div>
            </th>
            <td>
                <h5 class="fw-bold m-0">iPad</h5>
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
    </tbody>
    
</template>

<script>
export default {
    name: 'CartItem',
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