
function return_daily_array(){
    var daily_array = localStorage.getItem('DailyArray');
    if(!daily_array){
        daily_array = [];
        localStorage.setItem("DailyArray", JSON.stringify(daily_array));
    } else {
        daily_array = JSON.parse(daily_array);
    };
    return daily_array;
};


function add_daily(){
    var daily_array = return_daily_array();
    var obj = daily_output_obj();
    localStorage.setItem(obj.name, JSON.stringify(obj));
    daily_array.push(obj.name);
    localStorage.setItem("DailyArray", JSON.stringify(daily_array));
};

function remove_daily(k){

};

function clear_daily_display(target_ul){
    target_ul.html('');
};

function display_daily_today(target_ul){
    var d = return_daily_array();
    var obj;
    var k;
    var txt;
    for (i in d){
        k = d[i];
        obj = JSON.parse(localStorage[k]);
        txt = '<li';
        if(obj.done == 'true'){
            txt = txt + ' rel="done"';
        };
        txt = txt + '>' + obj.name + '</li>';
        target_ul.append(txt);
    };
};



