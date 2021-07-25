<template>
  <base-layout page-default-back-link="/" :show-header="false">
    <template v-slot:content>
      <div id="container">
        <strong>Pagina no encontrada</strong>
        <p><a target="_blank" href="/">Ir al mapa</a></p>
      </div>
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  components: {
    BaseLayout
  }
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
