var counter = 0;
var sum = 0;
var avg = 0;
var array = [];
while (true) {
    var number = prompt('Saisir des valeurs numérique');
    if (number != 0) {
        array[counter] = number;// entre les valeurs numérique dans le tableau
        sum = parseInt(sum) + parseInt(number); // calcul la somme des nombres
        counter++;// indice
    } else {
        avg = sum / counter;// calcul de la moyenne
        document.write('Nombre de valeur saisie : ' + counter);
        document.write("<br>");
        document.write('Somme des valeurs saisies : ' + sum);
        document.write("<br>");
        document.write('Moyenne des valeurs saisies : ' + avg);
        break;
    }
}
