<template>
  <ion-page>
     <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <form>
        <ion-list>
          <ion-item>
            <ion-label position="stacked" color="primary">Username</ion-label>
            <ion-input
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
            ></ion-input>
          </ion-item>
          <span
            class="help is-danger"
          ></span>
          <ion-item>
            <ion-label position="stacked" color="primary">Password</ion-label>
            <ion-input
              name="password"
              type="password"
            ></ion-input>
          </ion-item>
          <ion-item>
              <ion-router-link href="/res/dashboard">
                <ion-button>Login</ion-button>
              </ion-router-link>
          </ion-item>
        </ion-list>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel } from '@ionic/vue';
import { lockOpen, cog, speedometer, logOut } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel },
  setup() {
    return {
      cog, logOut, lockOpen, speedometer,
    }
  }
});
</script>