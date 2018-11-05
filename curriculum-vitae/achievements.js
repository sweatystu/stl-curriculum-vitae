/*
var achievements = [
    {
        company: "Where was this feat done?"
        , what: "What did I do?"
        , how: "What did I do to achieve it?"
        , result: "what was the outcome?"
        , comparison: "How does this outcome compare?"
        , skills: [
            "skill used"
            , "skill used"
        ]
    }
];

The what field is required. The others are optional.

*/

var achievements = [
    {
        company: "PayBreak"
        , what: "Introduced <i>star-schema</i> database structure for reporting and analytics"
        , how: "Documented requirements and entities, designed structure, and built an ETL in SQL"
        , result: "Fast, simple and efficient reporting database that could be easily used for reporting across platforms"
        , comparison: "Copy of live database, optimised for input/output, with complex joins required"
        , skills: [
            "SQL"
            , "Tableau"
        ]
    }
    , {
        company: "Infineum"
        , what: "Improved the analysis of tribological testing"
        , how: "Learning and implementing VBA"
        , result: "Improved anaysis time of ~ 5 seconds"
        , comparison: "Previous analysis time of ~ 10 minutes"
        , skills: [
            "Excel"
            , "VBA"
        ]
    }
];

function display_achievements(ul){
    $.each(achievements, function(){
        var txt;
        txt = '<li><dl>';
        txt += '<dt><b>What:</b>';
        if(this.company != null){
            txt += '<span>' + this.company + '</span>';
        };
        txt += '</dt>';
        txt += '<dd>' + this.what + '.</dd>';
        if(this.how != null){
            txt += '<dt><b>How:</b></dt>';
            txt += '<dd>' + this.how + '.</dd>';
        };
        if(this.result != null){
            txt += '<dt><b>Resulting in:</b></dt>';
            txt += '<dd>' + this.result + '.</dd>';
        };
        if(this.comparison != null){
            txt += '<dt><b>Compared to:</b></dt>';
            txt += '<dd>' + this.comparison + '.</dd>';
        };
        if(this.skills != null){
            txt += '<dt><b>Skills Used:</b></dt>';
            txt += '<dd>';
            for(i in this.skills){
                txt += '<span>' + this.skills[i] + '</span>';
            }
            txt += '</dd>';
        };
        txt += '</dl></li>';
        ul.append(txt);
    });
    ul.find('dt span').attr('class', 'w3-right w3-tag w3-blue w3-wide w3-round');
    ul.find('dd span').attr('class', 'w3-tag w3-blue-grey w3-round w3-margin-right');
};

