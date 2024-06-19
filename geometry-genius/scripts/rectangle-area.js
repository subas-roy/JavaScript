function calculateRectangleArea(){
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width)

    // get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length)

    // calculate rectangle area
    const area = width * length;
    console.log(area)

    // display triangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area
}