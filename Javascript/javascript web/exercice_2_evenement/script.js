// var button = document.getElementById('button');// Identifiant
// button.addEventListener('click', function () {
//     alert('ok');
// });

// var paragraph = document.getElementsByClassName('p');// Classe
// for (var i = 0; i < paragraph.length; i++) {
//     paragraph[i].addEventListener('mouseover', function () {
//         alert('Ok class name');
//     });
// }
var name_field = document.getElementById('name_field');
var button = document.querySelector('button'); // Premier boutton
button.addEventListener('click', function () {
    alert(name_field.value);
});

var name_field2 = document.getElementById('name_field');
var button2 = document.getElementsByTagName('button'); // Tout les bouttons
for (let index = 0; index < button2.length; index++) {
    button2[index].addEventListener('click', function () {
        alert(name_field2.value);
    });
}
