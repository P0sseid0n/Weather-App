<script setup lang="ts">
import { useStore } from '@/stores'
import dayjs from 'dayjs'
const store = useStore()


const formattedDate = dayjs().tz(store.location.timezone).format('ddd  DD, MMMM')

</script>

<template>
   <aside>
      <header>
         <button @click="store.screen = 'select'">Mudar local</button>
      </header>
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Icon" />
      <h1>
         {{ store.location.temperature }}
         <span>°c</span>
      </h1>
      <h3>{{ store.location.weather }}</h3>
      <footer>
         <!-- <p>Hoje - Fri, 5 Jun</p> -->
         <p>Hoje • {{ formattedDate }}</p>
         <p>{{ store.location.name }}</p>
      </footer>
   </aside>
</template>


<style scoped lang="scss">
* {
   color: #6e707a;
}

aside {
   background: #1e213a;
}

header {
   display: flex;
   justify-content: space-between;
}

button {
   background: #6e707a;
   border: none;
   font-size: 16px;
   padding: 12px 24px;
   font-weight: 600;
   color: #fff;
   cursor: pointer;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

aside {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   text-align: center;
   padding: 40px 0;

   > img {
      width: 192px;
      margin-top: -32px;
      margin-bottom: -64px;
   }
}

h1 {
   font-size: 144px;
   font-weight: 500;
   color: #e7e7eb;
   display: inline-flex;
   align-items: baseline;

   span {
      font-size: 48px;
      font-weight: 300;
      color: #a09fb1;
   }
}

h3 {
   font-size: 36px;
   font-weight: 600;
   color: #a09fb1;
   margin-bottom: 48px;
   text-transform: capitalize;
}

p {
   text-transform: capitalize;

   font-size: 18px;
   font-weight: 500;
   color: #88869d;

   margin-bottom: 32px;
}
</style>