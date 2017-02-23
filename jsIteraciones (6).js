function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero = prompt("ingrese número");

	numero=parseInt(numero);
	while(contador<5)
	{
		contador=contador+1;
		acumulador=acumulador+numero;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN