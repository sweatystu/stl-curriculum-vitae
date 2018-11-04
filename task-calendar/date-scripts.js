// Format Dates
function dateString_dmyString(dt){
    var txt;
    txt = dt.getDate().toString();
    txt = txt + ' ' + monthNum_monthName(dt.getMonth(), true);
    txt = txt + ' ' + dt.getFullYear().toString();
    return txt;
};

function dateString_dmString(dt){
    var txt;
    txt = dt.getDate().toString();
    txt = txt + ' ' + monthNum_monthName(dt.getMonth());
    return txt;
};

function date_addDays(dt, days){
    var d = new Date();
    d.setHours(3);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setTime(dt.getTime() + (days * 24 * 60 * 60 * 1000));
    d.setHours(3);
    return d;
};

function monthNum_monthName(mnth, lng=false){
    // pass the month number and whether the month name should be in the long format or not
    var rtn;
    switch(mnth){
        case 0:
            rtn = 'January';
            break;
        case 1:
            rtn = 'February';
            break;
        case 2:
            rtn = 'March';
            break;
        case 3:
            rtn = 'April';
            break;
        case 4:
            rtn = 'May';
            break;
        case 5:
            rtn = 'June';
            break;
        case 6:
            rtn = 'July';
            break;
        case 7:
            rtn = 'August';
            break;
        case 8:
            rtn = 'September';
            break;
        case 9:
            rtn = 'October';
            break;
        case 10:
            rtn = 'November';
            break;
        case 11:
            rtn = 'December';
            break;
    };
    if(!lng){
        rtn = rtn.substring(0, 3);
    };
    return rtn;
};

function return_colNum(dt){
    return dt.getDay();
};

function return_rowNum(dt){
    var d = new Date();
    d.setHours(3);
    dt.setHours(3);
};
