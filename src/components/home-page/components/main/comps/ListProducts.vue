<template>
  <div>
    <div v-if="isLoading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <!-- <ul>
      <li v-for="prod in products" v-bind:key="prod.id">
        {{prod.name}}
      </li>
    </ul> -->
    <div v-for="prod in products" :key="prod.id">
      {{prod.name}} - {{prod.createAt}}
    </div>

    <button v-if="products.length" v-on:click="emitChangeBackground">
      Change background
    </button>

    <p v-if="isError">Error to fetch API: {{errorMessage}}</p>
  </div>
</template>

<script>
import Funcs from '../../../../../common/utils/Funcs.js';

export default {
  name: 'ListProducts',
  data() {
    return {
      isLoading: true,
      isError: false,
      errorMessage: '',
      products: [],
    };
  },
  methods: {
    loadListProducts() {
      Funcs.fun_get('/category')
      .then((res) => {
        if (res.success){
          this.products = res.result;
          this.isLoading = false;
          return;
        }
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = res.message;
      });
    },

    emitChangeBackground(){
      // child to parent
      this.$emit('onChangeBackground');

      // component to component
      Funcs.getEventBus().$emit('onChangeBackground');

      // store
      this.$store.commit("SET_MESSAGE", 'viet saclo [From Vuex Store]');
    }
  },
  mounted() {
    this.loadListProducts();
  }
}
</script>

<style>

</style>