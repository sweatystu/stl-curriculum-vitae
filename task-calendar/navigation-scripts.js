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

function display_page(btn, n, t){
    hide_pages();
    format_nav_buttons();
    btn.addClass('w3-indigo');
    clear_forms();
    if(t != null){
        construct_form($('#' + n + ' form'), t);
    };
    $('#' + n).show();
};

function add_navigation_buttons(nv){
    var txt;
    for(i in nav_buttons){
        txt = '<div';
        txt += ' onclick="display_page($(this), ';
        txt += "'" + nav_buttons[i].target + "'";
        if(nav_buttons[i].type != null){
            txt += ", '" + nav_buttons[i].type + "'";
        };
        txt += ');">';
        txt += nav_buttons[i].name;
        txt += '</div>';
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
        , type: "adhoc"
    }
    , {
        name: "Add Daily"
        , target: "pg_add_daily"
        , type: "daily"
    }
    , {
        name: "Add Weekly"
        , target: "pg_add_weekly"
        , type: "weekly"
    }
    , {
        name: "Add Monthly"
        , target: "pg_add_monthly"
        , type: "monthly"
    }
];
