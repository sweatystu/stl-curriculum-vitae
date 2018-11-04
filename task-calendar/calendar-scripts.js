function construct_calendar(tbl, pastrows=1, futurerows=3){
    tbl.html(tbl.html() + week_header());
    for(i=(-pastrows); i <= futurerows; i++){
        tbl.html(tbl.html() + week_row(i));
    };
    tbl.html(tbl.html() + week_header());
    display_dates(tbl);
    identify_weekends(tbl);
    identify_past(tbl);
    identify_today(tbl);
};

function construct_weekly(tbl){
    tbl.append(week_header());
    tbl.append(week_row());
    identify_weekends(tbl);
};

function week_header(){
    var txt;
    txt = '<tr>';
    txt = txt + '<th rel="0">Sun</th>';
    txt = txt + '<th rel="1">Mon</th>';
    txt = txt + '<th rel="2">Tue</th>';
    txt = txt + '<th rel="3">Wed</th>';
    txt = txt + '<th rel="4">Thu</th>';
    txt = txt + '<th rel="5">Fri</th>';
    txt = txt + '<th rel="6">Sat</th>';
    txt = txt + '</tr>';
    return txt;
};

function week_row(rel_week=null){
    var txt;
    txt = '<tr';
    if(rel_week != null){
        txt = txt + ' rel="' + rel_week.toString() + '"';
    };
    txt = txt + '>';
    txt = txt + '<td rel=0></td>';
    txt = txt + '<td rel=1></td>';
    txt = txt + '<td rel=2></td>';
    txt = txt + '<td rel=3></td>';
    txt = txt + '<td rel=4></td>';
    txt = txt + '<td rel=5></td>';
    txt = txt + '<td rel=6></td>';
    txt = txt + '</tr>';
    return txt;
};

function display_dates(tbl){
    var d = new Date();
    var row_n;
    var col_n;
    d.setHours(3);
    d = date_addDays(d, 0 - d.getDay());
    d.setHours(3);
    tbl.find('tr[rel]').each(function(){
        row_n = parseInt($(this).attr('rel'));
        $(this).find('td[rel]').each(function(){
            col_n = parseInt($(this).attr('rel'));
            $(this).append('<u>' + dateString_dmString(date_addDays(d, 7 * row_n + col_n)) + '</u>');
        });
    });
};

function identify_weekends(tbl){
    tbl.find('th[rel="0"], th[rel="6"], td[rel="0"], td[rel="6"]').addClass('weekend');
};

function identify_past(tbl){
    var row_n;
    var col_n;
    var d = new Date();
    tbl.find('tr[rel]').each(function(){
        row_n = $(this).attr('rel');
        $(this).find('td[rel]').each(function(){
            col_n = $(this).attr('rel');
            switch(true){
                case row_n < 0:
                    $(this).addClass('past');
                    break;
                case row_n == 0:
                    if(col_n < d.getDay()){
                        $(this).addClass('past');
                    };
                break;
            };
        });
    });
};

function identify_today(tbl){
    var d = new Date();
    tbl.find('tr[rel="0"] td[rel="' + d.getDay() + '"]').addClass('today');
};
