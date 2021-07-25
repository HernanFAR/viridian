<template>
  <base-layout page-default-back-link="/" :show-header="true" :show-side-bar="true">
    <template v-slot:content>
      <google-map :maps-config="mapsConfig"></google-map>
    </template>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMapsConfig } from "@/composers/GoogleMapComposer";

import BaseLayout from '@/components/BaseLayout.vue';
import GoogleMap from '@/components/GoogleMap.vue';

export default defineComponent({
  name: 'Tab2',
  components: { 
    GoogleMap, BaseLayout
  },
  setup() {
    const mapsConfig: GoogleMapsConfig = {
      disableDefaultIU: true,
      center: {
        lat: 0,
        lng: 0
      }
    }

    return {
      mapsConfig
    }
  }
})
</script>