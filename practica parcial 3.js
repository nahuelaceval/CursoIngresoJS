function Mostrar()
{

var ventas;
var contador=0;
var acumulador=0;
var importeMaximo;
var importeMinimo; 

	while(contador<4)
	{
		ventas=prompt("ingresá el valor de las ventas");
		ventas=parseInt(ventas);
		acumulador=acumulador+ventas;
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

 	




	}

 	
	document.write("EL IMPORTE MAXIMO ES: "+ importeMaximo + "<br>");
 	document.write("EL IMPORTE MINIMO ES: "+ importeMinimo + "<br>");



}//FIN DE LA FUNCIÓN