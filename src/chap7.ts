// ---------------------------------------------------------

//! Utilisation de Promise avec un type generique
let condition: boolean;

const promesse: Promise<number | string> = new Promise((resolve, reject) => {
  if (condition) {
    resolve(42)
  } else {
    reject('Erreur');
  }
});

const array3: Array<string> = ['toto', 'titi'];
const array4: string[] = ['toto', 'titi'];

// ---------------------------------------------------------

// function identique(arg: string): string
// function identique(arg: number): number

//! fonction generique
function identique<T>(arg: T): T {
  return arg;
}

identique<number>(42);

//! L'inference
identique(42);

// ---------------------------------------------------------

//! Signature de fonction generique
let fonction: <T>(arg: T) => T;

//! Declaration de fonction generique
function fusionner<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign(obj1, obj2);
}

const obj = fusionner({name: 'Jean'}, {email: 'jean@gmail.com'});

if (obj.name) {
  console.log(obj.name);
}

// ---------------------------------------------------------

//! Interface de fonction generique
interface FonctionGenerique<T, U> {
  //! definition de fonction
  (arg: T): U;
}

let fonction1: FonctionGenerique<string, number>;

fonction1 = function(arg: string): number {
  return Number(arg)
}

// ---------------------------------------------------------

//! Classe generique
class Stack<T> {
  items: T[] = [];

  push(item: T) {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.length ? this.items.pop() : undefined;
  }

  display() {
    console.log(this.items)
  }
}

let stack1 = new Stack<string>();
stack1.push('test');
stack1.push('test2');
stack1.pop();
stack1.display();

// ---------------------------------------------------------

//! Contraindre un type generique
interface HasLength {
  length: number;
}

function maFunction1<T extends HasLength>(arg: T): T {
  arg.length;
  return arg;
}

//! Exemple 2
function maFunction2<T extends Array<any>>(arg: T): T {
  arg.reverse();
  return arg;
}

//! Exemple 3
interface Todo {
  id: number;
  texte: string;
  auteur: string;
}
  
type TodoProps = keyof Todo; // "id" | "texte" | "auteur"

function getProperty<T, U extends keyof T>(obj: T, cle: U) {
  return obj[cle];
}

const obj3 = { prop1: 1, prop2: 2, prop3: 3, prop4: 4 };

getProperty(obj3, "prop1");

// ---------------------------------------------------------

//! Partial
//* Permet de rendre les proprietes facultatives
interface Todo2 {
  id: number;
  texte: string;
  auteur: string;
}

function majTodo(todo: Todo2, update: Partial<Todo2>) {
  return { ...todo, ...update };
}

let todo1: Todo2 = {
  id: 1,
  texte: 'Apprendre JavaScript',
  auteur: 'Jean'
}

todo1 = majTodo(todo1, {
  texte: 'Apprendre TypeScript',
});

// ---------------------------------------------------------

//! Record
interface PageInfo {
  title: string;
}

//* ALIAS
type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'A propos' },
  contact: { title: 'Contact' },
  home: { title: 'Accueil' },
};

// ---------------------------------------------------------

//! Autres ...
//* Il y en a pleins d'autres, voir la documentation