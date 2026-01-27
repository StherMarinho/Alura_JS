function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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

    //console.log(contador);
}
