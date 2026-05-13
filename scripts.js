const input = document.querySelector("input")
const btnRevelar = document.querySelector("#btnRevelar")

btnRevelar.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Palavras Reveladas")

    document.querySelector(".desativado").classList.remove("desativado")
})

const options = ['Jardim', 'Montanha', 'Luz']

const ul = document.querySelector("ul")
ul.style.color = "#8257e5"

input.addEventListener("input", () => {
    if(input.value == options[0] || input.value == options[0].toLowerCase()){
        ul.append("Você encontrou a palavra:", options[0], document.createElement("br"))
    } else if (input.value == options[1] || input.value == options[1].toLowerCase()) {
        ul.append("Você encontrou a palavra:", options[1], document.createElement("br"))
    } else if (input.value == options[2] || input.value == options[2].toLowerCase()) {
        ul.append("Você encontrou a palavra:", options[2], document.createElement("br"))
    } else {
        console.log("Palavra ainda não encontrada")
    }
})