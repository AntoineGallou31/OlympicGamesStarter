import { Participation } from "./Participation";

export class Olympic {
    constructor( 
        public country: string,
        public id: number,
        public participations: Participation[],
    ) {}
}