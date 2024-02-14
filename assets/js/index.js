const button = document.querySelector(".btn")
const resultado = document.querySelector(".resultado")

button.addEventListener("click", function () {
    let num1 = Number(document.querySelector(".input1").value)
    let num2 = Number(document.querySelector(".input2").value)
    let num3 = Number(document.querySelector(".input3").value)
    let cantidad = num1 + num2 + num3

    if (cantidad <= 10) {
        resultado.innerHTML = "Llevas " + cantidad + " Sticker"
    } else {
        resultado.innerHTML = "LLevas demasiados Sticker"
    }
})