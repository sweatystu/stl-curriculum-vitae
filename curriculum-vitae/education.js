/*
var education = [
    {
        school: "School Name"
        , date: "Date of Qualification"
        , course: "Course Title"
        , qualification: "Award Name (BA, BSci, etc.)"
        , result: "Outcome"
        , modules: [
            {
                module: "Module Title"
                , code: "Course Code"
                , result: "Module Result"
            }
        ]
    }
];

The school, date and course are all required. Other elements are not.
The result is only shown if a qualification is given.
If a list of modules is provided, only the module title is required.

*/


var education = [
    {
        school: "Manchester Metropolitan University"
        , date: "2018-06-08"
        , course: "Business Analytics"
        , qualification: "PgDip"
        , result: "Distinction"
        , modules: [
            {
                module: "Business Analytics"
                , code: "5U7Z0049"
                , result: 75
            }
            , {
                module: "Business Intelligence"
                , code: "6G7Z1025"
                , result: 89
            }
            , {
                module: "Consultancy Skills"
                , code: "5U7Z0068"
                , result: 75
            }
            , {
                module: "Decision Making and Digital Visualisation"
                , code: "5U7Z0069"
                , result: 63
            }
            , {
                module: "Fundamentals of Data Management"
                , code: "5U7Z0066"
                , result: 82
            }
            , {
                module: "Strategic Information Systems"
                , code: "5U7Z0067"
                , result: 57
            }
        ]
    }
    , {
        school: "University of St Andrews"
        , date: "2007-06-20"
        , course: "Chemistry with External Placement"
        , qualification: "MChem"
        , result: "2:1"
    }
];


function display_education(ul){
    $.each(education, function(){
        var txt;
        txt = '<li>';
        txt +=  '<h4>' + this.course + '</h4>';
        txt +=  this.school + '<br />';
        if(this.qualification != null){
            txt +=  this.qualification;
            if(this.result != null){
                txt +=  ' (' + this.result + ')'
            };
            txt +=  '<br />';
        };
        txt +=  dateString_monthString(this.date);
        if(this.modules != null){
            txt +=  '<br />';
            txt +=  '<button onclick="toggle_modules($(this));">Modules</button>';
            txt +=  '<ul>';
            $.each(this.modules, function(){
                txt +=  '<li>';
                txt +=  this.module;
                if(this.code != null){
                    txt +=  ' (' + this.code + ')';
                };
                if(this.result != null){
                    txt +=  '<span>' + this.result + '</span>';
                }
                txt +=  '</li>';
            });
            txt +=  '</ul>';
        };
        txt +=  '</li>';
        ul.append(txt);
    });
    ul.find('button').attr('class', 'w3-button w3-blue w3-hover-blue-grey w3-margin-top w3-round');
    ul.find('button + ul').addClass('w3-panel w3-light-grey w3-border-light-blue w3-leftbar w3-border-right');
    ul.find('button + ul span').attr('class', 'w3-right');
    ul.find('button + ul').hide();
};

function toggle_modules(btn){
    btn.next('ul').toggle();
};