const submit_boton =document.querySelector('.submit');
const containerUno=document.querySelector('.container1');
const containerDos=document.querySelector('.container2');
const raitingBtns=document.querySelectorAll('.number');
const res_calificacion = document.querySelector('.calificacion');
let calificacion_estrellas = 3

submit_boton.addEventListener('click',onSubmit);

raitingBtns.forEach(btn =>{
btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){

containerUno.classList.add('hide');  
res_calificacion.textContent=calificacion_estrellas;
containerDos.classList.remove('hide'); 

}

function handleRatingBtnClick(event){

raitingBtns.forEach(btn =>{

btn.classList.remove('active');

});

if(event.target.classList.contains('number')){

event.target.classList.add('active');

} else {

event.target.parentElement.classList.add('active');

}

calificacion_estrellas = event.target.textContent; 
console.log(calificacion_estrellas);

}