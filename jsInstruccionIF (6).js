function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

	if(edad>17)
	{
		alert("Eres mayor");
	}
	if(edad<13)
	{
		alert("eres un niño");
	}
	if(edad>12 && edad<18)
	{
		alert("eres un adolescente");
	}



}//FIN DE LA FUNCIÓN
