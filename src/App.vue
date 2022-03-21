<script setup lang="ts">
import SearchScreen from "./components/SearchScreen.vue";
import WeatherBar from "./components/WeatherBar.vue";
import WeatherMain from "./components/WeatherMain.vue";

import { useStore } from "./stores";
const store = useStore()
</script>

<template>
   <SearchScreen v-if="store.screen == 'select'" />
   <WeatherBar v-else />
   <WeatherMain />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap");
@import "../node_modules/reset-css/sass/reset";

* {
   font-family: "Raleway", sans-serif !important;
   box-sizing: border-box;
}

#app {
   background: #100e1d;
   height: 100vh;
   display: flex;
   flex-direction: row;
}

aside {
   width: 40%;
   min-width: 320px;
   max-width: 480px;
   height: 100%;
}

@media screen and (max-width: 1024px) {
   aside {
      width: 100%;
      max-width: none;
   }

   #app {
      flex-direction: column;
   }
}
</style>
