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
            imagen.src="img/maria corina.png";
            ganadorNombre.textContent="Maria Corina";
            votosGanador=candidato3;
        }
        else
        {
            if ((candidato4>candidato1)&&(candidato4>candidato2)&&(candidato4>candidato3)&&(candidato4>candidato5))
            {
                imagen.src="img/Javier Milei.png";
                ganadorNombre.textContent="Javier Milei";
                votosGanador=candidato4;
            }
            else
            {
                if ((candidato5>candidato1)&&(candidato5>candidato2)&&(candidato5>candidato3)&&(candidato5>candidato4))
                {
                    imagen.src="img/kevon gonzalez.png";
                    ganadorNombre.textContent="Kevin Gonzalez";
                    votosGanador=candidato5;
                }
                else
                {
                    ganadorNombre.textContent="NULO";
                    votosGanador=0;
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

function charts(cont1,cont2,cont3,cont4,cont5){

    const chart = document.querySelector(".chart");

    
        new Chart(chart, {
          type: 'bar',
          data: {
            labels: ['EdMundo', 'Maduro', 'Maria Corina', 'Javier Milei', 'Kevin Gonzalez'],
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

function charts2(total, cont1,cont2,cont3,cont4,cont5){

  const grafica = document.querySelector(".chartGrafica")

  new Chart(grafica, {
    type: 'doughnut',
    data: {
      labels: ['EdMundo', 'Maduro', 'Maria Corina', 'Javier Milei', 'Kevin Gonzalez'],
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
