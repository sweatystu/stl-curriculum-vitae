/*
var quals = [
    {
        award: "Qualification"
        , title: "Course Title"
        , body: "Awarding Body"
        , date: "yyyy-mm-dd"
        , result: "result"
    }
];

Award, title, body and date are all required fields. Result is optional.
*/
var quals = [
    {
        award: "MChem"
        , title: "Chemistry with External Placement"
        , body: "St Andrews"
        , date: "2007-06-20"
        , result: "2:1"
    }
    , {
        award: "PgDip"
        , title: "Business Analytics"
        , body: "MMU"
        , date: "2018-06-08"
        , result: "Distinction"
    }
];


function display_qualifications(ul){
    $.each(quals, function(){
        var txt;
        txt = '<li>';
        txt += this.award;
        txt += '<br /><span>';
        txt += this.title;
        txt += '<br />';
        txt += dateString_yearString(this.date);
        txt += ' ' + this.body;
        txt += '</span></li>';
        ul.append(txt);
    });
    $('#qualifications > ul span').attr('class', 'w3-small');
};