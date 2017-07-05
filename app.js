
'use strict';
var apiai = require('apiai');

var appai = apiai("5f690c52bd5548e989fe4db8a512dc84");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};


   app.post('/',function(req,res){
console.log("name "+req.body.result.metadata.intentName);
console.log('request of parent:'+ JSON.stringify(req.body));
 if (req.body.result.metadata.intentName=='payment')
 {
  var apiagentreq=req.body.result&&req.body.result.parameters;
  var resagent=' Conform order for the payment';

  console.log('request are'+ JSON.stringify(apiagentreq));

  return res.json({
    speech:resagent,
    displayText: resagent,
    source:'booking'  });
 }


});







app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
