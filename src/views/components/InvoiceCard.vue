<template>
  <div class="card pb-4">
    <div class=" pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0 font-weight-bolder">FACTURE</h6>
        </div>
        <div class="col-6 text-end">
          <argon-button color="success" size="sm" @click="generateReport()" variant="outline"> <i
              class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
          </argon-button>
        </div>
      </div>
    </div>
    <div class="  d-flex justify-content-center pt-5" v-if="loading0">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>
    <div class="card-body p-3 pb-0 mb-0" v-else>
      <ul class="list-group">
        <li v-for="facture in lFacture" :key="facture.id"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bolder text-sm ">{{ facture.date }}</h6>

          </div>
          <div class="d-flex align-items-center text-sm">
            XAF {{ facture.montant }}


          </div>

        </li>

      </ul>
    </div>
    <div ref="content" v-show="false">
      <div class="container d-flex">
        <div class="d-flex justify-content-center">
          Facture
        </div>
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Motif</th>
              <th scope="col">Montant</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="facture in lFacture" :key="facture.id">
              <th scope="col" class="col">{{ facture.motif }}</th>
              <th scope="col" class="col">{{ facture.montant }}</th>
              <th scope="col" class="col">{{ facture.date }}</th>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </div>

</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
// import { formatDate } from "../../boot/formatDate";
import { onMounted, ref } from '@vue/runtime-core';
import jsPDF from 'jspdf';

import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "invoice-card",
  components: {
    ArgonButton
  }, methods: {
    /*
        Generate Report using refs and calling the
        refs function generatePdf()
    */
    //  generatePdf(){
    //      var doc = new jsPDF('p', 'pt', 'A4');
    //        margins = {
    //           top: 80,
    //           bottom: 60,
    //           left: 40,
    //           width: 522
    //       };

    //     doc.fromHTML(this.$refs.testHtml, margins.left, margins.top,{
    //       'width' : margins.width
    //     });

    //     doc.save('test.pdf');
    //   }
    generateReport() {
      var doc = new jsPDF('p', 'pt', 'A4');
      let margins = {
        top: 80,
        bottom: 60,
        left: 20,
        width: 522
      };
      let data = this.$refs.content.innerHTML;

      doc.html(data, {
        'width': margins.width,
        'margin-top': margins.top,
        'margin-left': margins.left,
 
        callback: function (doc) {
          doc.save('Facture.pdf')
        }


      });
    }
  }, setup() {
    let loading0 = ref(true);
    let lFacture = ref([])
    let toast = createToaster();
    onMounted(async () => {

      await getFacture();


    })
    async function getFacture() {
      const response = await new RequestApi().getListFactureUser(2);
      if (response.status) {
        lFacture.value = response.data
        //   for (let i = 0; i < response.data.length; i++) {

        //     const Facture = response.data[i];
        //     lFacture.value.push({
        //       factureId: Facture['id'], 
        //       dateCreate: formatDate(Facture['date'], 1),
        //       montant: Facture['montant']

        //     })

        //   }
        loading0.value = !loading0.value;


      } else {
        loading0.value = !loading0.value;

        // eslint-disable-next-line require-atomic-updates
        // loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }


    }


    return {
      lFacture, loading0

    };
  },
};
</script>
