const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const { Payload } = require("dialogflow-fulfillment");
process.env.DEBUG = 'dialogflow:debug';
exports.myfunction = functions.https.onRequest((request, response) => {
 const agent = new WebhookClient({ request, response });
 console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
 console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 function welcome(agent) {
   agent.add(`Welcome to my agent!`);
 }
 function fallback(agent) {
   agent.add(`I didn't understand`);
   agent.add(`I'm sorry, can you try again?`);
 }
 
 function pet(agent){
   agent.add(`which one u want`);
   const payload = {
    
    "richContent":[
      [
        {
          "type":"chips",
          "options":[
            {
              "text":"Dog",
              "link" : "https://en.wikipedia.org/wiki/Dog"
            },
            {
              "text":"Cat",
              "link":"https://en.wikipedia.org/wiki/Cat"
            },
            {
            "text":"Rabbit",
            "link" : "https://en.wikipedia.org/wiki/Rabbit"
            }
          ]
        }
      ]
    ]
   
  };
  agent.add(new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true}));
}
 let intentMap = new Map();
intentMap.set('Default Welcome Intent', welcome);
intentMap.set('Default Fallback Intent', fallback);
 intentMap.set('mypet',pet);
 agent.handleRequest(intentMap);
});