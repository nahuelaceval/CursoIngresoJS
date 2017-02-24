function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroDeMujeres=0;
	var numeroDeHombres=0;
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var promedio;
	var edad;
	var sexo;
	var hombresAprobados=0;
	var mujeresAprobadas=0;
	var hombresDesaprobados=0;
	var mujeresDesaprobadas=0;
	var edadAcumuladaHombres=0;
	var edadAcumuladaMujeres=0;
	var edadPromedioMujeres=0;
	var edadPromedioHombres=0;
	var cantidadMujeres=0;

//mujeres y hombres desaprobadas :D
//promedio de notas :D
//edad promedio de las mujeres :D
//cantidad de mujeres que aprobaron con nota par y son menores de edad
	

			while(respuesta!='no')
		{

			numero=prompt("ingrese su numero");
			numero=parseInt(numero);
			contador=contador+1;
		
			acumulador=acumulador+numero;
			if (contador == 1)
			{

			maximo=numero;
			minimo=numero;

			}

			if(contador>1 && numero > maximo)
			{
			maximo=numero;

			}
			if(contador>1 && numero < minimo)
			{

			minimo=numero;
			}
		
		

			promedio=(acumulador/contador); //promedio de notas



			sexo=prompt("ingrese f o m para designar el sexo del alumno");

			while(sexo!="f" && sexo!="m") //sexo
			{

			sexo=prompt("Error, ingrese f o m para designar el sexo del alumno");
		
			}



			if (sexo=="f")
			{
			numeroDeMujeres=numeroDeMujeres+1;


			} 

			if (sexo=="m")
			{
			numeroDeHombres=numeroDeHombres+1;

			}

  			
  			if (numero>3&&sexo=="m")
  			{
  				hombresAprobados=hombresAprobados+1;

  			}

  			if (numero>3&&sexo=="f")
  			{

  				mujeresAprobadas=mujeresAprobadas+1;
  			}

  			if (numero<4&&sexo=="m")
  			{

  				hombresDesaprobados=hombresDesaprobados+1;
  			}

  			if (numero<4&&sexo=="f")
  			{

  				mujeresDesaprobadas=mujeresDesaprobadas+1;
  			}
			
			if(sexo=="f")
			{
				cantidadMujeres=cantidadMujeres+1;
			}

  			edad=prompt("¿cual es la edad del alumno?");
  			edad=parseInt(edad);

  			while(edad<1 || edad>90)
  			{
  				edad=prompt("edad incorrecta, por favor ingrese la edad del alumno");
  			}

  				

  			if(sexo=="f" && edad<90)
  			{
  				edadAcumuladaMujeres=edadAcumuladaMujeres+edad;

  			}	

  			if(sexo=="m" && edad<90) 
  			{
  				edadAcumuladaHombres=edadAcumuladaHombres+edad;

  			}

  				edadPromedioMujeres=edadAcumuladaMujeres/cantidadMujeres;
			respuesta=prompt("¿quiere seguir agregando numeros?");

		}

		


		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN