<template>
  <ion-page>
    <base-layout page-default-back-link="/" :show-header="true">
      <template v-slot:title>Graficos de consumo</template>
      <template v-slot:content>
        <ion-header class="ion-text-center ion-margin-top">
          <ion-title class="ion-margin-bottom">Estadisticas del agua</ion-title>
          <div>
            <MonthlyChart :labelConsumption="'Consumo'" :labelProduction="'Producción'"></MonthlyChart>
          </div>
        </ion-header>
        <ion-header class="ion-text-center ion-margin-top">
          <ion-title class="ion-margin-bottom">Estadisticas de electricidad</ion-title>
          <div>
            <MonthlyChart :labelConsumption="'Consumo'" :labelProduction="'Producción'"></MonthlyChart>
          </div>
        </ion-header>
      </template>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle } from '@ionic/vue';
import MonthlyChart from '@/components/Charts/MonthlyChart.vue';
import BaseLayout from '@/components/BaseLayout.vue';

export default  {
  name: 'Tab3',
  components: { 
    IonPage, MonthlyChart, BaseLayout, IonTitle
  }
}
</script>