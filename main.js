
function tocaSom(idSom) {

    const som = document.querySelector(idSom);

    if (som && som.localName === 'audio') {
            som.play();
        
        } else if (som === null) {
            alert("Elemento não encontrado!");

        } else if (som.localName != 'audio') {
            alert("Seletor não corresponde a um áudio!");
        
        }
        // A preferência por uma resposta de erro mais genérica ou específica fica a critério!
        // else {
        //     alert("Elemento não encontrado ou seletor não corresponde a um áudio!")
        // } 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let index = 0;

for(let index = 0; index < listaDeTeclas.length; index++) {
    
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;

    
    tecla.onclick = function() {
        tocaSom(idSom);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter')
            tecla.classList.add('ativa');

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');

    }
}

