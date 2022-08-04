
function tocaSom(idSom) {
    document.querySelector(idSom).play();
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
        console.log(event)
        if (event.code === 'Space' || event.code === 'Enter')
            tecla.classList.add('ativa');

    }

    tecla.onkeyup = function () {
        
        tecla.classList.remove('ativa');

    }
    // tecla.onkeydown = function () {
        
    //     tecla.classList.add('ativa');
    //     tecla.classList.remove('ativa');

    // }

}

