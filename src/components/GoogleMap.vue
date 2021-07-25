<template>
  <div class="map" ref="mapDivRef">
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMapsConfig, useGoogleMaps } from "@/composers/GoogleMapComposer" 

export default defineComponent({
  name: "GoogleMap",
  props: ['mapsConfig'],
  setup (props) {
    const { mapDivRef } = useGoogleMaps(props.mapsConfig as GoogleMapsConfig);

    return {
      mapDivRef
    }
  }
})
</script>
<style>
.map {
  width: 100%;
  height: 100%;
} 
</style>