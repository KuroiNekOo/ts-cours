declare module 'jquery' {
  const $: (selector: string) => any;

  //! export ici sert à rendre le module jQuery disponible pour les autres fichiers TypeScript
  export = $;
}