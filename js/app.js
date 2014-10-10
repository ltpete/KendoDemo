// application entry point
$(document).ready(function(){

    $("#dialog").kendoWindow({
        title: "Hello World",
    }).data("kendoWindow").open().center();

    $("#chart").kendoChart({
        series: [
            { type: "line", data: [ 1, 2, 3 ] },
            { type: "bar", data: [ 4, 5, 6 ] }
        ]
    });

});
