import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import Electronica from "@/views/Electronica.vue";
import Joyeria from "@/views/Joyeria.vue";
import Hombre from "@/views/hombre.vue";
import Mujer from "@/views/mujer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail
    },

    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    {
      path: '/views/electronica',
      name: 'Electronica',
      component: Electronica
    },
    {
      path: '/views/joyeria',
      name: 'Joyeria',
      component: Joyeria
    },
    {
      path: '/views/hombre',
      name: 'RopaHombre',
      component: Hombre
    },
    {
      path: '/views/mujer',
      name: 'RopaMujer',
      component: Mujer
    }
  ]
})

export default router
