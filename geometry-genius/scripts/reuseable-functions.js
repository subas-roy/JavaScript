function getInputValueById(inputFiledId){
    const inputFiled = document.getElementById(inputFiledId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}