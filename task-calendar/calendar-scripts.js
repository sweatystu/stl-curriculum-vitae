function display_calendar_dates(){
    var d = new Date();
    var dt = new Date();
    d = date_addDays(d, 0 - d.getDay() - 7); // beginning of last week
    var row_n;
    var col_n;
    $('#tbl_calendar tr[rel]').each(function(){
        row_n = parseInt($(this).attr('rel'));
        $(this).children('td[rel]').each(function(){
            col_n = parseInt($(this).attr('rel'));
            dt = date_addDays(d, row_n * 7 + col_n);
            $(this).html('<u>' + dateString_dmString(dt) + '</u>');
        });
    });
};

function identify_days(){
    var d = new Date();
    var row_n;
    var col_n;
    $('#tbl_calendar tr[rel] td[rel]').each(function(){
        row_n = parseInt($(this).parent().attr('rel'));
        col_n = parseInt($(this).attr('rel'));
        // alert(row_n.toString() + ' ' + col_n.toString());
        switch(row_n){
            case 0:
                $(this).attr('rel', $(this).attr('rel') + ' past');
                break;
            case 1:
                switch(true){
                    case (col_n < d.getDay()):
                        $(this).attr('rel', $(this).attr('rel') + ' past');
                        break;
                    case (col_n == d.getDay()):
                        $(this).attr('rel', $(this).attr('rel') + ' today');
                        break;
                };
                break;
        };
        if(col_n == 0 || col_n == 6){
            $(this).attr('rel', $(this).attr('rel') + ' weekend');
        };
    });
}