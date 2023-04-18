

const txtop1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtop2 = document.getElementById("op2")
const btncalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado");


btncalcular.addEventListener('click',calcular);   ///aniadir utilidad al boton


function calcular() {
    
    const operacion = txtOperacion.value
    const op1 =  parseFloat (txtop1.value);
    const op2 = parseFloat (txtop2.value);
    
    if (operacion == "+" || operacion == "-" || operacion == "/" || operacion == "*") {
        
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 -op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        
           
        }


        pResultado.innerText= "RESULTADO = " + resultado;    
    } else{
        pResultado.innerText=("calculo no disponible");
    }
}