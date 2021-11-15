<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/res/dashboard">
          <ion-icon :icon="speedometer" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="vault" href="/res/vault">
          <ion-icon :icon="lockOpen" />
          <ion-label>Vault</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="settings" href="/res/settings">
          <ion-icon :icon="cog" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="logout" href="/res/logout">
          <ion-icon :icon="logOut" />
          <ion-label>Sign-off</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
  
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { lockOpen, cog, speedometer, logOut } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      cog, logOut, lockOpen, speedometer,
    }
  }
});
</script>