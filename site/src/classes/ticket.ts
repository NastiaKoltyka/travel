export class Ticket {
    check: boolean;
    id: number;
    country_id: number;
    airline: string;
    freeSeats: number;
    date: Date;

    constructor(check: boolean, id: number,  country_id: number, airline: string, freeSeats: number, date: Date) {
        this.check = check;
        this.id = id;
        this.country_id = country_id;
        this.airline = airline;
        this.freeSeats = freeSeats;
        this.date = date;
    }
}
