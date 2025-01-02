// ---------------------------------------------------------

let uneVar: string | number;

function ajouter(a: string | number, b: string | number) {
  return Number(a) + Number(b);
}

// ---------------------------------------------------------

//! Probleme
/*
interface User6 {
  name: string;
  email: string;
}

interface Moderator extends User6 {
  role: 'moderator';
  editMessage: (msg: string) => string
}

function uneFonction(user: User6 | Moderator) {
  user.editMessage('un message')
}
*/

//! unions discriminantes
interface User6 {
  role: 'user';
  name: string;
  email: string;
}

interface Moderator {
  role: 'moderator';
  name: string;
  email: string;
  //! Definition
  editMessage: (msg: string) => string
}

function uneFonction(user: User6 | Moderator) {
  //! Garde de types (if)
  if (user.role === 'moderator') {
    user.editMessage('un message');
  }
  if (isMod(user)) {
    user.editMessage('un message');
  }
  if ('editMessage' in user) {
    user.editMessage('un message')
  }
}

//! Fonction de predicat
// 'is' permet de reduire a un type
function isMod(user: User6 | Moderator): user is Moderator {
  return (user as Moderator).editMessage !== undefined;
}

//! unions discriminantes (autre exemple)
interface Carre {
  forme: "carre";
  cote: number;
}
interface Rectangle {
  forme: "rectangle";
  largeur: number;
  hauteur: number;
}
interface Cercle {
  forme: "cercle";
  rayon: number;
}

type Forme = Carre | Rectangle | Cercle;

function calcAire(e: Forme) {
  //! Garde de types (switch)
  switch (e.forme) {
    case "carre":
      return e.cote * e.cote;
    case "rectangle":
      return e.largeur * e.hauteur;
    case "cercle":
      return Math.PI * e.rayon ** 2;
  }
}

// ---------------------------------------------------------

//! Intersections
// Combiner plusieurs interfaces en un type
//! Attention a ne pas avoir de discriminant dans les interfaces
interface User7 {
  name: string;
  email: string;
}

interface Moderator2 {
  role: 'moderator';
  editMessage: (msg: string) => string
}

const moderateur: User7 & Moderator2 = {
  name: 'Jean',
  email: 'jean@gmail.com',
  role: 'moderator',
  editMessage : (message: string) => 'Message édité',
};

// ---------------------------------------------------------

//! Comparer falsy ou truthy
// undefined, null, NaN, '', "", ``
let utilisateur1 = moderateur || 'inconnu';

//! Comparer null et/ou undefined
// undefined, null
let utilisateur2 = moderateur ?? 'inconnu';

//! Verification de chainage
let obj2: { toto: { titi: string, hello: Function } };
obj2?.toto?.titi;

//! Verifier si c'est bien une fonction
const var1 = obj2?.toto?.hello?.();

// ---------------------------------------------------------

//! Utiliser les alias pour des types literaux
//! ardez plutot les interfaces
type Chaine = string;
let maVar1: Chaine;

type Animal = 'chat' | 'chien' | 'koala';
let animal: Animal;
function sortir(animal: Animal) {}

// ---------------------------------------------------------