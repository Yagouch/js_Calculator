
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
    save(x)
    let y = eval(x);
    document.getElementById("result").value = y
}

let saveStack = []
index = 0

function save(item){
    if (saveStack.length < 10){
        saveStack.push(item)
        document.getElementById('memory').value = item;
        index++;
    } else {
        saveStack.splice(0,1) // Elimina el primer elemento
        saveStack.push(item)
        document.getElementById('memory').value = item;
    }
}

function memoUp() {
    if (index - 1 > 0){
        index -= 1;
        document.getElementById('memory').value = saveStack[index-1];
    }
}

function memoDown(){
    if ((index + 1) <= saveStack.length) {
        index += 1;
        document.getElementById('memory').value = saveStack[index-1];
    }
}