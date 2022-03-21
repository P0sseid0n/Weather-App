<script setup lang="ts">
import { useStore } from '@/stores';
import { ref, type Ref } from 'vue';


const tempScale: Ref<'c' | 'f'> = ref('c')

const store = useStore()

</script>

<template>
   <main>
      <header>
         <button :active="tempScale == 'c' || null" @click="tempScale = 'c'">°C</button>
         <button :active="tempScale == 'f' || null" @click="tempScale = 'f'">°F</button>
      </header>
      <h1>Olá, Mundo</h1>
      <section>
         <h2>Hoje</h2>
         <div>
            <div>
               <h4>Vento</h4>
               <h3>
                  <span>{{ store.location.wind_speed }}</span> m/s
               </h3>
            </div>
            <div>
               <h4>Umidade</h4>
               <h3>
                  <span>{{ store.location.humidity }}</span> %
               </h3>
               <div id="humidityBar">
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                  <div>
                     <div :style="{ width: store.location.humidity + '%' }"></div>
                  </div>
               </div>
            </div>
            <div>
               <h4>Vento</h4>
               <h3>
                  <span>7</span> m/s
               </h3>
            </div>
            <div>
               <h4>Pressão do ar</h4>
               <h3>
                  <span>998</span> mb
               </h3>
            </div>
         </div>
      </section>
   </main>
</template>



<style scoped lang="scss">
main {
   width: 100%;
   padding: 0 128px;
}

header {
   text-align: right;
}

button {
   background: #585676;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: none;
   cursor: pointer;
   margin: 0 4px;

   font-size: 18px;
   font-weight: 700;
   color: #e7e7eb;

   &[active] {
      background: #e7e7eb;
      color: #110e3c;
   }
}

section > div {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 48px;

   > div {
      height: 200px;
      padding: 16px 32px;
      background: #1e213a;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      text-align: center;
      color: #e7e7eb;

      h4 {
         font-size: 16px;
         font-weight: 500;
         margin-bottom: 8px;
      }

      h3 {
         font-size: 48px;
         font-weight: 500;
         display: inline-flex;
         align-items: flex-end;

         span {
            font-size: 64px;
            font-weight: 700;
         }
      }
   }
}

#humidityBar {
   margin-top: 32px;

   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: 1fr 1fr;

   p {
      font-weight: 600;
      font-size: 14px;
      color: #a09fb1;

      &:first-of-type {
         text-align: left;
      }

      &:last-of-type {
         text-align: right;
      }
   }

   div {
      margin-top: 6px;
      height: 8px;
      width: 100%;
      border-radius: 32px;
      background: #fff;
      overflow: hidden;

      grid-column-start: 1;
      grid-column-end: 4;

      div {
         height: 100%;
         background: #ffec65;
         position: relative;
         top: -8px;
      }
   }
}
</style>