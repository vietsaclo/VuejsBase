<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log(process.env.VUE_APP_APP_NAME);
  }
}
</script>

<style>
</style>
