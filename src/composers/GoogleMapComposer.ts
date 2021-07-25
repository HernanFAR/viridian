import { ref, onMounted } from "vue";

export interface Ubication {
  lat: number;
  lng: number;
}

export interface GoogleMapsConfig {
  mapTypeId?: string;
  zoom?: number;
  disableDefaultIU?: boolean;
  center: Ubication;
} 

export function useGoogleMaps(googleMapsConfig: GoogleMapsConfig) {
  const map = ref(null);
  const mapDivRef = ref(null);

  onMounted(() => {
    const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
    const googleMapsScript = document.createElement("script");

    googleMapsScript.setAttribute(
      "src",
      `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
    );
    googleMapsScript.setAttribute("defed", "");
    googleMapsScript.setAttribute("async", "");

    document.head.appendChild(googleMapsScript);
  });

  // @ts-ignore
  window.initMap = () => {
    // @ts-ignore
    map.value = new window.google.maps.Map(mapDivRef.value, {
      mapTypeId: googleMapsConfig.mapTypeId || "hybrid",
      zoom: googleMapsConfig.zoom || 8,
      disableDefaultIU: googleMapsConfig.disableDefaultIU || false,
      center: googleMapsConfig.center
    });


  };  

  return {
    mapDivRef
  }
}