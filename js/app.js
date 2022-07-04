const textArea = document.querySelector("#texto");
const mensaje = document.querySelector("#cambiarTexto");

const botonEncriptar = document.querySelector(".btn1");
botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  btnEncriptar();
});

const botonDesencriptar = document.querySelector(".btn2");
botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  btnDesencriptar();
});

function btnEncriptar() {
  let textEncriptado = encriptar(textArea.value);
  return (mensaje.textContent = textEncriptado);
}

function encriptar(stringAEncriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringAEncriptar = stringAEncriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringAEncriptar.includes(matrizCodigo[i][0])) {
      stringAEncriptar = stringAEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringAEncriptar;
}

function btnDesencriptar() {
  let textEncriptado = desencriptar(textArea.value);
  return (mensaje.textContent = textEncriptado);
}

function desencriptar(stringAEncriptar) {
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringAEncriptar = stringAEncriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringAEncriptar.includes(matrizCodigo[i][0])) {
      stringAEncriptar = stringAEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringAEncriptar;
}

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
