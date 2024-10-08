// contiene la operación o resultado parcial
let parcial = "";

// elemento donde se coloca la operación que se está realizando 
let operRealizada = document.getElementById("operacionrealizada"); // Correcto: nombre del ID entre comillas
// elemento donde se coloca el resultado 
let txtResul = document.getElementById("txtResultado");

// último operado seleccionado 
let operadorSeleccionado = "";

// número ingresado 
let numero = "";

// para determinar si lo último presionado es un número o una operación 
let ultimoDigitopresionado = "";

// función para manejar los números
function operador(num) {
    // concateno el número 
    numero += num;
    // concateno la operación hasta el momento 
    parcial += num;
    // muestro la operación realizada
    operRealizada.innerHTML = parcial;

    // controlamos la división por 0 
    if (numero === '0' && operadorSeleccionado === '/') {
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }
    // guardo el tipo de tecla presionada por última vez 
    ultimoDigitopresionado = 'numero';
}

// detecto cuando se presiona una operación 
function operacion(oper) {
    // guardo la operación que eligió
    if (numero !== "") { // Solo agregar si hay un número
        operadorSeleccionado = oper;
        // actualizo el tipo de letra presionado
        ultimoDigitopresionado = "operacion";
        // voy armando la fórmula matemática
        parcial += oper;
        numero = ""; // Reinicio el número ingresado
        operRealizada.innerHTML = parcial;
    }
}

// realizo el cálculo de la fórmula matemática cuando presiona =
function calculo() {
    if (parcial !== "") { // Verifico que haya algo que calcular
        try {
            parcial = eval(parcial); // Evalúa la fórmula matemática que está en formato string
            txtResul.innerHTML = parcial; // Muestra el resultado
            // vuelvo a convertir es string por si continúa la fórmula
            parcial = parcial.toString();
            numero = ""; // Reinicio el número
            operRealizada.innerHTML = parcial; // Actualiza la operación
        } catch (e) {
            txtResul.innerHTML = "Error"; // Muestra error en caso de fallo
            limpiar();
        }
    }
}

// función que limpia todo
function limpiar() {
    operadorSeleccionado = "";
    parcial = "";
    txtResul.innerHTML = "0"; // Reinicia el resultado a 0
    numero = "";
    operRealizada.innerHTML = "0"; // Reinicia la operación
}