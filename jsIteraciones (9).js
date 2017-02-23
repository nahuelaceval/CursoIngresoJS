function Mostrar()
{

	var contador=0;
	// declarar variables
	var edad;
	var respuesta='si';
	var maximo;
	var minimo;
	var nombre;
	var nombreDelMayor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var materiasAprobaras;
	var aprobados;
	var mujeresAprobadas;
	var hombresAprobados;
	var promedio;
	var sumadorDeNotas;	
	var f;
	var m;
	var promedioEdadMujeres;
	var notaPar;
	var yaTengoEl10="no";
	var nombreDel10;
	var	edadDel10;
	var	sexoDel10;

//mujeres y hombres desaprobadas
//promedio de notas
//edad promedio de las mujeres
//cantidad de mujeres que aprobaron con nota par y son menores de edad


		while(respuesta!='no')
		{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		
		nombre=prompt("por favor ingrese nombre");
		while(edad<0 || edad>100)
		{

		edad=prompt("error, ingrese edad");
		edad=parseInt(edad);
		}

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese f o m para indicar su sexo");
		}

		//cantidad de personas aprobadas
	if (nota>5)
	{
		aprobados=aprobados+1;
	}		

	acumuladorDeNotas+acumuladorDeNotasnotas+notas;
////


	if (nota==10 && yaTengoEl10 == "no")
	{
		nombreDel10=nombre;
		edadDel10=edad;
		sexoDel10=sexo;
		yaTengoEl10="si o alguien o llalalala ";
		
	}


if (sexo="f" && nota<4)
{
	desaprobaron=desaprobaron+1;
	desaprobaronMujeres=sexo;
}
if (sexo "m" && nota<4)
{

	desaprobaron=desaprobaron+1;
	desaprobaronHombres=sexo;
}

	
		while(nota<0 || nota>11)
		{

			if(contador==1)
			{
				notaMinima=nota;
				sexoNotaMinima=sexo;
			}
			else
			{
			if(notaTotal<nota)
				NotaMinima=nota;
			}

		}

		contador=contador+1;
		

		if(contador==1)

		{
			maximo=edad;
			minimo=edad;
			nombre=nombreDelMayor;
			sexo=sexoNotaMinima;
			notaMinima=nota;

		}
		////////
	


		else
		{

			if (edad>maximo)
			{
				maximo=edad;
				nombreDelMayor=nombre;
			}
			if (edad<minimo)
			{
				minimo=edad;

			}
			
		}


		}


		respuesta=prompt("para salir teclee no");
	
		}	alert(nombre);
		
				

			
		
		
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN
