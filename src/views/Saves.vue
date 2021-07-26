<template>
  <ion-page>
    <base-layout page-default-back-link="/" :show-header="true">
      <template v-slot:header>
        <ion-toolbar>
          <ion-button expand="full">Filtrar</ion-button>
        </ion-toolbar>
      </template>
      <template v-slot:content>
        <ion-card v-for="savesTecnic in savesTecnics" :key="savesTecnic">
          <img :src="savesTecnic.image" />
          <ion-card-header>
            <ion-card-title class="ion-text-center"><b>{{ savesTecnic.name }}</b></ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list class="ion-text-center">
              <ion-item>¿Que ahorraras? {{ savesTecnic.saves }}</ion-item>
              <ion-item>¿Cuanto ahorraras? {{ savesTecnic.ammount }}</ion-item>
            </ion-list>
            <ion-button color="secondary">Ver detalle</ion-button>
            <ion-button color="success">Agregar forma</ion-button>
          </ion-card-content>
        </ion-card>
      </template>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonPage, IonButton,
  IonCard, IonCardHeader, IonCardContent,
  IonList, IonItem
} from '@ionic/vue';
import BaseLayout from "@/components/BaseLayout.vue";

export default  {
  name: 'SearchProjects',
  components: { 
    IonPage, IonButton,
    IonCard, IonCardHeader, IonCardContent,
    BaseLayout, IonList, IonItem
  },
  data () {
    return {
      savesTecnics: [{
        image: 'https://static.eldiario.es/clip/bf0f3543-8fc5-4b4a-a6e5-099c3f2420d3_16-9-discover-aspect-ratio_default_0.jpg',
        recommended: false,
        name: "Usar bombillas led",
        saves: "energia",
        ammount: "XX watts por hora"
      }, {
        image: 'https://www.ecestaticos.com/image/clipping/557/418/45b08b7a9950af5e40c85040193d541f/beber-agua-del-grifo-puede-ser-perjudicial-pero-y-cocinar.jpg',
        recommended: false,
        name: "Cerrar grifo al lavarte los dientes",
        saves: "agua",
        ammount: "XX ml por hora"
      }]
    }
  }
}
</script>