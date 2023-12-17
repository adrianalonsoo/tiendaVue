<template>
  <header>
    <div class="cart-items" @click="router.push({name:'CartView'})">
      <p>Carrito: {{ store.cart.length }}</p>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>

</template>

<script setup>
//Importamos los metodos
import { useRouter } from 'vue-router';
import { productsStore } from '@/stores/products';

const router = useRouter();
const store = productsStore();
</script>


<!--Estilos-->
<style scoped>

.cart-items{
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 26px;
  cursor: pointer;
}
</style>
