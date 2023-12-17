
import { defineStore } from 'pinia'



export const productsStore= defineStore('products',{
  state: () => ({
    products: [],
    cart: []
  }),

  actions:{
    fetchProductsFromDB(){
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json => {
            
            this.products = json;
            console.log(this.products);
          })
    },
    fetchProducts2(){
      fetch('https://fakestoreapi.com/products/category/electronics')
          .then(res=>res.json())
          .then(json => {
            
            this.products = json;
            console.log(this.products);
          })
    },
    fetchProducts3(){
      fetch('https://fakestoreapi.com/products/category/jewelery')
          .then(res=>res.json())
          .then(json => {
            
            this.products = json;
            console.log(this.products);
          })
    },
    fetchProducts4(){
      fetch("https://fakestoreapi.com/products/category/men's%20clothing")
          .then(res=>res.json())
          .then(json => {
            
            this.products = json;
            console.log(this.products);
          })
    },
    fetchProducts5(){
      fetch("https://fakestoreapi.com/products/category/women's%20clothing")
          .then(res=>res.json())
          .then(json => {
            
            this.products = json;
            console.log(this.products);
          })
    },
    addToCart(product){
      this.cart.push(product)
    },

    remove(id){
      this.cart=this.cart.filter((item) => item.id !== id)
    }
  }
})