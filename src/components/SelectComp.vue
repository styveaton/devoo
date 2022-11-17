<template>

  <select :id="'mySelect' + placeholder" @change="as" @input='$emit("update:modelValue", $event.target.value)'
    class="form-control form-select">


    <option disabled default value=0 selected>
      {{ placeholder }}
    </option>
    <option v-for="da in data" v-bind:value="da.id" :key="da.id">
      {{ type == "0" ? da.label : da.nom }}
    </option>
  </select>


</template>

<script>
export default {
  name: "select-comp",
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '0'
    },
    data: {
      type: Array[{ id: 0, label: '' }],
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    modelValue: {

      type: Object,

    }
  },

  setup(props, { emit }) {
    // const emit = defineEmits()


    const as = () => {
      let idt = document.getElementById('mySelect' + props.placeholder).value
      console.log('change');
      console.log(idt);
      emit("update:modelValue", { 'id': isNaN(parseInt(idt)) ? idt : parseInt(idt), 'label': 'label' });
      console.log(props.modelValue);
    }
    const sd = () => {
      console.log('sdd')
    }
    return {
      sd,
      as
    };
  },
};
</script>
