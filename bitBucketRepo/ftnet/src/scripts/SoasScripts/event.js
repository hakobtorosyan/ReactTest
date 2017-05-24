$(function () {
    $("#startdate").datetimepicker();
    $("#enddate").datetimepicker();
    $("#endeventdate").datetimepicker();
    $("#eventendbydate").datetimepicker();
    $(".colorpicker").colorpicker();
});

function DisableField() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].prop("disabled", true);
        arguments[i].prop("checked", true);
    }
}

$(document).ready(function() {
    $('#addnewevent')
    .on('hide.bs.modal',
        function () {
            console.log("hidden");
            $("#erroreventspan").hide();
            $("#inserteventjson").html("");
            $(this).find('form')[0].reset();
            $("#eventtypes")
                .select2({
                    placeholder: "Select a State",
                    allowClear: true
                });
            $("#eventpriority")
                .select2({
                    placeholder: "Select a State",
                    allowClear: true
                });
            $("#eventpriority").select2("val", "");
            $("#assets")
              .select2({
                  placeholder: "Select a State",
                  allowClear: true
              });

            $("#periodicevent").prop("checked", false);
            HidePeriodicEventBlock();
        });



    $('#updateevent')
.on('hide.bs.modal',
    function () {
        $("#updateeventloader").hide();
        $("#updateeventspan").hide();
        $("#updateeventjson").html("");
        $(this).find('form')[0].reset();

        //$("#eventtypes")
        //    .select2({
        //        placeholder: "Select a State",
        //        allowClear: true
        //    });
        //$("#eventpriority")
        //    .select2({
        //        placeholder: "Select a State",
        //        allowClear: true
        //    });
        //$("#eventpriority").select2("val", "");
        //$("#assets")
        //  .select2({
        //      placeholder: "Select a State",
        //      allowClear: true
        //  });

        $("#periodicevent").prop("checked", false);
    });
});


function HidePeriodicEventBlock() {
    $("#periodiceventblock").hide();
    $("#periodiceventtype" + ' option[value="' + " " + '"]').prop("selected", true);
    $("#interval" + ' option[value="' + 1 + '"]').prop("selected", true);
    $("#daytype").hide();
    $("#weektype").hide();
    $(".weektypecheckbox").prop("checked", false);
    $("#monthtype").hide();
    $("#dayofmonth").prop("checked", true);
    $("#setdayofmonth").hide();
    $("#checkweek" + ' option[value="' + 0 + '"]').prop("selected", true);
    $("#weekofmonth" + ' option[value="' + 0 + '"]').prop("selected", true);

    $("#typebycount").prop("checked", true);
    $("#eventendbycount").prop("disabled", false);
    $("#eventendbycount").val(35);

   
    $('#eventtags').tagsinput('removeAll');
    $("#eventendbydate").val("");
    $("#eventendbydate").prop("disabled", true);
    //$("#eventendbycount").val(35);
    //$("#yeartype").hide();


}

function SetupdateScheduleEnd() {
    if ($("#updatetypebycount").is(":checked")) {
        console.log("date:disable");
        $("#updateeventendbycount").prop("disabled", false);
        $("#updateeventendbydate").prop("disabled", true);
    }

    if ($("#updatetypebydate").is(":checked")) {
        console.log("count:disable");
        $("#updateeventendbycount").prop("disabled", true);
        $("#updateeventendbydate").prop("disabled", false);
    }
}

function Append() {
    //console.log($("#itemdescription").html());
    $("#rssdescriptioninevent").html($("#itemdescription").html());
}

/*Describe end of schedule -by count and by date*/
function SetscheduleEnd() {
    if ($("#typebycount").is(":checked")) {
        console.log("date:disable");
        $("#eventendbycount").prop("disabled", false);
        $("#eventendbydate").prop("disabled", true);
    }

    if ($("#typebydate").is(":checked")) {
        console.log("count:disable");
        $("#eventendbycount").prop("disabled", true);
        $("#eventendbydate").prop("disabled", false);
    }
}

/**
 * /
 * enable all inputs in periodic event div when checked periodic event checkbox */
