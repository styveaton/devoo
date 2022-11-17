<template>

  <!-- 
Bloc Gestion des Mere -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-if="volet == 0" id="sidenav-collapse-main">

    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item url="/tables" :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Tables'">
          <template v-slot:icon>
            <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/billing" :class="getRoute() === 'billing' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الفواتیر' : 'Billing'">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <!-- <li class="nav-item">
        <sidenav-item url="/ListSmsSenderId" @click="setSenderId"
          :class="getRoute() === 'ListSmsSenderId' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'List Sms'
          ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/ListPub" :class="getRoute() === 'ListPub' ? 'active' : ''" :navText="
          this.$store.state.isRTL ? 'الواقع الافتراضي' : 'List Pub'
        ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->

      <li class="nav-item">
        <sidenav-item-btn v-show="buyLicence || listLicence || crediter || debiter" @click="volet = 1"
          :class="getRoute() === 'Licence' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Licence'
          ">
          <template v-slot:icon>
            <i class="ni  ni-cart text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn v-show="dashBoardWallet || rechargeWallet || retraitWallet" @click="volet = 3"
          :class="getRoute() === 'Wallet' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Porte feuille'
          ">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn v-show="readUser || createUser || updateUser" @click="volet = 2"
          :class="getRoute() === 'Client' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Clients'
          ">
          <template v-slot:icon>
            <i class="fas fa-user-alt text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 7" v-show="addContact || listContact || groupContact"
          :class="getRoute() === 'Contact' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Contact'
          ">
          <template v-slot:icon>
            <i class="ni  ni-circle-08 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 8" v-show="notification || calendrier"
          :class="getRoute() === 'Evenement' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Evenement'
          ">
          <template v-slot:icon>
            <i class="fa fa-calendar text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 6" v-show="addSms || readSms" :class="getRoute() === 'Sms' ? 'active' : ''"
          :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Sms'
          ">
          <template v-slot:icon>
            <i class="ni ni-send text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>

      <li class="nav-item">
        <sidenav-item-btn @click="volet = 4" v-show="createProfil || listProfil || manageProfil"
          :class="getRoute() === 'Role' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Gestion des Roles'
          ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 5" v-show="createProjet || manageProjet"
          :class="getRoute() === 'Projet' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Gestion de vos Projets'
          ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 9" v-show="addVitrine || readVitrine || admin"
          :class="getRoute() === 'vitrine' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Gestion de vos Vitrines'
          ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>

      <li class="nav-item">
        <sidenav-item-btn @click="volet = 10" v-show="dashPub || readPub" :class="getRoute() === 'pub' ? 'active' : ''"
          :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Gestion des Publicite'
          ">
          <template v-slot:icon>
            <i class="fa fa-bullhorn text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>


      <li class="nav-item">
        <sidenav-item-btn @click="volet = 11" v-show="gereCommission || gereException"
          :class="getRoute() === 'configuration' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Configuration'
          ">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>


      <!-- <li class="nav-item">
        <sidenav-item-btn @click="loggout" :class="getRoute() === '04454' ? 'inactive' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Deconnecter'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li> -->



      <!-- <li class="nav-item">
        <sidenav-item url="/signin" :class="getRoute() === 'signin' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Sign In'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->



    </ul>
  </div>



  <!-- 
Bloc Gestion des Licences -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 1" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item @click="updateLoading(getRoute())" url="/Licence/Achat" v-show='buyLicence'
          :class="getRoute() === 'Achat' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Acheter une licence'
          ">
          <template v-slot:icon>
            <i class="ni ni-cart text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item @click="updateLoading(getRoute())" url="/Licence/Crediter" v-show='crediter'
          :class="getRoute() === 'Crediter' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Crediter un compte'
          ">
          <template v-slot:icon>
            <i class="ni ni-fat-add text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Licence/Debiter" v-show='debiter' :class="getRoute() === 'Debiter' ? 'active' : ''"
          :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Debiter un compte'
          ">
          <template v-slot:icon>
            <i class="ni ni-fat-delete text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Licence/ListLicence" v-show='listLicence'
          :class="getRoute() === 'ListLicence' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Liste des Licences'
          ">
          <template v-slot:icon>
            <i class="ni ni-bullet-list-67 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


    </ul>
  </div>


  <!-- 
