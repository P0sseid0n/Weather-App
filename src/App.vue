<script setup lang="ts">
import SearchScreen from "./components/SearchScreen.vue";
import WeatherBar from "./components/WeatherBar.vue";

import { useStore } from "./stores";
const store = useStore()
</script>

<template>
   <SearchScreen v-if="store.screen == 'select'" />
   <WeatherBar v-else />
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
   min-height: 100vh;
   display: flex;
   flex-direction: row;
}

aside {
   width: 100%;
}

@media screen and (min-width: 768px) {
   aside {
   }

   #app {
      flex-direction: column;
   }
}
</style>