function EnablePeriodicEvents() {
    $(".weektypecheckbox").prop("disabled", false);
    $(".weektypecheckbox").prop("checked", false);
    $("#typebycount").prop("checked", true);
    $("#eventendbydate").prop("disabled", true);
    $("#eventendbycount").prop("disabled", false);
    $("#interval").prop("disabled", false);
    $("#periodiceventtype").prop("disabled", false);
    $("#interval").val("1");
    $("#periodiceventtype").val($("#periodiceventtype option:first").val());
    $("#eventendbydate").val("");
    $("#eventendbycount").val("35");
}

function EnableUpdatePeriodicEvents() {
    $(".uweektypecheckbox").prop("disabled", false);
    $(".uweektypecheckbox").prop("checked", false);
    $("#updatetypebycount").prop("checked", true);
    $("#updateeventendbydate").prop("disabled", true);
    $("#updateeventendbycount").prop("disabled", false);
    $("#updateinterval").prop("disabled", false);
    $("#updateperiodiceventtype").prop("disabled", false);
    //$("#updateinterval").val("1");
    //$("#updateperiodiceventtype").val($("#periodiceventtype option:first").val());
    $("#updateeventendbydate").val("");
    $("#updateeventendbycount").val("35");
}

/**
 * /
disable all inputs that enabled when clicing on periodic event */
function DisablePeriodicEvents() {
    //$("#periodicevent :input").prop("disabled", true);
    $("#periodiceventtype").prop("disabled", true);
    $("#eventendbydate").prop("disabled", true);
    $("#eventendbycount").prop("disabled", true);
    $("#interval").prop("disabled", true);
    $(".weektypecheckbox").prop("disabled", true);
    $("#monthtype").hide();
    $("#weektype").hide();
}

function DisableUpdatePeriodicEvents() {
    //$("#periodicevent :input").prop("disabled", true);
    $("#updateperiodiceventtype").prop("disabled", true);
    $("#updateeventendbydate").prop("disabled", true);
    $("#updateeventendbycount").prop("disabled", true);
    $("#updateinterval").prop("disabled", true);
    $(".uweektypecheckbox").prop("disabled", true);
    $("#umonthtype").hide();
    $("#uweektype").hide();
}
/**
 * /
 * calls when click on periodic event checkbox => open div for periodic events */
function PeriodicEvent() {
    if ($("#periodicevent").is(":checked")) {
        $("#periodiceventblock").slideDown();
        EnablePeriodicEvents();
        $("#periodiceventtype")
            .select2({
                placeholder: "Select a State"
            });
    } else {
        DisablePeriodicEvents();
        $("#periodiceventblock").slideUp();
    }
}

function UpdatePeriodicEvent() {
    if ($("#updateperiodicevent").is(":checked")) {
        $("#updateperiodiceventblock").slideDown();
        EnableUpdatePeriodicEvents();
        //$("#periodiceventtype")
        //    .select2({
        //        placeholder: "Select a State",
        //    });
    } else {
        DisableUpdatePeriodicEvents();
        $("#updateperiodiceventblock").slideUp();
    }
}

/**
 * /
 * show div for every type of periodic event => for dar/week/month/year
 */
function ShowDiv() {
    if ($("#periodiceventtype").find(":selected").text() === "Month") {
        $("#monthtype").slideDown();
        $("#weektype").hide();
    }

    if ($("#periodiceventtype").find(":selected").text() === "Week") {
        $("#weektype").slideDown();
        $("#monthtype").hide();
    }

    if ($("#periodiceventtype").find(":selected").text() === "Day" || $("#periodiceventtype").find(":selected").text() === "Year") {
        $("#weektype").slideUp();
        $("#monthtype").slideUp();
    }
};

function ShowUpdateDiv() {
    if ($("#updateperiodiceventtype").find(":selected").text() === "Month") {
        $("#umonthtype").slideDown();
        $("#uweektype").hide();
    }

    if ($("#updateperiodiceventtype").find(":selected").text() === "Week") {
        $("#uweektype").slideDown();
        $("#umonthtype").hide();
    }

    if ($("#updateperiodiceventtype").find(":selected").text() === "Day" || $("#periodiceventtype").find(":selected").text() === "Year") {
        $("#uweektype").slideUp();
        $("#umonthtype").slideUp();
    }
};
/**
 * /
opens in monthtype block when clicking on dayofweek */
function SetWeekOrMonth() {
    if ($("#dayofmonth").is(":checked")) {
        $("#setdayofmonth").slideUp();
        $("#checkweek").prop("disabled", true);
    }

    if ($("#dayofweek").is(":checked")) {
        $("#setdayofmonth").slideDown();
        $("#checkweek").prop("disabled", false);
        $("#checkweek").val($("#checkweek option:first").val());
    }
};

