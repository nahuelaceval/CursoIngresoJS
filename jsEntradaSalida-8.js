/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado;
	resultado= 2%10;
	alert(resultado);
	resultado= 10%2;
	alert(resultado);

	//testeado

	var numeroDividendo;
	var numeroDivisor;
	var resultado;

	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;

	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);

	resultado=numeroDividendo%numeroDivisor;

	alert("el resto es "+resultado);



}
