<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle de la tienda</ion-title>
        <ion-buttons slot="end">
          <ion-button v-on:click="close()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <img :src="markerDetail.image" />
        <ion-card-header>
          <ion-card-subtitle>{{ markerDetail.label }}</ion-card-subtitle>
          <ion-card-title>{{ markerDetail.ubication }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>¿Que podrias comprar acá?</p>
          <ul>
            <li v-for="buy in markerDetail.buys" :key="buy">Nombre: {{ buy.Name }} - Cantidad: {{ buy.ammount }}</li>
          </ul>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, 
  IonPage, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

import { getMarker } from "@/services/ShopModule/GetMarker"

export default defineComponent({
  name: 'MarketDetail',
  props: {
    id: { type: Number }
  },
  components: { 
    IonContent, IonHeader, IonTitle, 
    IonToolbar, IonButtons, IonButton,
    IonPage
  },
  data() {
    return {
      content: 'Content',
      markerDetail: {}
    }
  },
  methods: {
    async close() {
      await modalController.dismiss();
    }
  },
  async mounted () {
    this.markerDetail = await getMarker(this.id);
  }
});
</script>