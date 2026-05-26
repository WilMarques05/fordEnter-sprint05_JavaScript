//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(imagem, descricao, caminhoPagina) {
    this.imagem = imagem;
    this.descricao = descricao;
    this.caminhoPagina = caminhoPagina;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        this.btnImagemAnterior(); //btn carrossel
        this.btnProximaImagem(); //btn carrossel
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 4000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    //reseta a sequencia
    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
    this.geraImagem();

    //incrementa a sequencia
    Carousel._sequence++;
  }

  //Função para gerar imagem do carrossel.
  static geraImagem() {
    let item = carouselArr[Carousel._sequence];
    if (!item) return;

    //Captura valor atual da sequencia/imagem atual
    let imagemAtual = carouselArr[Carousel._sequence];

    //captura elementos do HTML
    const divCarrosselImagens = document.querySelector(`#carousel-img`);
    const divCarrosselTitulo = document.querySelector(`#carousel-title`);

    if (divCarrosselImagens && divCarrosselTitulo) {
      divCarrosselImagens.style.opacity = 0;
      setTimeout(() => {
        divCarrosselImagens.src = `img/${imagemAtual.imagem}`;
        divCarrosselImagens.style.cursor = "pointer";
        divCarrosselImagens.onclick = null; // Remove qualquer clique anterior para não acumular funções na memória
        
        divCarrosselImagens.onclick = () => { // Aplica o redirecionamento dinâmico baseado no objeto atual
          if (imagemAtual.caminhoPagina && imagemAtual.caminhoPagina !== "#") {
            window.location.href = imagemAtual.caminhoPagina;
          }
        };
        divCarrosselImagens.style.opacity = 1;
      }, 300);
    }
    
    divCarrosselTitulo.innerHTML = `<h2>${imagemAtual.descricao}</h2>`;
  }

  //botão voltar carrossel
  static btnImagemAnterior() {
    const btnVoltar = document.querySelector(`#img-anterior`);
    btnVoltar.addEventListener(`click`, () => {
      clearInterval(Carousel._interval); //Reseta temporizador carrossel
      Carousel._sequence--;
      if (Carousel._sequence < 0) {
        Carousel._sequence = Carousel._size - 1;
      }
      this.geraImagem();

      Carousel._interval = setInterval(() => Carousel.Next(), 4000); //Reinicia temporizador carrossel
    });
  }

  //botão próximo carrossel
  static btnProximaImagem() {
    const btnProximo = document.querySelector(`#img-proximo`);
    btnProximo.addEventListener(`click`, () => {
      clearInterval(Carousel._interval);
      Carousel.Next();
      Carousel._interval = setInterval(() => Carousel.Next(), 4000);
    });
  }
}
