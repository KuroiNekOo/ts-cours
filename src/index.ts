// ---------------------------------------------------------

// string, number, boolean, bigint, symbol, null, undefined (primitives)
const toto1: string = 'hello';
const toto2: number = 42;
const toto3: boolean = true;

console.log(toto1, toto2, toto3);

// ---------------------------------------------------------

// object (non primitive)
// objet littéral ou tableau
const obj1: object = {
  firstname: 'Jean',
};

console.log(obj1);

// ---------------------------------------------------------

// type any (tout)
const toto4: any = 'toto4';

// ---------------------------------------------------------

// les tableaux (array)
//! Nombre indefini d'elements
const liste1: number[] = [1, 2, 3];
const liste1_1: Array<number> = [1, 2, 3];
// les deux c'est la meme chose 
const liste2: any[] = [1, {}, 'test'];
const liste2_2: Array<any> = [1, {}, 'test'];

// ---------------------------------------------------------

// les tuples ()
//! Nombre defini d'elements
//khssk dir string ead number 
const tuple1: [string, number] = ['t', 42];

// ---------------------------------------------------------

// les enumerations
enum Couleur {
  Bleu = '#2980b9',
  Vert = "#27ae60",
  Rouge = '#c0392b',
};
console.log(Couleur.Bleu); // #2980b9

enum Code {
  UN, // 0
  DEUX = 11, // 11
  TROIS, // 12
  QUATRE, // 13
};

// ---------------------------------------------------------

// null, undefined, void, never

let toto5: number = 5;
let toto6: string;

//! void n'est que pour les retours de fonctions
function myFunction(num: number): void | number {
  console.log('myFunction');
  return num;
}

toto5 = null;
toto5 = 10;
toto6 = 'Jean';

//! never sert pour des fonctions qui retournent obligatoirement des erreurs ou des processus infini
function error(message: string): never {
  throw new Error(message);
}

function echec(): never {
  return error('Problème !');
}

// function boucleInfinie(): never {
//   while(true) {
//   }
// }

// ---------------------------------------------------------

//! L'inference detecte le type d'une variable dans le context actuel
let toto7 = 42; // number

//! L'assertion est le casting d'une valeur
let maVar: any = "Une chaîne";
let longueur1: number = (maVar as string).length;
let longueur2: number = (<string>maVar).length;

// ---------------------------------------------------------