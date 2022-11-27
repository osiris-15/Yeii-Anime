// CONTROLADOR DE CAMBIO DE COLOR DE LA NAVBAR AL HACER SCROLL

$(window).scroll(function(){
    if($('#nav').offset().top > 490){
        $('#nav').addClass("bg-inverse");
    }
    else{
        $('#nav').removeClass("bg-inverse");
    }
});

// VELOCIDAD DE MUESTREO DEL CARRUSEL Y CONFIGURACION DE TOOLTIPS Y POPPOVERS

$(function(){
$("[data-toggle='tooltip']").tooltip();
$("[data-toggle='popover']").popover();
$('.carousel').carousel({
  interval:2000

});
}); 

// MOSTRAR DATOS EN LA CONSOLA SOBRE LOS EVENTOS DEL MODAL

$('#exampleModal').on('show.bs.modal', function(e){
console.log('El modal se está mostando');

$('#btnRegistro').removeClass('btn-primary');
$('#btnRegistro').addClass('btn-danger');       // CAMBIA EL CONTORNO A ROJO
$('#btnRegistro').prop('disabled', true);
});

$('#exampleModal').on('shown.bs.modal', function(e){
console.log('El modal se mostró');
});

$('#exampleModal').on('hide.bs.modal', function(e){
console.log('El modal se oculta');
});

$('#exampleModal').on('hidden.bs.modal', function(e){
console.log('El modal se ocultó');

$('#btnRegistro').removeClass('btn-danger');
$('#btnRegistro').addClass('btn-primary'); 
$('#btnRegistro').prop('disabled', false);
});