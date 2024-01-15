// Inicializa um array para armazenar os números já sorteados
var numerosSorteados = [];

function realizarSorteio() {
    var minimo = parseInt(document.getElementById('minimo').value);
    var maximo = parseInt(document.getElementById('maximo').value);

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        alert('Por favor, insira números válidos. O número mínimo deve ser menor que o número máximo.');
        return;
    }

    if (numerosSorteados.length === (maximo - minimo + 1)) {
        alert('Todos os números já foram sorteados. Reinicie o sorteio.');
        return;
    }

    var numeroSorteado;

    do {
        numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);

    document.getElementById('resultado').innerHTML = numeroSorteado;
}
