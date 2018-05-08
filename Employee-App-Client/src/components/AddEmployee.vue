<template>
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Human Capital Information System</h1>      
                <h5>This application provides information about all the employees at "Hogwards Corporation"</h5>
            </div>
        </div>

        <div class="container">
        <form>
            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">FirstName</label>
                <div class="col-sm-6">
                <input v-model="emp.firstName" type="input" class="form-control" id="FirstName" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">MiddleName</label>
                <div class="col-sm-6">
                <input v-model="emp.middleName" type="input" class="form-control" id="MiddleName" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">LastName</label>
                <div class="col-sm-6">
                <input v-model="emp.lastName" type="input" class="form-control" id="LastName" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Department</label>
                <div class="col-sm-6">
                <input v-model="emp.department" type="input" class="form-control" id="Department" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Role</label>
                <div class="col-sm-6">
                <input v-model="emp.role" type="input" class="form-control" id="Role" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Base Salary</label>
                <div class="col-sm-6">
                <input v-model="emp.baseSalary" type="input" class="form-control" id="Base Salary" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Allowances</label>
                <div class="col-sm-6">
                <input v-model="emp.allowance" type="input" class="form-control" id="Allowances" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Tax 401k Deductions</label>
                <div class="col-sm-6">
                <input v-model="emp.tax401k" type="input" class="form-control" id="Tax 401k Deductions" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Medical Deductions</label>
                <div class="col-sm-6">
                <input v-model="emp.medical" type="input" class="form-control" id="Medical Deductions" required>
                </div>
            </div>

            <button v-on:click="postChanges" type="button" class="btn btn-success">Save Employee</button>
        </form>
    </div>

    </div>
</template>


<script>

import axios from "axios";

function addEmployeeRecord(vm){
    let postbody = {
                name : {
                    firstName : vm.emp.firstName,
                    middleName : vm.emp.middleName,
                    lastName : vm.emp.lastName
                },
                department : vm.emp.department,
                role : vm.emp.role,
                compensation:{
                    salary:{
                        baseSalary: vm.emp.baseSalary,
                        allowance : vm.emp.allowance
                    },
                    deductions:{
                        tax401k: vm.emp.tax401k,
                        medical: vm.emp.medical
                    }
                }
            };

    console.log(postbody);
    axios.post(`http://localhost:3000/employees/`, postbody)
    .then(response => {
        //TODO if true...tell success
        console.log(response.data);
    })
    .catch(e => {
      this.errors.push(e)
    })  

};


export default {
  data() {
    return {
        emp: {},
        errors: []
    };
  },
  methods:{
      postChanges: function(){
          addEmployeeRecord(this);
      }
  },
  created() {
        
  }

};

</script>


<style>

</style>