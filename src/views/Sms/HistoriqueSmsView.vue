<template>

    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12 ">
                <div class="card  w-100   mb-4 ">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark">Historique de vos sms </h4>
                            <p class="card-text border-bottom"></p>
                            <div class="row">

                                <div class="  d-flex justify-content-center pt-2" v-if="loading">

                                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>

                                <div class="table-responsive" v-else>
                                    <div v-if="message.length != 0" class="row border-bottom pb-1">
                                        <div class="col ms-1">

                                            <h3 class="mb-1  font-weight-bolder text-dark">{{ contactSelect }}
                                                <p class=" ">{{ message }} </p>
                                            </h3>
                                        </div>


                                    </div>
                                    <table class="table scroll ">
                                        <tbody>
                                            <tr v-for="sms in listSms" :key="sms.message" class="mouse"
                                                @click="message = sms.message; contactSelect = sms.contact ">
                                                <td class="">


                                                    <div class="ml-2">
                                                        <p class="mb-0 ml-2 text-xs ">Expediteur:</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark">{{
                                                                sms.proprietaire
                                                        }}</h6>
                                                    </div>

                                                </td>
                                                <td class="">


                                                    <div class="ml-2">
                                                        <p class="mb-0 ml-2 text-xs ">Sender:</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark">{{
                                                                sms.senderId
                                                        }}</h6>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">Destinataire:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                sms.contact
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left  col2 ">
                                                        <p class="mb-0 text-xs ">Messages:</p>
                                                        <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{
                                                                sms.message
                                                        }}</h6>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">date:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{ sms.date
                                                        }} </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">Etat:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                sms.status
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>
 
<style scoped>
.mouse:hover {
    cursor: pointer;
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.message {
    /* display: inline-block;
    max-width: 30%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis; */
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';

import { createToaster } from "@meforma/vue-toaster";
export default {
    name: "NouveauSms",
    components: {

    },
    methods: {

    },

    setup() {
        onMounted(async () => {
            getListSmsUser();

        });
        let expliqSender = ref(true)
        let listSms = ref([]);
        let loading = ref(true);
        let contactSelect = ref('');
        let message = ref('');
        let toast = createToaster();
        async function getListSmsUser() {


            const response = await new RequestApi().getSmsAction();


            if (response.status) {


                listSms.value = response.data
                loading.value = false;
                getListSmsUser();
            }
            else {
                loading.value = false

                toast.error(`UNe erreur est survenue.`, {
                    // override the global option
                    position: "bottom"
                });
            }


        }
        return {
            listSms, loading, expliqSender, contactSelect, message
        };
    },
}
</script>
