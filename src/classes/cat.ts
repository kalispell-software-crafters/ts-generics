import { Animal } from 'interfaces/animal';
import { v4 as uuidv4 } from 'uuid';

export class Cat implements Animal {
    id: string;

    constructor() {
        this.id = uuidv4();
    }

    public action(): string {
        return 'Purr.';
    }
}