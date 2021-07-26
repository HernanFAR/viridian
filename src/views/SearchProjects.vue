<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button expand="full">Filtrar</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/panel-solar-1861815.jpg?itok=arIpsjdh" />
        <ion-card-header>
          <ion-card-subtitle>Electricidad</ion-card-subtitle>
          <ion-card-title>Paneles Solares</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          X watts por hora.
        </ion-card-content>
        <ion-button color="success">Ver Detalle</ion-button>
        <ion-button color="warning">Agregar Proyecto</ion-button>
      </ion-card>
      <ion-card>
        <img src="https://www.economist.com/sites/default/files/images/print-edition/20180616_AMP001_0.jpg" />
        <ion-card-header>
          <ion-card-subtitle>Agua</ion-card-subtitle>
          <ion-card-title>Atrapanieblas</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          X litros de agua al día.
        </ion-card-content>
        <ion-button color="success">Ver Detalle</ion-button>
        <ion-button color="warning">Agregar Proyecto</ion-button>
      </ion-card>
      <ion-card>
        <img src="https://www.diariodexalapa.com.mx/local/i1aq5a-28-01-2021-agua-de-lluvia-2/alternates/LANDSCAPE_560/28-01-2021-AGUA-DE-LLUVIA-2" />
        <ion-card-header>
          <ion-card-subtitle>Agua</ion-card-subtitle>
          <ion-card-title>Recolector de lluvia</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Depende de cuanto llueva.
        </ion-card-content>
        <ion-button color="success">Ver Detalle</ion-button>
        <ion-button color="warning">Agregar Proyecto</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'SearchProjects',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>