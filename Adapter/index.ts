class ProjetorLG {
  turnOn(msg: any) {
    console.log(msg)
  }
};

class ProjetorSamsung {
  enable(msg: any) {
    console.log(msg);
  }
};

interface Projetor {
  liga(msg: any):any;
};

class AdaptadorProjetorSamsung implements Projetor {
  private projetor;

  constructor() {
    this.projetor = new ProjetorSamsung();
  }

  AdaptadorProjetorSamsung(projetor: ProjetorSamsung) {
    this.projetor = projetor;
  }
  liga(msg: any): void {
    this.projetor.enable(msg);
  }
};

class AdaptadorProjetorLG implements Projetor {
  private projetor;

  constructor() {
    this.projetor = new ProjetorLG();
  }

  AdaptadorProjetorSamsung(projetor: ProjetorLG) {
    this.projetor = projetor;
  }
  liga(msg: any): void {
    this.projetor.turnOn(msg);
  }
};


new AdaptadorProjetorSamsung().liga('Enable');
new AdaptadorProjetorLG().liga('TurnON');