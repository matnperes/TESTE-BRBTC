
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

const btnInicio = document.getElementById('inicio');
const btnPause = document.getElementById('pause');
const btnPare = document.getElementById('pare');
const cont = document.getElementById('contador');
const cronometro = document.getElementsByClassName('cronometro');

function cronometroAtivo(){
  "user strict"

  function obterFrase(i){
    var textoAleatorio = new Array ();
    textoAleatorio[0] = "Que os sonhos sejam leves e a noite cheia de paz!";
    textoAleatorio[1] = "Que a paz do nosso senhor Jesus Cristo esteja conosco.";
    textoAleatorio[2] = "Um pedaço de pão comido em paz é melhor do que um banquete comido com ansiedade.";
    textoAleatorio[3] = "Ninguém será generoso se não for, ao mesmo tempo, justo.";
    textoAleatorio[4] = "A grandeza não consiste em receber honras, mas merecê-las.";
    textoAleatorio[5] = "O passado é um ótimo professor.";
    return textoAleatorio[i];
}

function inicio() { 
  pare()
  cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function pare() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    cont.innerText = '00:00:00';
  }

  function timer() {
      ss++; 
      if(ss <= 10){
      var format = ('0'+ hh) + ':' + ('0' + mm) + ':' + (ss < 10 ? '0' + ss : ss);
      cont.innerText = format;
      }else{
        pause();
        cont.innerText = obterFrase(Math.floor(6*Math.random()))
        setTimeout(()=>{
          inicio()
        }, 3000)
      }
    }

  btnInicio.addEventListener("click", inicio);
  btnPause.addEventListener("click", pause);
  btnPare.addEventListener("click", pare);

}

cronometroAtivo();