Bloc Gestion des Utilisateurs -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 2" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i> </template>
        </sidenav-item>
      </li>
      <li class="nav-item" v-show="createUser">
        <sidenav-item url="/Client/nouveauClient" :class="getRoute() === 'nouveauClient' ? 'active' : ''" :navText="
          this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Nouveau client'
        ">
          <template v-slot:icon>
            <i class="fas fa-user-plus text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" v-show="readUser">
        <sidenav-item url="/Client/listClient" :class="getRoute() === 'ListClient' ? 'active' : ''" :navText="
          this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Liste de vos clients'
        ">
          <template v-slot:icon>
            <i class="fas fa-user-friends text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


      <li class="nav-item">
        <sidenav-item url="/Client/profile" v-show="updateUser" :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Profile'">
          <template v-slot:icon>
            <i class="fas fa-user-cog text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


    </ul>
  </div>

  <!-- 
Bloc Gestion des portes feuilles -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 3" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class=" ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Wallet/DashBoardWallet" v-show="dashBoardWallet || rechargeWallet || retraitWallet"
          :class="getRoute() === 'DashBoardWallet' ? 'active' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'DashBoard Wallet'
          ">
          <template v-slot:icon>
            <i class="ni ni-credit-card  text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Wallet/RechargeWallet" v-show="rechargeWallet"
          :class="getRoute() === 'RechargeWallet' ? '' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Recharger Solde Local'
          ">
          <template v-slot:icon>
            <i class="ni ni-bold-down text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item url="/Wallet/RetraitWallet" v-show="retraitWallet"
          :class="getRoute() === 'RetraitWallet' ? '' : ''" :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Retrait financier'
          ">
          <template v-slot:icon>
            <i class="ni ni-bold-up text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item url="/Wallet/RechargeSysteme" v-show="admin" :class="getRoute() === 'RechargeWallet' ? '' : ''"
          :navText="
            this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Recharger Solde Utilisateur'
          ">
          <template v-slot:icon>
            <i class="ni ni-money-coins text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


    </ul>
  </div>
  <!-- 
Bloc Gestion des roles -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 4" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/createProfile" v-show="createProfil" :class="getRoute() === 'createProfile' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Creer un profil'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/ListProfilUsers" v-show="listProfil"
          :class="getRoute() === 'ListProfilUsers' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Liste des Profiles'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>



  <!-- 
Bloc Gestion des projets -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 5" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Projet/NouveauProjet" v-show="createProjet"
          :class="getRoute() === 'NouveauProjet' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Creer un projet'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Projet/ListProjets" v-show="manageProjet"
          :class="getRoute() === 'ListProjets' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Liste des projets'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>

  <!-- 
Bloc Gestion des sms -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 6" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Sms/Nouveau" v-show="addSms" :class="getRoute() === 'Nouveau' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : ' Sms individuel'">
          <template v-slot:icon>
            <i class="ni ni-send text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Sms/message-groupe" v-show="addSms" :class="getRoute() === 'message-groupe' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Sms de Groupe '">
          <template v-slot:icon>
            <i class="ni ni-folder-17 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Sms/message-personnalise" v-show="addSms"
          :class="getRoute() === 'message-personnalise' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Sms Personnalise '">
          <template v-slot:icon>
            <i class="ni ni-glasses-2 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Sms/historique" v-show="readSms" :class="getRoute() === 'historique' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Historique de vos sms'">
          <template v-slot:icon>
            <i class="ni ni-email-83 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Sms/Examiner" v-show="readSms" :class="getRoute() === 'ListSmsSenderId' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Examen campagne'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>

  <!-- 
Bloc Gestion des contact -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 7" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Contact/Nouveau" v-show="addContact" :class="getRoute() === 'Nouveau' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Ajouter Un Contact'">
          <template v-slot:icon>
            <i class="ni ni-circle-08 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Contact/Groupe" v-show="addContact && groupContact"
          :class="getRoute() === 'Groupe' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Gerez vos Groupes'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item url="/Contact/import" v-show="addContact" :class="getRoute() === 'import' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Impoter vos contacts'">
          <template v-slot:icon>
            <i class="	far fa-file-pdf text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item url="/Contact/ListContact" v-show="listContact"
          :class="getRoute() === 'ListContact' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Liste de vos contacts'">
          <template v-slot:icon>
            <i class="fas fa-book-reader text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>

  <!-- 
Bloc Gestion des evennemnt -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 8" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Evenements/notifications" v-show="notification"
          :class="getRoute() === 'Notification' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Notification'">
          <template v-slot:icon>
            <i class="fas fa-bell text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Evenements/calendrier" v-show="calendrier"
          :class="getRoute() === 'Calendrier' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Calendrier'">
          <template v-slot:icon>
            <i class="fa fa-calendar-plus-o text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item url="/Evenements/liste-evenements" :class="getRoute() === 'liste-evenements' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'liste des evenements'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->

    </ul>
  </div>



  <!-- 
