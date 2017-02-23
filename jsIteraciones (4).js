function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero>10 || numero<0)

	{
		numero=prompt("Te equivocaste, ingresá otro número");
	}

	alert("Bienvenido");

}//FIN DE LA FUNCIÓN