function Mostrar()
{

var notas;
var sexo;
var contador=0;
var acumulador=0;
var acumuladorVarones=0;
var promedio;	
var notaMasBaja;
var varonesNota6;	
	

	while(contador<4)
	{
		notas=prompt("ingrese notas");
		notas=parseInt(notas);
		sexo=parseInt(sexo);
		contador=contador+1;
		acumulador=acumulador+notas;

	if (contador == 1)
			{

			notaMasBaja = notas;

			}

	if(contador+1 && notas<notaMasBaja)
	{

		notaMasBaja=notas;
	}
	

		

	while(notas<0 || notas>10)
	{

		notas=prompt("te equivocaste, ingresá la nota correspondiente");
		

	}

	sexo=prompt("ingrese el sexo del alumno");
	
	while(sexo!="f" && sexo!="m")
	{

		sexo=prompt("te equivocaste, ingresá f o m para elegir el sexo");
	
	}

	if(notas>5 && sexo == "m")

	{
		acumuladorVarones=acumuladorVarones+1;
		varonesNota6=acumuladorVarones;
		

	}


	promedio=acumulador/contador;

	}
	
	
	document.write("el promedio es de: "+ promedio+ "<br>");
	document.write("la nota más baja es de: "+ notaMasBaja+ "<br>");
	document.write("varones con nota mayor o igual a 6= "+ varonesNota6 + "<br>");
	

	
	
}//FIN DE LA FUNCIÓN