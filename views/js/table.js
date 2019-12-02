function draw_table(){
    $("#stocktable").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#stocktable").append(html);
            }
        });
    };
    $.getJSONuncached("/get/stockitems")
}
$(document).ready(function(){
    draw_table();
})

