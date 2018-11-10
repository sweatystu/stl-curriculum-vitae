// Format generic elements
function generic_format(){
    // Headers
    $('header').attr('class', 'w3-container w3-flat-belize-hole');
    // Navigation
    $('nav').attr('class', 'w3-block w3-bar w3-flat-peter-river');
    // Content Pages
    $('body > div').attr('class', 'w3-container');
    // Tables
    $('table').attr('class', 'w3-table w3-bordered w3-small');
    $('table .weekend:not(.today)').addClass('w3-flat-clouds');
    $('table td.today').addClass('w3-flat-belize-hole');
    // Lists
    $('ul').attr('class', 'w3-ul');
    $('ul li[rel="done"]').attr('class', 'w3-text-grey');
    $('ul li[rel="done"]').wrapInner('<s></s>');
};

function format_forms(){
    $('form').attr('class', 'w3-container w3-padding-16 w3-card-2');
    $('form input[type="text"]').attr('class', 'w3-input w3-margin-top');
    $('form input[type="number"]').attr('class', 'w3-input w3-margin-top');
    $('form input[type="date"]').attr('class', 'w3-input w3-margin-top');
    $('form select').attr('class', 'w3-select w3-margin-top');
    $('form button').attr('class', 'w3-button w3-margin-top w3-blue w3-hover-indigo');
    $('form label').attr('class', 'w3-text-grey');
};

