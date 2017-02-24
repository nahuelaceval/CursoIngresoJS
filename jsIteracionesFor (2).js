function Mostrar()
{
 var respuesta; 
 var contador;
 var mascota;
 var tipoMascota;
 var nombreDelGato;
 var edad;
 var edadGato;

	for( ; ; )
		prompt("¿tiene mascota?");
	{
		while(respuesta!="si" || respuesta != "no") 
		{
			prompt("Conteste la pregunta");
		}
		

		if(respuesta=="si")
		{
			contadorMascotasSi++;
			
			tipoMascota=prompt("tipo de mascota");
			while(tipoMascota!="perro" && tipoMascota!="gato")
			{
				prompt("Responda la pregunta");
			}


			
				
			
			
			

		else
		{
			contadorNoMascotas=contador++;
		}
			

	}

}

//edad mas vieja de la persona que no tiene mascota

//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga más de 5 años de edad

//edad del gato entre 0 y 15