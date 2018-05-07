var express = require('express');
var router = express.Router();
var employeeService = require('../service/employee.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    employeeService.getAllEmployees(res,req.query);
    
});


router.get('/:id', function(req, res, next){

    employeeService.getEmployeeById(res,req.params.id);

});


router.post('/', function(req,res,next){
   
    employeeService.addNewEmployee(res, req.body);

});

router.put('/:id', function(req,res,next){

    employeeService.updateEmployeeById(res, req.body, req.params.id);

});

router.delete('/:id', function(req,res,next){

    employeeService.deleteEmployeeById(res, req.body, req.params.id);

});


module.exports = router;
