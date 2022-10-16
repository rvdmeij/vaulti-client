<template>
  <ion-page>
     <ion-header>
      <ion-toolbar>
        <ion-title>Create a new account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>
      Register body
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
import { lockOpen, cog, speedometer, logOut } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterView',
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonTitle },
  setup() {
    return {
      cog, logOut, lockOpen, speedometer,
    }
  }
});
</script>
