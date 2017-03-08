/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var PrecioLamparas= 35;
 	var marca;
 	var precioDescuento;
 	var precioFinal;
 	var impuesto;
 	
 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById("Marca").value;

 	if (cantidad>5)
 	{

 		precioDescuento=(cantidad* PrecioLamparas)* 0.50; 
 		document.getElementById('precioDescuento').value=precioDescuento;

 	}


 	if (marca=="ArgentinaLuz" && cantidad==5)

 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.60;
 		document.getElementById('precioDescuento').value=precioDescuento;

 	}

 	if (marca!="ArgentinaLuz" && cantidad==5)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.70;
 		document.getElementById('precioDescuento').value=precioDescuento;


 	}

 	if (marca=="ArgentinaLuz" && "FelipeLamparas" && cantidad==4)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.75;
 		document.getElementById('precioDescuento').value=precioDescuento;

 	}

 	if (marca!="ArgentinaLuz" && marca!="FelipeLamparas" && cantidad==4)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.80;
 		document.getElementById('precioDescuento').value=precioDescuento;

 	}
 		


 	if (marca=="ArgentinaLuz" && cantidad==3)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.85;
 		document.getElementById('precioDescuento').value=precioDescuento;
 	}
 		

 	if (marca== "FelipeLamparas" && cantidad==3)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.90;
 		document.getElementById('precioDescuento').value=precioDescuento;

 	}
 	
 	if (marca!="ArgentinaLuz" && marca!="FelipeLamparas" && cantidad==3)
 	{
 		precioDescuento=(cantidad*PrecioLamparas)*0.95;
 		document.getElementById('precioDescuento').value=precioDescuento;
 	}	

 	if (precioDescuento>120)
 	{
 		precioFinal=precioDescuento*1.10;
 		impuesto=precioFinal*0.10
 		alert("Usted pago "+precioFinal+ " de IIBB., siendo " +impuesto+ " el impuesto que se pagó.")

 	}
}



//B



