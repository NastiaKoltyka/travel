export class Country {
    check:boolean
    id: number;
    name: string;
    status: boolean;
    countOfHotels: number;
    countOfTickets: number;

    constructor(check:boolean, id: number, name: string, status: boolean, countOfHotels: number, countOfTickets: number) {
        this.check=check;
        this.id = id;
        this.name = name;
        this.status=status;
        this.countOfHotels=countOfHotels;
        this.countOfTickets=countOfTickets;
    }
}
