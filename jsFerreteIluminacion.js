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
 	var Cantidad;
 	var ArgentinaLuz;
 	var FelipeLamparas;
 	var jeluz;
 	var haziluminacion;
 	var osram;
 	var Marca;
 	var Iva=0.10;
 	Precio=35;
 	
 	Cantidad=document.getElementById('Cantidad').value;
 	Marca=document.getElementById('Marca').value;
 	

 			if(Cantidad>5)
 			{
 			precioDescuento=(Cantidad*Precio)*0.5;		
 			
 			}

 			
 			
 				if(Cantidad==5 && Marca=="ArgentinaLuz") 
 				{

 				
 				precioDescuento=(Cantidad*Precio)*0.3;
 				
 				
 				}
 			
 			
 				if(Cantidad==5 && Marca!="ArgentinaLuz")
 				{

 				precioDescuento=(Cantidad*Precio)*0.4;
 					
 				}


 			
 			
 			if(Cantidad==4 && Marca == "ArgentinaLuz")
 			{
 				
 					
 					precioDescuento=(Cantidad*Precio)*0.25;
 				
 			}
 			else if (Marca == "FelipeLamparas")
 			{
 				precioDescuento=(Cantidad*Precio)*0.25;
 			}
 			
 			else 
 			{
 				precioDescuento=(Cantidad*Precio)*0.2;
 			}
 				
 			
 			if(Cantidad==3 && Marca == "ArgentinaLuz")
 			{

 				precioDescuento=(Cantidad*Precio)*0.15;

 			}
 			else if(Marca== "FelipeLamparas")
 			{
 				precioDescuento=(Cantidad*Precio)*0.10;
 			}

 				
 			else
 			{
 				precioDescuento=(Cantidad*Precio)*0.05;
 			}

 			if(precioDescuento>120)
 			{
 				alert("IIBB Usted pago "+precioDescuento+ ", siendo "+ precioDescuento*Iva +" el impuesto que se pagó.");

 			}
 				
 				
 			
 				precioDescuento=document.getElementById('precioDescuento').value=precioDescuento;


 			



 			


}

//B



