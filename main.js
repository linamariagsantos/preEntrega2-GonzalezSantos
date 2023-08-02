// Este simulador consiste en el cálculo del valor de la cuota mensual para la compra de una casa.
// Se tienen como variables el monto aprobado por el monto aprobado por el banco (p), la tasa de interés mensual (t = 0.25) 
//y el plazo del crédito en meses (n = 360), tomando como ejemplo que la cuota es fija mensual.


//La formula es la siguiente:
//Cuota mensual = P * ( 1 + (t/100) ^ n * (t/100)) / ( 1 + (t/100) ^ n - 1 )


alert("Bienvenido al sistema de simulación de crédito hipotecario")


//Declaración de la función
function demo(x, y) {
    return (Math.pow(x, y))
}

function calculos(porcentaje, valor) {

    let prestamo = (porcentaje / 100) * valor
    alert("El prestamo solicitado es de: " + prestamo + " $")

    // 4. Plazo en meses
    const nummeses = 360

    // 5. Declaración tasa de interés mensual
    const tasa = 0.0025
    alert("A continuación se calculará el valor de las cuotas con una tasa de intéres del: 0.25%")

    // 5. Se calcula la cuota mensual   
    let base = 1 + tasa
    let valorActual = demo(base, nummeses)

    let suma = prestamo * ((valorActual * tasa) / (valorActual - 1))

    alert("La cuota mensual es de: " + suma.toFixed(2))

    return suma

}

function ComparativaCuotas(compraCasa,porcentaje) {
    console.log("Comparativa de cuotas")

    for (let i = 0; i < 7; i++) {

        let prestamo = (porcentaje / 100) * valor
        const nummeses = 360
        const tasa = 0.0025
        let base = 1 + tasa
        let valorActual = demo(base, nummeses)

        let suma = prestamo * ((valorActual * tasa) / (valorActual - 1))

        compraCasa[i] = suma

        console.log("Con el: " + porcentaje + "%, La cuota mes es de: " + compraCasa[i])

        porcentaje = porcentaje + 10;
    }
}


// 1. Valor de la vivienda
let valor = parseInt(prompt("Ingresa el valor de la vivienda, sin puntos ni comas"))
alert("El monto ingresado fue: " + valor)

// 2. Valor del préstamo en %

let continuar = false;

while (continuar == false) {

    let porcentaje = parseInt(prompt("¿Cuanto dinero necesitas?: 10, 20, 30, 40, 50, 60 ó 70 % (Ingresa solo el número)"))

    if (porcentaje == 10 || porcentaje == 20 || porcentaje == 30 || porcentaje == 40 || porcentaje == 50 || porcentaje == 60 || porcentaje == 70) {

        continuar = true

        let resultado = calculos(porcentaje, valor).toFixed(2)

        let compraCasa = [resultado]

        /* A continuación se calcula el valor de la cuota correspondiente a cada porcentaje */

        porcentaje = 10
        ComparativaCuotas(compraCasa, porcentaje)

    } else {
        continuar = false;
    }
}