function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio') { //pode omitir o != null, pois o js já entende que se for null, é false
        elemento.play();
    }
    else {
        console.log('Elemento não é um áudio ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; 

    const instrumento = tecla.classList[1];

    
    const idAudio = `#som_${instrumento}`; //template string
    //console.log(idAudio);

    tecla.onclick = function() { //função anônima - é uma função que serve para ser atribuída a uma variável ou a um evento, úteis quando queremos executar alguma coisa uma única vez ou em apenas um lugar
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evento) { //evento é um paramentro do tipo objeto que já é fornecido pelo próprio navegador ao usar o onkeydown
        //console.log(evento.code);
        if(evento.code ==='Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup  = function() {
        tecla.classList.remove('ativa'); 
    }

    //console.log(contador);
}
