// Funcion de exito
function successAlertRegister (nombre) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: nombre + " registrado exitosamente"
    });
}


// Funcion de exito
function successAlertDelete (nombre) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: nombre + " eliminado exitosamente"
  });
}


//  Funcion de error
function errorAlert(mensaje){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo sentimos! "+mensaje,
        showConfirmButton:false,
        timer:2000
      });
}



// Acceso exitoso
function successAcces() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Bienvenido, acceso concedido..."
  });
}