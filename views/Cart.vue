<template>
    <h1>Carrito</h1>
    <button @click="router.push({name:'Catalog'})">Vuelta al catalogo</button>
    <div v-if="!store.cart.length">
        <h1>Vacio</h1>
        
    </div>

    <div class="cart-items" v-else>
        <div class="cart-item" v-for="item in store.cart" :key="item.id">
            <div class="item_details">
                <img :src="item.image" alt="">
                <h2>Titulo: {{ item.title }}</h2>
                <p>Descripcion: {{ item.description }}</p>
                <p>Precio: {{ item.price }}€</p>
                <button @click="remove(item.id)">Borrar</button>
            </div>
        </div>
    </div>
</template>


<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'CartView'
})
</script>


<script setup> 
//Importamos los metodos de los productos y del router que nos ofrece por defecto vue cuando creamos el proyecto
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = productsStore();

//Funcion para borrar del carrito el producto
const remove = (id) => {
    store.remove(id);
}
</script>

<!--Estilos-->
<style scoped>
.item_details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  box-shadow: 0 0 17px 6px #434242;
  border-radius: 8px;
  padding: 16px;
}

.item_details img {
  width: 20%;
}
</style>