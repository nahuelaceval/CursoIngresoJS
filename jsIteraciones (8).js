function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var resultado;
	var respuesta='si';
	var numero;

	while(respuesta=="si")

	{	numero=prompt("Ingrese su numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=(numero+numero);

		}
		else if(numero<0)
		{

			negativo=(numero*numero);
		}
		
		
		contador=contador+1;
		respuesta=prompt("ingrese si para continuar");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN