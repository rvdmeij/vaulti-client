<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Are you realy want to sign-off?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sign-off?</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-router-link href="/res/login">
        <ion-button>Sign-off</ion-button>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Logout',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>