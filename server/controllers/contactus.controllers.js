var mongoose = require('mongoose');
var ContactUs = mongoose.model('ContactUs');

var Slack = require('node-slack');
var hook_url = 'https://hooks.slack.com/services/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';
var slack = new Slack(hook_url);

//Post a career application 
module.exports.contactUs = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var params = { 
        name : name,
        message : message, 
        email : email
    };
    
    ContactUs
        .create(params, function(err, contact){
        if(err) {
            console.log(err);
            res
                .status(400)
                .json(err);
        }
        else { 
            
            console.log("Application Posted", contact);
            res
                .status(201)
                .json({success: true, contact: contact});
            
            var testString = 
                slack.send({
                    text : 'Contact Us - New Contact Alert. Message Received: ' + contact.message,
                    channel : '#vdops-website', 
                    username : 'vdops-contactus'
                })
        }            
    });
}
