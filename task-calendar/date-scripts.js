// Format Dates
function dateString_dmyString(dt){
    var txt;
    txt = dt.getDate().toString();
    txt += ' ' + monthNum_monthName(dt.getMonth(), true);
    txt += ' ' + dt.getFullYear().toString();
    return txt;
};

function dateString_dmString(dt){
    var txt;
    txt = dt.getDate().toString();
    txt += ' ' + monthNum_monthName(dt.getMonth());
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
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    rtn = month_names[mnth];
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
