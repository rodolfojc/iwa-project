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
        delete_row(section, item);
	})
};

function delete_row(sec, item)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				item: item,
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function(){
    draw_table();
})

$(document).ready(function() {
    $("#addnew").click(function() {
	$("#formhidden").toggle();
  })
});