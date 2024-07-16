//Declaracion
//Botones------------------------------------------------
const botonVotar=document.getElementById('BotonVotar');
const botonInicio=document.getElementById('botonRegresar');

const botonTarjeta = document.querySelectorAll(".tarjeta")
//Sweet Alert
for (i=0; i< botonTarjeta.length; i++){
    botonTarjeta[i].addEventListener('click', function()
{
    Swal.fire({
        title: "Estas seguro de tu voto?",
        text: "No podras revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Estoy seguro!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Exito!",
            text: "Su voto fue enviado con exito!",
            icon: "success"
          });
        }
      });
})
}
//Checks-------------------------------------------------
const checkCand1=document.getElementById('check1');
const checkCand2=document.getElementById('check2');
const checkCand3=document.getElementById('check3');
//Inicio-------------------------------------------------
//EVENTOS
//Click en el boton de volver al inicio
botonInicio.addEventListener('click', function()
{
  alert("Sera dirigido al inicio de sesión!");
  window.location.href="index.html"
})
