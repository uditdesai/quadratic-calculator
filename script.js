/*

var a = prompt("What is the a value?");
var b = prompt("What is the b value?");
var c = prompt("What is the c value?");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

var insideSquareRoot = (a * c * -4);
var fullInsideSquareRoot = (Math.pow(b, 2) + insideSquareRoot);
var squareRoot = (Math.sqrt(fullInsideSquareRoot));
var negativeBValue = (0 - b);
var numeratorPlus = (negativeBValue + squareRoot);
var denominator = (2 * a);
var answerPlus = (numeratorPlus / denominator);
alert(answerPlus);
var numeratorNegative = (negativeBValue - squareRoot);
var answerNegative = (numeratorNegative / denominator);
alert(answerNegative);

*/

document.getElementById("submit").onclick = function() {
    
    var a = $("#avalue").val();
    var b = $("#bvalue").val();
    var c = $("#cvalue").val();
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var insideSquareRoot = (a * c * -4);

    var fullInsideSquareRoot = (Math.pow(b, 2) + insideSquareRoot);

    var squareRoot = (Math.sqrt(fullInsideSquareRoot));

    var negativeBValue = (0 - b);

    var numeratorPlus = (negativeBValue + squareRoot);

    var denominator = (2 * a);

    var answerPlus = (numeratorPlus / denominator);
    
    var numeratorNegative = (negativeBValue - squareRoot);

    var answerNegative = (numeratorNegative / denominator);
    
    var finalAnswerPlus = ("x = " + answerPlus);
    
    var finalAnswerNegative = ("x = " + answerNegative);
    
    if ( isNaN(answerPlus, answerNegative) ) {
        
        document.getElementById("xvaluefirst").innerHTML = "no answer :(";
    
    } else {
    
        document.getElementById("xvaluefirst").innerHTML = finalAnswerPlus;
        
        document.getElementById("xvaluesecond").innerHTML = finalAnswerNegative;
    
    }
    
};