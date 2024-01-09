interface HumanInterface {
  name: string,
  lastName: string
}

interface HeroInterface extends HumanInterface {
  superPower: string
}

class SuperHero implements HeroInterface {

  name: string;
  lastName: string;
  superPower: string;

  constructor(name: string, lastName: string, superPower: string) {
    this.name = name;
    this.lastName = lastName;
    this.superPower = superPower;
  }
}
// Accediendo a las propiedades de un objeto que implementa una interf
const superHero: HeroInterface = new SuperHero('Esteban', 'Solano', 'Fly');
console.log(superHero.name);
console.log(superHero.lastName);
console.log(superHero.superPower);
