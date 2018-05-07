var mongoose = require('mongoose');
var employeeModel = require('./employee.js');


var exports = module.exports = {};


var connectToMongo = function(){

    var mongoUrl = "mongodb://127.0.0.1:27017/HumanCapitalDb";

    mongoose.connect(mongoUrl);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

exports.createModels = function(){

    connectToMongo();

    var employeeData = {
        "isDeleted" : false,
        "employeeId" : "1",
        "name" : {
            "firstName" : "Maria",
            "middleName" : "R.",
            "lastName" : "Barton"
        },
        "department" : "Accounts",
        "role" : "clerk",
        "compensation":{
            "salary":{
                "baseSalary": "55000",
                "allowance" : "3000"
            },
            "deductions":{
                "tax401k": "1000",
                "medical": "1000"
            }
        }
    };


    // var employee = new employeeModel(employeeData);

    // employee.save(function(err){
    //     if(err){
    //         console.log("unable to save");
    //     }
    //     else{
    //         console.log("saved to db");
    //     }
    // });


    console.log('Db connnection successs');

};