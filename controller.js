let Clientes = [
    { tipodocumento: "C.C", documento: "1234567890", nombre: "Sofia", ciudad: "Cali", direccion: "calle 44", email: "sof@gmail.com", telefono: "27631212", estado: "Activo" }
];

function registro() {
    let tipodocumento = document.getElementById("tipodocumento").value;
    let documento = document.getElementById("documento").value;
    let nombre = document.getElementById("nombre").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let estado = document.getElementById("estado").value;

    let cliente = {
        tipodocumento,
        documento,
        nombre,
        ciudad,
        direccion,
        email,
        telefono,
        estado
    };

    Clientes.push(cliente);
    Listar();
    clearFor();
}

function Listar() {
    let table = document.getElementById("lista");
    table.innerHTML = '';
    Clientes.forEach((cliente, index) => {
        let filas = document.createElement("tr");
        filas.innerHTML = `
        <td>${index + 1}</td>
        <td>${cliente.tipodocumento}</td>
        <td>${cliente.documento}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.ciudad}</td>
        <td>${cliente.direccion}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.estado}</td>
        <td><div class="btn-group" role="group" aria-label="Basic example">
                                <button onclick="vercliente(${index}, 1)" data-bs-toggle="modal" data-bs-target="#ver" type="button" class="btn btn-primary"><img src="ojo.png" style="width: 30%"></button>
                                <button onclick="eliminar(${index})" type="button" class="btn btn-danger"><img src="basura.png" style="width: 30%"></button>
                              </div></td>
        `
        table.appendChild(filas);
    });
}

function vercliente(id) {
    let tipodocumento = document.getElementById("tipodocumentoVer").value = Clientes[id].tipodocumento;
    let documento = document.getElementById("documentoVer").value = Clientes[id].documento;
    let nombre = document.getElementById("nombreVer").value = Clientes[id].nombre;
    let ciudad = document.getElementById("ciudadVer").value = Clientes[id].ciudad;
    let direccion = document.getElementById("direccionVer").value = Clientes[id].direccion;
    let email = document.getElementById("emailVer").value = Clientes[id].email;
    let telefono = document.getElementById("telefonoVer").value = Clientes[id].telefono;
    let estado = document.getElementById("estadoVer").value = Clientes[id].estado;
}

function validatorDocumentExisting() {
    let documento = document.getElementById("documento").value;
    let userExisting = false;
    Clientes.forEach((element, index) => {
        if (documento == element.documento) {
            userExisting = true;
        }
    });
    if (userExisting) {
        errorAlert("El cliente ya existe");
        clearFor();
    }
}

function validatorLength() {
    let documento = document.getElementById("documento").value;
    if (documento.length > 10) {
        errorAlert("Ha sobrepasado la longitud del documento");
        document.getElementById("documento").value = "";
    }
    return true;
}

function validatorLengthps() {
    let documento = document.getElementById("documento").value;
    if (documento.length > 13) {
        errorAlert("Ha sobrepasado la longitud del documento");
        document.getElementById("documento").value = "";
    }
    return true;
}

function start() {
    let userLogin = localStorage.getItem('user');
    userLogin = JSON.parse(userLogin);

    console.log(userLogin)

    let nombre = document.getElementById('nameUser')
    nombre.innerHTML = `${userLogin.nombre}`;


}

function mostrarperfil() {
    let usuario = localStorage.getItem('user');
    usuario = JSON.parse(usuario);

    console.log(usuario)

    let info = document.getElementById('info');
    info.innerHTML = `
    Tipo documento: ${usuario.tipodocumento} -
    Docuemtno: ${usuario.documento} -
    Nombre: ${usuario.nombre} -
    Ciudad: ${usuario.ciudad} -
    Correo: ${usuario.email} -
    Contraseña: ${usuario.password} -
    Estado: ${usuario.estado} -
    Telefono: ${usuario.telefono}`;
}

function clearFor() {
    document.getElementById("tipodocumento").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("estado").value = "";
}

function eliminar() {
    let nombre = Clientes[id].nombre
    Clientes.splice(id, 1);
    successAlertDelete(nombre)
    Listar();
}

function tipodocumento(){
    let tipodocumento = document.getElementById("tipodocumento").value;
    if (tipodocumento === "PS"){
        validatorLengthps();
    }else{
        validatorLength();
    }
}