<template>
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1><strong>Human Capital Information System</strong></h1>      
                <h3><i>Hogwarts Corporation</i></h3>      
                <h6>This application provides information about all the employees at "Hogwarts Corporation"</h6>
            </div>
        </div>

        <div class="container">
            <button v-on:click="gotoHome()" type="button" class="btn btn-success">Home</button>
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
      gotoHome: function(){
          this.$router.push({
              name: 'home',
              params: {}
          });
      },
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