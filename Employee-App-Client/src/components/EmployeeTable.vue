<template>
    <div>
        <div class="container">
            <button v-on:click="gotoNewEmployees()" type="button" class="btn btn-success">Add new Employees</button>
        </div>

        <br/>
        <div class="container">
            <md-table v-model="employees" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Employees at Hogwards</h1>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Employee Name">
                        <router-link :to="{ name:'viewEmployee', params:{ employeeid:item.employeeId }}">
                        {{ item.name.firstName }} {{ item.name.middleName }} {{ item.name.lastName }}
                        </router-link>
                </md-table-cell>
                <md-table-cell md-label="Department" md-sort-by="department">{{ item.department }}</md-table-cell>
                <md-table-cell md-label="Role" md-sort-by="role">{{ item.role }}</md-table-cell>
                <md-table-cell>
                    <router-link :to="{ name:'editEmployee', params:{ employeeid:item.employeeId }}">
                    <md-button class="md-raised md-primary">
                        Edit
                    </md-button>
                    </router-link>
                </md-table-cell>
            </md-table-row>
            </md-table>
        </div>
    </div>
</template>

<script>

import axios from "axios";

function getEmployees(vm){
    
    axios
    .get( vm.$store.state.IP_Config + `/employees`)
    .then(response => {
      vm.employees = response.data.employees;
    })
    .catch(err => {
      vm.errors.push(err);
    });
}


export default {
  data() {
    return {
        currentSort: 'department',
        currentSortOrder: 'asc',
        errors : [],
        employees: []
    };
  },
  methods: {
      
      gotoNewEmployees: function(){
          this.$router.push({
              name: 'addEmployee',
              params: {}
          });
      },
      customSort (value) {
        return value.sort((a, b) => {
          const sortBy = this.currentSort

          if (this.currentSortOrder === 'desc') {
            return a[sortBy].localeCompare(b[sortBy])
          }

          return b[sortBy].localeCompare(a[sortBy])
        })
      }
  
  },
  created(){
      getEmployees(this);
  }

};



</script>


<style>

</style>