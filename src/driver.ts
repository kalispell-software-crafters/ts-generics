import { Cat } from './classes/cat'
import { Dog } from './classes/dog'
import { Boat } from './classes/boat'
import { Animal } from './interfaces/animal';
import { Siamese } from './classes/siamese';
import { Spaneil } from './classes/spaniel';
import { Lynx } from './classes/lynx';
import { Bulldog } from './classes/bulldog';
import { Tiger } from './classes/tiger';

export function main(): void {
  const cat = new Cat();
  const dog = new Dog();

  const catId = getId<Cat>(cat);
  console.log('Cat\'s ID: ', catId);

  const dogId = getId<Dog>(dog);
  console.log('Dog\'s ID: ', dogId);

  const boat = new Boat();
  //const boatId = getId<Boat>(boat);  // Won't compile, property id is missing but required in Animal

  const saimese = new Siamese();
  const lynx = new Lynx();
  const tiger = new Tiger();
  const spaniel = new Spaneil();
  const bulldog = new Bulldog();

  const items = [cat, dog, boat];
  //const itemIds = items.map(item => getId<typeof item>(item)); // Won't compile, property id is missing in Boat but required in Animal


  const animals = [saimese, lynx, spaniel, bulldog, tiger];
  
  type OnlyFelineTypes = ExtractFelines<typeof animals[number]>;
  const cats: OnlyFelineTypes[] = [];
  cats.push(saimese);
  cats.push(lynx);
  cats.push(tiger);
  //cats.push(dog); // Dog is not assignable to parameter of type OnlyFelineTypes. Missing stalk
  //cats.push(boat); // Boat is not assignable to parameter of type OnlyFelineTypes. Missing stalk, id


  type OnlyStalkingFelineTypes = ExtractStalkingTypes<typeof cats[number]>;
  const stalkPrey = (cat: OnlyStalkingFelineTypes): string => {
    return cat.stalk();
  }

  //cats.forEach(cat => stalkPrey(cat)); // Saimese is being checked here and fails, missing stalk method
}


function getId<T extends Animal>(animal: T): string {
    return animal.id;
}


type ExtractFelines<T> = T extends Cat ? T : never;
type ExtractStalkingTypes<T> = T extends { stalk(): string } ? T : never;



main();