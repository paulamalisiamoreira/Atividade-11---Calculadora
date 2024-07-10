function armazenar() {
    const numeroUm = parseFloat(document.getElementById("numeroUm").value);
    const numeroDois = parseFloat(document.getElementById("numeroDois").value);

    return [numeroUm, numeroDois]
}

function somar(numeroUm,numeroDois) {
    return numeroDois + numeroUm;
} 

function subtrair(numeroUm,numeroDois) {
    console.log(numeroUm,numeroDois);
    return numeroUm - numeroDois;
}

function multiplicar(numeroUm,numeroDois) {
    return numeroUm * numeroDois;
}


function dividir(numeroUm,numeroDois) {
    return numeroUm / numeroDois;
}

function operar() {
    const operar = document.querySelector("select").value;
    console.log(operar)

    const [numeroUm, numeroDois] = armazenar()

    switch (Number(operar)) {
        case 1:
          document.getElementById("resultado").innerHTML = somar(numeroUm, numeroDois);
          break;
        case 2:
            // var resultado = subtrair(numeroUm,numeroDois);
            // console.log(resultado)
           document.getElementById("resultado").innerHTML = subtrair(numeroUm, numeroDois);
           break;
        case 3:
           document.getElementById("resultado").innerHTML = multiplicar(numeroUm, numeroDois);
           break;
        case 4:
            document.getElementById("resultado").innerHTML = dividir(numeroUm, numeroDois);
            break;
    }



}