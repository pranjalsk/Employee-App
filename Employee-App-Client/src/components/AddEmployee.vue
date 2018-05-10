<template>
    <div>
        <div class="container">
        <form>
            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">FirstName*</label>
                <div class="col-sm-6">
                <input v-model="emp.firstName" type="input" class="form-control" name="FirstName" v-validate="'required|alpha'" >
                <span v-show="errors.has('FirstName')">{{ errors.first('FirstName') }}</span>
                </div>
                
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">MiddleName*</label>
                <div class="col-sm-6">
                <input v-model="emp.middleName" type="input" class="form-control" name="MiddleName" v-validate="'required|alpha'" >
                 <span v-show="errors.has('MiddleName')">{{ errors.first('MiddleName') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">LastName*</label>
                <div class="col-sm-6">
                <input v-model="emp.lastName" type="input" class="form-control" name="LastName" v-validate="'required|alpha'" >
                <span v-show="errors.has('LastName')">{{ errors.first('LastName') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Department*</label>
                <div class="col-sm-6">
                <input v-model="emp.department" type="input" class="form-control" name="Department" v-validate="'required|alpha_dash'" >
                <span v-show="errors.has('Department')">{{ errors.first('Department') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Role*</label>
                <div class="col-sm-6">
                <input v-model="emp.role" type="input" class="form-control" name="Role" v-validate="'required|alpha_dash'" >
                <span v-show="errors.has('Role')">{{ errors.first('Role') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Base Salary*</label>
                <div class="col-sm-6">
                <input v-model="emp.baseSalary" type="number" class="form-control" name="BaseSalary" v-validate="'required|numeric'">
                <span v-show="errors.has('BaseSalary')">{{ errors.first('BaseSalary') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Allowances*</label>
                <div class="col-sm-6">
                <input v-model="emp.allowance" type="number" class="form-control" name="Allowances" v-validate="'required|numeric'">
                <span v-show="errors.has('Allowances')">{{ errors.first('Allowances') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Tax 401k Deductions*</label>
                <div class="col-sm-6">
                <input v-model="emp.tax401k" type="number" class="form-control" name="Tax401kDeductions" v-validate="'required|numeric'">
                <span v-show="errors.has('Tax401kDeductions')">{{ errors.first('Tax401kDeductions') }}</span>
                </div>
            </div>

            <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Medical Deductions*</label>
                <div class="col-sm-6">
                <input v-model="emp.medical" type="number" class="form-control" name="MedicalDeductions" v-validate="'required|numeric'">
                <span v-show="errors.has('MedicalDeductions')">{{ errors.first('MedicalDeductions') }}</span>
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
    axios.post( vm.$store.state.IP_Config +`/employees/`, postbody)
    .then(response => {
        //TODO if true...tell success
        if(response.data.success){
            vm.$toastr('add', {
                            title: 'Successfully Posted', // Toast Title
                            msg: '', // Message
                            timeout: 2000, // Timeout in ms
                            type: 'success' // Toastr type
                        });
        }
        console.log(response.data);
    })
    .catch(e => {
      this.reqerrors.push(e)
    })  

};


export default {
  data() {
    return {
        emp: {},
        reqerrors: []
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