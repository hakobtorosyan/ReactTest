class InstrumentsContainer {
    constructor(Container) {
        //this.Leverage = Container.Leverage;
        this.ContainerId = Container.ContainerId;
        this.InstrumentId = Container.InstrumentId;
        this.AssetTypeName = Container.AssetTypeName;
        this.InstrumentName = Container.InstrumentName;
        
        //this.EffectiveDate = new Date(parseInt(Container.EffectiveDate.substr(6)));
        this.TabIndex = -1;
        //this.History = [];
        //if (Container.History != null || Container.History.length>0) {
        //    for (let i = 0; i < Container.History.length; i++) {
        //        this.History.push(new History(Container.History[i]));
        //    }
        //}
        //if (this.ContainerId > 0) {
        //    this.EffectiveDate = Container.EffectiveDate;
        //    this.Leverage = Container.Leverage;
        //} else {
        //    this.EffectiveDate = "";
        //    this.Leverage = "";
        //}
        this.EffectiveDate = "";
        this.Leverage = "";
        this.isChecked = Container.Checked;
    }
    /*One Container*/
}

class History {
    constructor(history) {
        this.InstrumentId = history.InstrumentId;
        this.ContainerId = history.ContainerId;
        this.HistoricalDate = history.HistoricalDate;
        this.HistoricalLeverage = history.HistoricalLeverage;
    }
}

class Containers {
    constructor(listofContainer) {
        this.TabNames = [];
        this.Containers = [];
        this.TableDefinition = [];
        this.CurrentTable = [];

        if (listofContainer != null) {
            //console.log(listofContainer);
            let list1 = JSON.parse(listofContainer);
            let list2 = JSON.stringify(listofContainer);
            //console.log(list1);
            //console.log(list2);
            for (var key in list1) {
                this.TabNames.push(key);
                let list = list1[key];
                let emptyList = [];
                //console.log(list1[key]);
                for (var j = 0; j < list.length; j++) {
                    let container = new InstrumentsContainer(list[j]);
                    emptyList.push(container);
                }
                this.Containers.push(emptyList);
            }
            //console.log(this.Containers);
        }

        console.log(this.TabNames);

        //for (let i = 0; i < listofContainer.length; i++) {
        //    let obj = new InstrumentsContainer(listofContainer[i]);
        //    if (this.TabNames.indexOf(obj.AssetTypeName) < 0) {
        //        this.TabNames.push(obj.AssetTypeName);
        //        obj.TabIndex = this.TabNames.indexOf(obj.AssetTypeName);

        //        this.Containers.push([]);
        //        this.Containers[obj.TabIndex].push(obj);
        //    } else {
        //        obj.TabIndex = this.TabNames.indexOf(obj.AssetTypeName);
        //        this.Containers[obj.TabIndex].push(obj);
        //    }
        //}
    }

    //Print() {
    //    for (let i = 0; i < this.Containers.length; i++) {
    //        for (let j = 0; j < this.Containers.length; j++) {
    //            console.log(this.Containers[i][j]);
    //        }
    //    }
    //}
    //GetHistoryData(Histories, containerId) {
    //    //console.log("GeHistoryData--------------------------------------Start");

    //    let rows = "";
    //    let dateColumn = "";
    //    let LeverageColumn = "";
    //    var buttonColumn = "";
    //    if (Histories != null) {
    //        for (let i = 0; i < Histories.length; i++) {
    //            dateColumn = "<td>" + Histories[i].HistoricalDate + "</td>";
    //            LeverageColumn = "<td>" + Histories[i].HistoricalLeverage + "</td>";
    //            buttonColumn = "<td><button  id='deleteHistory" + Histories[i].ContainerId + "' class='btn btn-sm btn-info btn-flat' onclick='DeleteHistory(" + Histories[i].ContainerId + ")'>Delete</button></td>";
    //            rows += "<tr id='row" + containerId + "'>" + dateColumn + LeverageColumn + buttonColumn + "</tr>";
    //        }
    //    }
    //    //console.log(rows);
    //    let table = "<table id='historytable" + containerId + "' class='table  historyTable'  style='padding-left:50px;' cellpadding='5' cellspacing='0' border='0'><thead><tr><th>Date</th><th>Leverage</th><th>Delete History</th></tr></thead><tbody class='historytablebody' id='historyDataPlace" + containerId + "'></tbody>" +
    //       rows + "</table>";
    //    //console.log("GeHistoryData--------------------------------End");

    //    return table;
    //}

    //Findhistory(containerId) {
    //    var result = $.grep(this.Containers, function (e) { return e.ContainerId == containerId; });
    //    return result;
    //}

