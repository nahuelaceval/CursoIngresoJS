function Mostrar()
{
	var contador=0;	
	var contador1;
	var contador2;
	var contador3;
	var contador4;
	var contador5;
	var contador6;
	var contador7;
	var contador8;
	var contador9;
	var contador10;


	
	for(;contador<100 ;contador++)

	{
		NumerRandom=Math.floor((Math.random() * 10) + 1);
		
		switch(NumerRandom)
		{

			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;
			
			case 4:
			contador4++;
			break;
			
			case 5:
			contador5++;
			break;
			
			case 6:
			contador6++;
			break;

			case 7:
			if(contador7 == 7)
			{
				continue;
			}
			contador7++;
			break;

			case 8:
			contador8++;
			break;

			case 9:
			contador9++;
			break;
			
			case 10:
			contador10++;
			break;
		}

		console.log("la cantidad de unos es " + ((contador1/contador)*100)+" %");
		console.log("la cantidad de dos es " + ((contador2/contador)*100)+" %");
		console.log("la cantidad de tres es " + ((contador3/contador)*100)+" %");
		console.log("la cantidad de cuatros es " + ((contador4/contador)*100)+" %");
		console.log("la cantidad de cincos es " + ((contador5/contador)*100)+" %");
		console.log("la cantidad de seis es " + ((contador6/contador)*100)+" %");
		console.log("la cantidad de siete es " + ((contador7/contador)*100)+" %");
		console.log("la cantidad de ocho es " + ((contador8/contador)*100)+" %");
		console.log("la cantidad de nueve es " + ((contador9/contador)*100)+" %");
		console.log("la cantidad de diez es " + ((contador10/contador)*100)+" %");
		console.log(contador);
		



	}

}