function SetUpdateWeekOrMonth() {
    if ($("#updatedayofmonth").is(":checked")) {
        $("#updatesetdayofmonth").slideUp();
        $("#updatecheckweek").prop("disabled", true);
    }

    if ($("#updatedayofweek").is(":checked")) {
        $("#updatesetdayofmonth").slideDown();
        $("#updatecheckweek").prop("disabled", false);
        $("#updatecheckweek").val($("#updatecheckweek option:first").val());
    }
};
/**
 * /
 *insrt event
 */
function InsertEventRequest() {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Event/GetDropDowns";
        request.open("POST", url);
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

function UpdateEventRequest(id) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Event/GetEvent";
        request.open("POST", url);
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
        request.send(JSON.stringify({Id:id}));
    });
}

function InsertExistingEventRequest(rsseventId) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Event/GetExistingEvents";
        console.log("InsertExistingEventRequest");
        request.open("POST", url);
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
        request.send(rsseventId);
    });
}


function InsertEvent(x) {

    console.log("InsertEvent");
    $("#addnewevent").modal("show");
    $("#eventendbydate").prop("disabled", true);

    const select1 = $("#eventtypes");
    const select2 = $("#eventpriority");
    const select3 = $("#assets");
    select1.children().remove();
    select2.children().remove();
    select3.children().remove();

    InsertEventRequest(1).then(function (value) {
        const result = JSON.parse(value);
            if (result.Types != null) {
                for (let i = 0; i < result.Types.length; i++) {
                    select1.append($("<option></option>").val(result.Types[i].Id).html(result.Types[i].Name));
                }
            }
            select2.append($("<option></option>").val("").html(""));

            if (result.Priorities != null) {
                for (let i = 0; i < result.Priorities.length; i++) {
                    select2.append($("<option></option>").val(result.Priorities[i].Id).html(result.Priorities[i].Name));
                }
            }
            $("#rssItemId").val(x).html(x);
            if (result.Assets != null) {
                for (let i = 0; i < result.Assets.length; i++) {
                    select3.append($("<option></option>").val(result.Assets[i].Id).html(result.Assets[i].Name));
                }
            }
    });
    Append();
    //$("#rssdescriptioninevent").height($("#eventcontentblock").height());
};
function InsertEventSuccess(result) {

    if (result.statusCode === 200) {
        $("#addnewevent").modal("hide");
        $("#tableload").show();
        $("#filterButtonId").click();
        HideModal();
    };
    if (result.statusCode === 400 || result.statusCode === 600) {
        $("#erroreventspan").show();
        $("#inserteventjson").html(result.Message);
    }
};

/**
 * disable whitespace=>not working
 */
$("#eventtags").on({
    keydown: function (e) {
        if (e.which === 32)
            return false;
    },
    change: function () {
        this.value = this.value.replace(/\s/g, "");
    }
});
/**
 * /calls when link rss with existing event and update event
 * @param {} result 
 * @returns {} 
 */
function UpdateEventSuccess(result) {
    if (result.statusCode === 200) {
        $("#updateevent").modal("hide");
        $("#tableload").show();
        $("#filterButtonId").click();
        HideModal();
    }
    if (result.statusCode === 400 || result.statusCode === 600) {
        $("#updateeventspan").show();
        $("#updateeventjson").html(result.Message);
    }
}

function InsertExistingEvent(rsseventId) {
    $("#updateevent").modal("show");
    const select = $("#eventgroupId");
    select.children().remove();

    InsertExistingEventRequest(rsseventId).then(function (value) {
        const result = JSON.parse(value);

            select.append($("<option></option>").val("").html(""));
            $("#rsseventId").val(rsseventId).html(rsseventId);
            if (result.Events != null) {
                for (let i = 0; i < result.Events.length; i++) {
                    select.append($("<option></option>").val(result.Events[i].Id).html(result.Events[i].Title));
                }
            }
    });
}