    ToDataTable() {
        console.log("ToDataTable start");

        let rowarray = [];
        let RowCollection = "";
        //let tableDefParams = [];
        for (let i = 0; i < this.Containers.length; i++) {
            for (let j = 0; j < this.Containers[i].length; j++) {
                let name = this.Containers[i][j].InstrumentName;
                let leverage = this.Containers[i][j].Leverage;
                let instrumentId = this.Containers[i][j].InstrumentId;
                //let tabindex = this.Containers[i][j].TabIndex;
                let isChecked = this.Containers[i][j].isChecked;
                let effectivedate = this.Containers[i][j].EffectiveDate;
                //console.log(name + "," + instrument.Id + "," + leverage + "," + effectivedate + "," + isChecked);
                let instrumentNameColumn = "";
                let checkboxColumn = "";
                let leverageColumn = "";
                let pickerColumn = "";
                //let detailcontrole = "";
                //let history = this.Containers[i][j].History;
                //let tableDefParam;
                //if (containerId > 0) {
                //    //tableDefParam = 0;
                //    //let historyString = "";
                //    //if (history !== null && history !== undefined) {
                //    //    historyString = this.GetHistoryData(history, instrumentId);
                //    //    console.log("History is not null or undefined");
                //    //} else {
                //    //    console.log("History is null");
                //    //}

                //    //let historyobj = { HistorySring: historyString, ContainerId: containerId, TableId: i };
                //    //let historyObjString = JSON.stringify(historyString);
                //    //console.log(historyobj);
                //    //detailcontrole = "<td class='details-control' onclick='OpenHistoryDiv(" + historyString + ")' id='historyColumn" + containerId + "'></td>";
                //    //detailcontrole = "<td class='details-control'id='historyColumn" + containerId + "' onclick='GetHistory"+containerId+"'></td>";
                //    instrumentNameColumn = "<td>" + name + "</td>";
                //    checkboxColumn = "<td><div class='form-group'><input type='checkbox' checked   style='width:20px;height:20px;'" +
                //    "  name='instruments' value='" + instrumentId + "' id='checkbox" + instrumentId + "' onchange='CheckboxChange(this)' /></div></td>";
                //    leverageColumn = "<td><input type='text' id='leverage" + instrumentId + "' name='leverage' class='form-control' value='" + leverage + "' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
                //    pickerColumn = "<td><input type='text' name='dates' value='" + effectivedate + "' class='form-control picker' id='date" + instrumentId + "'  /> </td>";
                //} else 
                if (isChecked) {
                    console.log(isChecked);
                    //tableDefParam = 1;
                    //detailcontrole = "<td class='details-control-close'></td>";
                    instrumentNameColumn = "<td>" + name + "</td>";
                    checkboxColumn = "<td><div class='form-group'><input type='checkbox'  checked   style='width:20px;height:20px;'" +
                    "  name='instruments' value='" + instrumentId + "' id='checkbox" + instrumentId + "' onchange='CheckboxChange(this)' /></div></td>";
                    leverageColumn = "<td><input type='text'  id='leverage" + instrumentId + "' name='leverage' class='form-control' value='" + leverage + "' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
                    pickerColumn = "<td><input type='text'  name='dates' value='" + effectivedate + "' class='form-control picker' id='date" + instrumentId + "'  /> </td>";
                } else {
                    //detailcontrole = "<td class='details-control-close'></td>";
                    //tableDefParam = 1;
                    instrumentNameColumn = "<td>" + name + "</td>";
                    checkboxColumn = "<td><div class='form-group'><input type='checkbox'     style='width:20px;height:20px;'" +
                    "  name='instruments' value='" + instrumentId + "'  id='checkbox" + instrumentId + "' onchange='CheckboxChange(this)' /></div></td>";
                    leverageColumn = "<td><input type='text' disabled  id='leverage" + instrumentId + "' name='leverage' class='form-control' value='" + leverage + "' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
                    pickerColumn = "<td><input type='text' disabled  name='dates' value='" + effectivedate + "' class='form-control picker' id='date" + instrumentId + "'  /> </td>";
                }
                //tableDefParams.push(tableDefParam);

                //if (tableDefParams.indexOf(0) >= 0 || tableDefParams.indexOf(2) >= 0) {

                //    RowCollection += "<tr >" +detailcontrole+ instrumentNameColumn + checkboxColumn + leverageColumn + pickerColumn + "</tr>";
                //} else {
                //    RowCollection += "<tr >" + instrumentNameColumn + checkboxColumn + leverageColumn + pickerColumn + "</tr>";

                //}
                RowCollection += "<tr >" + instrumentNameColumn + checkboxColumn + pickerColumn+leverageColumn  + "</tr>";

            }
            //let tableDefGlobalParam = false;
            //if (tableDefParams.indexOf(0) >= 0 || tableDefParams.indexOf(2) >= 0) {

            //    tableDefGlobalParam = true;
            //}

            //this.TableDefinition.push(tableDefGlobalParam);

            rowarray.push(RowCollection);

            RowCollection = "";
        }
        console.log("ToDataTable end");
        console.log(RowCollection);
        return rowarray;
    }

   
    //GetHistory(containerId) {
    //   var obj= Findhistory(containerId);
    //}
   

