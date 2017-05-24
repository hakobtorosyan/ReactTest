class Event {
    constructor(className, title, start, end, backgroundColor, borderColor, constraint, allDay) {
        this.className = className;
        this.title = title;
        this.start = start;
        this.end = end;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.constraint = constraint;
        this.allDay = allDay;
    }
}
class EventType {
    constructor(name) {
        this.name = name;
    }
}
$(document).ready(function () {
    $("#load").hide();
    $("#instrumentsFilterDivId").hide();
    $("#assetsFilterDivId").show();
    $("#eventsList").hide();
    $("#datepicker1").datetimepicker();
    $("#datepicker2").datetimepicker();
    $("#datepicker3").datetimepicker();
    $("#datepicker4").datetimepicker();

    //validation and initialization of datetime pickers
    jQuery.validator.addMethod("greaterThan",
        function (value, element, params) {
            if (value && $(params).val()) {
                return (new Date(value) >= new Date($(params).val()));
            }
            else {
                if (!$(params).val()) {
                    return true;
                }
                return this.optional(element) || (Number(value) >= Number($(params).val()));
            }

        }, "Must be greater than {0}.");

    jQuery.validator.addMethod("LessThan",
        function (value, element, params) {

            if (value && $(params).val()) {
                return (new Date(value) <= new Date($(params).val()));
            }
            else {
                if (!$(params).val()) {
                    return true;
                }
                return this.optional(element) || (Number(value) <= Number($(params).val()));
            }

        }, "Must be greater than {0}.");

    $("#filter").validate({
        rules: {
            datepicker2: {
                greaterThan: "#datepicker1"
            },
            datepicker1: {
                LessThan: "#datepicker2"
            }
        },
        messages: {
            datepicker2: {
                greaterThan: "The End Date must be Greater than Start Date"
            },
            datepicker1: {
                LessThan: "The Start Date must be Less than End Date"
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element.parent());
        },
        highlight: function (element, errorClass) {
            $(element).parents(".rr").addClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).parents(".rr").removeClass(errorClass);
        },
        errorClass: "rr"
    });

    $("#inserteventformCalendar").validate({
        rules: {
            endeventdate: {
                greaterThan: "#startdate"
            },
            starteventdate: {
                LessThan: "#endeventdate"
            }
        },
        messages: {
            endeventdate: {
                greaterThan: "The End Date must be Greater than Start Date"
            },
            starteventdate: {
                LessThan: "The Start Date must be Less than End Date"
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element.parent());
        },
        highlight: function (element, errorClass) {
            $(element).parents(".rr").addClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).parents(".rr").removeClass(errorClass);
        },
        errorClass: "rr"
    });
    $("#updateeventform").validate({
        rules: {
            updateendeventdate: {
                greaterThan: "#updatestarteventdate"
            },
            updatestarteventdate: {
                LessThan: "#updateendeventdate"
            }
        },
        messages: {
            updateendeventdate: {
                greaterThan: "The End Date must be Greater than Start Date"
            },
            updatestarteventdate: {
                LessThan: "The Start Date must be Less than End Date"
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element.parent());
        },
        highlight: function (element, errorClass) {
            $(element).parents(".rr").addClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).parents(".rr").removeClass(errorClass);
        },
        errorClass: "rr"
    });

});
//array for checked assets
var checkedAssets = [];
//checking and unchecking assets in assets filter
$("#asset-ckbCheckAll").click(function () {
    $(".checkBoxClass").prop("checked", $(this).prop("checked"));
});

//array for checked instruments
var checkedInstruments = [];
//checking and unchecking assets in assets filter
$("#instrument-ckbCheckAll").click(function () {
    $(".instrument-checkBoxClass").prop("checked", $(this).prop("checked"));
});

function GetAssetsRequest() {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Calendar/GetAssets";
        request.open("GET", url);
        request.setRequestHeader("Content-type", "application/json");
        request.addEventListener("load",
            function () {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(`Server error ${request.status}`);
                }
            },
            false);
        request.addEventListener("error",
            function () {
                reject("Cannot Make Ajax Request");
            },
            false);
        request.send();
    });
}

function GetInstrumentsRequest() {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Calendar/GetInstruments";
        request.open("GET", url);
        request.setRequestHeader("Content-type", "application/json");
        request.addEventListener("load",
            function () {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(`Server error ${request.status}`);
                }
            },
            false);
        request.addEventListener("error",
            function () {
                reject("Cannot Make Ajax Request");
            },
            false);
        request.send();
    });
}

