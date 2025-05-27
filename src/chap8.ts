import * as $ from 'jquery';
import { User } from './types';
import { add } from '../mylib/add';

// ---------------------------------------------------------
// NAMESPACE

export namespace Shape {
  export const user: User = {
    id: 1,
    name: 'John Doe',
  };

  export class Circle {}

  export class Square {
    width: number;

    getArea(): number {
      return this.width * this.width;
    }
  }
}

// ---------------------------------------------------------
// Fichiers types (d.ts)

//! paths dans tsconfig permet de mapper les imports
// paths n'est utile seulement si le @types n'est pas installé

//! baseUrl dans tsconfig permet de définir le répertoire de base pour les imports

const myh1 = $('h1');

// ---------------------------------------------------------
// DECLARE

//! Utile pour déclarer des variables globales ou des modules externes via CDN par exemple
// Il faut dire au compilateur TypeScript que tel ou tel objet existe

declare const Swal: any;

Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

// ---------------------------------------------------------
// Fichiers types

//! typeRoots dans tsconfig sert à indiquer où se trouvent les fichiers types 

add(1, 2);

const myh2 = $('h2');

// ---------------------------------------------------------