/* 
 1. Defina uma função para calcular o tempo restante até uma data futura:

 calcularTempoRestante(dataFutura)

 2. Defina uma função para atualizar o temporizador na tela:

 atualizarTemporizador()

 3. Use setInterval para atualizar o temporizador a cada segundo.

 4. Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.
*/

function calcularTempoRestante(datafutura) {
    let agora = new Date()
    let futuro = new Date(datafutura)
    let diferenca = futuro - agora
    if (diferenca <= 0) { 
        return {dias: 0, horas: 0, minutos: 0, segundos: 0}
    }
    let segundos = Math.floor((diferenca / 1000) % 60)
    let minutos = Math.floor((diferenca / 1000 / 60) % 60)
    let horas = Math.floor((diferenca / 1000 / 60 / 60) % 24)
    let dias = Math.floor((diferenca / 1000 / 60 / 60 / 24))
    return {dias, horas, minutos, segundos}
}
function atualizarTemporizador() {
    let dataFutura = "2025-12-31T23:59:59"
    let tempo = calcularTempoRestante(dataFutura)
    console.log(`${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`)
}
setInterval(atualizarTemporizador, 1000)