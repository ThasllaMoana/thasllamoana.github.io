let video = document.getElementsByClassName("videoteste")[0]; //let video: crie a class video e procure no doc o elemento com nome videoinfantil//

function play() {
  video.play();
}
function pause() {
  video.pause();
  video.currentTime = 0; //método currentTime - tempo corrente//
}
function diminuivelo() {
  video.playBackRate -= 0.1; //-= decréscimo da velocidade//
}
function aumentavelo() {
  video.playbackRate += 0.1; //-= acréscimo da velocidade//
}
function voltar() {
  video.currentTime -= 10; //-= volta 10s da velocidade//
}
function avancar() {
  video.currentTime += 10; //-= avança 10s da velocidade//
}
