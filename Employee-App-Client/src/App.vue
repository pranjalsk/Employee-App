<template>
  <div id="app">

      <app-homeview></app-homeview>
      <br/>
      <router-view name="employee-table-view"></router-view>
      <router-view name="employee-view"></router-view>
      <router-view name="employee-edit-view"></router-view>
      <router-view name="employee-add-view"></router-view>

      <div style="height:2em"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