function UpdateEvent(id) {
    $("#updateevent").modal("show");

    const types = $("#updateeventtypes");
    const priority = $("#updateeventpriority");
    const assets = $("#updateassets");
    const title = $("#updateeventtitle");
    const startdate = $("#updatestartdate");
    const enddate = $("#updateendeventdate");
    const tags = $("#updateeventtags");
    const color = $("#updateeventcolor");
    const description = $("#updateeventdescription");

    types.children().remove();
    priority.children().remove();
    assets.children().remove();
    //const periodiceventtype = $("#updateperiodiceventtype");
    const interval = $("#updateinterval");
    const periodiceventcheckbox = $("#updateperiodicevent");
    let array = [];
    for (var i = 0; i < 7; i++) {
        array.push("#updatedayofweeks" + i);
    }

    let node = {
        PeriodicEventCheckBoxId: "#updateperiodicevent",
        PeriodicEventBlockId: "#updateperiodiceventblock",
        PeriodicEventTypeInputId: "#updateperiodiceventtype",
        IntervalId: "#updateinterval",
        DayTypeBlockId: "#udaytype",
        YearTypeBlockId: "#uyeartype",
        WeekTypeBlockId: "#uweektype",
        DaysofWeekCheckboxId:array,
        MonthTypeBlockId: "#umonthtype",
        MonthRadioBoxId: "#updatedayofmonth",
        WeekRadioBoxId: "#updatedayofweek",
        WeekinMonthBlockId: "#updatesetdayofmonth",
        WeekNumberInMonthSelectId: "#updatecheckweek",
        WeekofMonthSelectId: "#updateweekofmonth",
        EventEndTypebyCountRadioBoxId: "#updatetypebycount",
        EventEndTypebyDateRadioBoxId: "#updatetypebydate",
        EndbyDateInputId: "#updateeventendbydate",
        EndbyCountInputId: "#updateeventendbycount"
    };


    UpdateEventRequest(id).then(function (result) {
        let Result = JSON.parse(result);

        if (Result.statusCode === 200) {
            let builder = new HtmlElementBuilder();
            let eventGroup = JSON.parse(Result.Entity);

            
            $("#updateeventId").val(eventGroup.Id);
            $("#updateendeventdate").val(eventGroup.EndTime).html(eventGroup.EndTime);
            $("#updatestartdate").val(eventGroup.StartTime).html(eventGroup.StartTime);
            builder.AddSimpleData(eventGroup.Color, color);
            builder.AddSimpleData(eventGroup.Description, description);
            builder.AddSimpleData(eventGroup.Title, title);

            if (eventGroup.EventPriority != null) {
                builder.Select2SingleSelectedDropDownBuilder(eventGroup.EventPriority, priority);
            }

            if (eventGroup.EventType != null) {
                for (var i = 0; i < eventGroup.EventType.length; i++) {
                    let s = '<option selected value="' + eventGroup.EventType[i].Id + '">' + eventGroup.EventType[i].Name + '<option>';
                    types.append(s);
                    types.trigger("change");
                }
                //builder.Select2MultipleSelectedDropDownBuilder(eventGroup.EventType, types);
            }
            if (eventGroup.Tags != null) {
                let array = [];
                for (var j = 0; j < eventGroup.Tags.length; j++) {
                    array.push(eventGroup.Tags[j]);
                }
                tags.val(array);
                tags.tagsinput(array);
            }

            if (eventGroup.Shedule != null) {
                let schedule = new Schedule(eventGroup.Shedule);
                let n = new Node(node);
                schedule.SetNode(n);
                //console.log(schedule);
                //console.log(schedule);

            }

            if (Result.Types != null) {
                let typesDict = builder.ReplaceDictionaryToJsObject(Result.Types);
                builder.AddElementsToDropDown(typesDict, types);
            }


            if (Result.Priorities != null) {
                let priorities = builder.ReplaceDictionaryToJsObject(Result.Priorities);
                builder.AddElementsToDropDown(priorities, priority);
            }

            if (Result.Assets != null) {
                let assetsDict = builder.ReplaceDictionaryToJsObject(Result.Assets);
                builder.AddElementsToDropDown(assetsDict, assets);
            }

        } else {
            let Result = JSON.parse(result);
            console.log(Result.Message);
            $("#updateeventspan").show();
            $("#updateeventjson").html(Result.Message);
        }
    });
};
