
function draw_table(){
    $("#resultable").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                console.log(html);
                let result = '';
                let body = `<table id="stocktable" class="table table-hover">
                            <thead>
                                <tr>
                                    <th colspan="3">Total Items</th>
                                </tr>                                <tr></tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Vendor</th>
                                    <th>Quantity</th>
                                    <th>Cost (per/unit)</th>                   
                                </tr>
                            </thead>
                            <tbody>`;
                let hardware = `<td colspan="6" align="center">
                                    <b>
                                        <h1>Hardware</h1>
                                    </b>
                                </td>`;
                let software = `<td colspan="6" align="center">
                                    <b>
                                        <h1>Software</h1>
                                    </b>
                                </td>`;
                html.forEach(element => {
                    let values = `<tr id=${element._id}>
                                    <td>${element.name}</td>
                                    <td>${element.type}</td>
                                    <td>${element.description}</td>
                                    <td>${element.vendor}</td>
                                    <td>${element.quantity}</td>
                                 </tr>
                        `;
                    if (element.section == 'Software') {
                        software += values;
                    }else {
                        hardware += values;
                    };                    
                });
                console.log(software);
                console.log(hardware);
                result = body + software + hardware + `</tbody></table>`;
                console.log(result);        

                $("#resultable").append(result);
                select_row();
            }
        });
    };
    $.getJSONuncached("/items")
}

function select_row()
{
	$("#stocktable tbody tr[id]").click(function ()
	{
       	$(".selected").removeClass("selected");
		$(this).addClass("selected");
        var item = $(this).attr("id");
        console.log(item);
        delete_row(item);
	})
};

function delete_row(item)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: `/item/${item}`,
			type: "DELETE",
			data: {},
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