// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "Capitã Marvel", genero: "Ação/Ficção Científica", ano: 2019, avaliacao: 8.9}
let filme2 = {titulo: "Mulher-Maravilha", genero: "Ação/Fantasia", ano: 2017, avaliacao: 9.1}
let filme3 = {titulo: "Jogos Vorazes", genero: "Aventura/Ficção Científica", ano: 2012, avaliacao: 9.3}
let filme4 = {titulo: "As Sufragistas", genero: "Histórico/Drama", ano: 2015, avaliacao: 8.8}
let filme5 = {titulo: "Legalmente Loira", genero: "Comédia", ano: 2001, avaliacao: 8.7}
let filme6 = {titulo: "Garota Exemplar", genero: "Suspense", ano: 2014, avaliacao: 9.2}
let filme7 = {titulo: "A Forma da Água", genero: "Fantasia/Drama", ano: 2017, avaliacao: 9.0}
let filme8 = {titulo: "Enola Holmes", genero: "Mistério/Aventura", ano: 2020, avaliacao: 8.9}
let filme9 = {titulo: "A Princesa e o Sapo", genero: "Animação", ano: 2009, avaliacao: 9.1}
let filme10 = {titulo: "Barbie", genero: "Comédia/Fantasia", ano: 2023, avaliacao: 9.4}

const colecaoFilmes = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const avaliacoesLista = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let maiorAvaliacao = avaliacoesLista[0]
for(let i = 1; i < avaliacoesLista.length; i++){
    if(avaliacoesLista[i] > maiorAvaliacao){
        maiorAvaliacao = avaliacoesLista[i]
    }
}
let indiceFilmeTop = avaliacoesLista.indexOf(maiorAvaliacao) + 1
let somaNotas = avaliacoesLista.reduce((acumulador, valorAtual) => { return valorAtual + acumulador}, 0) 
let mediaFinal = somaNotas / avaliacoesLista.length
console.log(`
    === Coleção de Filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${colecaoFilmes[`filme${indiceFilmeTop}`].titulo} (${maiorAvaliacao})

    Média geral das avaliações: ${mediaFinal.toFixed(2)}
    `)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }