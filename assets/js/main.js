function writeNumber(elementId) {
    var outputValueTo = document.getElementById('field1');

  
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = elementId.textContent;
    } else {
  
      outputValueTo.value += elementId.textContent;
    }

    var numDig = document.getElementById('field1').value;

    
    console.log(numDig);
    if(numDig == '13'){ 
        document.getElementById('fotodocandidato').src = 'image/lula.jpg';
        document.getElementById('fotodovice').src = 'image/lula2.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "Lula";
        document.getElementById("nomedovice").innerHTML = "Geraldo Alckimin";
        document.getElementById("partido").innerHTML = "PT - Partido dos trabalhadores";


    } else if (numDig == '22') {

        document.getElementById('fotodocandidato').src = 'image/bolsonaro.jpg';
        document.getElementById('fotodovice').src = 'image/bolsonaro2.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "JAIR BOLSONARO";
        document.getElementById("nomedovice").innerHTML = "Braga Neto";
        document.getElementById("partido").innerHTML = "PL - Partido Liberal";

        
    } else if (numDig == '12') {

        document.getElementById('fotodocandidato').src = 'image/ciro.jpg';
        document.getElementById('fotodovice').src = 'image/ciro2.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "Ciro Gomes";
        document.getElementById("nomedovice").innerHTML = "Ana Paula";
        document.getElementById("partido").innerHTML = "PDT - Partido Democrático Trabalhista";

        
    } else if (numDig == '27') {

        document.getElementById('fotodocandidato').src = 'image/eymael.jpg';
        document.getElementById('fotodovice').src = 'image/eymael2.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "EYMAEL";
        document.getElementById("nomedovice").innerHTML = "PROFESSOR BRAVO";
        document.getElementById("partido").innerHTML = "DC - Democracia Cristão";

        
    } else if (numDig == '30') {

        document.getElementById('fotodocandidato').src = 'image/davila.jpg';
        document.getElementById('fotodovice').src = 'image/davila1.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "FELIPE D'AVILA";
        document.getElementById("nomedovice").innerHTML = "TIAGO MITRAUD";
        document.getElementById("partido").innerHTML = "NOVO - Partido Novo";

      
    } else if (numDig == '15') {

        document.getElementById('fotodocandidato').src = 'image/simone.jpg';
        document.getElementById('fotodovice').src = 'image/simone2.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "SIMONE TEBET";
        document.getElementById("nomedovice").innerHTML = "MARA GABRILLI";
        document.getElementById("partido").innerHTML = "MDB - Movimento Democrático Brasileiro";

      
      } else{
        document.getElementById('fotodocandidato').src = 'image/branco.jpg';
        document.getElementById('fotodovice').src = 'image/branco.jpg';
        document.getElementById("nomedocandidadto").innerHTML = "";
        document.getElementById("nomedovice").innerHTML = "";
        document.getElementById("partido").innerHTML = "";
    }
    const audio = new Audio('audio/urna 1.mp3');
audio.play();

  }




  function cleartxt() {
    document.getElementById('field1').value = '0';
    document.getElementById('fotodocandidato').src = 'image/branco.jpg';
    document.getElementById('fotodovice').src = 'image/branco.jpg';
    document.getElementById("nomedocandidadto").innerHTML = "";
    document.getElementById("nomedovice").innerHTML = "";
    document.getElementById("partido").innerHTML = "";
    const audio = new Audio('audio/urna 1.mp3');
    audio.play();
  }  
  
function amimacao(elementId) {

    var saidaDoValor = elementId.textContent;
    let el= document.getElementById(saidaDoValor);
    el.classList.add('animate__heartBeat');
    
 
}

function soltar(elementId){
    var saidaDoValor = elementId.textContent;

    let el= document.getElementById(saidaDoValor);
    el.classList.remove('animate__heartBeat');

}

function anull(){
    document.getElementById('field1').value = '0';
    document.getElementById('fotodocandidato').src = 'image/branco.jpg';
    document.getElementById('fotodovice').src = 'image/branco.jpg';
    document.getElementById("nomedocandidadto").innerHTML = "";
    document.getElementById("nomedovice").innerHTML = "";
    document.getElementById("partido").innerHTML = "";
    
    const audio = new Audio('audio/urna 1.mp3');
    audio.play();
    
}

function confirma(){
  const audio = new Audio('audio/urna 2.mp3');
  audio.play();

}