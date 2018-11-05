function construct_navigation(nv){
    for (i in nav_pages){
        var txt;
        txt = '<div';
        txt += ' onclick="display_card($(this), ';
        txt += "'" + nav_pages[i].target + "'";
        txt += ');">';
        txt += nav_pages[i].title;
        txt += '</div>';
        nv.append(txt);
    };
    format_nav(nv);
};

function hide_cards() {
    $('#right_col > div').hide();
};

function format_nav(nv){
    nv.children('div').attr('class', 'w3-container w3-bar-item w3-hover-blue-grey w3-button');
};

function display_card(btn, cardname) {
    hide_cards();
    format_nav(btn.parent('nav'));
    btn.addClass('w3-blue-grey');
    $('#' + cardname).show();
};

var nav_pages = [
    {
        title: "Key Achievements"
        , target: "key_achievements"
    }
    , {
        title: "Employment"
        , target: "employment"
    }
    , {
        title: "Education"
        , target: "education"
    }
    , {
        title: "Other"
        , target: "other"
    }
    , {
        title: "Downloads"
        , target: "downloads"
    }
];
