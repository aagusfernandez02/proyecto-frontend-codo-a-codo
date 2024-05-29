
function validacion() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birthdate = document.getElementById('birthdate').value;

    var nombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    var apellido = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
    var contraseña = /^[a-zA-ZÀ-ÿ0-9_.+-.#$&\s].{5,12}$/;
    var coreeo = /^[a-zA-Z0-9_.+-]+@(yahoo|gmail|hotmail|outlook)\.(com|.ar)$/;
    var fecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
    
    if (!nombre.test(firstName)) {
        document.getElementById('alerta').innerHTML = "Por favor, complete su nombre correctamente.";
        document.getElementById('firstName').focus();
        return false;
    }

    if (!apellido.test(lastName)) {
        document.getElementById('alerta').innerHTML = "Por favor, complete su apellido correctamente.";
        document.getElementById('lastName').focus();
        return false;
    }

    if (!contraseña.test(password)) {
        document.getElementById('alerta').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres.";
        document.getElementById('password').focus();
        return false;
    }

   // if (!fecha.test(birthdate)) {
     //   document.getElementById('alerta').innerHTML = "Por favor, ingrese una fecha de nacimiento válida.";
       // document.getElementById('birthdate').focus();
        //return false;
    
    if (!coreeo.test(email)) {
        document.getElementById('alerta').innerHTML = "Por favor, ingrese un correo electrónico válido.";
        document.getElementById('email').focus();
        return false;
    }

    
 
   

    return true;

    }   
        