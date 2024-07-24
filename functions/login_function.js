//Declaracion----------------------------------
const botonLogin = document.querySelector('.botones1');
const botonOlvide = document.querySelector('.botones2');
const nickInput = document.getElementById('txtUsuario');
const passwordInput = document.getElementById('passwordUsuario');
//passwords autoasignados----------------------
let userPassword=1234;
//Eventos--------------------------------------
//Inicio de sesion
botonLogin.addEventListener('click', function ()
{
    if (nickInput.value.toUpperCase()=="USUARIO" && passwordInput.value==userPassword)
    {
        window.location.href='votos.html';
    }
    else
    {
        if (nickInput.value.toUpperCase()=="ADMIN" && passwordInput.value=="Admin")
        {
            window.location.href='admin_page.html';
        }
        else
        {
            if(nickInput.value.toUpperCase()!="USUARIO" && nickInput.value.toUpperCase()!="ADMIN")
            {
                Swal.fire("ERROR: USUARIO INEXISTENTE");
            }
            else
            {
                if ((nickInput.value.toUpperCase()!="USUARIO" || passwordInput!=userPassword) && (nickInput.value.toUpperCase()!="ADMIN" || passwordInput!="Admin"))
                {
                    Swal.fire("ERROR: USUARIO O CONTRASEÑA INCORRECTA");
                }
            }
        }
    }
})

