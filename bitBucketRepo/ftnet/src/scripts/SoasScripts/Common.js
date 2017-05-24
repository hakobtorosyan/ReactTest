/**/
$(function () {
    $("body").scrollTop(0);
});

 

/**
 * /
 * @returns {} fires when modal(hide) calling and maybe popup does not enable the backdrop
 * 
 */
function HideModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
};

$('#insertmodal').on('hide.bs.modal', HideModal);
$('#updatemodal').on('hide.bs.modal', HideModal);
$('#deletemodal').on('hide.bs.modal', HideModal);

/**
 * Hidden page Header when sidebar-toggle oncollapse=false, and Show otherwise
 */
var oncollapse = false;//does not collapse
function  hideHeader(param) {
    if (param) {
        $("#pageheader").show();
    } else {
        $("#pageheader").hide();
    }
}


// Retrieve
//$(".sidebar-toggle").click(function () {
//    const item = localStorage.getItem("IsCollapse");
//    if (item == null) {
//        if ($("body").hasClass("sidebar-collapse")) {
//            console.log("SetItem:null" + false);
//            oncollapse = false;

//            localStorage.setItem("IsCollapse", false);//SideBar opened
//        }
//        else {
//            oncollapse = true;

//            //when click the click event burns then body.addclass "sidebar-collapse"
//            console.log("SetItem: null" + true);
//            localStorage.setItem("IsCollapse", true);//SideBar closed
//        }
//    }
//    else {
//        if (item) {
//            oncollapse = false;
//            console.log("SetItem: != null" + false);

//            localStorage.setItem("IsCollapse", false);//SideBar opened
//        }
//        else {
//            oncollapse = true;
//            console.log("SetItem: != null" + true);

//            localStorage.setItem("IsCollapse", true);//SideBar opened
//        }
//    }
   
//    hideHeader(oncollapse);
//});

$(".sidebar-toggle").click(function () {
    if ($("body").hasClass("sidebar-collapse")) {
        oncollapse = false;
        localStorage.setItem("IsCollapse", false);//SideBar opened
    }
    else {
        oncollapse = true;
        //when click the click event burns then body.addclass "sidebar-collapse"
        localStorage.setItem("IsCollapse", true);//SideBar closed
    }

    hideHeader(oncollapse);
});

function HideNavBar(onCollapse) {
    $("#pageheader").show();
    $("body").addClass("sidebar-collapse");
}

function GetSideBarState() {
    const onCollapse = localStorage.getItem("IsCollapse");

    if (onCollapse==="true") {
        HideNavBar(onCollapse);
    }
}

$(GetSideBarState());
/** Scroll to top of page
 * /
 */
/**
 * /
Check if Selected Sorting field-Sorting By: Field enebled, and disabled otherwise */
function check() {
    if ($("#sortingkey").prop("selectedIndex") > 0) {
        $("#sortingvalue").prop("disabled", false);
    } else {
        $("#sortingvalue").prop("disabled", true);
    }
};

$(check());

$(".modal").on("hidden.bs.modal", function () {
    $("body").attr("padding-right", "0.px");
    console.log("mmodal hides");
});