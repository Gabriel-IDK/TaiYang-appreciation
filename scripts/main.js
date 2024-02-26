//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Olá mundo!";


/*document.querySelector("img").addEventListener("click", function () {
    alert("Você me deixou coradinho!");
  });*/

  document.getElementById("a").addEventListener("click", function () {
    alert("Também são meus favoritos, eu até te deixo apertar ^^");
  });

  document.getElementById("b").addEventListener("click", function () {
    alert("Eles são bem fortes não é? Não passo sufoco ao abrir potes ^^");
  });

  document.getElementById("c").addEventListener("click", function () {
    alert("Elas nunca parecem ficar cançadas acredita? graças a elas eu posso correr bem rápido ^^");
  });

  document.getElementById("d").addEventListener("click", function () {
    alert("Muito importante ^^");
  });

  const myImage = document.querySelector("img");

//Comando abaixo mudará a imagem após ser clicada

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/TaiYang.png") {
    myImage.setAttribute("src", "./images/TaiYang2.png");
//Set timeout, espera um tempo denominado para que a função abaixo seja disparada
    setTimeout(function() {
        alert ("Você me deixou Coradinho ^^");
      }, 1000); //O alerta será executado após 1 segundo
    
  } else {
    myImage.setAttribute("src", "./images/TaiYang.png");
    
    setTimeout(function() {
        alert ("Agora você me deixou feliz ^^")
      }, 1000);
  }
};
