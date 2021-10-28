//for male
const age;
const intent;

if (age>18 && age<=50){
    switch (intent){
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
            let response = {
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
              };
            break;
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
            let response = {
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
            break;
        case 'NO SET SYMPTOMS':
            let response= {
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
            break;
        default:
            let response= {
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
            break;
    }
    return response;

} else if (age > 50){
    switch (intent){
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
            let response = {
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
            break;
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
            let response = {
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
            break;
        case 'NO SET SYMPTOMS':
        default:
            let response= {
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
            break;
    }
    return response;
} else {
    switch (intent){
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
            let response = {
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
            break;
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
        case 'NO SET SYMPTOMS':
        default:
            let response= {
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
            break;
    }
    return response;
}

function processResponse(age, symptom){
    if (age>18 && age<=50){
        switch (intent){
            case 'IMMUNE BOOSTERS':
            case 'ANTI-STRESS':
                let response = {
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
                  };
                break;
            case 'SKIN IMPROVEMENT':
            case 'HAIR':
                let response = {
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
                break;
            case 'NO SET SYMPTOMS':
                let response= {
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
                break;
            default:
                let response= {
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
                break;
        }
        return response;
    
    } else if (age > 50){
        switch (intent){
            case 'IMMUNE BOOSTERS':
            case 'ANTI-STRESS':
                let response = {
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
                break;
            case 'SKIN IMPROVEMENT':
            case 'HAIR':
                let response = {
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
                break;
            case 'NO SET SYMPTOMS':
            default:
                let response= {
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
                break;
        }
        return response;
    } else {
        switch (intent){
            case 'IMMUNE BOOSTERS':
            case 'ANTI-STRESS':
                let response = {
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
                break;
            case 'SKIN IMPROVEMENT':
            case 'HAIR':
            case 'NO SET SYMPTOMS':
            default:
                let response= {
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
                break;
        }
        return response;
    }
}

// for female
const age;
const intent;

if (age>18 && age<=50){
    switch (intent){
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
            let response = {
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
                      "title": "Wellwoman Plus Omega 3-6-9",
                      "actionLink": "https://onehealthng.com/product/wellwoman-plus-omega-3-6-9",
                      "subtitle": "₦9,500.00",
                      "image": {
                        "src": {
                          "rawUrl": "https://onehealthng.gumlet.io/products/181439578760d20034762bdproduct.jpg?format=webp&w=480&dpr=1.3"
                        }
                      },
                      "type": "info"
                    },
                    {
                        "type": "divider"
                    },
                    {
                    "title": "Wellman Original",
                    "actionLink": "https://www.onehealthng.com/product/wellwoman-original",
                    "subtitle": "₦5,500.00",
                    "image": {
                        "src": {
                        "rawUrl": "https://onehealthng.gumlet.io/products/508224105609e9e5dd26f3product.jpeg?format=webp&w=480&dpr=1.3"
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
              };
            break;
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
            let response = {
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
            break;
        case 'NO SET SYMPTOMS':
            let response= {
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
            break;
        default:
            let response= {
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
            break;
    }
    return response;

} else if (age > 50){
    switch (intent){
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
            let response = {
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
            break;
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
        case 'NO SET SYMPTOMS':
        default:
            let response= {
                "richContent": [
                  [
                    {
                      "link": "https://api.whatsapp.com/send/?phone=%2B2348188762448&text=Hi%2C%20I%20could%20not%20find%20what%20I%20was%20looking%20for%20using%20the%20chatbot.%20Kindly%20assist%20me",
                      "icon": {
                        "color": "#FF9800",
                        "type": "chevron_right"
                      },
                      "type": "button",
                      "text": "We are unable to provide a drug recommendation right now. Please click on this button to Chat with a Pharmacist"
                    }
                  ]
                ]
              };
            break;
    }
    return response;
} else {
    switch (intent){
        case 'IMMUNE BOOSTERS':
        case 'ANTI-STRESS':
            let response = {
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
            break;
        case 'SKIN IMPROVEMENT':
        case 'HAIR':
        case 'NO SET SYMPTOMS':
        default:
            let response= {
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
            break;
    }
    return response;
}