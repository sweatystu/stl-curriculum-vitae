/*
var refs = [
    {
        title: "Article Title"
        , authors: [
            "Author 1"
            , "Author 2"
        ]
        , date: "yyyy-mm-dd"
        , journal: {
            journal: "Journal Title"
            , volume: 32
            , issue: 3
            , page: "24-52"
        }
        , conference: {
            conference: "Conference title"
            , location: "City name"
        }
    }
];

For each entry, only one sub-category (journal / conference) should be populated.
All fields are required, except the issue within the journal object.

*/

var refs = [
    {
        title: "Synthesis of norbornane-fused 1,3-dithiolanes and evaluation of 1,3-dithiolane-containing polymers as adsorbants for mercury (II) salts"
        , authors: [
            "Aitken, R.A."
            , "Aitken, K.M."
            , "Lambert, S."
            , "Playfair, R."
            , "Wilson, N."
        ]
        , date: "2012-06-01"
        , journal: {
            journal: "Hetrocycles"
            , volume: 84
            , issue: 2
            , page: "1113 - 1122"
        }
    }
    , {
        title: "ABSL initial performance comparison of Sony 18650 Hard carbon cell and Sony 18650 Hard Carbon Manrell cell"
        , authors: [
            "Troutman, J."
            , "Lambert, S."
        ]
        , date: "2011-07-31"
        , conference: {
            conference: "9<sup>th</sup> Annual International Energy Conversion Engineering Conference"
            , location: "San Diego"
        }
    }
    , {
        title: "The influence of temperature on the efficiency of electroplating from various ionic liquids"
        , authors: [
            "Lambert, S."
        ]
        , date: "2006-11-01"
        , journal: {
            journal: "Circuit World"
            , volume: 32
            , issue: 4
            , page: "36 - 41"
        }
    }
];


function display_references(ul){
    $.each(refs, function(){
        var txt;
        var no_authors = this.authors.length - 1;
        txt = '<li>';
        switch(true){
            case this.journal != null:
                var j = this.journal;
                $.each(this.authors, function(index){
                    switch(true){
                        case index == no_authors:
                            txt +=  this;
                            break;
                        case index == no_authors - 1:
                            txt +=  this + ' and ';
                            break;
                        default:
                            txt +=  this + ', ';
                    };
                });
                txt +=  ' (' + dateString_yearString(this.date) + ')';
                txt +=  " '" + this.title + ".'";
                txt +=  ' <i>' + j.journal + '</i>';
                txt +=  ', Vol. ' + j.volume.toString();
                if(j.issue != null){txt +=  '(' + j.issue.toString() + ')';};
                txt +=  ', pp. ' + j.page;
                txt +=  '.';
                break;
            case this.conference != null:
                var c = this.conference;
                $.each(this.authors, function(index){
                    switch(true){
                        case index == no_authors:
                            txt +=  this;
                            break;
                        case index == no_authors - 1:
                            txt +=  this + ' and ';
                            break;
                        default:
                            txt +=  this + ', ';
                    };
                });
                txt +=  ' (' + dateString_yearString(this.date) + ')';
                txt +=  " '" + this.title + ".'";
                txt +=  ' Paper presented at: <i>' + c.conference + '</i>.';
                txt +=  ' ' + c.location + ',';
                txt +=  ' ' + dateString_daymonthString(this.date);
                txt +=  '.';
                break;
            default:
                txt +=  'Not Recognised';
        };
        txt +=  '</li>';
        ul.append(txt);
    });
};