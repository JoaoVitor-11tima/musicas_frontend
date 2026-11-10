const urlBackend = "http://localhost:3000"

const inputTitulo = document.getElementById("inputTitulo")
const inputArtista = document.getElementById("inputArtista")
const inputGenero = document.getElementById("inputGenero")
const inputAno = document.getElementById("inputAno")
const inputDuracao = document.getElementById("inputDuracao")

const botaoCadastrar = document.getElementById("botaoCadastrar")

botaoCadastrar.addEventListener("click", cadastrarMusica);
