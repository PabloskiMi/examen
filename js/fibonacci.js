
function secfibo() {
    var i = 0;
    var n = document.getElementById("n").value;

    var arreglo = [];
    n = parseInt(n);

    for (i; i < n; i++) {
        if (i == 0) {
            arreglo.push(0);
        } else if (i == 1) {

            arreglo.push(1);

        } else {
            arreglo.push(arreglo[i - 1] + arreglo[i - 2]);
        }
    }

    document.getElementById("resultado").innerHTML = "<h3>" + arreglo + "</h3>";

}


