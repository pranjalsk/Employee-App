<template>

<div>
        <div class="container">
              <table class= "table table-user-information">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>{{ employee.fullName }}</td>
                </tr>

                <tr>
                  <td>Department</td>
                  <td>{{ employee.department }}</td>
                </tr>
                
                <tr>
                  <td>Role</td>
                  <td>{{ employee.role }}</td>
                </tr>
                
                <tr>
                  <td>Base Salary</td>
                  <td>{{ employee.baseSalary }}</td>
                </tr>
                
                <tr>
                  <td>Other Allowances</td>
                  <td>{{ employee.allowance }}</td>
                </tr>
                
                <tr>
                  <td>Tax 401k Deduction</td>
                  <td>{{ employee.tax401k }}</td>
                </tr>
                
                <tr>
                  <td>Medical Deduction</td>
                  <td>{{ employee.medical }}</td>
                </tr>
                
                <tr>
                  <td>Net pay</td>
                  <td>{{ employee.netPay }}</td>
                </tr>
                
              </tbody>
            </table>  
        </div>
</div>


    
</template>

<script>
    
import axios from "axios";

function getEmployeeInfo(vm){
    let  employeeid = vm.$route.params.employeeid;

    axios
    .get(`http://localhost:3000/employees/`+employeeid)
    .then(response => {
        //vm.employee = response.data;
        vm.employee = {};
        vm.employee.fullName =  response.data.employee.name.firstName + " " +
                                response.data.employee.name.middleName + " " +
                                response.data.employee.name.lastName;

        vm.employee.role = response.data.employee.role;
        vm.employee.department = response.data.employee.department;
        vm.employee.baseSalary = response.data.employee.compensation.salary.baseSalary;
        vm.employee.allowance = response.data.employee.compensation.salary.allowance;
        vm.employee.tax401k = response.data.employee.compensation.deductions.tax401k;
        vm.employee.medical = response.data.employee.compensation.deductions.medical;
        
        //salary calculations
        vm.employee.netPay = (parseInt(vm.employee.baseSalary) + parseInt(vm.employee.allowance)) 
                                - (parseInt(vm.employee.tax401k)+parseInt(vm.employee.medical));

       // console.log(vm.employee);
    })
    .catch(err => {
      vm.errors.push(err);
    });
}



export default {
  data() {
    return {
        employeeid : this.$route.params.employeeid,
        employee: {},
        errors: []
    };
  },
  mounted(){
      getEmployeeInfo(this);
  }

};


</script>

<style>

</style>