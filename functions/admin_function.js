//botones
const botonRegresar=document.getElementById('botonRegresar2');
const mostrarDatos=document.getElementById('mostrarDat');
const info=document.querySelector('.informacion');
const imagen=document.getElementById('imagenCandGanador');
const ganadorNombre=document.getElementById('nombreGanador');
const porcentajeGanador=document.getElementById('porcentajeGanador');
const votosTotalesTxt=document.getElementById('votosTotalesTxt');
//variables
let auto=true;
let candidato1=localStorage.getItem("conCand1");
let candidato2=localStorage.getItem("conCand2");
let candidato3=localStorage.getItem("conCand3");
let candidato4=localStorage.getItem("conCand4");
let candidato5=localStorage.getItem("conCand5");
let votosTotales=localStorage.getItem("conVotos");
let votosGanador=0;
//CARGA DE DATOS
//ParseInts
votosTotales=parseInt(votosTotales);
candidato1=parseInt(candidato1);
candidato2=parseInt(candidato2);
candidato3=parseInt(candidato3);
candidato4=parseInt(candidato4);
candidato5=parseInt(candidato5);
//Decreto del ganador---------------------------------------------------------------------------------
if ((candidato1>candidato2)&&(candidato1>candidato3)&&(candidato1>candidato4)&&(candidato1>candidato5))
{
  imagen.src="img/edMundo.png";
  ganadorNombre.textContent="Edmundo Gonzalez";
  votosGanador=candidato1;
}
else
{
  if ((candidato2>candidato1)&&(candidato2>candidato3)&&(candidato2>candidato4)&&(candidato2>candidato5))
  {
    imagen.src="img/maduro.png";
    ganadorNombre.textContent="Nicolás Maduro";
    votosGanador=candidato2;
  }
  else
  {
    if ((candidato3>candidato1)&&(candidato3>candidato2)&&(candidato3>candidato4)&&(candidato3>candidato5))
    {
      imagen.src="img/jose brito.png";
      ganadorNombre.textContent="Jose Brito";
      votosGanador=candidato3;
    }
    else
    {
      if ((candidato4>candidato1)&&(candidato4>candidato2)&&(candidato4>candidato3)&&(candidato4>candidato5))
      {
        imagen.src="img/antonio ecarri.png";
        ganadorNombre.textContent="Antonio Ecarri";
        votosGanador=candidato4;
      }
      else
      {
        if ((candidato5>candidato1)&&(candidato5>candidato2)&&(candidato5>candidato3)&&(candidato5>candidato4))
        {
          imagen.src="img/javier bertucci.png";
          ganadorNombre.textContent="Javier Bertucci";
          votosGanador=candidato5;
        }
        else
        {
          if  (candidato1==0 && candidato2==0 && candidato3==0 && candidato4==0 && candidato5==0)
          {
            ganadorNombre.textContent="NO EXISTEN VOTOS!!";
            votosGanador=0;
          }
          else
          {
            //Nota:Creo que como maximo tendremos que dejar 3 candidatos
            if (((candidato1==candidato2)||(candidato1==candidato3))||((candidato2==candidato1)||(candidato2==candidato3))||((candidato3==candidato1)||(candidato3==candidato2)))
            {
              ganadorNombre.textContent="EMPATE!";
              votosGanador=0;
            }
          }
        }
      }
    }
  }
}
//votos totales
votosTotalesTxt.textContent="Votos totales: "+votosTotales;
//Boton regresar
botonRegresar.addEventListener('click', function()
{
  Swal.fire({
    title: "¿Estas seguro?",
    text: "Si sales de esta pestaña e inicias una nueva sesion como usuario las votaciones se reiniciaran.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Estoy seguro!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Exito!",
        text: "Usted volvera a la pagina de inicio de sesion!",
        icon: "sucesss"
      });
      window.location.href="index.html";
    }
  });
})

//Boton mostrar
mostrarDatos.addEventListener('click', function()
{
    if(auto==false)
    {
        info.style.display= "grid";
        auto=true;
        charts(candidato1,candidato2,candidato3,candidato4,candidato5);
        charts2(votosTotales,candidato1,candidato2,candidato3,candidato4,candidato5);
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

//Grafico de barras
function charts(cont1,cont2,cont3,cont4,cont5)
{
    //Obtencion de la instancia
    const chart = document.querySelector(".chart");

    
        new Chart(chart, {
          type: 'bar',
          data: {
            labels: ['EdMundo Gonzalez', 'Nicolas Maduro', 'Jose Brito', 'Antonio Ecarri', 'Javier Bertucci'],
            datasets: [{
              label: '# de votos ',
              data: [cont1, cont2, cont3, cont4, cont5],
              borderWidth: 1
            }]
          },
          options: { responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
    
        });    
}

//Grafico de dona
function charts2(total, cont1,cont2,cont3,cont4,cont5)
{
      //Obtencion de la instancia
  const grafica = document.querySelector(".chartGrafica")

  new Chart(grafica, {
    type: 'doughnut',
    data: {
      labels: ['EdMundo Gonzalez', 'Nicolas Maduro', 'Jose Brito', 'Antonio Ecarri', 'Javier Bertucci'],
      datasets: [{
        label: '% de Votos',
        data: [cont1/total*100,cont2/total*100, cont3/total*100, cont4/total*100, cont5/total*100],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    }
  });
}
