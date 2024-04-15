
const form = document.querySelector('#form')

form.addEventListener('click', validarFormulario)


function validarFormulario(e) {
    e.preventDefault() //Para que no resetee el form y se puedan 
    //trabajar con los datos
    let num1 = parseFloat(document.querySelector('#num1').value)
    let num2 = parseFloat(document.querySelector('#num2').value)
    if (isNaN(num1)) {
        num1 = 0;
    }
    if (isNaN(num2)) {
        num2 = 0;
    }

    const answer = document.getElementById('answer')

    answer.textContent = `La respuesta es ${num1 + num2}`
}