
// FUNCITION TO DRAW THE MAIN TABLE WITH AJAX CALL TO GET STOCK ITEMS
function drawTable() {
    $("#resultable").empty();
    $.getJSONuncached = function (url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function (html) {
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
                                    <td>$${element.cost}</td>
                                 </tr>
                        `;
                    if (element.section == 'Software') {
                        software += values;
                    } else {
                        hardware += values;
                    };
                });
                console.log(software);
                console.log(hardware);
                result = body + software + hardware + `</tbody></table>`;
                console.log(result);

                $("#resultable").append(result);
                selectRow();
            }
        });
    };
    $.getJSONuncached("/items")
}

// FUNCTION TO SELECT A ROW FOR DELETING AND EDITING
function selectRow() {
    $("#stocktable tbody tr[id]").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        $('#edit').prop('disabled', false);
        $('#delete').prop('disabled', false);
        var item = $(this).attr("id");
        deleteItem(item);
        editItem(item);
    })
};

// DELETE ITEM HANDLER
function deleteItem(item) {
    $("#deleteitem").click(function () {
        $.ajax(
            {
                url: `/item/${item}`,
                type: "DELETE",
                data: {},
                cache: false,
                success: function (json) {
                    location.reload(true);
                }
            })
    })
};

// EDIT ITEM HANDLER
function editItem(item) {
    // INPUT VALIDATION FORM FOR INPUTS
    $("form[name='formaddmodel']").validate({
        rules: {
            name: "required",
            type: "required",
            description: "required",
            vendor: "required",
            quantity: "required",
            cost: "required"
        },
        messages: {
            name: "Please enter a name for stock item",
            type: "Please enter a type for stock item",
            description: "Please enter a brief description of stock item",
            vendor: "Please enter a provider or type N/A",
            quantity: "Please, quantity must be a integer number up to 10000",
            cost: "Please anter a cost or leave as 0 number up to $10000"
        },
        submitHandler: function (form) {
            form.submit();
        }
    })

    // FUNCTION TO POPULATE DATA ON MODAL FOR EDITING DATA
    $("#edit").click(function () {
        $.ajax(
            {
                url: `/item/${item}`,
                type: "GET",
                data: {},
                cache: false,
                success: function (json) {
                    $(".modal-body #sectionmodel").val(json.section);
                    $(".modal-body #namemodel").val(json.name);
                    $(".modal-body #typemodel").val(json.type);
                    $(".modal-body #descriptionmodel").val(json.description);
                    $(".modal-body #vendormodel").val(json.vendor);
                    $(".modal-body #quantitymodel").val(json.quantity);
                    $(".modal-body #costmodel").val(json.cost);
                    $(".modal-content #modelform").attr("action", `/itemupdate/${item}`);
                }
            })
    })
};

// MAIN CALL
$(document).ready(function () {
    drawTable();
});

// INPUT VALIDATION FOR MAIN FORM - ADDING
$(document).ready(function () {
    $("form[name='formadd']").validate({
        rules: {
            name: "required",
            type: "required",
            description: "required",
            vendor: "required",
            quantity: "required",
            cost: "required"
        },
        messages: {
            name: "Please enter a name for stock item",
            type: "Please enter a type for stock item",
            description: "Please enter a brief description of stock item",
            vendor: "Please enter a provider or type N/A",
            quantity: "Please, quantity must be a integer number up to 10000",
            cost: "Please anter a cost or leave as 0 number up to $10000"
        },
        submitHandler: function (form) {
            form.submit();
        }
    })
});

// HIDE OR SHOW FORM FOR ADDING NEW ITEMS
$(document).ready(function () {
    $("#addnew").click(function () {
        $("#formhidden").toggle();
    })
});


