
function dig(valor) {
    document.getElementById("result").value += valor;
}

function clean() {
    document.getElementById("result").value = "";
}

function delOne() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y
}

// const form = document.querySelector('#form')

// form.addEventListener('click', validarFormulario)


// function validarFormulario(e) {
//     e.preventDefault() //Para que no resetee el form y se puedan 
//     //trabajar con los datos
//     let num1 = parseFloat(document.querySelector('#num1').value)
//     let num2 = parseFloat(document.querySelector('#num2').value)
//     if (isNaN(num1)) {
//         num1 = 0;
//     }
//     if (isNaN(num2)) {
//         num2 = 0;
//     }

//     const answer = document.getElementById('answer')

//     answer.textContent = `La respuesta es ${num1 + num2}`
// }