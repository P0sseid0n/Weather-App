<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { ChevronRightIcon, CloseIcon, SearchIcon } from './Icons/'
import axios from 'axios'
import { useStore } from '@/stores';
import type { ILocation } from '@/Types'
const store = useStore()
const search = ref('')


const locations: Ref<ILocation[]> = ref([])

async function searchLocation() {
   if (search.value.length < 0) return

   const apiKey = import.meta.env.VITE_WEATHER_KEY

   const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(search.value)}&appid=${apiKey}`

   axios.get(url).then(res => {
      // console.log(res.data)
      locations.value = res.data
   }).catch(err => {
      console.log(err)
   })

}
</script>

<template>
   <aside id="SearchScreen">
      <button v-if="store.hasLocation">
         <CloseIcon @click="store.screen = 'view'" />
      </button>
      <section>
         <div>
            <SearchIcon />
            <input
               type="text"
               placeholder="pesquisar lugar"
               v-model="search"
               @keypress.enter="searchLocation"
            />
         </div>
         <button @click="searchLocation">Pesquisar</button>
      </section>
      <ul>
         <li v-for="local in locations" @click="store.setLocation(local)">
            <p>
               {{ local.name }}
               <span v-if="local.state">, {{ local.state }}</span>
               <span v-if="local.country">, {{ local.country }}</span>
            </p>
            <ChevronRightIcon />
         </li>
      </ul>
   </aside>
</template>



<style scoped lang="scss">
#SearchScreen {
   width: 100%;
   height: 100%;
   padding: 32px 16px;
   position: relative;

   > button {
      position: absolute;
      right: 16px;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      svg {
         color: #e7e7eb;
         width: 32px;
         height: 32px;
      }
   }
   section {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 64px;

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
   }
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