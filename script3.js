function showAlert() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var aceptarTerminos = document.getElementById("terminos").checked;

    if (nombre && email && aceptarTerminos) {
        alert(nombre + " sus datos fueron registrados correctamente \n\nSu correo es: " + email);
    } else {
        alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
    }
}
