// ---------------------------------------------------------
// Types natifs (les éléments du DOM)
// lib.dom.d.ts

const h1 = document.querySelector('h1');

// ---------------------------------------------------------
// Types mappés

// Partial est un type utilitaire
// Les types mappés servent à transformer un type en un autre

// Par exemple, recréer le type Partial seulement pour Person
//! P est le type de la propriété actuellement traitée
// Donc ici, P va itérer sur les clés de Person et les rendre optionnelles
// On utilise le mot-clé `in` pour itérer sur les clés
type MyPartial = { [P in keyof Person]?: Person[P] };

//! Amélioration de MyPartial
// Ceci se nomme un type mappé
type MyPartial2<T> = { [P in keyof T]?: T[P] };

interface Person {
  name: string;
  age: number;
}

const user: MyPartial2<Person> = {
  name: 'Alice',
};

//* La différence entre interface et type
// Les interfaces sont extensibles avec le mot-clé `extends`, les types ne le sont pas

//* Quand utiliser un type ou une interface ?
// En général, on utilise des interfaces pour les objets et les types pour les unions ou les types primitifs

// ---------------------------------------------------------
// Types conditionnels

//* Anciennement
interface Lengthy {
  length: number;
}

function func<T extends Lengthy>(x: T) {
  return x.length;
}
//* ------------

// declare permet d'eviter l'implémentation de la fonction
declare function func2<T>(x: T): T extends string ? number : boolean;

//* Exclude 

type MyType = Exclude<'a' | 'b', 'a'>;

type MyExcludeType<T, U> = T extends U ? never : T;

type MyType2 = MyExcludeType<'a' | 'b', 'a'>;

//* Extract

type MyType3 = Extract<'a' | 'b', 'a'>;

type MyExtractType<T, U> = T extends U ? T : never;

type MyType4 = MyExtractType<'a' | 'b', 'a'>;

// ---------------------------------------------------------
// L'inférence des types conditionnels

//* Partons du principe que nous n'avons pas accès à la déclaration de la fonction
interface Func {
  (t: string, d: number): string;
}

//! key word `infer` permet d'inférer un type à l'intérieur d'un type conditionnel 
type MyReturnType<T> = T extends (...args: any[]) => infer FunctionReturn ? FunctionReturn : any;

//* Nous retrouvons le type de retour de la fonction Func sans avoir intéragi avec la fonction
//* Grâce à `infer`, nous pouvons inférer le type de retour de la fonction
type FunctionReturnType = MyReturnType<Func>;



type MyFunctionParameterType<T> = T extends (...arg: infer Args) => any ? Args : void;

type FunctionParameterType = MyFunctionParameterType<Func>;

// ---------------------------------------------------------
