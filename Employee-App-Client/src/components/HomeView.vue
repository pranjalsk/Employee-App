<template>
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Human Capital Information System</h1>      
                <h5>This application provides information about all the employees at "Hogwards Corporation"</h5>
            </div>
        </div>

        <div class="container">
            <button v-on:click="gotoAllEmployees()" type="button" class="btn btn-success">View All Employees</button>
        </div>

    </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
  
      gotoAllEmployees: function(){
          this.$router.push({
              name: 'allEmployees',
              params: {}
          });
      }
  
  },

};


</script>


<style>

</style>