Bloc Gestion de la vitrine -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 9" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Vitrine/Nouvelle" v-show="addVitrine" :class="getRoute() === 'Nouvelle' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Nouvelle Vitrine'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Vitrine/list-vitrine" v-show="readVitrine"
          :class="getRoute() === 'list-vitrine' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Liste des Vitrines'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Vitrine/template-vitrine" v-show="admin"
          :class="getRoute() === 'template-vitrine' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Ajouter template'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

    </ul>
  </div>


  <!-- 
Bloc Gestion des publicites -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 10" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Pub/DashBoard" v-show="dashPub" :class="getRoute() === 'dashboard-Pub' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'DashBoard Publicite'">
          <template v-slot:icon>
            <i class="fas fa-ad text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Pub/ListPub" v-show="readPub" :class="getRoute() === 'ListPub' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Liste de vos Publicites'">
          <template v-slot:icon>
            <i class="	fas fa-poll-h text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

    </ul>
  </div>


  <!-- 
Bloc Configuration -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 11" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Configuration/commission" v-show="gereCommission"
          :class="getRoute() === 'commission' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Gestion des Commissions '">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Configuration/exception" v-show="gereException"
          :class="getRoute() === 'exception' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Gestion des Exception'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item url="/Configuration/reduction" :class="getRoute() === 'reduction' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Réduction'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->

    </ul>
  </div>





  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card :class="cardBg" textPrimary="Besoin d'aide ?"
      textSecondary="Veuillez consulter notre documentation" />
  </div>
</template>

<style>
.navbar-vertical.navbar-expand-xs {

  z-index: 0;
}

.navba {

  z-index: 0;
}
</style>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavItemBtn from "./SidenavItemBtn.vue";
import SidenavCard from "./SidenavCard.vue";
import { ref } from '@vue/runtime-core';
import VueCookies from 'vue-cookies'
import { api } from '../../boot/axios';
import router from '../../router';
import store from "../../store";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "DEVOO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard, SidenavItemBtn
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    updateLoading(load) {
      mapMutations(["getLoading"]),

        mapActions(["updateLoading"])
      store.commit('getLoading', load)
    },
    loggout() {
      mapMutations(["getUser"]),

        mapActions(["updateUser"])
      store.commit('getUser', null)

      mapMutations(["gettrancheSms"]),

        mapActions(["updatetrancheSms"])
      store.commit('gettrancheSms', null)

      mapMutations(["getParrainUser"]),

        mapActions(["updateParrainUser"])
      store.commit('getParrainUser', null)
      api.defaults.headers.common['Authorization'] = null;
      VueCookies.remove('token');
      VueCookies.remove('refreshToken');
      VueCookies.set('token', 'undefined');
      VueCookies.set('id', 'undefined');
      VueCookies.set('id', null);
      VueCookies.set('refreshToken', 'undefined');
      VueCookies.remove('id');
      VueCookies.remove('admin');
      // VueCookies.remove('theme');

      router.push({ name: 'Signin' });
    },
  },
  setup: () => {
    console.log(VueCookies.get('fonctions'));
    let createUser = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '1') ? true : false : false;
    let readUser = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '2') ? true : false : false;
    let updateUser = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '3') ? true : false : false;


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

    let gereCommission = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '29') ? true : false : false;
    let gereException = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '30') ? true : false : false;

    let dashPub = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '31') ? true : false : false;
    let readPub = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '32') ? true : false : false;

    console.log(createUser, readUser);

    function setSenderId() {
      console.log('dsddsdsd')
      VueCookies.set('senderIdName', 'all');
      console.log('00000')

      console.log('sendrid', VueCookies.get('senderId'));
    }
    /**
     * volet ; 0 => dashboard; 1 =>licence; 2 =>client; 3=>porte feuille client
     */
    let volet = ref(0);

    return {
      dashPub, readPub,
      admin: VueCookies.get('admin') == 1,
      gereCommission, gereException,
      addVitrine, readVitrine,
      addSms, readSms,
      notification, calendrier,
      addContact, listContact, groupContact,
      createProfil, listProfil, manageProfil,
      createProjet, manageProjet, dashBoardWallet, rechargeWallet, retraitWallet,

      volet, setSenderId, createUser, readUser, updateUser, buyLicence, listLicence, crediter, debiter
    }
  }
};
</script>
