var x = (prompt("Variable A: "));
var y = (prompt("Variable B: "));
var z = (prompt("Variable C: "));

a = parseInt(x);
b = parseInt(y);
c = parseInt(z);


if (isNaN(a) === true || isNaN(b) === true || isNaN(c) === true) {
    alert("Datos incorrectos, intente otra vez.")
}
else {


    var x1 = ((-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
    var x2 = ((-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

    alert("x1: " + x1);
    alert("x2: " + x2);

    document.write("<h2>Sus ingresos fueron: a=</h2>"+a+"<h2>b=</h2>"+b+"<h2>c=</h2>"+c);
    document.write("<h2>El resultado de x1 es: </h2>"+x1);
    document.write("<h2>El resultado de x2 es: </h2>"+x2);

}