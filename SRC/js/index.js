/*  Passos LÓGICOS

Objetivo 1 - quando o Usuário clicar no botão de veja o trailer, devemos abrir a modal com 
o video do trailer

Objetivo 2 - quando o usuário clicar  no X devemos fechar a modal

Objetivo 1 - Objetivo 1 - quando o Usuário clicar no botão de veja o trailer, devemos abrir a modal com 
o video do trailer

    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela
    
Objetivo 2 - quando o usuário clicar no X devemos fechar a modal
    
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X 
    - passo 3 - fechar a modal */

console.log('mostrar o document', document);

//- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video");

//- passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

const linkDoVideo = video.src;

function alterarModal(){
    //- passo 4 - abrir a modal na tela
    modal.classList.toggle("aberto");

}

//- passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
alterarModal();
video.setAttribute("src", linkDoVideo);
});

//Objetivo 2 - quando o usuário clicar no X devemos fechar a modal
    
//    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");
//- passo 2 - dar um jeito de identificar quando o usuário clicar no X 
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modal chamando pela função alterarModal
    alterarModal();
    video.setAttribute("src", "");
});













