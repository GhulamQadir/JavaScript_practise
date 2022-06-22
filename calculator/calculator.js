function getNum(num) {
    var inputVal = document.getElementById('inputVal');
    inputVal.value += (num);
}

function clearInput() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = "";
}

function getResult() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = eval(inputVal.value)

}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}