// Navigation
function hide_pages(){
    $('body > div').each(function(){
        $(this).hide();
    });
};

function format_nav_buttons(){
    $('nav > div').each(function(){
        $(this).attr('class', 'w3-container w3-bar-item w3-button w3-hover-indigo')
    });
};

function display_page(btn, n){
    hide_pages();
    format_nav_buttons();
    btn.attr('class', btn.attr('class') + ' w3-indigo');
    $('#' + n).show();
};