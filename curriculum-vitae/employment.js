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
            "Data provision"
            , "Maintaining Tableau environment"
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
        ]
    }
    , {
        company: "Infineum"
        , title: "Components Chemist"
        , start: "2010-12-03"
        , end: "2012-03-7"
    }
];


function display_employment(ul){
    $.each(employment, function(){
        var txt;
        txt = '<li>';
        txt += '<h4>' + this.company + '</h4>'
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