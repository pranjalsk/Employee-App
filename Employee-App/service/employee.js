//CRUD OPS

var employeeModel =  require('../models/employee.js');

var exports = module.exports = {};

var sendInternalServerError = function(err,res){
    res.status(501).send(err);
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

    console.log(body);
    //TODO: add validations
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

        //validations
    
        // let employeeUpdate = {
        //     department : body.department,
        //     role : body.role
        // };
        
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