$("#slider").slider(
  {
              value:0,
              min: 0,
              max: 200,
              step: 1,
              slide: function( event, ui ) {
              var r, g, b = 0;
                      g = Math.round(255 / 200 * ui.value);
                      r = 255 - g;
                      var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                      $(this).css({
                          'background': color
                      });
                  $( "#slider-value" ).html( ui.value );                 
                  $('#slider-value').tooltip({
                    content: ui.value,
                    track: true
                  })
              }
  }
  );
  
  $( "#slider-value" ).html(  $('#slider').slider('value') );
