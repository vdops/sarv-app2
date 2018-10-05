var mongoose = require('mongoose');
var Careers = mongoose.model('Careers');

var Slack = require('node-slack');
var hook_url = 'https://hooks.slack.com/services/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';
var slack = new Slack(hook_url);


//Post a career application 
module.exports.careersApply = function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var gender = req.body.gender;
    var qualification = req.body.qualification; 
    var experience = req.body.experience;
    var specialisation = req.body.specialisation;
    var residingCountry = req.body.residingCountry;
    var phone = req.body.phone;
    var email = req.body.email;
    var params = { 
        firstName : firstName,
        lastName : lastName, 
        gender : gender,
        qualification : qualification,
        experience : experience, 
        specialisation : specialisation,
        residingCountry : residingCountry,
        phone : phone, 
        email : email
    };
    
    Careers
        .create(params, function(err, careers){
        if(err) {
            console.log(err);
            res
                .status(400)
                .json(err);
        }
        else { 
            
            console.log("Application Posted", careers);
            res
                .status(201)
                .json({success: true, careers: careers});
            var testString = 
                slack.send({
                    text : 'New Career Applicant for Specialization: ' + careers.specialisation,
                    channel : '#vdops-website', 
                    username : 'vdops-careers'
                })
        }            
    });
}
