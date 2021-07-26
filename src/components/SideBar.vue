<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Materiales a comprar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label><b>Para el proyecto paneles</b></ion-label>
      </ion-item>
      <ion-list>
        <ion-item>
          <ion-label>Elemento A - Cantidad: 5 </ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Elemento B - 3x2 m </ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Elemento C - 4kg</ion-label> 
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-label><b>Para el proyecto Torre eolica</b></ion-label>
      </ion-item>
      <ion-list>
        <ion-item>
          <ion-label>Elemento D - Cantidad: 5 </ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Elemento E - 3x2 m </ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Elemento F - 4kg</ion-label> 
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { 
  IonMenu, IonContent, IonLabel, 
  IonTitle, IonToolbar, IonItem, 
  IonList, IonHeader
} from '@ionic/vue'
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    IonContent, IonLabel, 
    IonMenu, IonTitle, IonToolbar,
    IonItem, IonList, IonHeader
  },
  data() {
    return {
      showFirst: false,
      showSecond: false
    }
  },
  methods: {
    changeValueFirst() {
      console.log("XD")
      this.showFirst = !this.showFirst;
    },
    changeValueSecond() {
      console.log("DX")
      this.showSecond = !this.showSecond;
    }
  }
})
</script>
