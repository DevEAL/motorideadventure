$(document).ready(function(){
    var selector_es = '#translate_es';
    var selector_en ='#translate_en';
    var selector_de = '#translate_de';
    let idioma;
    
    $(selector_en).on('click', function(e){
      e.preventDefault();
      startLang( $(this) );
      idioma = 0;
      localStorage.setItem("idioma",idioma);
    });
    $(selector_es).on('click', function(e){
      e.preventDefault();
      startLang( $(this) );
      idioma = 1;
      localStorage.setItem("idioma",idioma);
    });
    $(selector_de).on('click', function(e){
      e.preventDefault();
      startLang( $(this) );
      idioma = 2;
      localStorage.setItem("idioma",idioma);
    });
      var startLang = function(el){
      var el = $(el);
      var text = el.attr('data-text');
      var file = el.attr('data-file');
      file = file.split(',');
      text = text.split(',');
      var index = el.attr('data-index');
      if(index >= file.length){
        index = 0;
      }
      changeName(el, text[index]);
      changeIndex(el, index);
      loadLang(file[index]);
      $('html').attr('lang', file[index]);
    };
   
    var changeName = function(el, name){
      $(el).html( name );
    };
   
    var changeIndex = function(el, index){
      $(el).attr('data-index', ++index);
    };
   
    var loadLang = function(lang){
      var processLang = function(data){
        var arr = data.split('\n');
        for(var i in arr){
          if( lineValid(arr[i]) ){
            var obj = arr[i].split('=>');
            assignText(obj[0], obj[1]);
          }
        }
      };
      var assignText = function(key, value){
        $('[data-lang="'+key+'"]').each(function(){
          var attr = $(this).attr('data-destine');
          if(typeof attr !== 'undefined'){
            $(this).attr(attr, value);
          }else{
            $(this).html(value);
          }
        });
      };
      var lineValid = function(line){
        return (line.trim().length > 0);
      };
      $('.loading-lang').addClass('show');
      $.ajax({
        url: 'lang/'+lang+'.txt',
        error:function(){
          alert('No se cargó traducción');
        },
        success: function(data){
          $('.loading-lang').removeClass('show');
          processLang(data);
        }
      });
    };  
    $.ajax({
      success: function(){
        if(localStorage.getItem("idioma") == 1){
          $(selector_es).attr('data-index');
          startLang( $(selector_es) );
          }else if(localStorage.getItem("idioma") == 2){
          $(selector_es).attr('data-index');
          startLang( $(selector_de) );
          };
      }
    });
  });