<template>
    <h1>Ropa Hombre</h1>
    <button @click="router.push({ name:'Catalog'})">Volver al catalogo</button>
    <div class="lista_productos">
        <div class="product" 
        v-for="product in store.products" :key="product.id"
        @click="goToProductPage(product.id)"
        >
            <img :src="product.image" alt="">
            <h2>Titulo: {{ product.title }}</h2>
            <p>Descripcion: {{ product.description }}</p>
            <p>Precio: {{ product.price }}€</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'CatalogView'
})
</script>



<script setup>
//Importamos los metodos de los productos y del router que nos ofrece por defecto vue cuando creamos el proyecto
import { onMounted} from 'vue';

import { productsStore } from '@/stores/products';

import { useRouter} from 'vue-router';

const store = productsStore();

const router = useRouter();



const goToProductPage = (id) => {
    router.push({name: 'ProductView', params: { id }})
}

onMounted(()=>{
    store.fetchProducts4();
    
})


</script>


<style scoped>
.lista_productos{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.product{
    flex-basis: 28%;
    margin: 8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #434242;
    cursor: pointer;
}

.product img{
    width: 70%;
}
</style>