<template>

  <div class=" form-group  ">
    <label for="inputState">{{label}}</label>

    <input type="text" @keyup='verif( $event.target.value)' @change='verif( $event.target.value)' @keydown='verif( $event.target.value)' :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)' class="form-control"  >
  </div>
</template>

<script>
// import {  toRef } from 'vue';
import  {FormatData} from '../../boot/FormatData';

export default {
  name: "formNumber",
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue:String
  },
   
  setup(props,{emit}) {
    // const emit = defineEmits()
    const verif = (data) => {
      data = new FormatData().verifNumber( new FormatData().verifNumber(data))
      emit("update:modelValue", data);
      console.log('yyy', data)


    }
    return {
      
      verif
    };
  },
};
</script>
