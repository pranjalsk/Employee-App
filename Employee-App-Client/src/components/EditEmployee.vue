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


        </form>
    </div>

</div>
</template>

<script>

import axios from "axios";

function populateEmployeeInfo(vm){
    let  employeeid = vm.$route.params.employeeid;

    axios
    .get(`http://localhost:3000/employees/`+employeeid)
    .then(response => {
        vm.emp = {};
        vm.emp.firstName = response.data.employee.name.firstName;
        vm.emp.middleName = response.data.employee.name.middleName;
        vm.emp.lastName = response.data.employee.name.lastName;
        vm.emp.role = response.data.employee.role;
        vm.emp.department = response.data.employee.department;
        vm.emp.baseSalary = response.data.employee.compensation.salary.baseSalary;
        vm.emp.allowance = response.data.employee.compensation.salary.allowance;
        vm.emp.tax401k = response.data.employee.compensation.deductions.tax401k;
        vm.emp.medical = response.data.employee.compensation.deductions.medical;
        console.log(vm.emp);
    })
    .catch(err => {
      vm.errors.push(err);
    });
}




export default {
  data() {
    return {
        employeeid : this.$route.params.employeeid,
        emp: {},
        errors: []
    };
  },
  created() {
        populateEmployeeInfo(this);
  }

};



</script>

<style>

</style>