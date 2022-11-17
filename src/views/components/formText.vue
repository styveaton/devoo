<!-- <template>

  <div class="col-lg-4 col-sm-12 form-group  ">
    <label for="inputState">{{label}}</label>

    <input type="text" @keyup='verif( $event.target.value)' :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)' class="form-control" id="inputCity">
  </div>

</template><script>
// import {  toRef } from 'vue';
import { verifNumber } from '../../boot/verifNumber';

export default {
  name: "formText",
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue:String
  },
  
  emits: "update:modelValue",
  setup(props,{emit}) {
    // const emit = defineEmits()
    const verif = (data) => {
      data = verifNumber(data.toString())
      emit("update:modelValue", data);
      console.log('yyy', data)


    }
    return {
      
      verif
    };
  },
};
</script> -->
