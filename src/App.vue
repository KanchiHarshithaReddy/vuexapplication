<template>
   <div id="nav">
   <router-link to="/saveform"><button type="button" class="btn btn-secondary">Adddata</button></router-link>&nbsp;&nbsp;
   <router-link to="/getform"><button type="button" class="btn btn-secondary">GetData</button></router-link>
   <router-view/>
 
  

   </div> 
  <!-- <SaveForm /> -->
</template>

<script>
// import SaveForm from './components/SaveForm.vue'
export default {
  name: 'App',
  // components: {
  //   SaveForm
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
