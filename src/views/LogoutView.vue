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
      <ion-button @click="$router.push('/res/login')">
        <ion-label>
          Logout
        </ion-label>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel } from '@ionic/vue';


export default  {
  name: 'LogoutView',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonLabel }
}
</script>
