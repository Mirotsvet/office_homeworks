interface IHotelInfo {
    hotelName: string;
    hotelAdress: string;
}

type RoomNumber = number;
type GuestAmount = number;

interface IAdditionalService {
    serviceName: string;
    isIncluded: boolean
}

let additionalServicesInfo: IAdditionalService[] = [
    {
        serviceName: 'Service name 1',
        isIncluded: true
    },
    {
        serviceName: 'Service name 2',
        isIncluded: false
    }
];

let serviceInfo: IAdditionalService;

interface IHotelAllInfo {
    hotelInfo: IHotelInfo;
    roomNumber: number;
    guestAmount: number;
    additionalService: IAdditionalService[];
}


@setAdditionalService(additionalServicesInfo, 5)
@setRoomParam(17)
@changeGuestsAmount
class hotel implements IHotelAllInfo {
    hotelInfo: IHotelInfo = {
        hotelName: 'Hotel name value',
        hotelAdress: 'Hotel adress Value'
    };
    roomNumber: RoomNumber = 15;
    guestAmount: GuestAmount = 1;
    additionalService: IAdditionalService[] = additionalServicesInfo;

    getAllAboutHotel() {
        return {
            hotelInfo: this.hotelInfo,
            roomNumber: this.roomNumber,
            guestAmount: this.guestAmount,
            additionalService: this.additionalService
        };
    }
}

function changeGuestsAmount<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        guestAmount: number = 2
    };
}

function setRoomParam(roomNumber: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            roomNumber: number = roomNumber;
            guestAmount: number = roomNumber > 3 ? 5 : 1;
        };
    };
}

function setAdditionalService(additionalServicesInfo: IAdditionalService[], amount: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (amount > 3) {
            return class extends constructor {
                serviceInfo: IAdditionalService = {
                    serviceName: 'Service name 3',
                    isIncluded: true
                };
                additionalService = [...additionalServicesInfo, this.serviceInfo]
            }
        } else {
            return class extends constructor {
                serviceInfo: IAdditionalService = {
                    serviceName: 'Service name 4',
                    isIncluded: true
                };
                additionalService = [...additionalServicesInfo, this.serviceInfo]
            }
        } 
    };
}

console.log(new hotel().getAllAboutHotel());