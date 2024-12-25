// ---------------------------------------------------------

// les classes en typescript
class Personne {
  public nom: string;

  constructor(nom: string) {
      this.nom = nom;
  }

  sePresenter() {
      return `Bonjour, je m'appelle ${this.nom} !`;
  }
}

console.log(new Personne('Jean').sePresenter());

// ---------------------------------------------------------

// Heritage
class Voiture {
  protected sieges: number;

  constructor(sieges: number) {
    this.sieges = sieges;
  }

  rouler() {
    return 'Je roule.';
  }
}

class Sportive extends Voiture {
  // private chevaux: number;
  // readonly nom: string;

  // constructor(sieges: number, nom: string, chevaux: number) {
  //   super(sieges);
  //   this.chevaux = chevaux;
  //   this.nom = nom;
  // }

  constructor(
    sieges: number,
    readonly nom: string,
    private chevaux: number,
  ) {
    super(sieges);
  }

  info() {
    console.log(`${this.nom}, ${this.chevaux}, ${this.sieges}`);
  }

  faireLaCourse() {
    console.log(`${super.rouler()} Et je fais la course.`);
  }

}

new Sportive(4, 'clio3', 960).info();

/*
  public: accessible de l'exterieur et de l'interieur en lecture/ecriture
  private: accessible que depuis la classe en lecture/ecriture
  protected: accessible que depuis la classe et les classes heritantes en lecture/ecriture
  readonly: accessible de l'exterieur que en lecture sauf a l'initialisation (constructeur)
*/

// ---------------------------------------------------------

// statique
class Cristaline {
  public static nom: string;

  constructor() {}

  static setNom(nom: string): void {
    this.nom = nom;
  }

  static getNom(): string {
    return this.nom;
  }
}

Cristaline.setNom('anass');
console.log(Cristaline.nom);


// const myWater = new Cristaline();
// console.log(myWater.nom);
// (en arabe) andna static donc ymklna n3ytloha hi mn ssmiya dyal la class mni matkounch andna static kandiro constructeur ou dik sa3a kat3yttlha bssmiyt l constr b new ... hiya li en commentaire 

// ---------------------------------------------------------

// classes abstraites
abstract class Personne2 {
  constructor(public genre: string) {}

  //! une definition
  // methode abstraite
  abstract direBonjour(): void

  //! une declaration
  direAuRevoir() {
    console.log('Au revoir !')
  }
}

class Homme extends Personne2 {
  constructor() {
    super('homme');
  }

  //! declaration de direBonjour()
  direBonjour() {
    console.log('Bonjour !')
  }
}

const homme = new Homme();
homme.direAuRevoir();
homme.direBonjour();

// ---------------------------------------------------------