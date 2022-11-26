class Coche {
    constructor() {
      this.puertas = 4;
    }
    
    addpuertas(){
       this.puertas++;
    }
  }
  
  const coche = new Coche();
  coche.addpuertas()
  console.log(coche.puertas)