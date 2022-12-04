<template>
<div class="container">
  <div class="row d-flex align-content-center justify-content-center">
    <p class="text-center text-bg-info p-3 d-sm-none d-md-block">Meru university of Science And Technology Transforming lives</p>
    <div class="col col-sm-12 col-md-6 col-lg-6">
      <p class="text-light bg-danger mt-1 p-2 justify-content-center">Enter Registration Details</p>
      Name:
      <input type="text" name="" class="form-control" id="" placeholder="Enter name">
      Email:
      <input type="email" name="" id="" class="form-control" placeholder="Enter name" required>
      <button class="btn btn-outline-info my-2 form-control">Register</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Registrationn"
}
</script>

<style scoped>
.row{
  min-height:50vh;
}
.shoes{
  background-color: grey;
  min-height: 25vh;
  max-height:50vh;
  overflow-y:scroll;

}
</style>