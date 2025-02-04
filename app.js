// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
document.addEventListener("DOMContentLoaded", function () {
const inputNombre = document.getElementById("amigo");
const btnAdicionar = document.getElementById("adicionar");
const btnSortear = document.getElementById("sortear");
const listaAmigos = document.getElementById("lista");
const resultado = document.getElementById("resultado");
}
);

function agregarAmigo () {
    
    //const amigo = inputNombre.value.trim();
    let nombreAmigo = document.getElementById('amigo').value
    
    console.log(amigo)
    console.log(nombreAmigo)
    
    if (nombreAmigo === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
    
        nombres.push(nombreAmigo);
        actualizarLista();
        document.querySelector('#amigo').value = '';
    }

function actualizarLista() {
        listaAmigos.innerHTML = "";
        nombres.forEach(nombreAmigo => {
            const li = document.createElement("li");
            li.textContent = nombreAmigo;
            listaAmigos.appendChild(li);
        })
    }

function sortearAmigo() {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
    }
