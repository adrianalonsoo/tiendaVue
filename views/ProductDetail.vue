<template>
    <button @click="router.push({ name:'Catalog'})">Volver al catalogo</button>
    <h1>Producto Detalles</h1>
    <div class="product">
        <div class="product-image">
           <img :src="selectedProduct.image" alt="">
        </div>
        <div class="product-details">
            
            <h2>Titulo: {{ selectedProduct.title }}</h2>
            <p>Descripcion: {{ selectedProduct.description }}</p>
            <p>Precio: {{ selectedProduct.price }}€</p>
            <p>Categoria: {{ selectedProduct.category }}</p>
            <p>Recuento:{{ selectedProduct.rating["count"]}}</p>
            <p>Tasa:{{ selectedProduct.rating["rate"]}}</p>
            <button @click="addToCart">Comprar</button>
        </div>
    </div>

    
    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'ProductDetails'
})
</script>

<script setup>
//Importamos los metodos de los productos y del router que nos ofrece por defecto vue cuando creamos el proyecto
import { computed } from 'vue';

import { productsStore } from '@/stores/products';

import { useRoute,useRouter } from 'vue-router';

const store = productsStore();

const router = useRouter();

const route = useRoute();

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () =>{
    store.addToCart(selectedProduct.value)
    router.push({name:'CartView'})
}
</script>

<style scoped>
.product {
  display: flex;
  margin-top: 40px;
}

.product-image {
  margin-right: 20px;
}

.product-image img{
    width: 50%;
}
</style>