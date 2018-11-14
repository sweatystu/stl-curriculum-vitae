/*
var skills = [
    {
        name: "Skill Name"
        , level: "Skill Level"
    }
];

name is required. If level is null, it will be set to 50.
Skill Level must be an integer number, between 50 and 100.
Levels below 50 will be shown as 50.
Levels above 100 will be shown as 100.
Skills are shown in the order defined in this object.

*/
var skills = [
    {
        name: "Excel"
        , level: 90
    }
    , {
        name: "VBA"
        , level: 85
    }
    , {
        name: "Tableau"
        , level: 80
    }
    , {
        name: "QlikView"
        , level: 75
    }
    , {
        name: "Power BI"
        , level: 65
    }
    , {
        name: "R"
    }
    , {
        name: "SQL"
    }
    , {
        name: "Python"
    }
];


function display_skills(div){
    $.each(skills, function(){
        var lvl;
        if(this.level == null){
            lvl = 50;
        } else {
            lvl = parseInt(this.level);
            if(lvl < 50){
                lvl = 50;
            } else if(lvl > 100){
                lvl = 100
            };
        };
        //$('#skills').html($('#skills').html() + '<div><div style="width: ' + lvl + '%">' + this.name + '</div></div>');
        div.append('<div><div style="width: ' + lvl + '%">' + this.name + '</div></div>');
    });
    div.children('div').attr('class', 'w3-light-grey w3-round-xlarge w3-margin-bottom');
    div.children('div').children('div').attr('class', 'w3-container w3-blue-grey w3-round-xlarge');
};
