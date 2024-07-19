//botones
const botonRegresar=document.getElementById('botonRegresar');
const mostrarDatos=document.getElementById('mostrarDat');
const info=document.querySelector('.informacion');
//variables
let auto=true;
//Boton regresar
botonRegresar.addEventListener('click', function()
{
    alert("Sera redirigido a la pagina de inicio!");
    window.location.href="index.html";
})
//Boton mostrar
mostrarDatos.addEventListener('click', function()
{
    if(auto==false)
    {
        info.style.display= "inherit";
        auto=true;
    }
    else
    {
        if(auto==true)
        {
            info.style.display= "none";
            auto=false;
        }
    }
    
})