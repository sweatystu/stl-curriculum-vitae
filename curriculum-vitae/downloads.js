/*

var downloads = [
    {
        title: "Download Title"
        , description: "Description of the download"
        , filename: "filename.ext"
    }
];

All fields are required.
The downloads should be placed in the folder ./downloads/ with the matching filename and extension.

*/

var downloads = [
    {
        title: "Download Title"
        , description: "Description of the download"
        , filename: "filename.ext"
    }
];


function display_downloads(ul) {
    $.each(downloads, function(){
        var txt;
        txt = '<li>';
        txt +=  '<h4>' + this.title + '</h4>';
        txt +=  this.description + '<br />';
        txt +=  '<a href="./downloads/">' + this.filename + '</a>';
        txt +=  '</li>';
        ul.append(txt);
    });
};
