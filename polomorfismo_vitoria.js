// Classe base Forma
class Forma {
    calcularArea() {
      // Método a ser sobrescrito pelas subclasses
    }
  }
  
  // Subclasse Círculo
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
  // Subclasse Retângulo
  class Retangulo extends Forma {
    constructor(largura, altura) {
      super();
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  }
  
  // Função para calcular a área de qualquer forma
  function calcularAreaDaForma(forma) {
    if (forma instanceof Forma) {
      const area = forma.calcularArea();
      console.log(`Área da forma: ${area.toFixed(2)}`);
    } else {
      console.log('Objeto inválido');
    }
  }
  
  // Criar instâncias de formas geométricas
  const circulo = new Circulo(5);
  const retangulo = new Retangulo(4, 6);
  
  // Calcular áreas de diferentes formas
  calcularAreaDaForma(circulo);    // Saída: "Área da forma: 78.54"
  calcularAreaDaForma(retangulo);  // Saída: "Área da forma: 24.00"
  