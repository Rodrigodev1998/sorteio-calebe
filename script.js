function realizarSorteio() {
    var minimo = parseInt(document.getElementById('minimo').value);
    var maximo = parseInt(document.getElementById('maximo').value);

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        alert('Por favor, insira números válidos. O número mínimo deve ser menor que o número máximo.');
        return;
    }

    var numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    document.getElementById('resultado').innerHTML = numeroSorteado;
}
