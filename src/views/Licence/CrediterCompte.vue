<!-- eslint-disable require-atomic-updates -->
<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark">Approvisionnez un compte</h4>
              <p class="card-text border-bottom">Crediter le compte d'un client.</p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group">

                  <label for="inputCity">Beneficiere</label>
                  <!-- <select id="inputState" v-model='beneficiaireSelect' class="form-control form-select">
              <option disabled selected default>
                Selectionner l'utilisateur
              </option>     <option v-for="user in optionsUser" :value="user" :key="user.id">
                      {{ user.nom }}
                    </option>
                  </select> -->
                  <SelectComp v-model="beneficiaireSelect" type="1" :data="optionsUser"
                    placeholder="Selectionner l'utilisateur" />

                </div>

                <div class="col-lg-4 col-sm-12 form-group">

                  <label for="inputCity">Service</label>
                  <!-- <select id="inputState" v-model='serviceSelect' class="form-control form-select">
                <option disabled selected default>
                  Selectionner le service
                </option>   <option v-for="service in optionsService" :value="service" :key="service.id">
                      {{ service.label }}
                    </option>
                  </select> -->
                  <SelectComp v-model="serviceSelect" :data="optionsService" placeholder="                  Selectionner le service
" />

                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="card w-100 mb-10" v-show="serviceSelect.id == 1">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark">Completez la procedure</h4>
              <p class="card-text border-bottom">Renseignez la quantite de SMS et le pays.</p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Pays</label>

                  <select id="inputState" v-model="paysR" class="form-control form-select">

                    <option disabled selected default>
                      Selectionner le pays
                    </option>
                    <option v-for="option in lPays" :value="option" :key="option.value">
                      {{ option.nom }}
                    </option>
                  </select>

                  <!-- <SelectComp v-model="paysR" type="1" :data="lPays" placeholder="  Selectionner le pays" /> -->

                </div>
                <form-number class="col-lg-4 col-sm-12 form-group" label=" Quantite" v-model='montant'></form-number>


              </div>

              <div class="btn btn-primary  "
                v-show="(paysR != null && beneficiaireSelect.id != 0 && montant >= 10 && montant.toString().split('')[0] != 0) ? true : false"
                @click="transactionSms">Crediter</div>

            </div>

          </div>
        </div>

        <div class="card w-100 mb-10" v-show="serviceSelect.id == 2">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark">Completez la procedure</h4>
              <p class="card-text border-bottom">Renseignez le montant a transferer.</p>
              <div class="row">

                <form-number class="col-lg-4 col-sm-12 form-group" label=" Montant" v-model='montant'></form-number>


              </div>

              <div class="btn btn-primary  "
                v-show="(beneficiaireSelect.id != 0 && montant >= 500 && montant.toString().split('')[0] != 0) ? true : false"
                @click="transactionSms">Recharger</div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <vue-final-modal v-model="achat" style="" classes="modal-container-paiement   "
      content-class="modal-content-paiement">
      <h4 class="card-title font-weight-bolder dark">Finaliser la transaction</h4>
      <p class="card-text border-bottom">Crediter le compte d'un client.</p>
      <h6 class="card-title font-weight-bolder dark">Envoie de {{ montant }} {{ (serviceSelect.id == 1) ? "sms" :
      "credit"
      }} au compte de Mr
        {{ beneficiaireSelect.nom }}
      </h6>
      <h6 class="card-title mt-3 dark">Mot de passe</h6>

      <argon-input type="password" v-model="password" placeholder="password" aria-label="Name" />

      <CustomButton :title='"Termier la Transaction"' :loading='loading' @update:loading="loading = $event"
        @click='transfert' :classe="'btn btn-primary '" />


    </vue-final-modal>
  </div>
</template>

<style scoped>
::v-deep .modal-container-paiement {
  display: flex;
  justify-content: center;


  align-items: center;
  width: 80%;
  margin-left: 10%
}

::v-deep .modal-content-paiement {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 95%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

}

#menu {
  background-color: rgb(236, 243, 236);
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px
}

/* article {
      width: 20%;
     padding: 0px;
      margin:0px; 
      border:1px solid rgb(204, 205, 206);
      float: left;
    }
   */

#title {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid black;
}

.scales {
  padding-right: 5px;
}

input[type=checkbox] {
  position: relative;
  cursor: pointer;
}

input[type=checkbox]:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: 2px solid #0C6DE4;
  border-radius: 3px;
  background-color: white;
}

