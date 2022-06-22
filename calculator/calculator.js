function getNum(num) {
    var inputVal = document.getElementById('inputVal');
    inputVal.value += (num);
}

function clearInput() {
    var inputVal = document.getElementById('inputVal');
    var history = document.getElementById('history')
    inputVal.value = "";
    history.innerHTML = ""
}

function getResult() {
    try {
        var inputVal = document.getElementById('inputVal');
        var history = document.getElementById('history')
        history.innerHTML = inputVal.value;
        inputVal.value = eval(inputVal.value)

    } catch (error) {
        alert(error)
    }

}

function back() {
    var inputVal = document.getElementById('inputVal');
    inputVal.value = inputVal.value.slice(0, -1)

}