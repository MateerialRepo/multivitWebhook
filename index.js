const express = require('express');
// const dialogflow = require('dialogflow');
require('dotenv').config();

const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const PORT  = process.env.PORT || 7000;


const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This application is up. The dialogflow webhook');

});

app.post('/webhook', (req, res) => {

  let parameters = req.body.queryResult.parameters;

  // get agent from request
  const agent = new WebhookClient({ 
    request: req, 
    response: res 
  });

  // create intentMap for handle intent
  let intentMap = new Map();

  // add intent map: 1st parameter is intent, 2nd parameter is function executable
  intentMap.set('male.condition.response.none', maleResponse)
  intentMap.set('female.condition.response.none', femaleResponse)
  
  // agent to handle request and pass intent map
  agent.handleRequest(intentMap)

  function maleResponse(agent){
    let age = parameters.age;
    let symptoms = parameters.symptoms;

    let botResponse = processResponse(age, symptoms);


    agent.add(botResponse)
  }
  
  function femaleResponse(agent){

    agent.add(botResponse)
  }

  function test(agent){
    agent.add(new Card({
      title: 'Goli Ashwaghanda',
      imageUrl: 'https://onehealthng.gumlet.io/products/4347765256123be6428499product.webp?format=webp&w=480&dpr=1.3',
      text: '₦15,000.00',
      buttonText: 'Click here to BUY NOW!!!',
      buttonUrl: 'https://onehealthng.com/product/goli-ashwa'
      })
      );

  }

});

