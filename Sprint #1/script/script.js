almacenDeComputadores()
seleccion()
limpiarInputs()

function almacenDeComputadores(){
    let boton = document.getElementById('btnEnviar')

    boton.addEventListener('click', () => {
        let nombre1 = document.getElementById('nombre');
        let apellido1 = document.getElementById('apellido');
        let valor;
        let cant = Number(document.getElementById('cantidad').value);
        

        if ((valor > 0) && (valor < 1640000)) {
            descuento = document.getElementById("descuento").value = (`0%`);
            ValorDescuento = document.getElementById("ValorDescuento").value = ("No hay descuento")
            total = document.getElementById("total").value = (`el valor total de la compra es ${valor}$ señor/a ${nombre}`)
        }
        else if ((valor >= 1640000) && (valor <= 3280000)) {
            descuento = document.getElementById("descuento").value = (`15%`);
            ValorDescuento = Number(document.getElementById("ValorDescuento").value = (`El descuento es de${(valor / 100) * 15}$ señor/a ${nombre}`))
            total = Number(document.getElementById("total").value = (`${valor - ValorDescuento}$`))
        }
        else if ((valor > 3280000) && (valor <= 6560000)) {
            descuento = document.getElementById("descuento").value = (`25%`);
            ValorDescuento = Number(document.getElementById("ValorDescuento").value = (`El descuento es de${(valor / 100) * 25}$ señor/a ${nombre}`))
            total = Number(document.getElementById("total").value = (`${valor - ValorDescuento}$`));
        }
        else if ((valor>6560000)&&(valor<=9840000)){
            descuento = document.getElementById("descuento").value = (`35%`);
            ValorDescuento = Number(document.getElementById("ValorDescuento").value = (`El descuento es de${(valor / 100) * 35}$ señor/a ${nombre}`))
            total = Number(document.getElementById("total").value = (`${valor - ValorDescuento}$`));
        }
        else if (valor>= 9840000){
            descuento = document.getElementById("descuento").value = (`0%`);
            ValorDescuento = Number(document.getElementById("ValorDescuento").value = (`No tiene descuento señor/a ${nombre}`))
            total = Number(document.getElementById("total").value = (`${valor}$`));
        }
        else{
            alert('Hazlo otra vez')
        }
    })
}



function seleccion(computador) {
    let $computador = document.getElementById('select1').value;
    Number(document.write(computador))
}

function limpiarInputs(){
    let limpiar = document.getElementById('btnLimpiar')
    limpiar.addEventListener('click', function(){
        document.getElementById('ValorDescuento').value = ""
        document.getElementById('total').value = ""
    })
}











































/*let $valor = 820.000;
let $cant = Number(document.getElementById('cantidad').value);
Number(document.write(cant))
let $totalVenta = 0;
let $resultadoSinDescuento = valor;
let $descuento = 0;
let $resultadoConDescuento = descuento;
let $resultadoConDescuento = Number(document.getElementById('ValorDescuento'));

function seleccion() {
    let $computador = document.getElementById('select1').value;
    Number(document.write(computador))
}

function total3() {
    let total = valor - descuento;
    let resultadoTotal = total;
    let resultadoTotal = Number(document.getElementById('total'));
}

boton = document.getElementById("btnEnviar");
boton.addEventListener('click', () => {

    if (cant == 1) {
        totalVenta = valor;
    } else if (cant == 2) {
        totalVenta = valor * 2;
    } else if (cant == 3) {
        totalVenta = valor * 3;
    } else if (cant == 4) {
        totalVenta = valor * 4;
    } else if (cant == 5) {
        totalVenta = valor * 5;
    } else if (cant == 6) {
        totalVenta = valor * 6;
    } else if (cant == 7) {
        totalVenta = valor * 7;
    } else if (cant == 8) {
        totalVenta = valor * 8;
    } else if (cant == 9) {
        totalVenta = valor * 9;
    } else if (cant == 10) {
        totalVenta = valor * 10;
    } else if ((cant <= 0) & (cant > 10)) {
        alert('No se permite');
        break;
    }




    if ((totalVenta >= 1640000) && (totalVenta <= 3280000)) {
        descuento = valor * 0.15;
    }
    else if ((totalVenta >= 3280000) && (totalVenta <= 6560000)) {
        descuento = valor % 25;
    }
    else if ((totalVenta >= 6560000) && (totalVenta <= 9840000)) {
        descuento = valor * 0.35;
    }
    else if (totalVenta >= 9840000) {
        descuento = 0;
    }

})*/

/*function mostrar(mostrar) {
    mostrar = document.getElementById("fieldset").style.display = "block";
    return mostrar;
}

let ventaFieldset, cantidad, boton, total, cantidad_Descuento, precio, descuento, valor_unidad;
boton = document.getElementById("boton1");

boton.addEventListener('click', () => {
    cantidad = Number(document.getElementById("cantidad").value)
    precio = Number(document.getElementById("valor_compra").value = (`${300000 * cantidad}$`))
    valor_unidad = Number(document.getElementById("valor_unidad").value=(`${300000}$`))
    if ((precio > 0) && (precio < 1640000)) {
        mostrar(fielset);
        descuento = document.getElementById("descuento").value = (`0%`);
        cantidad_Descuento = document.getElementById("cantidad_Descuento").value = ("No hay")
        total = document.getElementById("total").value = (`${precio}$`)
    }
    else if ((precio >= 1640000) && (precio <= 3280000)) {
        mostrar(fielset);
        descuento = document.getElementById("descuento").value = (`15%`);
        cantidad_Descuento = Number(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 15}$`))
        total = Number(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`))
    }
    else if ((precio > 3280000) && (precio <= 6560000)) {
        mostrar(fielset);
        descuento = document.getElementById("descuento").value = (`25%`);
        cantidad_Descuento = Number(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 25}$`))
        total = Number(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`));
    }
    else if ((precio>6560000)&&(precio<=9840000)){
        mostrar(fielset);
        descuento = document.getElementById("descuento").value = (`35%`);
        cantidad_Descuento = Number(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 35}$`))
        total = Number(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`));
    }
    else if (precio>9840000){
        mostrar(fielset);
        descuento = document.getElementById("descuento").value = (`0%`);
        cantidad_Descuento = Number(document.getElementById("cantidad_Descuento").value = (`No tiene descuento`))
        total = Number(document.getElementById("total").value = (`${precio}$`));
    }
    else{
        document.write('Intenta de nuevo')
    }
})*/























