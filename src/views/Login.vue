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
            <ion-label position="stacked" color="primary">Email</ion-label>
            <ion-input
              name="email"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              v-model="email"
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
              v-model="password"
            ></ion-input>
          </ion-item>
          <ion-button @click="login">
            <ion-label>
              Login
            </ion-label>
          </ion-button>
        </ion-list>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonList, IonItem, IonLabel } from '@ionic/vue';
import { lockOpen, cog, speedometer, logOut } from 'ionicons/icons';
import { defineComponent, ref, onMounted } from 'vue';
import apiClient from '@/utils/Http';

export default defineComponent({
  name: 'Login',
  components: { IonButton, IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonList, IonItem, IonLabel },
  setup() {
    return {
      cog, logOut, lockOpen, speedometer,
    }
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    validate() {
      return (this.email !== null || this.password !== null);
    },
    async login() {
      if (this.validate()) {
        const  response = await apiClient.post('/login', {
          email: this.email,
          password: this.password
        });
        if (response.status == 200) {
          window.localStorage.setItem('token', response.data.access_token);
          this.$router.push({name: 'Dashboard'});
        }
      } else {
        console.log('Please enter your credentials.');
      }
    }
  }
});
</script>
