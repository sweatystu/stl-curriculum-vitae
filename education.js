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