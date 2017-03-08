function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumulador=0;
	var respuesta="si";
	var inicio;
	var numero;
	var negativos;
	var acumuladorNegativo=0;
	var acumuladorPositivo=0;
	var cantidadPositivo=0;
	var cantidadNegativo=0;
	var contadorCeros=0;
	var acumuladorNumeroPar=0;
	var acumuladorNumeroImpar=0;
	var promedioPositivos;
	var promedioNegativo;
	var diferencia;
	var numMaximo;
	var numMinimo;
	var contadorMujeres=0;
	var contadorHombres=0;


	

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;

		sexo=prompt("ingrese sexo del individuo");

		while(sexo!="f" && sexo!="m")
		{

			sexo=prompt("Error al ingresar el sexo del individuo, reintente");
		}

		if(sexo=="f")
		{
			contadorMujeres=contadorMujeres+1;


		}

		else
		{
			contadorHombres=contadorHombres+1;

		}

		if (numero<0)

	{
		acumuladorNegativo=acumuladorNegativo+numero;
		cantidadNegativo=cantidadNegativo+1;



	}

	if (numero> 0)
	{

		acumuladorPositivo=acumuladorPositivo+numero;
		cantidadPositivo=cantidadPositivo+1;
		

	}

	if (numero%2 ==0)
	{

		
		acumuladorNumeroPar=acumuladorNumeroPar+1;

	}

	if (numero%2 !=0)
	{
		acumuladorNumeroImpar=acumuladorNumeroImpar+1;
	}	
	

	if (numero==0)
	{

		contadorCeros=contadorCeros+1;

	}

	
	if (contador ==1 )

	{
		numMaximo=numero;
		numMinimo=numero;



	}

	if (contador>1 && numero> numMaximo)

	{

		numMaximo=numero;

	}

	if (contador>1 && numero< numMinimo)

	{

		numMinimo=numero;

	}




	promedioPositivos=acumuladorPositivo/cantidadPositivo;

	promedioNegativo=acumuladorNegativo/cantidadNegativo;

	diferencia=acumuladorPositivo-acumuladorNegativo;

	
	

	respuesta=prompt("Quieres seguir ingresando numeros?");





	}


	if (contadorHombres<contadorMujeres)
	{

		document.write("Un minuto, este bar no tiene salida de emergencia... aquí se quedan en su trampa, chicas"+ "<br>");

	}




	
	document.write("La suma de los numeros negativos es "+ acumuladorNegativo + "<br>");
	document.write("La suma de los numeros positivos es "+ acumuladorPositivo + "<br>");
	document.write("La cantidad de los numeros positivos es "+ cantidadPositivo + "<br>");
	document.write("La cantidad de los numeros negativos es "+ cantidadNegativo + "<br>");
	document.write("La cantidad de numeros par es "+ acumuladorNumeroPar + "<br>");
	document.write("La cantidad de numeros impar es "+ acumuladorNumeroImpar + "<br>");
	document.write("La cantidad de ceros es "+ contadorCeros + "<br>");
	document.write("El promedio de numeros positivos es de "+ promedioPositivos + "<br>");
	document.write("El promedio de numeros negativos es de "+ promedioNegativo + "<br>");
	document.write("La diferencia entre positivos y negativos es de "+ diferencia + "<br>");
	document.write("El numero maximo es "+ numMaximo+ "<br>");
	document.write("El numero minimo es "+ numMinimo+ "<br>");
	document.write("La cantidad de mujeres es de "+ contadorMujeres+ "<br>");
	document.write("La cantidad de hombres es de "+ contadorHombres+ "<br>");
	

}//FIN DE LA FUNCIÓN