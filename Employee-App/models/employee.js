var mongoose = require('mongoose');

var schema = mongoose.Schema;

var employeeModel = new schema({
    isDeleted : { type: Boolean, required:true, default:false},
    employeeId : {type: String, unique: true, required: true, max:100},
    name : {
        firstName: {type: String, required: true, max:100},
        middleName: {type: String, max:100},
        lastName: {type: String, required: true, max:100},
    },
    department:{type: String, required: true, max:100},
    role:{type: String, required: true, max:100},
    compensation:{
        salary: {
            baseSalary:{type: String, required: true, max:100},
            allowance: {type: String, required: true, max:100}
        },
        deductions:{
            tax401k: {type: String, required: true, max:100},
            medical: {type: String, required: true, max:100}
        }
    }
}); 

module.exports = mongoose.model('EmployeeModel', employeeModel);