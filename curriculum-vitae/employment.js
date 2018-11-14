/*
var employment = [
    {
        company: "Company Name"
        , start: "yyyy-mm-dd"
        , end: "yyyy-mm-dd"
        , link: "https://web-address.com"
        , responsibilities: [
            "Responsibility 1"
            , "Responsibility 2"
        ]
        , achievements: [
            "Achievement 1"
            , "Achievement 2"
        ]
        , skills: [
            "Skill 1"
            , "Skill 2"
        ]
    }
];

Company, title and Start are required. If end is not given it will be assumed that the employment is ongoing.
Other fields are not required.

*/

var employment = [
    {
        company: "PayBreak"
        , title: "MI &amp; Reporting Engineer"
        , start: "2018-05-08"
        , link: "https://www.afforditnow.com/"
        , responsibilities: [
            "Timely provision of data in a scheduled and <i>ad-hoc</i> fashion to support activities across the business"
            , "Maintenance of the <i>Tableau</i> environment to ensure continued access to accurate information"
        ]
        , achievements: [
            "Star schema"
            , "Improved quality of reporting"
            , "Introduced R to do analytics"
        ]
        , skills: [
            "Tableau"
            , "SQL"
            , "R"
            , "Python"
        ]
    }
    , {
        company: "Arqiva"
        , title: "Reporting Engineer"
        , start: "2014-11-03"
        , end: "2017-09-15"
        , link: "https://www.arqiva.com/"
        , skills: [
            "QlikView"
            , "Excel"
            , "VBA"
        ]
    }
    , {
        company: "CAIP"
        , title: "Project Coordinator"
        , start: "2014-07-01"
        , end: "2014-09-30"
    }
    , {
        company: "Statham Lodge Hotel"
        , title: "Front of House Operative"
        , start: "2013-04-01"
        , end: "2013-09-01"
        , link: "https://stathamlodge.com/"
    }
    , {
        company: "ABSL Space Products"
        , title: "Electrochemist"
        , start: "2010-03-01"
        , end: "2012-03-31"
        , skills: [
            "Excel"
            , "VBA"
        ]
    }
    , {
        company: "Infineum"
        , title: "Components Chemist"
        , start: "2007-12-08"
        , end: "2010-03-01"
        , link: "https://www.infineum.com/"
        , skills: [
            "VBA"
        ]
    }
    , {
        company: "Rolls Royce Fuel Cell Systems"
        , title: "Summer Student"
        , start: "2006-04-01"
        , end: "2006-08-31"
    }
    , {
        company: "Rohm &amp; Haas Electronic Materials"
        , title: "Environmental Chemist"
        , start: "2005-07-01"
        , end: "2006-03-31"
    }
];


// Script to display employment details
function display_employment(ul){
    $.each(employment, function(){
        var txt;
        txt = '<li>';
        txt += '<h3>' + this.company + '</h3>'
        txt +=  '<b>' + this.title + '</b><br />';
        txt +=  '<i>' + dateString_monthString(this.start) + ' - ';
        if(this.end != null){
            txt +=  dateString_monthString(this.end);
        } else {
            txt +=  'Present';
        };
        txt +=  '</i>';
        if(this.link != null){
            txt +=  '<br /><a href="' + this.link + '">' + this.link + '</a>';
        };
        if(this.responsibilities != null | this.achievements != null | this.skills != null){
            txt +=  '<dl>';
            if(this.responsibilities != null){
                txt +=  '<dt><b>Responsibilities:</b></dt>';
                for(i in this.responsibilities){
                    txt +=  '<dd>' + this.responsibilities[i] + '</dd>';
                };
            };
            if(this.achievements != null){
                txt +=  '<dt><b>Achievements:</b></dt>';
                for(i in this.achievements){
                    txt +=  '<dd>' + this.achievements[i] + '</dd>';
                };
            };
            if(this.skills != null){
                txt +=  '<dt><b>Skills Used:</b></dt><dd>';
                for(i in this.skills){
                    txt +=  '<span>' + this.skills[i] + '</span>';
                };
            };
            txt +=  '</dd></dl>';
        };
        txt +=  '</li>';
        ul.append(txt);
        ul.find('dd span').attr('class', 'w3-tag w3-blue-grey w3-round w3-margin-right');
    });
};