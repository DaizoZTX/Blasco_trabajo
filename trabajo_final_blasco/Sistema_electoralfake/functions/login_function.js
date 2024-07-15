//Declaracion
const botonLogin = document.querySelector('.botones1');
const botonOlvide = document.querySelector('.botones2');
const nickInput = document.getElementById('txtUsuario');
const passwordInput = document.getElementById('passwordUsuario');
//passwords autoasignados
let userPassword=1234;

//Funciones
//Inicio de sesion
botonLogin.addEventListener('click', function ()
{
    if (nickInput.value=="Usuario" && passwordInput.value==userPassword)
    {
        alert("Sera dirigido a la pagina de votacion...");
        window.location.href='index.html';
    }
    else
    {
        if (nickInput.value=="Admin" && passwordInput.value=="Admin")
        {
            alert("Sera dirigido a la pagina de votacion (ADMINISTRACIÓN)");
            window.location.href='admin_page.html';
        }
        else
        {
            if(nickInput.value!="Usuario" && nickInput.value!="Admin")
            {
                alert("ERROR: USUARIO INEXISTENTE");
            }
            else
            {
                if ((nickInput.value!="Usuario" || passwordInput!=userPassword) && (nickInput.value!="Admin" || passwordInput!="Admin"))
                {
                    alert("ERROR: USUARIO O CONTRASEÑA INCORRECTA");
                }
            }
        }
    }
})
//Olvide mi contraseña!
botonOlvide.addEventListener('click', function()
{
    alert("Usted esta apunto de cambiar la contraseña de usuario!");
    userPassword=prompt("Ingrese una nueva contraseña");
})
