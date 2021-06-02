import { v4 as uuidv4 } from 'uuid';

export class Boat {
    modelNumber: string;

    constructor() {
        this.modelNumber = uuidv4();
    }
}