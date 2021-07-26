<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="top">
        <ion-tab-button tab="tab1" href="/tabs/Recomendations/SearchProjects">
          <ion-icon :icon="searchCircle" />
          <ion-label>Buscar proyectos</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab2" href="/tabs/Recomendations/Saves">
          <ion-icon :icon="batteryHalfOutline" />
          <ion-label>Formas de ahorro</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab3" href="/tabs/Recomendations/MyProjects">
          <ion-icon :icon="hammerOutline" />
          <ion-label>Mis proyectos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
      <ion-router-outlet></ion-router-outlet>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { hammerOutline, searchCircle, batteryHalfOutline } from 'ionicons/icons';
export default  {
  name: 'Recomendations',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      hammerOutline, 
      searchCircle, 
      batteryHalfOutline,
    }
  }
}
</script>