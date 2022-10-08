<template>
  <div class="main">
    <div class="container pt-5 pb-5">
      <list-products v-on:onChangeBackground="onChangeBackground" />
    </div>

    <p v-if="msg">{{msg}}</p>
  </div>
</template>

<script>
  import ListProducts from './comps/ListProducts.vue';
  import Funcs from '../../../../common/utils/Funcs.js';

  export default {
    name: 'MainComponent',
    data(){
      return {};
    },
    components: {
      'list-products': ListProducts,
    },
    methods: {
      onChangeBackground(){
        console.log('onChangeBackground [Child to parent]');
      }
    },

    mounted(){
      Funcs.getEventBus().$on('onChangeBackground', () => {
        console.log('onChangeBackground [Component to component]');
      });
    },

    computed: {
      msg(){
        const message = this.$store.getters.MESSAGE;
        return message;
      }
    }
  }
</script>

<style scoped>
  .main {
    min-height: 500px;
    width: 100%;
    background-color: rgb(245, 240, 235);
  }
</style>