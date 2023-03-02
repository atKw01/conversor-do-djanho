//trying to get <form> data
const cotReal = 5.22;
const cotDolar = 0.19;
//const convertButton = document.querySelector("outputBttn");

document.querySelector("outputBttn").onpointerdown = () => {
    let num = Number(document.getElementById("int").value);
    let moeda = document.querySelector('#txt').value;
    function lowerCase(str) { return str.toLowerCase(); }
    var valorTotal;
    if (lowerCase(moeda) === "real") {
        valorTotal = num * cotReal;
        valorTotal = valorTotal.toFixed(2);
        document.querySelector("#outputBttn").textContent = `${"R$ "} ${valorTotal}`;
    } else if (lowerCase(moeda) === "dolar" || lowerCase(moeda) === "dólar") {
        valorTotal = num * cotDolar;
        valorTotal = valorTotal.toFixed(2);
        document.querySelector("#outputBttn").textContent = `${"US$ "} ${valorTotal}`;
    } else {
        document.querySelector("#outputBttn").textContent = "Coloque uma moeda válida (dolar, real)";
    }
};

function send() {
    let num = Number(document.getElementById("int").value);
    let moeda = document.querySelector('#txt').value;
    function lowerCase(str) { return str.toLowerCase(); }
    var valorTotal;
    if (lowerCase(moeda) === "real") {
        valorTotal = num * cotReal;
        valorTotal = valorTotal.toFixed(2);
        document.querySelector("#outputBttn").textContent = `${"R$ "} ${valorTotal}`;
    } else if (lowerCase(moeda) === "dolar" || lowerCase(moeda) === "dólar") {
        valorTotal = num * cotDolar;
        valorTotal = valorTotal.toFixed(2);
        document.querySelector("#outputBttn").textContent = `${"US$ "} ${valorTotal}`;
    } else {
        document.querySelector("#outputBttn").textContent = "Coloque uma moeda válida (dolar, real)";
    }
};
