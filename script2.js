function showAlert() {
    var nombre = document.getElementById("namee").value;
    var email = document.getElementById("emaill").value;
    var aceptarTerminos = document.getElementById("terminos").checked;

    if (nombre && email && aceptarTerminos) {
        alert(nombre + " sus datos fueron registrados correctamente \nSu correo es: " + email);
    } else {
        alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
    }
}