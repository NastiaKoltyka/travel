export class Hotel {
    check: boolean;
    id: number;
    country_id: number;
    hotelName: string;
    freeSeatsInHotel: number;
    city: string;
    checkIn: Date;
    checkOut: Date;

    constructor(check: boolean, id: number, country_id: number, hotelName: string, freeSeatsInHotel: number, city: string, checkIn: Date, checkOut: Date) {
        this.check = check;
        this.id = id;
        this.country_id = country_id;
        this.hotelName = hotelName;
        this.freeSeatsInHotel = freeSeatsInHotel;
        this.city = city;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}
