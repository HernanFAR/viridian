<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/Recomendations">
          <ion-icon :icon="homeOutline" />
          <ion-label>Recomendaciones</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/Map">
          <ion-icon :icon="mapOutline" />
          <ion-label>Mapa</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/Stadistics">
          <ion-icon :icon="barChartOutline" />
          <ion-label>Est. de uso</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { mapOutline, barChartOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      mapOutline, 
      barChartOutline, 
      homeOutline,
    }
  }
}
</script>