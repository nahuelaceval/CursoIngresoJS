function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch(mesDelAño)
{

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("Sí tiene 31 dias");
	break;
	case "Febrero":
	alert("Sí tiene 29 dìas");
	break;
	default:
	alert("Sí tiene 30 dias");
	




}


}//FIN DE LA FUNCIÓN