"use strict";
class ProjetorLG {
    turnOn(msg) {
        console.log(msg);
    }
}
;
class ProjetorSamsung {
    enable(msg) {
        console.log(msg);
    }
}
;
;
class AdaptadorProjetorSamsung {
    constructor() {
        this.projetor = new ProjetorSamsung();
    }
    AdaptadorProjetorSamsung(projetor) {
        this.projetor = projetor;
    }
    liga(msg) {
        this.projetor.enable(msg);
    }
}
;
class AdaptadorProjetorLG {
    constructor() {
        this.projetor = new ProjetorLG();
    }
    AdaptadorProjetorSamsung(projetor) {
        this.projetor = projetor;
    }
    liga(msg) {
        this.projetor.turnOn(msg);
    }
}
;
new AdaptadorProjetorSamsung().liga('Enable');
new AdaptadorProjetorLG().liga('TurnON');
