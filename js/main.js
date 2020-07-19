(function(){
 
 "use strict";

	 
  var regalo = document.getElementById('regalo');
 
  document.addEventListener('DOMContentLoaded',function()
	{
	 //Datos Usuarios
	 var nombre = document.getElementById('nombre');
	 
	 var apellido = document.getElementById('apellido');
	 
	 var email = document.getElementById('email');
	 	
	 //Campos pase
	 var pase_dia = document.getElementById('pase_dia');
	 
	 var pase_dosdias = document.getElementById('pase_dosdias');
	 
	 var pase_completo = document.getElementById('pase_completo');
	 
	 //Botones y divs
	 var calcular = document.getElementById('calcular');
	 
	 var errorDiv = document.getElementById('error');
	 
	 var botonRegistro = document.getElementById('btnRegistro');
	 
	 var lista_productos = document.getElementById('lista-productos');
	 
	 var suma = document.getElementById('suma-total');
	 
	 //EXTRAS
	 var camisas = document.getElementById('camisa_evento');
	 
	 var etiquetas = document.getElementById('etiquetas');
	 
	 //ESCUCHA
	 
	 calcular.addEventListener('click',calcularMontos);
	 
	 pase_dia.addEventListener('blur',mostrarDias);
	 
	 pase_dosdias.addEventListener('blur',mostrarDias);
	 
	 pase_completo.addEventListener('blur',mostrarDias);
	 
	 //Validar datos
	 
	 nombre.addEventListener('blur',erorDat);
	 apellido.addEventListener('blur',erorDat);
	 email.addEventListener('blur',erorDat);
	 
	 email.addEventListener('blur',validarEmail);
	 //Funcion validar campos de datos
	function erorDat()
	{
		 if(this.value == '')
		 {
			 errorDiv.style.display='block';
			 errorDiv.innerHTML="Este campo es Obligatorio";
			 this.style.border='1px solid red';
			 errorDiv.style.border='1px solid red';
		 }else
		 {
			 errorDiv.style.display='none';
			 this.style.border='1px solid #cccccc';
		 }
	}
	 
	 function validarEmail()
	 {
		 if(this.value.indexOf("@") > -1)
		 {
			errorDiv.style.display='none';
			 this.style.border='1px solid #cccccc';
		 }
		 else
		 {
			errorDiv.style.display='block';
			 errorDiv.innerHTML="Correo invalido";
			 this.style.border='1px solid red';
			 errorDiv.style.border='1px solid red';
		 }
	 }
	 //Calcula el monto
	 
	 function calcularMontos(e)
	 {
		 e.preventDefault;
		
		 if(regalo.value === '')
			{
				alert("Debes elegir un regalo..");
				regalo.focus();
			}else
			{
				var boletosDia = parseInt(pase_dia.value,10) || 0, 		
					boletos2Dias = parseInt(pase_dosdias.value,10) || 0,
					boletoCompleto= parseInt(pase_completo.value,10) || 0,
					cantCamisas = parseInt(camisas.value,10) || 0,
					cantEtiqueta = parseInt(etiquetas.value,10) || 0;
				
				var totalPagar = (boletosDia * 30) + (boletos2Dias * 45)+(boletoCompleto * 50) + ((cantCamisas*10)*0.93)+(cantEtiqueta*2);
				
				var listaProductos = [];
				
				if(boletosDia >=1)
				{
					listaProductos.push(boletosDia+ ' Pase por Dia');
				}
				
				if(boletos2Dias >=1)
				{
					listaProductos.push(boletos2Dias+ ' Pase por dos Dia');
				}
				
				if(boletoCompleto >=1)
				{
					listaProductos.push(boletoCompleto+ ' Pases Completo');
				}
				
				if(cantCamisas >=1)
				{
					listaProductos.push(cantCamisas+ 'Camisas');
				}
				
				if(cantEtiqueta >=1)
				{
					listaProductos.push(cantEtiqueta+ 'Etiquetas ');
				}
				
				lista_productos.style.display="block";
				lista_productos.innerHTML='';
				
				for(var i=0 ; i<listaProductos.length; i++)
				{
					lista_productos.innerHTML += listaProductos[i]+'<br/>';
				}
				
				suma.innerHTML ="$ "+ totalPagar.toFixed(2);
				
			}
	 }
	 
	 //Funcion para mostrar dias al dar click 
	 
	 function mostrarDias()
	 {
		var boletosDia = parseInt(pase_dia.value,10) || 0,
			boletos2Dias = parseInt(pase_dosdias.value,10) || 0,
			boletoCompleto= parseInt(pase_completo.value,10) || 0;
		 
		 
		 var diasElegidos = [];
		 
		 if(boletosDia > 0)
		 {
			 diasElegidos.push('viernes');
		 }
		 
		 if(boletos2Dias > 0)
		 {
			 diasElegidos.push('viernes','sabado');
		 }
		 
		 if(boletoCompleto > 0)
		 {
			 diasElegidos.push('viernes','sabado','domingo');
		 }
		 
		 console.log(diasElegidos);
		 
		 for(var i = 0 ; i < diasElegidos.length; i++)
		 {
			document.getElementById(diasElegidos[i]).style.display="block";
		 }
		 
		 
	 }
		
	}); //DomContentLoreaded
 
 })();

//Mapa
$(function()
  {
  	var map = L.map('mapa').setView([12.179762, 273.904181], 20);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([12.179762, 273.904181]).addTo(map)
		.bindPopup('GDLWebCamp.')
		.openPopup();
  });


$(function()
{
	//tipografia lettering
	
	$('.nombre-citio').lettering();
	
	//Menu fijo 
	
	var windoHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();
	
	$(window).scroll(function()
	{
		var scroll = $(window).scrollTop();
		
		if(scroll > windoHeight)
		{
			$('.barra').addClass('fixed');
			$('body').css({'margin-top' : barraAltura+'px'});
		}else
		{
			$('.barra').removeClass('fixed');
			
			$('body').css({'margin-top' : '0px'});
		}
		
	});
	
	//Menu Responsivo 
	
	$('.menu-movil').on('click',function()
	{
		//efecto de despliege 
		$('.navegacion-principal').slideToggle();
		
	});
	
	
	//programa de conferencia
	$('div.ocultar').hide();
	
	$('.programa-evento .info-curso:first').show();
	
	$('.menu-programa a:first').addClass('activo');
	
	$('.menu-programa a').on('click',function()
    {
		$('.menu-programa a').removeClass('activo');
		
		$(this).addClass('activo');
		
		$('.ocultar').hide();
		
		var enlace = $(this).attr('href');
		//efecto 
		$(enlace).fadeIn(1000);
		 
		return false;
	});
	
	//Animaciones para los numero 
	
	$('.resumen-evento li:nth-child(1) p').animateNumber({number:6},5000);
	
	$('.resumen-evento li:nth-child(2) p').animateNumber({number:15},5000);
	
	$('.resumen-evento li:nth-child(3) p').animateNumber({number:3},5000);
	
	$('.resumen-evento li:nth-child(4) p').animateNumber({number:9},5000);
	
	//Cuenta Regresiva
	
	$('.cuenta-regresiva').countdown('2020/12/10 09:00:00',function(e)
	{
		$('#dias').html(e.strftime('%D'));
		$('#horas').html(e.strftime('%H'));
		$('#minutos').html(e.strftime('%M'));
		
		$('#segundos').html(e.strftime('%S'));
	});
});



















