import { createRouter, createWebHistory } from "vue-router"; 
 
import store from "../store";
import { mapMutations, mapActions } from "vuex";
import VueCookies from 'vue-cookies'
 
 let routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
   },
  
  {
    path: "/stop",
    name: "stop",
      component: ()=>import('../views/ExceptionView.vue'),

  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: ()=>import('../views/Dashboard.vue'),
  },
  {
    path: "/tables",
    name: "Tables", 
    component: ()=>import('../views/Tables.vue'),
     
  },
  {
    path: "/billing",
    name: "Billing",
    component: ()=>import('../views/Billing.vue'),

  }, 
  {
    path: "/rtl-page",
    name: "RTL",
    component: ()=>import('../views/Rtl.vue'),

  },
  {
    path: "/signin",
    name: "Signin",
    component: ()=>import('../views/Signin.vue'),

  },
  {
    path: "/Signup",
    name: "Signup",
    component: ()=>import('../views/Signup.vue'),

  },
  {
    path: "/createProfile",
    name: "createProfile",
    component: ()=>import('../views/Roles/NouveauprofilUsers.vue'),

  },
  {
    path: "/ListProfilUsers",
    name: "ListProfilUsers",
    component: ()=>import('../views/Roles/ListprofilsUsers.vue'),

  },
  {
    path: "/EditProfileUser"/* /:name */,
    
    name: "EditProfileUser",
    component: ()=>import('../views/Roles/EditProfileUser.vue'),

  },
  
  {
    path: "/Pub",
    
    name: "Pub",
     
    
  },
   {
    path: "/Pub/DashBoard",
    
    name: "DashBoard",    component: ()=>import('../views/Pub/DashBoardPub.vue'),

  },
   
   {
    path: "/Pub/ListPub",
    
     name: "ListPub",
     component: () => import('../views/Pub/ListPub.vue'),

  },  {
    path: "/Pub/infoPub",
    
     name: "infoPub",
     component: () => import('../views/Pub/infoPub.vue'),

  },
   


  {

    path: "/Configuration",
    
    name: "Configuration",
     
    
  },{
    path: "/Configuration/commission",
    
    name: "Commission",
    component: ()=>import('../views/Configuration/Commission.vue'),
    },
    {
    path: "/Configuration/exception",
    
    name: "Exception",
    component: ()=>import('../views/Configuration/Exception.vue'),
  },
  {
    path: "/Configuration/reduction",
    
    name: "Reduction",
        component: ()=>import('../views/Configuration/Reduction.vue'),
  },







  {

    path: "/Licence",
    
    name: "Licence",
     
    
   },
   {
    path: "/Licence/Achat",
    
    name: "Achat",
    component: ()=>import('../views/Licence/AcheterLicence.vue'),
    },
      
      {
    path: "/Licence/Crediter",
    
    name: "Crediter_un_compte",
    component: ()=>import('../views/Licence/CrediterCompte.vue'),
  },{
    path: "/Licence/Debiter",
    
    name: "Debiter_un_compte",
        component: ()=>import('../views/Licence/DebiterCompte.vue'),

  },
{
    path: "/Licence/ListLicence",
    
    name: "ListLicence",
    component: ()=>import('../views/Licence/ListLicence.vue'),
    },



  {
    path: "/Contact",
    
    name: "Contact",
    component: () => import('../views/Contact/NouveauContact.vue'),
  },{
    path: "/Contact/Nouveau",
    
    name: "NouveauContact",
     component: ()=>import('../views/Contact/NouveauContact.vue'),
  },
    {
    path: "/Contact/Groupe",
    
    name: "Groupe Contact",
     component: ()=>import('../views/Contact/Groupe.vue'),
  },
     {
    path: "/Contact/import",
    
    name: "import contact",
     component: ()=>import('../views/Contact/Import.vue'),
  },
    
    {
    path: "/Contact/ListContact",
    
    name: "Liste Contact",
     component: ()=>import('../views/Contact/ListContact.vue'),
  },




  {
    path: "/Client",
    
    name: "Client",
    component: () => import('../views/Client/NouveauClient.vue'),
  },{
    path: "/Client/NouveauClient",
    
    name: "NouveauClient",
     component: ()=>import('../views/Client/NouveauClient.vue'),
  },
    
  {
    path: "/Client/profile",
    name: "Profile",
       component: ()=>import('../views/Client/Profile.vue'),

  },
      
      {
    path: "/Client/ListClient",
    
    name: "ListClient",
    component: ()=>import('../views/Client/ListClients.vue'),
  },
  




  {
    path: "/Wallet",
    
    name: "Wallet",
    component: () => import('../views/Wallet/DashBoardWallet.vue'),
    
  },{
    path: "/Wallet/DashBoardWallet",
    
    name: "DashBoardWallet",
        component: ()=>import('../views/Wallet/DashBoardWallet.vue'),

    },
    {
    path: "/Wallet/RechargeWallet",
    
    name: "RechargeWallet",
        component: ()=>import('../views/Wallet/RechargeWallet.vue'),

    },{
    path: "/Wallet/RetraitWallet",
    
    name: "RetraitWallet",
        component: ()=>import('../views/Wallet/RetraitWallet.vue'),

   
  },{
    path: "/Wallet/RechargeSysteme",
    
    name: "RechargeSysteme",
        component: ()=>import('../views/Wallet/RechargeSysteme.vue'),

   
  },

  
  {
    path: "/Projet",
    
    name: "Projet",
    component: () => import('../views/Projet/NouveauProjet.vue'),
  },{
    path: "/Projet/NouveauProjet",
    
    name: "NouveauProjet",
     component: ()=>import('../views/Projet/NouveauProjet.vue'),
    },
      
      {
    path: "/Projet/ListProjets",
    
    name: "ListProjet",
    component: ()=>import('../views/Projet/ListProjets.vue'),
  },



  {
    path: "/Evenements",
    
    name: "Evenements",
    component: () => import('../views/Evenements/notification.vue'),
  },{
    path: "/Evenements/notifications",
    
    name: "notifications",
     component: ()=>import('../views/Evenements/notification.vue'),
    },
      
      {
    path: "/Evenements/calendrier",
    
    name: "calendrier",
    component: ()=>import('../views/Evenements/calendrier.vue'),
  },  {
    path: "/Evenements/liste-evenements",
    
    name: "liste-evenements",
    component: ()=>import('../views/Evenements/ListEvenements.vue'),
  },

  

  {
    path: "/Sms/Nouveau",
    name: "Sms",
        component: ()=>import('../views/Sms/SmsIndividuel.vue'),

  },
   {
    path: "/Sms/message-groupe",
    
    name: "Groupe",
    component: ()=>import('../views/Sms/SmsGroupe.vue'),
  }, {
    path: "/Sms/message-personnalise",
    
    name: "Personnalise",
    component: ()=>import('../views/Sms/SmsPersonnalise.vue'),
  },
  {
    path: "/Sms/Examiner",
    name: "ListSmsSenderId",
        component: ()=>import('../views/Sms/Examiner.vue'),

  },
  {
    path: "/Sms/historique",
    name: "Historique sms",
        component: ()=>import('../views/Sms/HistoriqueSmsView.vue'),

  },
  

  {
    path: "/Vitrine/Nouvelle",
    name: "Vitrine-nouvelle",
       component: ()=>import('../views/Vitrine/NouvelleVitrine.vue'),

  },
   {
    path: "/Vitrine/list-vitrine",
    
    name: "list-vitrine",
    component: ()=>import('../views/Vitrine/ListVitrine.vue'),
  }

