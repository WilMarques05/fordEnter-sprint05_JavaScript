//car
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image,
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      if (carArr.length > 1) {
        //Verificando se a lista tem mais de 2 carros
        alert(`limite atingido, selecione apenas 2 Carros`);
        el.checked = false; //desabilita a marcação do terceiro
      } else {
        carArr.push(carClass); //Adiciona o carro selecionado na lista
      }
    } else {
      let indice = GetCarArrPosition(carArr, carClass); //Verifica a posição da lista
      if (indice != -1) {
        // verifica se existe o item
        carArr.splice(indice, 1); //Remove o ultimo carro selecionado
      }
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  UpdateCompareTable();
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
  //Capturando posição dos carros
  const carro1 = carArr[0];
  const carro2 = carArr[1];

  document.querySelector(`#compare_image_0`).innerHTML =
    `<img src="${carro1.image}" width="120px">`;
  document.querySelector(`#compare_modelo_0`).innerHTML = carro1.nome;
  document.querySelector(`#compare_alturacacamba_0`).innerHTML =
    carro1.alturaCacamba;
  document.querySelector(`#compare_alturaveiculo_0`).innerHTML =
    carro1.alturaVeiculo;
  document.querySelector(`#compare_alturasolo_0`).innerHTML = carro1.alturaSolo;
  document.querySelector(`#compare_capacidadecarga_0`).innerHTML =
    carro1.capacidadeCarga;
  document.querySelector(`#compare_motor_0`).innerHTML = carro1.motor;
  document.querySelector(`#compare_potencia_0`).innerHTML = carro1.potencia;
  document.querySelector(`#compare_volumecacamba_0`).innerHTML =
    carro1.volumeCacamba;
  document.querySelector(`#compare_roda_0`).innerHTML = carro1.roda;
  document.querySelector(`#compare_preco_0`).innerHTML = carro1.preco;

  document.querySelector(`#compare_image_1`).innerHTML =
    `<img src="${carro2.image}" width="120px">`;
  document.querySelector(`#compare_modelo_1`).innerHTML = carro2.nome;
  document.querySelector(`#compare_alturacacamba_1`).innerHTML =
    carro2.alturaCacamba;
  document.querySelector(`#compare_alturaveiculo_1`).innerHTML =
    carro2.alturaVeiculo;
  document.querySelector(`#compare_alturasolo_1`).innerHTML = carro2.alturaSolo;
  document.querySelector(`#compare_capacidadecarga_1`).innerHTML =
    carro2.capacidadeCarga;
  document.querySelector(`#compare_motor_1`).innerHTML = carro2.motor;
  document.querySelector(`#compare_potencia_1`).innerHTML = carro2.potencia;
  document.querySelector(`#compare_volumecacamba_1`).innerHTML =
    carro2.volumeCacamba;
  document.querySelector(`#compare_roda_1`).innerHTML = carro2.roda;
  document.querySelector(`#compare_preco_1`).innerHTML = carro2.preco;
}
