function registrouser() {
    let usuario = {
        tipodocumento: document.getElementById("tipodocumento").value,
        documento: document.getElementById("documento").value,
        nombre: document.getElementById("nombre").value,
        ciudad: document.getElementById("ciudad").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        estado: false,
        telefono: document.getElementById("telefono").value
    }
    localStorage.setItem("user", JSON.stringify(usuario));
    successAlertRegister("Usuario")
}

function acceder() {
    let email = document.getElementById("emailUser").value;
    let password = document.getElementById("passwordUser").value;

    let dataStorage = localStorage.getItem("user");
    dataStorage = (JSON.parse(dataStorage))

    if (email == dataStorage.email && password == dataStorage.password) {
        successAcces()
        setTimeout(() => {
            window.location.replace('home.html');
        }, 1000);
    } else {
        errorAlert("Credenciales de acceso incorrectas")
        document.getElementById("emailUser").value = ""
        document.getElementById("passwordUser").value = ""
    }
}

function validatorLengthPassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8 && password.length > 15) {
        errorAlert("La contraseña debe ser mayor a 8 y menor a 15");
        document.getElementById("password").value = "";
    }
    return true;
}

function logout() {
    Swal.fire({
        title: "¿Estas seguro?",
        text: "Seguro que desea cerrar sesión!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace('index.html');
        }
    });
}


