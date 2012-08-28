$(document).ready(function(){
    $('input').on('keyup', function(event){
        var text = $(event.target).val(),
            $echo = $('#echo');

        $('#echo').html(text);
        if(text === ''){
            $echo.fadeOut();
        }else{
            $echo.empty();
            for (var textchar in text) {
                var my_character = text.charAt(textchar),
                    $img = $('<img>');
                $img.attr('src', 'static/images/lettercaps_letters/' + my_character.toLowerCase() + '.jpg');
                $img.attr('alt', my_character);
                $img.attr('title', my_character);
                $echo.append($img);
            }
            $echo.fadeIn();
        }
    });
});