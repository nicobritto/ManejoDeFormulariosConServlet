

function validarForma(forma) {
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar un nombre usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    var password = forma.password;
    if (password.value == "" || password.value.length < 3) {
        alert("debe proporcionar un password de al menos 3 caracteres");
        password.focus();
        password.select();
        return false
    }
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    for (var i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("debe seleccionar una tecnologia");
        return false;
    }

    var genero = forma.genero;
    var radioSeleccionado = false;
    for (var i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("debe seleccionar un genero");
        return false;
    }
    
    var  ocupacion=forma.ocupacion;
    if (ocupacion.value=="") {
        alert("debe seleccionar una ocupacion");
        return false;
    }
    //este punto el formulario es valido entonces retornamos true
    alert("Formulario validado enviando datos...");
    return true;
    

}
