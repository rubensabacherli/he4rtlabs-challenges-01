function Calcular() {
    var valTot = document.getElementById('valorTotal').value
    var qtdHoras = document.getElementById('quantidadeHoras').value
    var qtdDias = document.getElementById('quantidadeDias').value
    var qtdFerias = document.getElementById('quantidadeFerias').value
    var resu = 0
    var arredondado = parseFloat(resu.toFixed(2))


    arredondado = (valTot / (qtdDias * 4 * qtdHoras)) + ((qtdFerias * qtdDias * qtdHoras))

    document.getElementById('res').value = arredondado
}