,  {
    path: "/Vitrine/template-vitrine",
    
    name: "template-vitrine",
    component: ()=>import('../views/Vitrine/TemplateVitrine.vue'),
  }

, 
  {
    path: '/rememberpage',
    name: 'RememberPage',
    component: () => import('../views/rememberPage.vue'),
  },
 
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue'),
  },
 
  {
    path: '/publicite/:key',
    name: 'publicite',
    component: () => import('../views/Pub/pubView.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue'),
  },
  // {
  //   path: '/sitemap.xml',
  //   component: () => import('../../sitemap.xml'),
  // },
];
const router = createRouter({
    base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
 routes,
  linkActiveClass: "active",
  
});
router.beforeEach((to) => {
  
      mapMutations(["getLoading"]),

        mapActions(["updateLoading"])
      store.commit('getLoading', true)
   
  console.log('#############################',to.path)
    let createUser =  (VueCookies.get('fonctions') ) ? VueCookies.get('fonctions').split(',').some(value => value == '1') ? true : false  : false ;
    let readUser =  (VueCookies.get('fonctions') ) ? (VueCookies.get('fonctions').split(',')).some(value => value == '2') ? true : false   : false;
    let updateUser =  (VueCookies.get('fonctions') ) ? (VueCookies.get('fonctions').split(',')).some(value => value == '3') ? true : false   : false;
   

    let buyLicence = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '5') ? true : false : false;
    let listLicence = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '6') ? true : false : false;
    let crediter = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '7') ? true : false : false;
    let debiter = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '8') ? true : false : false;


    let dashBoardWallet = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '9') ? true : false : false;
    let rechargeWallet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '10') ? true : false : false;
    let retraitWallet = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '11') ? true : false : false;


    let createProjet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '12') ? true : false : false;
    let manageProjet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '13') ? true : false : false;


    let createProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '14') ? true : false : false;
    let listProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;
    let manageProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;


    let addContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '17') ? true : false : false;
    let groupContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '18') ? true : false : false;
    let listContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '19') ? true : false : false;
    

    let notification = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '21') ? true : false : false;
    let calendrier = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '22') ? true : false : false;



    let addSms = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '23') ? true : false : false;
    let readSms = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '24') ? true : false : false;



    let addVitrine = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '25') ? true : false : false;
    let readVitrine = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '26') ? true : false : false;
  if (to.name == 'Signin') {
     mapMutations(["getLoading"]),

      mapActions(["updateLoading"])
    store.commit('getLoading', false)
  } else {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      
  
      if (to.name == 'NouveauClient') {
        if (createUser) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'ListClient') {
        if (readUser) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
  
      else if (to.name == 'Profile') {
        if (updateUser) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'Achat') {
        if (buyLicence) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'Crediter_un_compte') {
        if (crediter) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
    
      else if (to.name == 'Debiter_un_compte') {
        if (debiter) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'ListLicence') {
        if (listLicence) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
  
      else if (to.name == 'DashBoardWallet') {
        if (dashBoardWallet) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'RechargeWallet') {
        if (rechargeWallet) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'RetraitWallet') {
        if (retraitWallet) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'NouveauProjet') {
        if (createProjet) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'ListProjet') {
        if (manageProjet) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'createProfile') {
        if (createProfil) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'ListProfilUsers') {
        if (listProfil) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'EditProfileUser') {
        if (manageProfil) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      } else if (to.name == 'Contact') {
        if (addContact) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      } else if (to.name == 'Groupe Contact') {
        if (groupContact) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      } else if (to.name == 'Liste Contact') {
        if (listContact) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'notifications') {
        if (notification) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'calendrier') {
        if (calendrier) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'Sms' || to.name == 'Groupe' || to.name == 'Personnalise') {
        if (addSms) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
  
      else if (to.name == 'ListSmsSenderId') {
        if (readSms) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }

      else if (to.name == 'Vitrine-nouvelle') {
        if (addVitrine) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }

      else if (to.name == 'list-vitrine') {
        if (readVitrine) {
    
          // console.log('++++++++++++++++++++++++++',to);  
        } else {
          router.push({ name: 'AccesDenied' })

        }
      }
      else if (to.name == 'test') {
        //
      }
   
      else if (to.path == 'robots.txt') {
        //
      }
    } else {
      console.log('llllllllll');
      if (to.name == 'Signin') {
        //
      } if (to.name == 'Signup') {
        //
      }
      else {
        //  router.push({ name: 'Signin' });
      }

    }

    mapMutations(["getLoading"]),

      mapActions(["updateLoading"])
    store.commit('getLoading', false)
  }
})
export default router;


 