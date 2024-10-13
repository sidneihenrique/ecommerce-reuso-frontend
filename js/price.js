//////////// REGEX PREÇO /////////////

function currencyBRL(value){

    const numberValue = parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'));

    var formattedValue = numberValue.toLocaleString(
      'pt-BR', 
      { style: 'currency', currency: 'BRL' }
    );
  
    return formattedValue;
};

function formatarValor(campo) {
    let valor = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (valor.length <= 2) {
        valor = '0,' + valor.padStart(2, '0');
    } else {
        const centavos = valor.slice(-2);
        const parteInteira = valor.slice(0, -2).replace(/^0+/, '').padStart(1, '0') || '0';
        valor = parteInteira.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',' + centavos;
    }

    campo.value = currencyBRL(valor);
}

const precoInput = document.getElementById('preco');
const precoInputs = document.querySelectorAll('.preco');

let firstInput = true;

if(precoInput){
    precoInput.addEventListener('input', function(event) {
        const input = event.target;
    
        formatarValor(input);
        // Define a posição do cursor após o último número digitado

    });
}

precoInputs.forEach(function(input) {
    input.addEventListener('input', function(event) {
        console.log("oiii")
        formatarValor(input);
        // Define a posição do cursor após o último número digitado
    });
});
