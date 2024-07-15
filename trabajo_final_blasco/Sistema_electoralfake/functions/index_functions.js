//Declaracion
//Botones------------------------------------------------
const botonVotar=document.getElementById('BotonVotar');
const botonInicio=document.getElementById('BotonInicio');
//Checks-------------------------------------------------
const checkCand1=document.getElementById('check1');
const checkCand2=document.getElementById('check2');
const checkCand3=document.getElementById('check3');
//Inicio-------------------------------------------------
//EVENTOS
//Click en el boton de volver al inicio
botonInicio.addEventListener('click', function()
{
    window.location.href='login_page.html';
})