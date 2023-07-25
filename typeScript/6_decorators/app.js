"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AdditionalServices = [
    {
        serviceName: 'Service name 1',
        isIncluded: true
    },
    {
        serviceName: 'Service name 2',
        isIncluded: false
    }
];
let hotel = class hotel {
    constructor() {
        this.hotelInfo = {
            hotelName: 'Hotel name value',
            hotelAdress: 'Hotel adress Value'
        };
        this.roomNumber = 15;
        this.guestAmount = 1;
        this.additionalService = AdditionalServices;
    }
    getAllAboutHotel() {
        return {
            hotelInfo: this.hotelInfo,
            roomNumber: this.roomNumber,
            guestAmount: this.guestAmount,
            additionalService: this.additionalService
        };
    }
};
hotel = __decorate([
    setAdditionalService(AdditionalServices, 5),
    setRoomParam(17),
    changeGuestsAmount
], hotel);
function changeGuestsAmount(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.guestAmount = 2;
        }
    };
}
function setRoomParam(roomNumber) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.roomNumber = roomNumber;
                this.guestAmount = roomNumber > 3 ? 5 : 1;
            }
        };
    };
}
function setAdditionalService(services, amount) {
    return (constructor) => {
        if (amount > 3) {
            return class extends constructor {
                constructor() {
                    super(...arguments);
                    this.additionalService = [
                        {
                            serviceName: 'Service name 1',
                            isIncluded: true
                        },
                        {
                            serviceName: 'Service name 2',
                            isIncluded: false
                        },
                        {
                            serviceName: 'Service name 3',
                            isIncluded: true
                        }
                    ];
                }
            };
        }
        else {
            return class extends constructor {
                constructor() {
                    super(...arguments);
                    this.additionalService = [
                        {
                            serviceName: 'Service name 1',
                            isIncluded: true
                        },
                        {
                            serviceName: 'Service name 2',
                            isIncluded: false
                        },
                        {
                            serviceName: 'Service name 4',
                            isIncluded: true
                        }
                    ];
                }
            };
        }
    };
}
console.log(new hotel().getAllAboutHotel());
