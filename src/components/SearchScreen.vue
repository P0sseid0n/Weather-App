<script setup lang="ts">
import { ref } from 'vue';
import SearchIcon from './Icons/Search.vue'
import ChevronRightIcon from './Icons/ChevronRight.vue'
import axios from 'axios'

const search = ref('')

function searchLocation() {
   if (search.value.length < 0) return

   // 'https://www.metaweather.com/api/location/search/?query=' + encodeURI(search.value)
}
</script>

<template>
   <main id="SearchScreen">
      <section>
         <div>
            <SearchIcon />
            <input type="text" placeholder="pesquisar lugar" v-model="search" />
         </div>
         <button @click="searchLocation">Pesquisar</button>
      </section>
      <ul>
         <li v-for="city in ['Nome da cidade', 'Nome da cidade 2']">
            <p>{{ city }}</p>
            <ChevronRightIcon />
         </li>
      </ul>
   </main>
</template>



<style scoped lang="scss">
#SearchScreen {
   width: 100%;
   height: 100%;
   padding: 32px 16px;
}

section {
   width: 100%;
   display: flex;
   flex-direction: row;

   > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      border: 1px solid #e7e7eb;
      align-items: center;

      input {
         background: transparent;
         width: 100%;
         height: 100%;
         color: #e7e7eb;
         border: none;
         outline: none;
         font-size: 16px;
         font-weight: 500;

         &::placeholder {
            color: #616475;
         }
      }

      svg {
         width: 32px;
         height: 32px;
         color: #616475;
         margin: 0 8px;
      }
   }
}

button {
   background: #3c47e9;
   height: 48px;
   border: none;
   padding: 0 16px;

   color: #e7e7eb;
   font-weight: 600;
   font-size: 16px;
   cursor: pointer;

   margin-left: 10px;
}

ul {
   margin-top: 64px;
   width: 100%;

   li {
      width: 100%;
      padding: 16px;
      border: 1px solid transparent;
      margin-bottom: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      transition: all 0.25s ease-in-out;

      p {
         color: #e7e7eb;
         width: 100%;
      }

      svg {
         width: 32px;
         height: 32px;
         color: #616475;
         opacity: 0;
         transition: inherit;
      }

      &:hover {
         border-color: #616475;

         svg {
            opacity: 1;
         }
      }
   }
}
</style>