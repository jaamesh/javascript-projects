let line;

function reverse(strToReverse) {
    return strToReverse.split('').reverse().join('');
}

function makeLine(size, character = "#") {
    return new Array(size+1).join(character);
}

function makeSpaceLine(numSpaces, numChars, character) {
    return makeLine(numSpaces," ") + makeLine(numChars, character) + makeLine(numSpaces, " ");
}

function makeSquare(size, character) {
    /* Commenting out original design.
    let square = makeLine(size);
    for (let i = 0; i < size - 1; i++) {
        square = square + "\n" + makeLine(size);
    }
    */
    return makeRectangle(size, size, character);
}

function makeRectangle(width, height, character) {
    let rectangle = makeLine(width, character);
    for (let i = 0; i < height - 1; i++) {
        rectangle = rectangle + "\n" + makeLine(width, character);
    }
    return rectangle;
}

function makeDownwardStairs(height, character) {
    let stairs = makeLine(1, character);
    for (let i = 2; i <= height; i++) {
        stairs = stairs + "\n" + makeLine(i, character);
    }
    return stairs;
}

function makeIsoscelesTriangle(height, character) {
    let lineLength = height * 2 - 1;
    let numChars = 1;
    let triangle = makeSpaceLine((lineLength - numChars)/2, numChars, character);
    for (let i = 2; i <= height; i++) {
        numChars = i * 2 - 1;
        triangle = triangle + "\n" + makeSpaceLine((lineLength - numChars)/2, numChars, character);
    }
    return triangle;
}

function makeDiamond(halfHeight, character) {
    let triangle = makeIsoscelesTriangle(halfHeight, character);
    return triangle + "\n" + reverse(triangle);
}

module.exports = {
    makeLine: makeLine,
    makeSquare: makeSquare,
    makeRectangle: makeRectangle,
    makeDownwardStairs: makeDownwardStairs,
    makeSpaceLine: makeSpaceLine,
    makeIsoscelesTriangle: makeIsoscelesTriangle,
    makeDiamond: makeDiamond
};