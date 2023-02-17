//trying to get <form> data
var convert = parseInt(document.forms[0].int.value)
var moeda = document.forms[0].txt.value;
//constant values to give context for the code
const cotReal = 5.22;
const cotDolar = 0.19;
//variable to proceed convertion
var valorTotal;
//i'm still trying to understand what i'm doing here
document.querySelector("txt").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        //from now on, it's the whole code meaning
        if (moeda === "real") {
            valorTotal = convert * cotReal;
            valorTotal = valorTotal.toFixed(2);
            alert("R$" + valorTotal);
        } else if (moeda === "dolar") {
            valorTotal = convert * cotDolar;
            valorTotal = valorTotal.toFixed(2);
            alert("US$" + valorTotal);
        } else {
            alert("Coloque um valor válido (dolar, real)");
        }
    }
});