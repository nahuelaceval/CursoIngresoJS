function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
NumeroRandom=Math.floor((Math.random() * 10) + 1);


		if(NumeroRandom>8)
		{
			alert(NumeroRandom + " EXCELENTE");
		}
		
		
		if(NumeroRandom<8&&NumeroRandom>3)
		{
			alert(NumeroRandom + " Aprobado");
		}
				
		
		if(NumeroRandom<4)
		{
			alert(NumeroRandom + " Vamos, la próxima se puede");
		}
}//FIN DE LA FUNCIÓN