$( document ).ready(function() {

    $(".fm-nav a").on('click', function(e){
        if(this.hash !==""){
            e.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
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

    $('.imgList a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src",$(this).attr("href"));
    });

    obj = {
        Guajira:{
            titulo:"Guajira",
            duracion:"9 dias",
            descanso: "(2 dias de descanso)",
            img1:"images/tours/guajira/guajira2018-199.jpg",
            img2:"images/tours/guajira/guajira2018-383.jpg",
            img3:"images/tours/guajira/guajira2018-536.jpg",
            img4:"images/tours/guajira/guajira2018-727.jpg"
        },
        Cristales:{
            titulo:"Cristales",
            duracion:"13 dias",
            descanso: "(3 dias de descanso)",
            img1:"images/tours/cristales/cristales-172.jpg",
            img2:"images/tours/cristales/cristales-185.jpg",
            img3:"images/tours/cristales/cristales-832.jpg",
            img4:"images/tours/cristales/cristales-1025.jpg"
        },
        Vichada:{
            titulo:"Vichada",
            duracion:"12 dias",
            descanso: "(2 dias de descanso)",
            img1:"images/tours/vichada/vichada-60.jpg",
            img2:"images/tours/vichada/vichada-215.jpg",
            img3:"images/tours/vichada/vichada-422.jpg",
            img4:"images/tours/vichada/vichada-674.jpg"
        },
        Ancestral:{
            titulo:"Sur Ancestral",
            duracion:"8 dias",
            descanso: "(3 dias de descanso)",
            img1:"images/tours/ancestral/ancestral_14.jpg",
            img2:"images/tours/ancestral/ancestral_29.jpg",
            img3:"images/tours/ancestral/ancestral_60.jpg",
            img4:"images/tours/ancestral/ancestral_86.jpg"
        },
        Cafetero:{
            titulo:"Colombia Verde Cafe",
            duracion:"11 dias",
            descanso: "(2 dias de descanso)",
            img1:"images/tours/cafetero/cafetero_10.jpg",
            img2:"images/tours/cafetero/cafetero_12.jpg",
            img3:"images/tours/cafetero/cafetero_14.jpg",
            img4:"images/tours/cafetero/cafetero_17.jpg"
        },
        Paramos:{
            titulo:"Paramos",
            duracion:"11 dias",
            descanso: "(2 dias de descanso)",
            img1:"images/tours/paramos/paramo-169.jpg",
            img2:"images/tours/paramos/paramo-240.jpg",
            img3:"images/tours/paramos/paramo-384.jpg",
            img4:"images/tours/paramos/paramo-598.jpg"
        }
    };

    window.onload = function getGET(){

        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
            // recorremos todo el array de valores
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }

            // var priceN = 
            get['precio']=Number(get['precio']);
            priceCliente = formatNumber.apply(get['precio']);

            document.getElementById("nombre").innerHTML = get['nombre'];
            // document.getElementById("precio").innerHTML = get['precio'];
            document.getElementById("precio").innerHTML = priceCliente;
            document.getElementById("id").innerHTML = get['id'];
            // document.getElementById("title").innerHTML = get['tour'];
            document.getElementById("title").innerHTML = obj[get['tour']].titulo;
            document.getElementById("days").innerHTML = obj[get['tour']].duracion;
            document.getElementById("resting").innerHTML = obj[get['tour']].descanso;
            $(".imgBox img").attr('src',obj[get['tour']].img1);
            $("#img1").attr('src',obj[get['tour']].img1);
            $("#img2").attr('src',obj[get['tour']].img2);
            $("#img3").attr('src',obj[get['tour']].img3);
            $("#img4").attr('src',obj[get['tour']].img4);

            $("#link1").attr('href',obj[get['tour']].img1);
            $("#link2").attr('href',obj[get['tour']].img2);
            $("#link3").attr('href',obj[get['tour']].img3);
            $("#link4").attr('href',obj[get['tour']].img4);

            console.log(get['precio']);
            return get;
        }
    }

    var formatNumber = {
        separador: ".", // separador para los miles
        sepDecimal: ',', // separador para los decimales
        formatear:function (num){
        num +='';
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }
        return this.simbol + splitLeft +splitRight;
        },
        apply:function(num, simbol){
        this.simbol = simbol ||'';
        return this.formatear(num);
        }
       }
});






