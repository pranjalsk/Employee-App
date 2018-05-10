//CRUD OPS

var employeeModel =  require('../models/employee.js');

var exports = module.exports = {};

var sendInternalServerError = function(err,res){
    res.status(501).send(err);
};

var invalidInput = function (err, res) {
	res.status(400).send(err);
};

var validateBody = function( body ){
    if(!body.name.firstName) invalidInput('invalid firstname',res);
    if(!body.name.middleName) invalidInput('invalid middlename',res);
    if(!body.name.lastName) invalidInput('invalid lastname',res);
    if(!body.department) invalidInput('invalid department',res);
    if(!body.role) invalidInput('invalid role',res);
    if(!body.compensation.salary) invalidInput('invalid compensation',res);
    if(!body.compensation.deductions) invalidInput('invalid compensation',res);
    return true;
};

exports.getAllEmployees = function(res, params){

    params.isDeleted = false;
    var query = employeeModel.find({isDeleted : false});

    query.exec(
        function(err,data){
            if(err) sendInternalServerError(err,res);
            else if(data){
                console.log(data);
                res.send(
                    {
                        "count": data.length,
                        "employees": data
                    }
                );
            }
            else{
                res.send({"count": 0});
            }
        }
    );

};

exports.getEmployeeById = function(res,id){

    var query = employeeModel.findOne({
        employeeId : id,
        isDeleted : false
    });

    query.exec(function (err,data) { 
        if(err) sendInternalServerError(err,res);
        else if(data){
            res.send(
                {
                    "found": true,
                    "employee": data
                }
            );
        }
        else{
            res.send({"found": false});
        }
    });
};


exports.addNewEmployee = function(res, body){

    validateBody(body);

    let employee = {};
    //GetCount
    employeeModel.find().count(function(err, count){

        employee = {
            isDeleted : false,
            employeeId :  count+1,
            name : {
                firstName : body.name.firstName,
                middleName : body.name.middleName,
                lastName : body.name.lastName
            },
            department : body.department,
            role : body.role,
            compensation : body.compensation
        };
        var query = new employeeModel(employee);

        query.save(function(err){
            if(err) sendInternalServerError(err.errmsg,res);
            else{
                res.send({"success": true});
            }
        });
    });
    
};


exports.updateEmployeeById = function (res, body, id){

        console.log(body);
        var query = employeeModel.update({employeeId:id, isDeleted:false}, body);
    
        query.exec(
            function (err) { 
                if(err) sendInternalServerError(err,res);
                else{
                    res.send(
                        {
                            "updated": true
                        }
                    );
                }
            }
        ); 
};


exports.deleteEmployeeById = function (res, body, id){

        var query = employeeModel.update({employeeId:id, isDeleted:false}, {isDeleted:true});
        
        query.exec(
            function (err) { 
                if(err) sendInternalServerError(err,res);
                else{
                    res.send(
                        {
                            "deleted": true
                        }
                    );
                }
            }
        ); 
};