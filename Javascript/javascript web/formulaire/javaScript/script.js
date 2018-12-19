// Champ du formulaire
var society = document.getElementsByName("society");
var contact_person = document.getElementsByName("contact_person");
var postal_code = document.getElementsByName("postal_code");
var city = document.getElementsByName("city");
var email = document.getElementsByName("email");
var technical_environment = document.getElementsByName("technical_environment");
var technical_environment_c = document.getElementsByName("technical_environment_c");

// Nombre d'erreur
var valid_form = 0;

// Quand le formulaire est soumis => vérification des champs
document.form_name.addEventListener("submit", function (event) {
    // Reset du nombre d'erreur
    valid_form = 0;
    verif(society, 0, 1, "text");
    verif(contact_person, 1, 1, "text");
    verif(postal_code, 3, 5, "numeric");
    verif(city, 4, 1, "text");
    verif(email, 5, 1, "email");
    // Si erreur => le formulaire n'est pas soumis
    if (valid_form > 0) {
        event.preventDefault();
    }
});
/**
 * Vérification des champs du formulaire
 * @param {*} name_field : nom du champ
 * @param {*} indice_class : l'indice de la classe
 * @param {*} num_carac : nombre de caractères voulu
 * @param {*} type : type du champ
 */
function verif(name_field, indice_class, num_carac, type) {
    if (type == "text") {
        // Vérification non vide donc > 0 caractère (1 minimum)
        if (name_field[0].value != "") {
            name_field[0].style.border = "2px solid green";
            document.getElementsByClassName("error")[indice_class].innerText = "";
        } else {
            name_field[0].style.border = "2px solid red";
            document.getElementsByClassName("error")[indice_class].innerText = num_carac + " " + "caractère minimum";
            valid_form++;
        }
    } else if (type == "numeric") {
        // Vérification : non vide + 5 caractères + numérique
        if (name_field[0].value != "" && !isNaN(name_field[0].value) && name_field[0].value.length == num_carac) {
            name_field[0].style.border = "2px solid green";
            document.getElementsByClassName("error")[indice_class].innerText = "";
        } else {
            name_field[0].style.border = "2px solid red";
            document.getElementsByClassName("error")[indice_class].innerText = num_carac + " " + "caractères numériques";
            valid_form++;
        }
    } else if (type == "email") {
        // Vérification du format de l'adresse e-mail
        var regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/);
        if (name_field[0].value != "" && regex.test(name_field[0].value)) {
            name_field[0].style.border = "2px solid green";
            document.getElementsByClassName("error")[indice_class].innerText = "";
        } else {
            name_field[0].style.border = "2px solid red";
            document.getElementsByClassName("error")[indice_class].innerText = "Format : exemple@exemple.fr";
            valid_form++;
        }
    }
}
/**
 * Vérification de la valeur du champ sélectionné correspondant au textarea
 * Si ce qu'il sélectionne existe déja dans le champ de texte => alert()
 */
technical_environment[0].addEventListener("change", function () {
    if (technical_environment[0].value != "choice" && technical_environment[0].value != "other") {
        // Valeur du select
        var regex = new RegExp(technical_environment[0].value);
        // comparé avec la valeur du champ de texte
        if (regex.test(technical_environment_c[0].value)) {
            alert(technical_environment[0].value + " " + "est déja présent");
        } else {
            // Si non présent => ajout de l'élément sélectionné
            technical_environment_c[0].innerText = technical_environment_c[0].value + ' ' + technical_environment[0].value;
        }
    }
    if (technical_environment[0].value == "other") {
        alert("Veuillez-le ou les préciser dans le champ ci-dessous.");
    }
});



