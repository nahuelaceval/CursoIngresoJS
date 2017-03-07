function Mostrar()
{

var ventas;
var contador=0;
var acumulador=0; 

	while(contador<24)
	{
		ventas=prompt("ingresá el valor de las ventas");
		contador=contador+1;

	
while(ventas<0)

 {
 	ventas=prompt("te equivocaste, ingresá un valor mayor a 0");

 }

 	if (contador == 1)
 	{
 		importeMaximo=ventas;
 		importeMinimo=ventas;

 	}

 	if (contador>1 && ventas>importeMaximo)

 	{
 		importeMaximo=ventas;

 	}

 	if (contador>1 && ventas<importeMinimo)
 	{

 		importeMinimo=ventas;
 	}

 	document.write("EL IMPORTE MAXIMO ES: "+ importeMaximo + "<br>");
 	document.write("EL IMPORTE MINIMO ES: "+ importeMinimo + "<br>");




	}

 	




}//FIN DE LA FUNCIÓN