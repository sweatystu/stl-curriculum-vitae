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
    clear_forms();
    btn.addClass('w3-indigo');
    $('#' + n).show();
};

function add_navigation_buttons(nv){
    var txt;
    for(i in nav_buttons){
        txt = '<div';
        txt = txt + ' onclick="display_page($(this), ';
        txt = txt + "'" + nav_buttons[i].target + "'";
        txt = txt + ');">';
        txt = txt + nav_buttons[i].name;
        txt = txt + '</div>';
        nv.append(txt);
    };
};

// Navigation Buttons
var nav_buttons = [
    {
        name: "Today"
        , target: "pg_today"
    }
    , {
        name: "Calendar"
        , target: "pg_calendar"
    }
    , {
        name: "Add Ad-Hoc"
        , target: "pg_add_adhoc"
    }
    , {
        name: "Add Daily"
        , target: "pg_add_daily"
    }
    , {
        name: "Add Weekly"
        , target: "pg_add_weekly"
    }
    , {
        name: "Add Monthly"
        , target: "pg_add_monthly"
    }
];