//get asset types and create list with checkboxes
function GetAssets() {
    GetAssetsRequest().then(function (value) {
        let data = JSON.parse(value);
        let jsonAssets = data.Item1;
        for (let m = 0; m < data.Item2.length; m++) {
            let tr = document.createElement("tr");
            tr.setAttribute("style", "width:280px; height:50px;");
            $("#asset-check-list-box").append(tr);
            let td1 = document.createElement("td");
            tr.appendChild(td1);
            let td2 = document.createElement("td");
            tr.appendChild(td2);
            let assetsDiv1 = document.createElement("div");
            assetsDiv1.setAttribute("class", "box box-info");
            td2.appendChild(assetsDiv1);
            let assetsDiv2 = document.createElement("div");
            assetsDiv2.setAttribute("class", "box box-default collapsed-box");
            assetsDiv2.setAttribute("style", "width:250px");
            assetsDiv1.appendChild(assetsDiv2);
            let assetsDiv3 = document.createElement("div");
            assetsDiv3.setAttribute("class", "box-header with-border");
            assetsDiv2.appendChild(assetsDiv3);
            let tableHead = document.createElement("table");
            assetsDiv3.appendChild(tableHead);
            let headtr = document.createElement("tr");
            tableHead.appendChild(headtr);
            let headTd1 = document.createElement("td");
            headtr.appendChild(headTd1);
            let headTd2 = document.createElement("td");
            headtr.appendChild(headTd2);
            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("class", "checkBoxClass");
            input.setAttribute("name", "assetTypes");
            input.setAttribute("id", `${data.Item2[m].AssetType}`);
            headTd1.appendChild(input);
            let h5 = document.createElement("h5");
            h5.textContent = data.Item2[m].AssetType;
            headTd2.appendChild(h5);
            let assetsDiv4 = document.createElement("div");
            assetsDiv4.setAttribute("class", "box-tools pull-right");
            assetsDiv3.appendChild(assetsDiv4);
            let buttonPlus = document.createElement("button");
            buttonPlus.setAttribute("type", "button");
            buttonPlus.setAttribute("class", "btn btn-box-tool");
            buttonPlus.setAttribute("data-widget", "collapse");
            assetsDiv4.appendChild(buttonPlus);
            let italic = document.createElement("i");
            italic.setAttribute("class", "fa fa-plus");
            buttonPlus.appendChild(italic);
            let checkedAssets = 0;
            let dictLength = 0;
            for (let key in data.Item2[m].Asset) {
                dictLength++;
            }
            for (let key in data.Item2[m].Asset) {
                let assetsDiv5 = document.createElement("div");
                assetsDiv5.setAttribute("class", "box-body well");
                assetsDiv5.setAttribute("id", `assetsBox${key}Id`);
                assetsDiv5.setAttribute("style", "max-height: 70px; width:200px; overflow-x: hidden;");
                assetsDiv2.appendChild(assetsDiv5);
                let assetsTable = document.createElement("table");
                assetsTable.setAttribute("id", `assetsTablex${key}Id`);
                assetsDiv5.appendChild(assetsTable);
                let assetstr = document.createElement("tr");
                assetstr.setAttribute("style", "width:180px;");
                assetsTable.append(assetstr);
                let assetstd1 = document.createElement("td");
                assetstr.appendChild(assetstd1);
                let assetstd2 = document.createElement("td");
                assetstr.appendChild(assetstd2);
                let assetsinput = document.createElement("input");
                assetsinput.setAttribute("type", "checkbox");
                assetsinput.setAttribute("class", "checkBoxClass");
                assetsinput.setAttribute("name", "assets");
                assetsinput.setAttribute("value", key);
                assetsinput.setAttribute("id", `checkbox${data.Item2[m].Asset[key]}${key}`);
                assetstd1.appendChild(assetsinput);
                assetstd2.textContent = data.Item2[m].Asset[key];
                for (let j = 0; j < jsonAssets.length; j++) {
                    if (jsonAssets[j] == key) {
                        assetsinput.checked = true;
                        checkedAssets++;
                    }
                }
                if (checkedAssets === dictLength) {
                    input.checked = true;
                }
            }
            $(`#${data.Item2[m].AssetType}`).click(function () {
                for (let n = 0; n < item.Item2.length; n++) {
                    $(`#checkbox${data.Item2[m].Asset[key]}${key}`).prop("checked", $(this).prop("checked"));
                }
            });
        }
    });
};
$("body").scrollTop(0);
//Show or hide Assets filter or Instruments filter
let assetsHide = true;
function ShowAssetsFilter() {
    $("#instrumentsFilterDivId").hide();
    $("#assetsFilterDivId").show();
    assetsHide = false;
}
function ShowInstrumentsFilter() {
    $("#instrumentsFilterDivId").show();
    $("#assetsFilterDivId").hide();
    assetsHide = false;
}
let calendarHide = true;
function ShowCalendar() {
    $("#eventsList").hide();
    $("#CalendarDivId").show();
    calendarHide = false;
}
function ShowEvents() {
    $("#CalendarDivId").hide();
    $("#eventsList").show();
    calendarHide = true;
    $("#eventtable").DataTable();
}
/*show or hide search button on filter bar*/
let isOpen = false;
function ShowButtons() {
    if (isOpen === false) {
        $("#filterButtonId").hide();
        $("#clearEventsId1").hide();
        $("#datepicker1").val("");
        $("#datepicker2").val("");
        $("#eventtypesId").val("");
        isOpen = true;
    } else {
        $("#filterButtonId").show();
        $("#clearEventsId1").show();
        isOpen = false;
    }
}

