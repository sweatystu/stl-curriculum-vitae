// Format Layout
function document_formats() {
    // Structure
    $('#layout_cols').attr('class', 'w3-row-padding w3-container');
    $('#layout_cols > #left_col').attr('class', 'w3-col l3');
    $('#layout_cols > #right_col').attr('class', 'w3-col l9');
    // Cards
    $('#layout_cols > div > div').attr('class', 'w3-card-2 w3-margin-top w3-white w3-text-blue-grey w3-justify');
    // Divs within cards
    $('#layout_cols > div > div > div').addClass('w3-container');
    // Navigation Bar
    $('#layout_cols > div > nav').attr('class', 'w3-card-2 w3-margin-top w3-block w3-blue w3-bar');
    // Footer
    $('#footer').attr('class', 'w3-container w3-small w3-blue-grey w3-center w3-margin-top');
    // Lists
    $('ul').addClass(' w3-ul');
    // Tables
    $('table').addClass(' w3-table w3-bordered');
};

// Format Dates
function dateString_yearString(dt){
    // converts a string yyyy-mm-dd to the year yyyy
    var d = new Date(dt);
    return d.getFullYear().toString();
};

function dateString_monthString(dt){
    // converts a string yyyy-mm-dd to the month mmm-yyyy
    var d = new Date(dt);
    return monthNum_monthName(d.getMonth()) + ' ' + d.getFullYear().toString();
};

function dateString_daymonthString(dt){
    var d = new Date(dt);
    return d.getDate().toString(); + ' ' + monthNum_monthName(d.getMonth());
};

function monthNum_monthName(num, lng=false){
    var mnth;
    switch(num){
        case 0:
            mnth = "January";
            break;
        case 1:
            mnth = "February";
            break;
        case 2:
            mnth = "March";
            break;
        case 3:
            mnth = "April";
            break;
        case 4:
            mnth = "May";
            break;
        case 5:
            mnth = "June";
            break;
        case 6:
            mnth = "July";
            break;
        case 7:
            mnth = "August";
            break;
        case 8:
            mnth = "September";
            break;
        case 9:
            mnth = "October";
            break;
        case 10:
            mnth = "November";
            break;
        case 11:
            mnth = "December";
            break;
        default:
            mnth = null;
    }
    if(!lng){
        mnth = mnth.substring(0, 3);
    };
    return mnth;
};