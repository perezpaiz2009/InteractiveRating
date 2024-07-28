document.addEventListener('DOMContentLoaded',()=>{
  const divantes = document.getElementById("ant");
  const divdespues = document.getElementById("desp");
  const textoRating = document.getElementById("numRating");
  const ratingButtons=document.querySelectorAll(".opt");
  let seleccionado=null; //variable para saber si el boton fue seleccionado

  
  ratingButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
    e.stopPropagation();
      seleccionado=e.target.textContent;//Obteniendo el valor del boton seleccionado
      textoRating.innerText=seleccionado;      
      
    });
});

divantes.addEventListener("click",()=>{
  seleccionado=null;
});


document.getElementById("buttonenv").addEventListener( "click",()=>{
if (seleccionado){
  divdespues.className = divdespues.className.replace("oculto", "");
  divantes.classList.add("oculto");
  } else{
 alert("Please select a rating Before Submitting");

}
  });

   });

