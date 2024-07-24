//Declaracion
//Botones------------------------------------------------
const botonVotar=document.getElementById('BotonVotar');
const botonInicio=document.getElementById('botonRegresar');
const botonIngresar=document.getElementById('botonIngresar');
const candidato1=document.getElementById('cand1');
const candidato2=document.getElementById('cand2');
const candidato3=document.getElementById('cand3');
const candidato4=document.getElementById('cand4');
const candidato5=document.getElementById('cand5');
//Contenedores-------------------------------------------
const contenedorCandidatos=document.getElementById('contenedorCandidatos');
const validacionDeIdentidad=document.getElementById('validacionDeIdentidad');
//Inputs-------------------------------------------------
const cedulaInput=document.getElementById('inputCedulaUsuario');
//Contadores---------------------------------------------
let contCand1=0;
let contCand2=0;
let contCand3=0;
let contCand4=0;
let contCand5=0;
let contVotosTotales=0;
let votanteA=0;
//Arrays/Vectores--------------------------------------------
let votantes=[];
//Validacion de identidades------------------------------
contenedorCandidatos.style.display="none";
//Evento de click al boton ingresar
botonIngresar.addEventListener('click', function()
{
  votanteA=cedulaInput.value;
  /* Se utiliza el metodo ".some" para declarar una variable dentro de si y
  compararla con el input; es de destacar que esta variable se define como 
  un recorrido por todos los valores del array */
  if (votantes.some(cedula => cedula === votanteA))
  {
    Swal.fire("Usted ya ha votado!!");
  }
  else
  {
    votantes.push(votanteA);
    localStorage.setItem("cedulasVotantes",votantes);
  }
})

//Sweet Alerts-------------------------------------------
//cand1
candidato1.addEventListener('click', function()
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
            text: "Su voto fue enviado con exito!, Salga de la cabina y deje pase la siguiente persona.",
            icon: "success"
          });
        }
        if(result.isConfirmed){
          contCand1+=1;
          contVotosTotales+=1;
          contenedorCandidatos.style.display="none";
          validacionDeIdentidad.style.display="inherit";
        }
      });
})
//cand2
candidato2.addEventListener('click', function()
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
            text: "Su voto fue enviado con exito!, Salga de la cabina y deje pase la siguiente persona.",
            icon: "success"
          });
        }
        if(result.isConfirmed){
          contCand2+=1;
          contVotosTotales+=1;
          contenedorCandidatos.style.display="none";
          validacionDeIdentidad.style.display="inherit";
        }
      });
})
//cand3
candidato3.addEventListener('click', function()
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
            text: "Su voto fue enviado con exito!, Salga de la cabina y deje pase la siguiente persona.",
            icon: "success"
          });
        }
        if(result.isConfirmed){
          contCand3+=1;
          contVotosTotales+=1;
          contenedorCandidatos.style.display="none";
          validacionDeIdentidad.style.display="inherit";
        }
      });
})
//cand4
candidato4.addEventListener('click', function()
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
            text: "Su voto fue enviado con exito!, Salga de la cabina y deje pase la siguiente persona.",
            icon: "success"
          });
        }
        if(result.isConfirmed){
          contCand4+=1;
          contVotosTotales+=1;
          contenedorCandidatos.style.display="none";
          validacionDeIdentidad.style.display="inherit";
        }
      });
})
//cand5
candidato5.addEventListener('click', function()
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
            text: "Su voto fue enviado con exito!, Salga de la cabina y deje pase la siguiente persona.",
            icon: "success"
          });
        }
        if(result.isConfirmed){
          contCand5+=1
          contVotosTotales+=1;
          contenedorCandidatos.style.display="none";
          validacionDeIdentidad.style.display="inherit";
        }
      });
})
//Click en el boton de volver al inicio
botonInicio.addEventListener('click', function()
{
  localStorage.setItem('conCand1', contCand1);
  localStorage.setItem('conCand2', contCand2);
  localStorage.setItem('conCand3', contCand3);
  localStorage.setItem('conCand4', contCand4);
  localStorage.setItem('conCand5', contCand5);
  localStorage.setItem('conVotos', contVotosTotales);
  window.location.href="index.html"
})