input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid rgb(2, 133, 138);
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}

li:hover {
  cursor: pointer;
}

li:active {
  color: rgb(44, 85, 208);
}

ul {
  list-style-type: "???";
}
</style>
<script  >


import ArgonInput from "../../components/ArgonInput.vue";
import { createToaster } from "@meforma/vue-toaster";

import { onMounted, ref } from '@vue/runtime-core';
import formNumber from '../components/formNumber.vue';
import { RequestApi } from '../../boot/RequestApi';
import { VueFinalModal } from 'vue-final-modal'
import CustomButton from '../../components/CustomButton.vue';
import VueCookies from 'vue-cookies'
import SelectComp from '../../components/SelectComp.vue';

// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "EditProfileUser",
  components: {

    SelectComp,

    formNumber, CustomButton, VueFinalModal, ArgonInput

  },
  beforeRouteEnter(to, from, next) {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      console.log(
        VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null
      );
      console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
      // await refreshAuthenticated();
      next();
    } else {
      console.log('llllllllll');
      next({ name: 'Signin' });

    }
  },

  setup() {
    let lPays = ref([])
    let paysR = ref()
    let achat = ref(false);
    let montant = ref()
    let loading = ref(false);
    let password = ref('')
    const beneficiaireSelect = ref({ id: 0, label: 'Aucun' });

    const optionsUser = ref([


    ]);
    const serviceSelect = ref({ id: 0, label: 'Aucun' });
    const optionsService = ref([
      { id: 1, label: 'Bulk Sms' }, { id: 2, label: 'Compte Local' }

    ]);
    let toast = createToaster();
    onMounted(async () => {

      await getPays();

      await getChildren();

    });

    async function getPays() {
      const response = await new RequestApi().getPaysAction();
      if (response.status) {
        lPays.value = response.data
      }


    }
    function transactionSms() {
      console.log(beneficiaireSelect.value.id);
      console.log(montant.value);
      if (beneficiaireSelect.value.id != 0 && montant.value != 0) {


        achat.value = !achat.value
      }
      else {
        toast.error(`Veuillez remplir correctement tout les champs`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    async function getChildren() {
      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {

        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          console.log(element);
          optionsUser.value.push({

            id: element['id'],


            nom: element['name'],
          })

        } console.log(optionsUser.value)
      }
      else {
        //
      }
    }

    const transfert = async () => {

      loading.value = !loading.value;
      console.log(paysR);
      const validate = await new RequestApi().logInValidate(password.value);
      if (validate.status) {
        if (serviceSelect.value.id == 1) {

          let data = {
            typeTransfert: serviceSelect.value.id,
            emetteurId:
              VueCookies.get('id'),
            clientId: VueCookies.get('id'),
            typeManiPulation: 1,
            recepteurId: beneficiaireSelect.value.id,
            routeId: paysR.value.routes[0].id,
            quantite: montant.value
            // modePaiement: paiementSelect.value.id
          };
          console.log(data)


          const response = await new RequestApi().crediterCompteAction(data);

          console.log('response.status', response.status);
          if (response.status) {

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;


            // eslint-disable-next-line require-atomic-updates
            montant.value = ' 0';

            toast.success(`Transfert d'sms effectuee avec success`, {
              // override the global option
              position: "bottom"
            });

          } else {

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;
            if (response.aff) {
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }
          }
        }
        else {
          let data = {
            typeTransfert: serviceSelect.value.id,
            emetteurId:
              VueCookies.get('id'),
            recepteurId: beneficiaireSelect.value.id,

            clientId: VueCookies.get('id'),
            quantite: montant.value
            // modePaiement: paiementSelect.value.id
          };
          console.log(data)


          const response = await new RequestApi().crediterCompteAction(data);

          console.log('response.status', response.status);
          if (response.status) {

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;


            // eslint-disable-next-line require-atomic-updates
            montant.value = ' 0';

            toast.success(`Transfert de fonds effectuee avec success`, {
              // override the global option
              position: "bottom"
            });

          } else {

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;
            if (response.aff) {
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }
          }
        }
      }
      else {
        // eslint-disable-next-line require-atomic-updates
        loading.value = false;

        toast.error(`Mot de passe incorrect Veuillez le verifier`, {
          // override the global option
          position: "bottom"
        });
      }
    };
    return {
      open, lPays, achat, paysR, password, montant, beneficiaireSelect, optionsUser, optionsService, serviceSelect, transactionSms, loading, transfert

    };
  },
};
</script>
