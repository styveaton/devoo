<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <main>

    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
            <div class="card card-plain">
              <div class="pb-0 card-header text-start">
                <h4 class="font-weight-bolder">Sign In</h4>
                <p class="mb-0">Enter your phone and password to sign in</p>
              </div>
              <div class="card-body">
                <!-- <form action="" method="get"> -->
                  <div class="mb-3">
                    <argon-input type="phone" v-model='number' placeholder="phone" name="phone" size="lg" />
                  </div>
                  <div class="mb-3">
                    <argon-input type="password" placeholder="Password" v-model='password' name="password" size="lg" />
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" v-model="confiance" type="checkbox" />
                    <label class="form-check-label">
                      <slot />Faire Confiance a cette appareil
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" v-model="remember" type="checkbox" />
                    <label class="form-check-label">
                      <slot />Remember me
                    </label>
                  </div>
                  <div class="text-center">


                    <CustomButton :title='"  Sign in"' :loading='loading' @update:loading="loading = $event"
                      @click='onSubmit' :classe="'btn btn-primary w-100 pt-2 mt-3 pb-2 ps-5 pe-5'" color="success"
                      fullWidth size="lg" />

                  </div>
                <!-- </form> -->
              </div>
              <div class="px-1 pt-0 text-center card-footer px-lg-2">
                <p class="mx-auto mb-4 text-sm">
                  Don't have an account ?
                  <router-link class="  link-primary" to="/signup">

                    Sign Up
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <div
            class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
            <div
              class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
              style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;">
              <span class="mask bg-gradient-success opacity-6"></span>
              <h4 class="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
              <p class="text-white position-relative">The more effortless the writing looks, the more effort the
                writer actually put into the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
 
 
<script>
import { createToaster } from "@meforma/vue-toaster";

import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonSwitch from "@/components/ArgonSwitch.vue";
import jwt_decode from 'jwt-decode';
import { FormatData } from '../boot/FormatData';
import { api } from '../boot/axios';
// import VueMeta from 'vue-meta'
import VueCookies from 'vue-cookies'
import { ref } from '@vue/reactivity';
import router from '../router';
import CustomButton from '../components/CustomButton.vue';

const body = document.getElementsByTagName("body")[0];
export default {
  name: "signin",
  components: {
    Navbar,
    ArgonInput,
    // ArgonSwitch,
    CustomButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js')
    document.head.appendChild(externalScript)

    let externalScript1 = document.createElement('script')
    externalScript1.setAttribute('src', 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js')
    document.head.appendChild(externalScript1)

    let externalScript2 = document.createElement('script')
    externalScript2.setAttribute('src', 'js/jquery-2.1.1.js')
    document.head.appendChild(externalScript2)

    let externalScript3 = document.createElement('script')
    externalScript3.setAttribute('src', 'js/swiper.jquery.min.js')
    document.head.appendChild(externalScript3)

    let externalScript4 = document.createElement('script')
    externalScript4.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript4)

    let externalScript5 = document.createElement('script')
    externalScript5.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript5)

    let externalScript6 = document.createElement('script')
    externalScript6.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript6)

  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");


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
      next({ name: 'Dashboard' });
    } else {
      console.log('llllllllll');

      next();
    }
  },

  setup() {

    let number = ref('')
    let password = ref('')
    let loading = ref(false);
    let remember = ref(false);
    let confiance = ref(false);
    let toast = createToaster();
    let decode = ref([])
    const verif = (data) => {

      number.value = new FormatData().verifNumber(data)



    }
    const onSubmit = async () => {
      console.log(Number.isInteger(parseInt(number.value)))
      if (new FormatData().verifNumber2(number.value)) {



        console.log('sdddsd');
        api.defaults.headers.common['Authorization'] = null;

        loading.value = true;
        console.log('sdddsd', loading.value);

        await api
          .post('/api/auth', {

            phone: number.value,

            password: password.value
          })
          .then((response) => {
            console.log(String(response.data.token))
            api.defaults.headers.common['Authorization'] =
              'Bearer ' + String(response.data.token);

            VueCookies.set('token', String(response.data.token));
            VueCookies.set('refreshToken', String(response.data.refreshToken));

            decode.value = jwt_decode(String(response.data.token));

            VueCookies.set('nom', String(decode.value.nom));
            VueCookies.set('prenom', String(decode.value.prenom));
            VueCookies.set('phone', String(decode.value.phone));
            VueCookies.set('id', parseInt(String(decode.value.id)));
            // VueCookies.set('idRole', parseInt(String(decode.value.idRole)));
            VueCookies.set('keySecret', String(decode.value.keySecret));
            VueCookies.set('fonctions', (decode.value.fonctions));


            if (parseInt(String(decode.value.idRole)) == '1') {
              VueCookies.set('admin', '1');
            } else {
              VueCookies.set('admin', '0');
            }
            let aujourdhui = new Date();

            loading.value = !loading.value;
            VueCookies.set('date', aujourdhui.toLocaleString().split(',')[0].split('/')[0]);

            VueCookies.set('remember', remember.value ? 1 : 0);
            VueCookies.set('confiance', confiance.value ? 1 : 0);
            router.push
              ({ name: 'Dashboard' });

            console.log('99')
            // VueCookies.set('decode', this.decode);
            console.log(VueCookies.get('nom'))
            console.log('id*********************', VueCookies.get('id'));
          })
          .catch(() => {
            toast.error(`Identifiants incorrect`, {
              // override the global option
              position: "bottom"
            });
            loading.value = !loading.value;
            console.log('ewwewe')
          });
      }
      else {

        console.log('modifi', number.value, new FormatData().verifNumber2(number.value));

        toast.error(`Numero incorrect`, {
          // override the global option
          position: "bottom"
        });
      }
    }

    return {
      verif, onSubmit, number, password, loading, confiance, remember

    };
  }, data() {

    return {


    };
  },
  methods: {

  },
};
</script>
