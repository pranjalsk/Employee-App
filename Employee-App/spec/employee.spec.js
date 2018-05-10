var request = require("request");
var base_url = "http://localhost:3000/employees"

describe("Get all employees", function(){
    describe("GET /", function() {	  
        let url = base_url;
		it("Check status code of GET all employees", function(done) {            
            request.get(url, function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });

        it("Check body of GET all employees", function(done) {            
            request.get(url, function (error, response, body) {
                let parsed_body = JSON.parse(body);
                expect(parsed_body.count).not.toEqual(null);
                done();
            });
        });

        it("PUT request at get endpoint should return 404", function(done) {            
            request.put(url, function (error, response, body) {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

    });
    
    describe("POST /", function() {	  
        let url = base_url;
        let reqBody = {
            name : {
                firstName : "Harry",
                middleName : "J.",
                lastName : "Potter"
            },
            department : "IT",
            role : "QA Analyst",
            compensation:{
                salary:{
                    baseSalary: "66000",
                    allowance : "6000"
                },
                deductions:{
                    tax401k: "2000",
                    medical: "1000"
                }
            }
        };

		// it("Check status code for POST request", function(done) {            
        //     request.post(url, {json: true, body: reqBody}, function (error, response) {
        //         expect(response.statusCode).toEqual(200);
        //         done();
        //     });
        // });

        // it("Check body of POST request", function(done) {            
        //     request.post(url, {json: true, body: reqBody}, function (error, response, body) {
        //         expect(body.success).toEqual(true);
        //         done();
        //     });
        // });

    });

    describe("PUT /", function() {	  
        let url = base_url + "/6";
        let reqBody = {
            name : {
                firstName : "Harry",
                middleName : "Jahangir",
                lastName : "Potter"
            },
            department : "IT Admin",
            role : "QA Analyst",
            compensation:{
                salary:{
                    baseSalary: "56000",
                    allowance : "6000"
                },
                deductions:{
                    tax401k: "2000",
                    medical: "1000"
                }
            }
        };

		it("Check status code for PUT request", function(done) {            
            request.put(url, {json: true, body: reqBody}, function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });

        it("Check body of POST request", function(done) {            
            request.put(url, {json: true, body: reqBody}, function (error, response, body) {
                expect(body.updated).toEqual(true);
                done();
            });
        });

        it("POST request at PUT endpoint should return 404", function(done) {            
            request.post(url, function (error, response, body) {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

    });
    


});