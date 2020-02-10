$( document ).ready(function() {

    $('a[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });
  
    $('.owl-carouselProt').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        navText: [
          "<i class='fas fa-angle-double-left'></i>",
          "<i class='fas fa-angle-double-right'></i>"
          ],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            300:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            900:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            },
            1200:{
                items:4
            }
        }
    });

    $('.owl-carouselExp').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        navText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            300:{
                items:1,
                nav:false
            },
            700:{
                items:2,
                nav:false
            },
            900:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:false
            },
            1200:{
                items:3
            }
        }
    });

    $(".fm-nav a").on('click', function(e){
        if(this.hash !==""){
            e.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top - 100
            },800,function(){
                window.location.hash = hash;
            });
        }
    });

    var scrollHome = $('.home').offset().top;
    $('#home').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: scrollHome
        },800);
    });

    $('#altern').on('click',function(){
        $('#reply').toggle('slow');
    });

    $('#giveBack').on('click',function(){
        $('#resGive').toggle('slow');
    });

    $(document).on('click keyup','.gridCheck',function() {
        sumar();
    });

    $('.getYours').on('click',function(){
        var button = $(this).val();
        $("#selectMoto option").filter(function(){
            return $(this).val() == button;
        }).prop('selected',true);
    });

    $(function () {
        $('.floating-wpp').floatingWhatsApp({
            // phone: '57 3108829627',
            phone: '57 3102267187',
            popupMessage: 'Este chat esta disponible para resolver sus inquietudes. Le responderemos en el menor tiempo posible.',
            showPopup: true,
            message: 'Escribe aqui ...',
            headerTitle: 'Chat Motoraid',
            position: 'left'
        });
    });
});

function sumar () {
    var total = $('#total');
    total.val($('#total').attr('attr-precio'));
    $('.gridCheck').each(function(){
        if($(this).hasClass('gridCheck')){
            total.val(($(this).is(':checked') ? parseFloat($(this).attr('attr-precio')):0) + parseFloat(total.val()));
        }else{
            total.val(parseFloat(total.val()) + (isNaN(parseFloat($(this).val())) ? 0 : parseFloat($(this).val())));
        };
    });
    // var totalPart = parseFloat(total.val()).toFixed(2).split('.');
    // tot.val('$' + totalParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' +  (totalParts.length > 1 ? totalParts[1] : '00')); 
}sumar();