    ToTabs(activeTabIndex, headerplacement, contentplacement) {
        console.log("ToTabs start");

        //try {
            let tabs = [];
            let tabcontent = this.ToDataTable();
            let tab = "";
            var tables = [];
            let table = "";
            let navtabs = [];
            let li = "";
            //for (var k = 0; k < this.TableDefinition.length; k++) {
            //    console.log(this.TableDefinition[k]);
            //}
            for (let i = 0; i < this.TabNames.length; i++) {
                if (this.TableDefinition.indexOf(true)>=0) {
                    table = "<div style='height:300px;overflow-x:visible;overflow-y:visible' ><table id='dtable" + i + "' class='table  mytable'><thead><tr><th>Open history</th><th>Instrument</th><th>Check</th><th>Date</th><th>Leverage</th></tr></thead><tbody class='tablebody' id='instrumentsplace" + i + "'></tbody></table></div>";
                } else {
                    table = "<div style='height:300px;overflow-x:visible;overflow-y:visible' ><table id='dtable" + i + "' class='table  mytable'><thead><tr><th>Instrument</th><th>Check</th><th>Date</th><th>Leverage</th></tr></thead><tbody class='tablebody' id='instrumentsplace" + i + "'></tbody></table></div>";
                }
                if (i === activeTabIndex) {
                    tab = "<div class='tab-pane active'  id='tab" + i + "'></div>";
                    li = "  <li class='active'><a class='mytab' href='#tab" + i + "' data-toggle='tab'>" + this.TabNames[i] + "</a></li>";
                } else {
                    tab = "<div class='tab-pane'  id='tab" + i + "'></div>";
                    li = "  <li><a class='mytab' href='#tab" + i + "' data-toggle='tab'>" + this.TabNames[i] + "</a></li>";
                }
                navtabs.push(li);
                tabs.push(tab);
                tables.push(table);
            }

            headerplacement.children().remove();
            contentplacement.children().remove();
            for (let j = 0; j < this.TabNames.length; j++) {
                headerplacement.append($(navtabs[j]));
                contentplacement.append($(tabs[j]));
                $("#tab" + j).append($(tables[j]));
                $("#instrumentsplace" + j).append(tabcontent[j]);
            }
            //for (var k = 0; k < this.TableDefinition.length; k++) {
            //    let table;
            //if (this.TableDefinition[k]==true) {
            //    table = $('#dtable' + k).DataTable({
            //        "columns": [
            //   {
            //       "className": 'details-control',
            //       //"orderable":      false,
            //       "data": null,
            //       "defaultContent": ''
            //   }],
            //        "paging": false,
            //        "bSort": true,
            //        //"lengthChange": false,
            //        "searching": true,
            //        "info": false,
            //        //"autoWidth": false,
            //        //"responsive": true,
            //        "scrollY": "200px",
            //        "scrollCollapse": true,
            //        "fixedHeader": true,
            //        "columnDefs": [
            //            { orderable: false, targets: [0] }
            //        ]
            //    });
            //} else {
            //    table = $('#dtable' + j).DataTable({
            //        "paging": false,
            //        //"lengthChange": false,
            //        "searching": true,
            //        "info": false,
            //        //"autoWidth": false,
            //        //"responsive": true,
            //        "scrollY": "200px",
            //        "scrollCollapse": true,
            //        "fixedHeader": true,
            //        "columnDefs": [
            //            { orderable: false, targets: [0] }
            //            //{ orderable: false, targets: [2] },
            //            //{ orderable: false, targets: [3] }]
            //        ]
            //    });
            //}
            //    this.CurrentTable.push(table);
            //}

            console.log("ToTabs end");

         
           
          
        //} catch (e) {
        //    console.log(e.message);
        //} 
    }

     
}




//function Contains(Array, element) {
//    for (var i = 0; i < Array.length; i++) {
//        if (Array[i]===element) {
//            return true;
//        } return false;
//    }
//}
function CheckboxChange(obj) {
    try {
        var id = $(obj).val();
        if (obj.checked) {
            $("#date" + id).removeAttr("disabled");
            $("#leverage" + id).removeAttr("disabled");
            $("#checkBoxContainerId" + id).removeAttr("disabled");
        }
        else {
            $("#date" + id).attr("disabled", true);
            $("#leverage" + id).attr("disabled", true);
            $("#checkBoxContainerId" + id).attr("disabled", true);
            console.log($("#checkBoxContainerId" + id).prop("disabled"));
        }

    } catch (e) {
        console.log(e.Message);
    }
}
