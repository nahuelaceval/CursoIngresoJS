/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
   var ancho;
   var radio;
   var resultado;
   largo=document.getElementById('Largo').value;
   ancho=document.getElementById('Ancho').value;
   radio=document.getElementById('Radio').value;
   largo=parseInt(largo);
   ancho=parseInt(ancho);
   radio=parseInt(radio);
   resultado=((largo+ancho)*3);
   alert(resultado);
   

}
function Circulo () 
{
	var largo;
	var ancho;
	var radio;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	radio=parseInt(radio);
	resultado=radio*3.14;
	alert(resultado);
}
function Materiales () 
{
	var largo;
	var ancho;
	var radio;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	radio=parseInt(radio);
    resultado=(largo*ancho)*2;
    resultadoB=(largo*ancho)*3;
	alert("cemento "+resultado);
	alert("cal "+resultadoB);
}