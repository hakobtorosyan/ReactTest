class BlockManager {
    DisableInputs(div, inputtype) {
        try {
            var divstring = div.toString();
            (inputtype == null || inputtype == "") ?
            $(divstring + " :input").prop("disabled", true)
            : $(divstring + " :input[type=" + inputtype + "]").prop("disabled", true);
        } catch (e) {
            console.log(e.message);
        }

    }

    EnableInputs(div, inputtype) {
        try {
            var divstring = div.toString();
            (inputtype == null || inputtype == "") ?
            $(divstring + " :input").prop("disabled", false)
            : $(divstring + " :input[type=" + inputtype + "]").prop("disabled", false);
        } catch (e) {
            console.log(e.message);

        }
    }

    HideDiv(div) {
        div.slideDown();
    }
    ShowDiv(div) {
        div.slideUp();
    }

    CloseDiv(divid, inputtype) {
        DisableInputs(divid, inputtype);
        HideDiv(divid);
    }
    OpenDiv(divid, inputtype) {
        EnableInputs(divid, inputtype);
        ShowDiv(divid);
    }
    /**
     * /  add unselected items to dropdown   
     */
    AddListtoDropdown(list, selectId) {
        try {
            selectId.children().remove();
            if (list != null) {
                if (list[0].Id == null || list[0].Name == null) {
                    return;
                }
                for (let i = 0; i < list.length; i++) {
                    selectId.append($('<option></option>').val(list[i].Id).html(list[i].Name));
                }
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    /**
     * /in select2 platform build list with selected and unselectedd items
     */
    Select2MultipleBuilder(selectedlist, unselectedlist, selectId) {
        try {
            selectId.children().remove();
            if (selectedlist != null) {
                if (selectedlist[0].Id != null && selectedlist[0].Name) {
                    for (var i = 0; i < selectedlist.length; i++) {
                        var s = '<option selected value="' + selectedlist[i].Id + '">' + selectedlist[i].Name + '<option>';
                        selectId.append(s);
                        selectId.trigger("change");
                    }
                }
            }
            if (unselectedlist != null) {
                if (unselectedlist[0].Id != null && unselectedlist[0].Name) {
                    for (var j = 0; j < unselectedlist.length; j++) {
                        selectId.append($('<option></option>').val(unselectedlist[i].Id).html(unselectedlist.Name));
                    }
                }
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    /**
     * in select2 platform build select2 box with one selectedItem selected element and unselectedlist unselected element
     */
    Select2Builder(selectedItem, unselectedlist, selectId) {
        try {
            selectId.children().remove();
            if (selectedItem != null) {
                if (selectedItem.Id != null && selectedlist.Name) {
                    var x = '<option selected value="' + selectedItem.Id + '">' + selectedItem.Name + '<option>';
                    selectId.append(x);
                    selectId.trigger("change");
                }
            }
            if (unselectedlist != null) {
                if (unselectedlist[0].Id != null && unselectedlist[0].Name) {
                    for (var j = 0; j < unselectedlist.length; j++) {
                        selectId.append($('<option></option>').val(unselectedlist[i].Id).html(unselectedlist.Name));
                    }
                }
            }
        } catch (e) {
            console.log(e.message);
        }
    }
}

class AjaxBuilder {
    SuccesAjax() {

    }

    BuildAjax(ContollerName, ActionName) {
        var urlString = "/" + ContollerName + "/" + ActionName + "";
        $.ajax({
            type: 'POST',
            data: {
                Id: x,
                url: urlString,
                success: function (result) {
                    if (result.statusCode === 400 || result.statusCode === 600) {
                        $("#deleteloader").hide();
                        document.getElementById("errordiv").innerHTML = result.Message;
                        $("#deleteentity").hide();
                    } else {
                        $("#deleteloader").hide();
                        $("#deletetext").html("Deleted!!!");
                        $("#canceldelete").hide();
                        $("#deleteentity").val("Ok").html("Ok");
                        $("#deleteentity")
                            .click(function () {
                                $("#deletemodal").modal("hide");
                                //$("#filterButtonId").click();
                            });
                        $('#deletemodal')
                            .on('hide.bs.modal',
                                function () {
                                    $("#filterButtonId").click();
                                });
                    }
                }
            }
        });

    }
}