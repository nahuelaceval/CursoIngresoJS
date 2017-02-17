function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta=="si")
	{	numero=prompt("Ingrese su numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			numero+numero;

		}
		if(numero<0)
		{

			numero*numero;
		}
		
		
		contador=contador+1;
		respuesta=prompt("ingrese si para continuar");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN