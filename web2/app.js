var valor = document.querySelector("div.container input")
var tabuada = document.getElementById("tabuad")
const calcular = document.querySelector("div.container button")

calcular.addEventListener("click", () => {
    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 12){

        tabuada.innerHTML = "Escolha um numero de 1 a 12"

    }else{
        
        for(i = 1; i <= 12; i++){

            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value); 
            var resultado = document.createElement("p")
            resultado.innerText = calc           
            tabuada.appendChild(resultado)

        }
        
    }
})