<template>
  <ion-page id="main-content">
    <side-bar v-if="showSideBar"></side-bar>
    <div class="ion-page" id="main-content">
      <ion-header v-if="showHeader">
        <slot name="header">
          <ion-toolbar v-if="showSideBar">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button :auto-hide="true"></ion-menu-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-toolbar>
          <ion-toolbar v-if="!showSideBar">
            <ion-buttons slot="start">
              <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
            </ion-buttons>
            <ion-title>
              <slot name="title" />
            </ion-title>
          </ion-toolbar>
        </slot>
      </ion-header>
      <ion-content id="main-content">
        <slot name="content" />
      </ion-content>
    </div>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";

import { IonPage, IonContent, IonToolbar, IonHeader, IonButtons, IonBackButton, IonTitle} from '@ionic/vue'
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  name: "BaseLayout",
  props: ['pageDefaultBackLink', 'showHeader', 'showSideBar'],
  components: {
    IonPage, IonHeader, IonToolbar,
    IonButtons, IonBackButton, IonTitle,
    IonContent, SideBar
  }
})
</script>
