function Mostrar()
{
 var numero;
 var terminar;
 var contador=0;
 var acumulador=0;
 var contadorNumerosPar=0;
 var promedio;
 var suma;


while (terminar != "si")
{
    numero=prompt("ingresá un numero"); 
    numero=parseInt(numero);
    contador=contador+1
    acumulador=acumulador+numero;
 while(numero<0)
 {

 	numero=prompt("ingresá un numero mayor a 0");

 }


 if(numero%2==0)
 {
 	document.write("el numero ingresado es par"+"<br>" );
 	contadorNumerosPar=contadorNumerosPar+1

 }

 else
 {
 	document.write("el numero ingresado es impar"+ "<br>");
 }

    

terminar=prompt("¿quieres dejar de ingresar numeros?");





promedio=acumulador/contador;

suma=acumulador;

if (contador==1)
{

	valorMaximo=numero;
	valorMinimo=numero;

}

	if(contador>1 && numero> valorMaximo)
	{
		valorMaximo=numero;
	}

	if(contador>1 && numero< valorMinimo)
	{
		valorMinimo=numero;
	}

}

document.write("la cantidad de numeros par es de: "+ contadorNumerosPar + "<br>");
document.write("el promedio es de "+ promedio+ "<br>");
document.write("la suma de todos los numeros es "+ suma+ "<br>");
document.write("el valor minimo es "+ valorMinimo+ "<br>");
document.write("el valor maximo es "+ valorMaximo+ "<br>");



}//FIN DE LA FUNCIÓN