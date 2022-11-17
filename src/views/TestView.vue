<template>
  <div class="py-4 container-fluid">
    <div class="col-3  mt-3 container0">



      <img src="http://127.0.0.1:8000/images/theme/infinity.png" class=" theme img-fluid" alt="...">

      <i class="far fa-check-circle  centered"></i>

    </div>

  </div>
</template>
<style>
.container0 {
  position: relative;
  text-align: center;
  color: white;
  opacity: 0.3;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  color: white;
  opacity: 1;
  left: 50%;
  font-size: 100px;
  transform: translate(-50%, -50%);
}
</style>
<script>
export default {
  name: "NouvelleVitrine",
  components: {
    // Datepicker 
    // ArgonInput,

  },


  setup() {

  },
}
</script>