function processResponse(age, symptom){
  if (age>18 && age<=50){
      switch (symptom){
          case 'IMMUNE BOOSTERS':
          case 'ANTI-STRESS':
              // let text = {
              //   "fulfillmentMessages": [
              //     {
              //       "card": {
              //         "title": "Goli Ashwaghanda",
              //         "subtitle": "₦15,000.00",
              //         "imageUri": "https://onehealthng.gumlet.io/products/4347765256123be6428499product.webp?format=webp&w=480&dpr=1.3",
              //         "buttons": [
              //           {
              //             "text": "Click here to BUY NOW!!!",
              //             "postback": "https://onehealthng.com/product/goli-ashwa"
              //           }
              //         ]
              //       }
              //     // },
              //     // {
              //     //   "card": {
              //     //     "title": "Wellman Plus Omega 3.6.9",
              //     //     "subtitle": "₦8,800.00",
              //     //     "imageUri": "https://onehealthng.gumlet.io/products/70697782060f983ed870acproduct.webp?format=webp&w=480&dpr=1.3",
              //     //     "buttons": [
              //     //       {
              //     //         "text": "Click here to BUY NOW!!!",
              //     //         "postback": "https://onehealthng.com/product/wellman-plus-3-6-9-x-56-tabs"
              //     //       }
              //     //     ]
              //     //   }
              //     // },
              //     // {
              //     //   "card": {
              //     //     "title": "Wellman Original",
              //     //     "subtitle": "₦5,500.00",
              //     //     "imageUri": "https://onehealthng.gumlet.io/products/7554585085dc52958cd44eproduct.jpg?format=webp&w=480&dpr=1.3",
              //     //     "buttons": [
              //     //       {
              //     //         "text": "Click here to BUY NOW!!!",
              //     //         "postback": "https://onehealthng.com/product/wellman-original"
              //     //       }
              //     //     ]
              //     //   }
              //     // },
              //     // {
              //     //   "card": {
              //     //     "title": "Omega-H3",
              //     //     "subtitle": "₦700.00",
              //     //     "imageUri": "https://onehealthng.gumlet.io/products/duzRe9uOkj6M0NzeaG6h3rshXX7vPkQZAWFKSnzd.png?format=webp&w=480&dpr=1.3",
              //     //     "buttons": [
              //     //       {
              //     //         "text": "Click here to BUY NOW!!!",
              //     //         "postback": "https://onehealthng.com/product/omega-h3-per-sachet"
              //     //       }
              //     //     ]
              //     //   }
              //     }
              //   ]
              // }
              let text = {
                  "fulfillmentMessages":[
                    {
                      "payload": {
                        "richContent": [
                          [
                            {
                              "actionLink": "https://onehealthng.com/product/goli-ashwa",
                              "title": "Goli Ashwaghanda",
                              "type": "info",
                              "image": {
                                "src": {
                                  "rawUrl": "https://onehealthng.gumlet.io/products/4347765256123be6428499product.webp?format=webp&w=480&dpr=1.3"
                                }
                              },
                              "subtitle": "₦15,000.00"
                            },
                            {
                              "type": "divider"
                            },
                            {
                              "title": "Wellman Plus Omega 3.6.9",
                              "actionLink": "https://onehealthng.com/product/wellman-plus-3-6-9-x-56-tabs",
                              "subtitle": "₦8,800.00",
                              "image": {
                                "src": {
                                  "rawUrl": "https://onehealthng.gumlet.io/products/70697782060f983ed870acproduct.webp?format=webp&w=480&dpr=1.3"
                                }
                              },
                              "type": "info"
                            },
                            {
                                "type": "divider"
                            },
                            {
                            "title": "Wellman Original",
                            "actionLink": "https://onehealthng.com/product/wellman-original",
                            "subtitle": "₦5,500.00",
                            "image": {
                                "src": {
                                "rawUrl": "https://onehealthng.gumlet.io/products/7554585085dc52958cd44eproduct.jpg?format=webp&w=480&dpr=1.3"
                                }
                            },
                            "type": "info"
                            },
                            {
                                "type": "divider"
                            },
                            {
                            "title": "Omega-H3",
                            "actionLink": "https://onehealthng.com/product/omega-h3-per-sachet",
                            "subtitle": "₦700.00",
                            "image": {
                                "src": {
                                "rawUrl": "https://onehealthng.gumlet.io/products/duzRe9uOkj6M0NzeaG6h3rshXX7vPkQZAWFKSnzd.png?format=webp&w=480&dpr=1.3"
                                }
                            },
                            "type": "info"
                            }
                          ]
                        ]
                      }
                    }
                  ]
                };
                return text;
              break;
          case 'SKIN IMPROVEMENT':
          case 'HAIR':
              text = {
                  "richContent": [
                    [
                      {
                        "actionLink": "https://onehealthng.com/product/perfectil-vitabiotics-plus-dual-pack",
                        "title": "Perfectil Vitabiotics Plus Dual Pack",
                        "type": "info",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/719457180600ed0180c48bproduct.png?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "subtitle": "₦19,700.00"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "title": "Perfectil Platinum by 30",
                        "actionLink": "https://onehealthng.com/product/perfectil-platinum-by-30",
                        "subtitle": "₦9,600.00",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/140455829060b8eafacea38product.jpg?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "type": "info"
                      },
                      {
                          "type": "divider"
                      },
                      {
                      "title": "Perfectil - Skin, Hair & Nails",
                      "actionLink": "https://onehealthng.com/product/perfectil---skin,-hair-&-nails",
                      "subtitle": "₦5,300.00",
                      "image": {
                          "src": {
                          "rawUrl": "https://onehealthng.gumlet.io/products/17156472875f61f6135a60dproduct.jpg?format=webp&w=480&dpr=1.3"
                          }
                      },
                      "type": "info"
                      }
                    ]
                  ]
                };
              return text;
              break;
          case 'NO SET SYMPTOMS':
              text= {
                  "richContent": [
                    [
                      {
                        "link": "https://api.whatsapp.com/send/?phone=%2B2348188762448&text=Hi%2C%20I%20could%20not%20find%20what%20I%20was%20looking%20for%20using%20the%20chatbot.%20Kindly%20assist%20me",
                        "icon": {
                          "color": "#FF9800",
                          "type": "chevron_right"
                        },
                        "type": "button",
                        "text": "Chat with a Pharmacist"
                      }
                    ]
                  ]
                };
              return text;
              break;
          default:
              text= {
                  "richContent": [
                    [
                      {
                        "link": "https://api.whatsapp.com/send/?phone=%2B2348188762448&text=Hi%2C%20I%20could%20not%20find%20what%20I%20was%20looking%20for%20using%20the%20chatbot.%20Kindly%20assist%20me",
                        "icon": {
                          "color": "#FF9800",
                          "type": "chevron_right"
                        },
                        "type": "button",
                        "text": "Chat with a Pharmacist"
                      }
                    ]
                  ]
                };
              return text;
              break;
      }
      
  } else if (age > 50){
      switch (symptom){
          case 'IMMUNE BOOSTERS':
          case 'ANTI-STRESS':
              let text = {
                  "richContent": [
                    [
                      {
                        "actionLink": "https://onehealthng.com/product/wellman-50",
                        "title": "Wellman 50+",
                        "type": "info",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/8379139265f50f5e7651caproduct.jpg?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "subtitle": "₦5,300.00"
                      },
                      {
                        "type": "divider"
                      }
                    ]
                  ]
                };
                return text;
              break;
          case 'SKIN IMPROVEMENT':
          case 'HAIR':
              text = {
                  "richContent": [
                    [
                      {
                        "actionLink": "https://onehealthng.com/product/perfectil-vitabiotics-plus-dual-pack",
                        "title": "Perfectil Vitabiotics Plus Dual Pack",
                        "type": "info",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/719457180600ed0180c48bproduct.png?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "subtitle": "₦19,700.00"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "title": "Perfectil Platinum by 30",
                        "actionLink": "https://onehealthng.com/product/perfectil-platinum-by-30",
                        "subtitle": "₦9,600.00",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/140455829060b8eafacea38product.jpg?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "type": "info"
                      },
                      {
                          "type": "divider"
                      },
                      {
                      "title": "Perfectil - Skin, Hair & Nails",
                      "actionLink": "https://onehealthng.com/product/perfectil---skin,-hair-&-nails",
                      "subtitle": "₦5,300.00",
                      "image": {
                          "src": {
                          "rawUrl": "https://onehealthng.gumlet.io/products/17156472875f61f6135a60dproduct.jpg?format=webp&w=480&dpr=1.3"
                          }
                      },
                      "type": "info"
                      }
                    ]
                  ]
                };
                return text;
              break;
          case 'NO SET SYMPTOMS':
          default:
              text= {
                  "richContent": [
                    [
                      {
                        "link": "https://api.whatsapp.com/send/?phone=%2B2348188762448&text=Hi%2C%20I%20could%20not%20find%20what%20I%20was%20looking%20for%20using%20the%20chatbot.%20Kindly%20assist%20me",
                        "icon": {
                          "color": "#FF9800",
                          "type": "chevron_right"
                        },
                        "type": "button",
                        "text": "Chat with a Pharmacist"
                      }
                    ]
                  ]
                };
                return text;
              break;
      }
  } else {
      switch (symptom){
          case 'IMMUNE BOOSTERS':
          case 'ANTI-STRESS':
              let text = {
                  "richContent": [
                    [
                      {
                        "actionLink": "https://onehealthng.com/product/vitabiotics-wellkid-soft-jelly-strawberry--30-pastilles",
                        "title": "Vitabiotics Wellkid Soft Jelly Strawberry 30 Pastilles",
                        "type": "info",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/11866234656040dbfa4ed3aproduct.jpg?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "subtitle": "₦4,500.00"
                      },
                      {
                        "type": "divider"
                      },
                      {
                        "title": "Wellkid 4-12 yrs Multi-Vitamin Liquid",
                        "actionLink": "https://onehealthng.com/product/wellkid-4-12-yrs-multi-vitamin-liquid",
                        "subtitle": "₦4,500.00",
                        "image": {
                          "src": {
                            "rawUrl": "https://onehealthng.gumlet.io/products/7524375675f43d9d6f1d5cproduct.png?format=webp&w=480&dpr=1.3"
                          }
                        },
                        "type": "info"
                      },
                      {
                          "type": "divider"
                      },
                      {
                      "title": "Wellkid Syrup",
                      "actionLink": "https://onehealthng.com/product/wellkid-syrup",
                      "subtitle": "₦4,500.00",
                      "image": {
                          "src": {
                          "rawUrl": "https://onehealthng.gumlet.io/products/106625513960a61e5df36f4product.png?format=webp&w=480&dpr=1.3"
                          }
                      },
                      "type": "info"
                      },
                      {
                          "type": "divider"
                      },
                      {
                      "title": "Wellkid Multivitamin Chewable Tablets",
                      "actionLink": "https://onehealthng.com/product/wellkid-multivitamin-chewable-tablets",
                      "subtitle": "₦3,700.00",
                      "image": {
                          "src": {
                          "rawUrl": "https://onehealthng.gumlet.io/products/9983765355e715ad952f2cproduct.png?format=webp&w=480&dpr=1.3"
                          }
                      },
                      "type": "info"
                      }
                    ]
                  ]
                };
                return text;
              break;
          case 'SKIN IMPROVEMENT':
          case 'HAIR':
          case 'NO SET SYMPTOMS':
          default:
              text= {
                  "richContent": [
                    [
                      {
                        "link": "https://api.whatsapp.com/send/?phone=%2B2348188762448&text=Hi%2C%20I%20could%20not%20find%20what%20I%20was%20looking%20for%20using%20the%20chatbot.%20Kindly%20assist%20me",
                        "icon": {
                          "color": "#FF9800",
                          "type": "chevron_right"
                        },
                        "type": "button",
                        "text": "Chat with a Pharmacist"
                      }
                    ]
                  ]
                };
                return text;
              break;
      }
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});