function cal(x, y, math) {
    var x = +prompt("Enter number 1");
    var y = +prompt("Enter number 2");
    var math = prompt("enter operation (+, -, *, /):");
    var result;

    if (math == "+") {
        result = x + y;
    }
    else if (math == "-") {
        result = x - y;
    }
    else if (math == "*") {
        result = x * y;
    }
    else if (math == "/") {

        result = x / y;
    }
    return result
}


console.log("result : " + cal());