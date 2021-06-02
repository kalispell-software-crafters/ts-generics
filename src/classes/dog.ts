import { Animal } from 'interfaces/animal';
import { v4 as uuidv4 } from 'uuid';

export class Dog implements Animal {
    id: string;

    constructor() {
        this.id = uuidv4();
    }

    public bark(): string {
        return 'Woof!';
    }
}