<template>
  <ion-page>
    <base-layout page-default-back-link="/" :show-header="true" :show-side-bar="true">
      <template v-slot:extraButtons>
        <ion-button size="large" color="dark">Filtrar tiendas</ion-button>
      </template>
      <template v-slot:content>
        <google-map 
          :api-key="key"
          style="width: 100%; height: 100%"
          :center="personMarker.position"
          :zoom="15"
        >
          <Marker :options="personMarker"></Marker>
          <Marker v-for="shopMarket in shopMarkets" :key="shopMarket" :options="shopMarket" v-on:click="openModal(shopMarket.id)"></Marker>
        </google-map>
      </template>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonButton, IonPage, modalController } from "@ionic/vue"

import MarkerDetail from '@/components/Modals/MarkerDetail.vue';
import BaseLayout from '@/components/BaseLayout.vue';
import { GoogleMap, Marker } from 'vue3-google-map'
import { getMarkers } from '@/services/ShopModule/GetMarkers';

export default defineComponent({
  name: 'Map',
  components: { 
    GoogleMap, Marker, BaseLayout, 
    IonButton, IonPage
  },
  setup() {
    const key = ref<string>(process.env.VUE_APP_GOOGLEMAPS_KEY);
    
    const personMarker = ref<any>({
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      label: 'Tú',
      position: {
        lat: -33.3651438,
        lng: -70.7525297
      }
    });

    const shopMarkets = getMarkers();

    return {
      key, personMarker, shopMarkets
    }
  },
  methods: {
    async openModal(id: number) {
      const modal = await modalController
        .create({
          component: MarkerDetail,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title',
            id: id
          },
        })
      return modal.present();
    }
  },
})
</script>