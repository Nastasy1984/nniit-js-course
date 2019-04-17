const resButton = document.getElementById("resButton");
const firstNumber = document.getElementById("firstNum");
const secondNumber = document.getElementById("secondNum");
const select = document.getElementById("select");
const result = document.getElementById("result");

resButton.onclick = onClickResButton;

function countResult(){
    let res;
    if (select.value === "+"){
        res = +firstNumber.value + (+secondNumber.value);
    }
    else if (select.value === "-"){
        res = +firstNumber.value - (+secondNumber.value);
    }
    else if (select.value === "*"){
        res = +firstNumber.value * (+secondNumber.value);
    }
    else if (select.value === "/"){
        res = +firstNumber.value / (+secondNumber.value);
    }
    if (isNaN(res)){
        return "wrong input!"
    }
    return res;
}

function onClickResButton(){
    result.style.background = "white";
    result.style.color = "black";
    result.style.fontSize = "15pt";
    result.style.fontWeight = "600";
    result.value = countResult();
    result.innerText = result.value;
}