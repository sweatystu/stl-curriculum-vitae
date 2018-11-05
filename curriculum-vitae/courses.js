/*
var courses = [
    {
        name: "Course Name"
        , date: "yyyy-mm-dd"
        , provider: "Course Provider"
    }
];

Name, date and provider are all required fields.
*/

var courses = [
    {
        name: "QlikView Developer Course"
        , date: "2015-11-18"
        , provider: "Qlik"
    }
    , {
        name: "QlickView Designer Course"
        , date: "2015-06-01"
        , provider: "Qlik"
    }
    , {
        name: "Child Protection (Level 2)"
        , date: "2014-01-10"
        , provider: "Fred Longworth High school"
    }
    , {
        name: "Introduction to MS Project"
        , date: "2010-11-02"
        , provider: "Mouse Training"
    }
    , {
        name: "Space Systems Engineering"
        , date: "2010-06-28"
        , provider: "University of Southampton"
    }
    , {
        name: "Cambridge Tribology Course"
        , date: "2008-09-17"
        , provider: "University of Cambridge and IfM"
    }
    , {
        name: "Fire Safety"
        , date: "2008-05-30"
        , provider: "MK Fire Training"
    }
    , {
        name: "Advanced Level Driving"
        , date: "2007-12-19"
        , provider: "Drivetrain Partnership"
    }
];


function display_courses(tbl){
    $.each(courses, function(){
        var txt;
        txt = '<tr>';
        txt +=  '<td>' + dateString_monthString(this.date) + '</td>';
        txt +=  '<td>' + this.name + '</td>';
        txt +=  '<td>' + this.provider + '</td>';
        txt +=  '</tr>';
        tbl.append(txt);
    });
};