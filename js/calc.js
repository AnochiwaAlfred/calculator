result = document.getElementById("display")
inputHolder = ""
resultValue = 0
resultValueString = ""

function clickInput(id){
    // console.log(id)
    result.value = result.value + id
    inputHolder = inputHolder + id
}

function clickInput2(id){
    // console.log(id)
    result.value = result.value + id
    inputHolder = inputHolder + id
}

function calculate(id){
    console.log("Calculating...");
    console.log(inputHolder)
    // resultValue = eval(inputHolder)
    resultValue = eval(result.value)
    console.log(resultValue)
    resultValueString = String(resultValue)
    result.value = resultValueString
    inputHolder = ""
    resultValue = 0
    resultValueString = ""
}

function clearScreen(){
    console.log("Clearing Screen");
    result.value = ""
    inputHolder = ""
    resultValue = 0
    resultValueString = ""
}