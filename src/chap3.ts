// ---------------------------------------------------------

// typer les params de la fonctions et typer la valeur de retour
function multiplier(x: number, y: number): number {
  return x * y;
}

// ---------------------------------------------------------

//! definition
let add: (nombre1: number, nombre2: number) => number;

//! declaration
add = (x: number, y: number) => {
  return x + y;
}

// ---------------------------------------------------------

// parametres optionnels
function ajouter(x: number, y: number, z?: number): number {
  if (z) return x + y + z;
  return x + y;
}

console.log(ajouter(1, 2, 3));
console.log(ajouter(1, 2));

// ---------------------------------------------------------

// parametres par defaut
function ajouter2(x = 0, y = 0): number {
  return x + y;
}

console.log(ajouter2());

// ---------------------------------------------------------

//! rest operator
function ajouter3(x = 0, y = 0, ...nbr: number[]): number {
  console.log(x, y, nbr);
  return 0;
}

ajouter3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ---------------------------------------------------------

// Surcharge de fonctions

// definitions
function maFonction(param: string): string;
function maFonction(param: number): number;

// declaration
function maFonction(param: any): any {
  return param;
}

console.log(maFonction('test'));
console.log(maFonction(42));
// console.log(maFonction(true)); // Ne fonctionne pas

interface User {}
function getUser(id: number): User;
function getUser(email: string): User;
function getUser(prenom: string, nom: string): User;

function getUser(param1: string | number, param2?: string ): User {

  let user: User;

  if (typeof param1 === 'number') {
      // Récupère le user par id
  } else if (typeof param2 != 'undefined') {
      // Récupère le user par prénom et nom
  } else {
      // Récupère le user par email
  }

  return user;
}

// getUser(42, 'test'); // Ne fonctionne pas

// ---------------------------------------------------------