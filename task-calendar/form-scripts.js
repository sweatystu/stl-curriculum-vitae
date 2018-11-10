// Clear forms
function clear_forms(){
    $('form').html('');
};

// Construct Forms
function construct_form(frm, type){
    frm.append(input_name());
    frm.append(input_recipients());
    frm.append(input_description());
    switch(type){
        case 'adhoc':
            frm.append(input_date());
            frm.append(input_priority());
            break;
        case 'daily':
            frm.append(input_repo());
            frm.append(input_location());
            break;
        case 'weekly':
            frm.append(input_repo());
            frm.append(input_location());
            frm.append(input_weekday());
            break;
        case 'monthly':
            frm.append(input_repo());
            frm.append(input_location());
            frm.append(input_month_day());
            break;
    };
    frm.append(input_submit());
    input_month_day_validation();
    format_forms();
};
function input_name(){
    var txt;
    txt = '<input type="text" id="input_name" />';
    txt += '<label>Report Name</label>';
    return txt;
};
function input_recipients(){
    var txt;
    txt = '<input type="text" id="input_recipients" />';
    txt += '<label>Recipents</label>';
    return txt;
};
function input_description(){
    var txt;
    txt = '<input type="text" id="input_description" />';
    txt += '<label>Description</label>';
    return txt;
};
function input_repo(){
    var txt;
    txt = '<input type="text" id="input_repo" />';
    txt += '<label>Repository</label>';
    return txt;
};
function input_location(){
    var txt;
    txt = '<input type="text" id="input_location" />';
    txt += '<label>File Location</label>';
    return txt;
};
function input_date(){
    var txt;
    txt = '<input type="date" id="input_date" />';
    txt += '<label>Date Required</label>';
    return txt;
};
function input_month_day(){
    var txt;
    txt = '<input type="number" id="input_month_day" min="1" max="31" />';
    txt += '<label>Day of the month to be completed</label>';
    return txt;
};
function input_priority(){
    var txt;
    txt = '<select name="input_priority">';
    txt += '<option value="normal" selected>Normal</option>';
    txt += '<option value="low">Low</option>';
    txt += '<option value="high">High</option>';
    txt += '</select>';
    txt += '<label>Priority</label>';
    return txt;
};
function input_weekday(){
    var txt;
    txt = '<select name="input_weekday">';
    txt += '<option value="" disabled selected>Please select a weekday for the report to be completed</option>';
    txt += '<option value="1">Monday</option>';
    txt += '<option value="2">Tuesday</option>';
    txt += '<option value="3">Wednesday</option>';
    txt += '<option value="4">Thursday</option>';
    txt += '<option value="5">Friday</option>';
    txt += '<option value="6">Saturday</option>';
    txt += '<option value="0">Sunday</option>';
    txt += '</select>';
    txt += '<label>Day to be completed</label>';
    return txt;
};
function input_submit(){
    return '<br /><button>Submit</button>';
};

// Input Validation
function input_month_day_validation(){
    $('input[type="number"]').focusout(function(){
        var cur = $(this).val();
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        if(cur < min){
            $(this).val(min);
        } else if (cur > max){
            $(this).val(max);
        };
    });
};



// Retrieve data from forms
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

