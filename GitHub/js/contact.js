$( document ).ready(function() {
    var formulario = '#Formulario';
    $(formulario).submit(function( event ){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/contacto2.php',
            data: $(formulario).serialize(),
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Formulario').reset();
            }
        });
        return false;
    });

    var cotizar = '#Cotizar';
    $(cotizar).submit(function( event ){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/cotizar.php',
            data: $(cotizar).serialize(),
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Cotizar').reset();
            }
        });
        return false;
    });

    var rentar = '#rentalForm';
    $(rentar).submit(function( event ){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/rental.php',
            data: $(rentar).serialize(),
            success: function(data){
                $("#respuestaR").slideDown();
                $("#respuestaR").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('rentalForm').reset();
            }
        });
        return false;
    });

    var cotizar2 = '#Cotizar2';
    $(cotizar2).submit(function( event ){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/cotizar.2.php',
            data: $(cotizar2).serialize(),
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Cotizar2').reset();
            }
        });
        return false;
    });
  
  });
