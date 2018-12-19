var label = document.getElementById('label1');
var button = document.getElementById('button1');
var field = document.getElementById('textBox1');

var number_ai = Math.floor(Math.random() * 10); // Nombre aléatoire

/**
 * Script non intrusif
 */
button.addEventListener('click', function () {
    var number_user = field.value; // Nombre saisie
    if (number_user > number_ai) {
        label.innerText = 'Plus petit';
    } else if (number_user < number_ai) {
        label.innerText = 'Plus grand';
    } else {
        label.innerText = 'Bravo c\'est ça !' + ' ' + number_ai;
    }
});
/**
 * Script intrusif
 */
// function verif() {
//     var number_user = field.value; // Nombre saisie
//     if (number_user > number_ai) {
//         label.innerText = 'Plus petit';
//     } else if (number_user < number_ai) {
//         label.innerText = 'Plus grand';
//     } else {
//         label.innerText = 'Bravo c\'est ça !' + ' ' + number_ai;
//     }
// }