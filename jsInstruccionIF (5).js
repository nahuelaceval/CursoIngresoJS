function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

		if(edad<18&&edad>12)
	{ 
		alert("eres adolescente");
	}
	else
	{
		alert("no eres edolescente");
	}

	/*if (edad >=18 || edad <= 12)
	{
		alert("no eres adolescente");
	} */

	/*	if !(edad <18 && edad >12)
	{
		alert("no eres adolescente");
	}
*/
}//FIN DE LA FUNCIÓN