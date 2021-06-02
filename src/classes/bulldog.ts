import { Dog } from "./dog";

export class Bulldog extends Dog {
    public pant(): string {
        return "Panting.";
    }
}