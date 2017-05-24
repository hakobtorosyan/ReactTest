class BatHelper {

      CreateInstrumentsTablewithTabs(result, booldata) {
          $(".tab-content").children().remove();
          $("#tabheaders").children().remove();

          let tabs = [];
          var tables = [];
          var tabcontent = [];//content of tab
          let tab = "";
          let table = "";
          let dict = builder.ReplaceDictionaryToJsObject(result.Instruments);
          let firstkey = Object.keys(dict)[0];
          let navtabs = [];
          let names = [];
          let counter = 0;
          let li = "";

          for (var key in dict) {
              names.push(key);
              table = "<div style='height:300px;overflow-x:visible;overflow-y:visible' ><table id='dtable" + counter + "' class='table  mytable'><thead><tr><th> Instrument</th><th> Check</th>" +
             "<th>Leverage</th><th>Date</th></tr</thead><tbody class='tablebody' id='instrumentsplace" + counter + "'></tbody></table></div>";
              if (key === firstkey) {
                  tab = "<div class='tab-pane active'  id='tab" + counter + "'></div>";
                  li = "  <li class='active'><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              } else {
                  tab = "<div class='tab-pane'  id='tab" + counter + "'></div>";
                  li = "  <li><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              }
              navtabs.push(li);
              tabs.push(tab);
              tables.push(table);
              var InstrumentsGroup = dict[key];
              counter++;
              let Row = this.CreateEmptyInstrumentsTable(InstrumentsGroup, booldata, false);
              tabcontent.push(Row);
          }
          CreateTabSHeader(names, firstkey, tabcontentarray, $("#tabheaders"), $(".tab-content"));

          //for (let i = 0; i < navtabs.length; i++) {
          //    $("#tabheaders").append(navtabs[i]);
          //}

          //for (let i = 0; i < tabs.length; i++) {
          //    $(".tab-content").append($(tabs[i]));
          //    $("#tab" + i).append($(tables[i]));
          //    $("#instrumentsplace" + i).append($(tabcontent[i]));
          //}
      }
    /**
     * /
     * @param {} tabsNames string array
     * @param {} firstTab  string
     * @param {} headerplacement  id of nav tab header
     * @param {} contentplacement  placement
     * @returns {} 
     */
      CreateTabSHeader(tabsNames, firstTabName,tabcontentarray,  headerplacement, contentplacement) {
          let tabs = [];
          let tabcontent = [];//content of tab
          let tab = "";
          var tables = [];
          let table = "";
          let navtabs = [];
          let li = "";
          let counter = 0;
          for (var i = 0; i < tabsNames.length; i++) {
              table = "<div style='height:300px;overflow-x:visible;overflow-y:visible' ><table id='dtable" + counter + "' class='table  mytable'><thead><tr><th> Instrument</th><th> Check</th>" +
           "<th>Leverage</th><th>Date</th></tr</thead><tbody class='tablebody' id='instrumentsplace" + counter + "'></tbody></table></div>";
              if (tabsNames[i] === firstTabName) {
                  tab = "<div class='tab-pane active'  id='tab" + counter + "'></div>";
                  li = "  <li class='active'><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              } else {
                  tab = "<div class='tab-pane'  id='tab" + counter + "'></div>";
                  li = "  <li><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              }
              //let Row = this.CreateEmptyInstrumentsTable(InstrumentsGroup, booldata, false);

              navtabs.push(li);
              tabs.push(tab);
              tables.push(table);
              counter++;
          }

          headerplacement.children().remove();
          contentplacement.children().remove();
          for (var j = 0; j < counter; j++) {
              headerplacement.append($(navtabs[j]));
              contentplacement.append($(tabs[j]));
              $("#tab" + j).append($(tables[j]));
              $("#instrumentsplace" + j).append($(tabcontentarray[j]));
          }
      }

    CreateFullInstrumentsTablewithTabs(result, booldata) {
          $(".tab-content").children().remove();
          $("#tabheaders").children().remove();
          let tabs = [];
          var tables = [];
          var tabcontent = [];//content of tab
          let tab = "";
          let table = "";
          let dict = builder.ReplaceDictionaryToJsObject(result.Instruments);
          let firstkey = Object.keys(dict)[0];
          let navtabs = [];
          let names = [];
          let counter = 0;
          let li = "";
          for (var key in dict) {
              names.push(key);
              table = "<div style='height:300px;overflow-x:visible;overflow-y:visible' ><table id='dtable" + counter + "' class='table  mytable'><thead><tr><th> Instrument</th><th> Check</th>" +
             "<th>Leverage</th><th>Date</th></tr</thead><tbody class='tablebody' id='instrumentsplace" + counter + "'></tbody></table></div>";
              if (key === firstkey) {
                  tab = "<div class='tab-pane active'  id='tab" + counter + "'></div>";
                  li = "  <li class='active'><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              } else {
                  tab = "<div class='tab-pane'  id='tab" + counter + "'></div>";
                  li = "  <li><a class='mytab' href='#tab" + counter + "' data-toggle='tab'>" + key + "</a></li>";
              }
              navtabs.push(li);
              tabs.push(tab);
              tables.push(table);
              var InstrumentsGroup = dict[key];
              counter++;
              let Row = this.CreateEmptyInstrumentsTable(result.BrokerAccType.InstrumentLeverages);
              //console.log(result.BrokerAccType.InstrumentLeverages);
              tabcontent.push(Row);
          }

          for (var i = 0; i < result.BrokerAccType.InstrumentLeverages.length; i++) {
              names.push(result.BrokerAccType.InstrumentLeverages[i].AssetTypeName);
              names.filter(function (item, pos) {
                  return names.indexOf(item) === pos;
              });
              //console.log(names);
          }
          for (let i = 0; i < navtabs.length; i++) {
              $("#tabheaders").append(navtabs[i]);
          }

          for (let i = 0; i < tabs.length; i++) {
              $(".tab-content").append($(tabs[i]));
              $("#tab" + i).append($(tables[i]));
              $("#instrumentsplace" + i).append($(tabcontent[i]));
          }
      }

      CreateEmptyInstrumentsTable(content, boolchechedData, boolNameisLink) {
          let RowCollection = "";
          for (var item in content) {
              let name = content[item];
              let instrumentNameColumn = "";
              let checkboxColumn = "";
              let leverageColumn = "";
              let pickerColumn = "";
              if (boolNameisLink) {
                  instrumentNameColumn = "<td><a href='#' onclick='ShowHistory(this)'>" + name + "</a></td>";
              } else {
                  instrumentNameColumn = "<td>" + name + "</td>";
              }

              if (boolchechedData) {
                  checkboxColumn = "<td><div class='form-group'><input type='checkbox' checked   style='width:20px;height:20px;'" +
                "  name='instruments' value='" + item + "' id='checkbox" + item + "' onchange='CheckboxChange(this)' /></div></td>";
                  leverageColumn = "<td><input type='text' id='leverage" + item + "' name='leverage' class='form-control' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
                  pickerColumn = "<td><input type='text' name='dates' class='form-control picker' id='date" + item + "'  /> </td>";

              } else {
                  checkboxColumn = "<td><div class='form-group'><input type='checkbox'    style='width:20px;height:20px;'" +
               "  name='instruments' value='" + item + "' id='checkbox" + item + "' onchange='CheckboxChange(this)' /></div></td>";
                  leverageColumn = "<td><input type='text' id='leverage" + item + "' disabled name='leverage' class='form-control' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
                  pickerColumn = "<td><input type='text' name='dates' class='form-control picker' id='date" + item + "' disabled /> </td>";
              }
              RowCollection += "<tr >" + instrumentNameColumn + checkboxColumn + leverageColumn + pickerColumn + "</tr>";
          }
          return RowCollection;
      }

      CreateFullInstrumentsTable(content) {
          var builder = new HtmlElementBuilder();

          let RowCollection = "";
          for (var i = 0; i < content.length; i++) {
              let name = content[i].Name;
              let instrumentNameColumn = "";
              let checkboxColumn = "";
              let leverageColumn = "";
              let pickerColumn = "";
              //parseInt(result.Source.UpdateTime.substr(6))
              let date = new Date(parseInt(content[i].EffectiveDate.substr(6)));
              //console.log(date);
              //console.log(date);
              instrumentNameColumn = "<td><a href='#' onclick='ShowHistory(this)'>" + name + "</a></td>";
              checkboxColumn = "<td><div class='form-group'><input type='checkbox' checked   style='width:20px;height:20px;'" +
              "  name='instruments' value='" + content[i].Id + "' id='checkbox" + content[i].Id + "' onchange='CheckboxChange(this)' /></div></td>";
              leverageColumn = "<td><input type='text' id='leverage" + content[i].Id + "' name='leverage' class='form-control' value='" + content[i].Leverage + "' onkeypress='return event.charCode >= 46 && event.charCode <= 57'/></td>";
              pickerColumn = "<td><input type='text' name='dates' value='" + date + "' class='form-control picker' id='date" + content[i].Id + "'  /> </td>";
              RowCollection += "<tr >" + instrumentNameColumn + checkboxColumn + leverageColumn + pickerColumn + "</tr>";
          }
          return RowCollection;
      }

      //CheckboxChange(obj) {
      //    try {
      //        var id = $(obj).val();

      //        if (obj.checked) {
      //            $("#date" + id).removeAttr("disabled");
      //            $("#leverage" + id).removeAttr("disabled");
      //        }
      //        else {
      //            $("#date" + id).attr("disabled", true);
      //            $("#leverage" + id).attr("disabled", true);
      //        }

      //    } catch (e) {
      //        console.log(e.Message);
      //    }
      //}

}