// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let continuarTurno = "S"
let numeroDia = 0
let totalProduzido = 0
let relatorioDias = ""

do {
  let quantidadeMeta = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))
  let quantidadeProduzida = 0
  numeroDia++

  for (let contador = 1; contador <= quantidadeMeta; contador++) {
    console.log(`Peça ${contador} produzida com sucesso.`)
    quantidadeProduzida++
  }

  if (quantidadeProduzida === quantidadeMeta) {
    console.log("Meta alcançada!")
  }

  totalProduzido += quantidadeProduzida
  relatorioDias += `Dia ${numeroDia}: ${quantidadeProduzida} peças produzidas\n`

  continuarTurno = prompt("Deseja simular outro turno? (S/N) ").toUpperCase()
} while (continuarTurno === "S")

console.log("Resumo dos dias anteriores")
console.log(relatorioDias)
console.log("Total geral: " + totalProduzido + " peças")
console.log("Encerrando sistema de produção...")
