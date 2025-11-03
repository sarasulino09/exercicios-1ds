// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

console.log("=== Monitoramento de Produção ===")

let producao = []
let continuarTurno = "S"
let numeroDia = 0

do {
  console.log("--- Início do Turno ---")
  let quantidadeMeta = parseInt(prompt("Quantas peças devem ser produzidas neste turno? "))
  let quantidadeProduzida = 0
  numeroDia++

  for (let contador = 1; contador <= quantidadeMeta; contador++) {
    console.log(`Peça ${contador} produzida com sucesso.`)
    quantidadeProduzida++
  }

  console.log("Turno encerrado.")
  producao.push(quantidadeProduzida)

  continuarTurno = prompt("Deseja iniciar outro turno? (S/N) ").toUpperCase()
} while (continuarTurno === "S")

let total = 0
for (let i = 0; i < producao.length; i++) {
  total += producao[i]
}

let media = total / producao.length

let maior = producao[0]
let menor = producao[0]

for (let i = 1; i < producao.length; i++) {
  if (producao[i] > maior) maior = producao[i]
  if (producao[i] < menor) menor = producao[i]
}

for (let i = 0; i < producao.length; i++) {
  for (let j = i + 1; j < producao.length; j++) {
    if (producao[i] > producao[j]) {
      let temp = producao[i]
      producao[i] = producao[j]
      producao[j] = temp
    }
  }
}

let producaoDesc = [...producao]
for (let i = 0; i < producaoDesc.length; i++) {
  for (let j = i + 1; j < producaoDesc.length; j++) {
    if (producaoDesc[i] < producaoDesc[j]) {
      let temp = producaoDesc[i]
      producaoDesc[i] = producaoDesc[j]
      producaoDesc[j] = temp
    }
  }
}

console.log("\n=== Relatório Final ===")
console.log(`Produções registradas: ${producao}`)
console.log(`Total produzido: ${total}`)
console.log(`Média de produção: ${media}`)
console.log(`Maior produção: ${maior}`)
console.log(`Menor produção: ${menor}`)
console.log(`Crescente: ${producao}`)
console.log(`Decrescente: ${producaoDesc}`)

if (media >= 50) {
  console.log("Produção estável")
} else {
  console.log("Produção abaixo do esperado")
}