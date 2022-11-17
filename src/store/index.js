import { createStore } from "vuex";

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    loading:true, // 'dashboard-default',
    layout: "default",
    listModePaiement:null,
    listCategoryPub:null,
    listCategoryPub2:null,
    listGroupe:null,
    listContact:null,
    listSenderIdSms:null,
    soldeLocal:null,
    soldePorteFeuille:null,
    soldeSms: null,
    infoCompte: null,
    trancheSms: null,
    listUserParrain:null,
    listPays:null,
    user:null,
    commissionAll:null,
    exceptionAll:null,
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    modePaiement(state,payload) {
       state.listModePaiement = payload;
    }
, getsoldeLocal(state,payload) {
       state.soldeLocal = payload;
    },
    getsoldePorteFeuille(state, payload) {
       state.soldePorteFeuille = payload;
    },
    getInfoCompte(state, payload) {
       state.infoCompte = payload;
    }, gettrancheSms(state, payload) {
       state.trancheSms = payload;
    }

    , getParrainUser(state, payload) {
       state.listUserParrain = payload;
    }, getlistPays(state, payload) {
       state.listPays = payload;
    }, getlistCatPub(state, payload) {
       state.listCategoryPub = payload;
    }, getlistCatPub2(state, payload) {
       state.listCategoryPub2 = payload;
    },  getlistSenderIdSms(state, payload) {
       state.listSenderIdSms = payload;
    }, getUser(state, payload) {
       state.user = payload;
    }, getCommissionAll(state, payload) {
       state.commissionAll = payload;
     }, getexceptionAll(state, payload) {
       state.exceptionAll = payload;
    }, getGroupeUser(state, payload) {
       state.listGroupe = payload;
    },getContact(state, payload) {
       state.listContact = payload;
    },getLoading(state, payload) {
       state.loading = payload;
    }
  },
  actions: {
     updateLoading({ commit }, payload) {
   commit("getLoading", payload);
    },  updateContact({ commit }, payload) {
   commit("getContact", payload);
    }, updateGroupeUser({ commit }, payload) {
   commit("getGroupeUser", payload);
    }, 
     updateSenderIdSms({ commit }, payload) {
   commit("getlistSenderIdSms", payload);
    }, 
    
    
    updateUser({ commit }, payload) {
   commit("getUser", payload);
    },  updateCommissionAll({ commit }, payload) {
   commit("getCommissionAll", payload);
    } , updateexceptionAll({ commit }, payload) {
   commit("getexceptionAll", payload);
    },updatelistCatPub({ commit }, payload) {
   commit("getlistCatPub", payload);
    },updatelistCatPub2({ commit }, payload) {
   commit("getlistCatPub2", payload);
    }, updatelistPays({ commit }, payload) {
   commit("getlistPays", payload);
    },
    updateParrainUser({ commit }, payload) {
   commit("getParrainUser", payload);
    },

      updatetrancheSms({ commit }, payload) {
   commit("gettrancheSms", payload);
    },
    updateInfoCompte({ commit }, payload) {
   commit("getInfoCompte", payload);
    },



    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    updateModePaiement({ commit }, payload) {
   commit("modePaiement", payload);
    }
,
      updatesoldeLocal({ commit }, payload) {
   commit("getsoldeLocal", payload);
    },
      updatesoldePorteFeuille({ commit }, payload) {
   commit("getsoldePorteFeuille", payload);
    },
  },
  getters: {}
});
