// Clear forms
function clear_forms(){
    $('form input[type="text"], form input[type="number"], form input[type="date"]').val('');
    $('form select').prop('selectedIndex', 0);
};

function daily_validate(){
    var result = true;
    result = result && $('#input_daily_name').val().length > 0;
    return result;
};

function daily_output_obj(){
    var txt;
    txt = '{';
    txt = txt + '"name":"';
    txt = txt + $('#input_daily_name').val() + '"';
    if($('#input_daily_recipients').val().length > 0){
        txt = txt + ', "recipients":"';
        txt = txt + $('#input_daily_recipients').val() + '"';
    };
    if($('#input_daily_repository').val().length > 0){
        txt = txt + ', "repo":"';
        txt = txt + $('#input_daily_repository').val() + '"';
    };
    if($('#input_daily_location').val().length > 0){
        txt = txt + ', "location":"';
        txt = txt + $('#input_daily_location').val() + '"';
    };
    if($('#input_daily_description').val().length > 0){
        txt = txt + ', "description":"';
        txt = txt + $('#input_daily_description').val() + '"';
    };
    txt = txt + ', "done":"true"'
    txt = txt + '}';
    var obj = JSON.parse(txt);
    return obj;
};