//get Instruments and create checkbox list
function GetInstruments() {
    GetInstrumentsRequest().then(function (value) {
        console.log(value);
        let data = JSON.parse(value);
        let jsonInstruments = data.Item1;
        console.log(data);
        let tr = document.createElement("tr");
        tr.setAttribute("style", "width:280px; height:50px;");
        $("#instrument-check-list-box").append(tr);
        let td1 = document.createElement("td");
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        tr.appendChild(td2);
        for (let key in data.Item2) {
            let instrumentsDiv5 = document.createElement("div");
            instrumentsDiv5.setAttribute("class", "box-body well");
            instrumentsDiv5.setAttribute("id", `instrumentsBox${key}Id`);
            instrumentsDiv5.setAttribute("style", "max-height: 70px; width:200px; overflow-x: hidden;");
            td2.appendChild(instrumentsDiv5);
            let instrumentsTable = document.createElement("table");
            instrumentsTable.setAttribute("id", `instrumentsTablex${key}Id`);
            instrumentsDiv5.appendChild(instrumentsTable);
            let instrumentstr = document.createElement("tr");
            instrumentstr.setAttribute("style", "width:180px;");
            instrumentsTable.append(instrumentstr);
            let instrumentstd1 = document.createElement("td");
            instrumentstr.appendChild(instrumentstd1);
            let instrumentstd2 = document.createElement("td");
            instrumentstr.appendChild(instrumentstd2);
            let instrumentsinput = document.createElement("input");
            instrumentsinput.setAttribute("type", "checkbox");
            instrumentsinput.setAttribute("class", "instrument-checkBoxClass");
            instrumentsinput.setAttribute("name", "instruments");
            instrumentsinput.setAttribute("value", key);
            instrumentsinput.setAttribute("id", `instrument-checkbox${data.Item2[key]}${key}`);
            instrumentstd1.appendChild(instrumentsinput);
            instrumentstd2.textContent = data.Item2[key];
            for (let j = 0; j < jsonInstruments.length; j++) {
                if (jsonInstruments[j] == key) {
                    instrumentsinput.checked = true;
                }
            }
        }
    });
};

let assetsFilterOpened = false;
function AssetPlusOrMinus() {
    if (!assetsFilterOpened) {
        GetAssets();
        assetsFilterOpened = true;
    }
}

let instrumentsFilterOpened = false;
function InstrumentPlusOrMinus() {
    if (!instrumentsFilterOpened) {
        GetInstruments();
        instrumentsFilterOpened = true;
    }
}

function ClearFilter(result) {
    console.log(result);
    $("#calendarLinkId").click();
}

function DeleteEvent(x) {
    $("#deletemodal").modal("show");
    $("#deleteEntity")
        .click(function () {
            $("#deleteloader").show();
            const str = "/Event/Delete";
            CallAjax(str, x);
        });
}

//set more functionality to fullcalendar js 
$(".fc-next-button ").click(function() {
    //get events by month
    console.log("next");
    console.log($("#calendar").fullCalendar().intervalStart);

    console.log($("#calendar").fullCalendar().intervalEnd);
});
$(".fc-prev-button fc-button fc-state-").click(function() {
    //get events by month
    console.log("prev");
    console.log($('#calendar').fullCalendar().intervalStart);

    console.log($('#calendar').fullCalendar().intervalEnd);
});
