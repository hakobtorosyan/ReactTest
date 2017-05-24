function CallAjax(str, x) {

    $.ajax({
        type: "POST",
        data: {
            Id: x
        },
        url: str,
        success: DeleteSuccess
    });
}

function DeleteSuccess(result) {
    if (result.statusCode === 400 || result.statusCode === 600) {
        $("#deleteloader").hide();
        document.getElementById("errordiv").innerHTML = result.Message;
        $(".startdelete").hide();
        $(".errordelete").show();
    }
    else {
        $("#deleteloader").hide();
        $(".startdelete").hide();
        $("#deletemodal").modal("hide");
        //$("#confirmdelete").click(function () {
        //    $("#deletemodal").modal("hide");
        //    $("#filterButtonId").click();
        //});
    }
}

function ConfirmDelete() {
    $("#deletemodal").modal("hide");
    $("#filterButtonId").click(function() {
        console.log("clicked");
    });
    $("#filterButtonId").click();
}
function DeletewithPaginationClicking() {
    $("#deletemodal").modal("hide");
    $("#currentpage").click();
}


$("#deletemodal").on("hidden.bs.modal", function () {
    $("#errordiv").html("");
    $(".startdelete").show();
    $(".errordelete").hide();
    $(".successdelete").hide();
    $("#filterButtonId").click();
});



