//! Une interface n'est pas disponible lors de l'execution / compilation
//! Si vous voulez verifier un type lors de l'execution, il est recommandee d'utiliser les abstract

// ---------------------------------------------------------

interface User {
  prenom: string;
  nom?: string;
  readonly age: number;
}

const paul: User = {prenom: 'Paul', nom: 'Dupont', age: 21};

function printUser(user: User) {
  console.log(user.prenom);
}

printUser(paul);

// ---------------------------------------------------------

// les types indexables
// Il est possible de typer les cles comme nous le faisons avec les valeurs
//! User2 pourra prendre autant de proprietes que possible si seulement ils la cle et la valeur sont de type string
interface User2 {
  prenom: string;
  [index: string]: string;
}

interface User3 {
  [index: number]: string;
}

const jean: User2 = {
  prenom: 'Jean',
  nom: 'toto',
  // age: 12,
};

const arr1: User3 = ['Jean', 'henry'/*, 12*/];

// ---------------------------------------------------------

interface FonctionDeRecherche {
  //! definition
  (critere1: number, critere2: string): boolean;
}

const rechercher: FonctionDeRecherche = (crit1: number, crit2: string) => {
  // recherche...et si trouvé on retourne true :
  return true;
};

// ---------------------------------------------------------

interface FonctionDeRecherche2 {
  //! definition
  direBonjour(message: string): string;
}

const test1: FonctionDeRecherche2 = {
  direBonjour(message: string) { return message }
}

// ---------------------------------------------------------

//! Class implement Interface
interface User4 {
  prenom: string;
  nom: string;
  direBonjour(): void;
}

class NamedUser implements User4, User5 {
  constructor(public prenom: string, public nom: string) {}

  direBonjour() {
    console.log(`Bonjour, je m’appelle ${this.prenom} ${this.nom}`);
  }
}

// ---------------------------------------------------------

//! Interface extends Interface
interface User5 {
  prenom: string;
  direBonjour(): void;
}

interface RegisteredUser extends User5, User4 {
  nom: string;
  adresse: string;
  mail: string;
}

const jean2: RegisteredUser = {
  prenom: 'Jean',
  nom: 'Dupont',
  adresse: '2 rue du chateau 92220',
  mail:'jean.dupont@aol.com',
  direBonjour() {
    console.log(`Bonjour, je m’appelle ${this.prenom} ${this.nom}`);
  }
}

// ---------------------------------------------------------

//! Interface extends Class
class Player {
  constructor(public isPlaying: boolean) {}
}

interface PlayerBasic extends Player {
  play(): void;
}

class Game implements PlayerBasic {
  play() {}

  constructor(public isPlaying: boolean) {}
}

// ---------------------------------------------------------

//! Forcer l'heritage d'une classe concernant les proprietes (private, protected)
class Player2 {
  constructor(private isPlaying: boolean) {}
}

interface PlayerBasic2 extends Player2 {
  play(): void;
}

class Game2 extends Player2 implements PlayerBasic2 {
  play() {}
}

// ---------------------------------------------------------

//! Forcer l'heritage d'une classe concernant les methodes (private, protected)
class Player3 {
  protected record() {}
}

interface PlayerBasic3 extends Player3 {
  play(): void;
}

class Game3 extends Player3 implements PlayerBasic3 {
  play() {}
}

// ---------------------------------------------------------