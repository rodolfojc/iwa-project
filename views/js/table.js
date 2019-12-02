function draw_table(){
    $("#resultable").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#resultable").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/stockitems")
}

function select_row()
{
	$("#stocktable tbody tr[id]").click(function ()
	{
       	$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='6']").length - 1;
        var item = $(this).attr("id") - 1;
        alert("Section: "+ section + " Item: " + item);
		//delete_row(section, entree);
	})
};

$(document).ready(function(){
    draw_table();
})