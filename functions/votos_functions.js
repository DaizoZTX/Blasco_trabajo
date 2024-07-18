//Declaracion
//Botones------------------------------------------------
const botonVotar=document.getElementById('BotonVotar');
const botonInicio=document.getElementById('BotonInicio');

const botonTarjeta = document.querySelectorAll(".tarjeta")

for (i=0; i< botonTarjeta.length; i++){
    botonTarjeta[i].addEventListener('click', function()
{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
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
