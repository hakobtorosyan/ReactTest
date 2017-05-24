class HtmlElementBuilder {

    ReplaceDictionaryToJsObject(response) {
        try {
            return JSON.parse(response);

        } catch (e) {
            console.log("exception in ReplaceDictionaryToJsObject function + ex.Message : " + e.Message);
        }
    }

    ReplaceGroupbyList(response) {
        try {
            let arrayofinstrumnets = [];
            let obj, newobj;
            let names = [];
            for (var i = 0; i < response.length; i++) {
                let name = response[i].AssetTypeName;
                obj = { Id: response[i].Id, Name: response[i].Name, Leverage: response[i].Leverage, EffectiveDate: response[i].EffectiveDate , AssetTypeName:response[i].AssetTypeName};
                //newobj = { AssetTypeName: name, Containers:obj }
                names.push(name);
                arrayofinstrumnets.push(obj);
            }
            var newArray = [];
            for (var j = 0; j < arrayofinstrumnets.length; j++) {
                
            }
            return JSON.parse(response);

        } catch (e) {
            console.log("exception in ReplaceDictionaryToJsObject function + ex.Message : " + e.Message);
        }
    }

    AddSimpleData(data, elementID) {
        try {
            elementID.val(data).html(data);

        } catch (e) {
            console.log("AddSimpleData method exception, Message:" + e.message);
        } 
    }

    Select2SingleSelectedDropDownBuilder(data, element) {
        try {
            var selectedstring = '<option selected value="' + data.Id + '">' + data.Name + '<option>';
            element.append(selectedstring);
            element.trigger("change");
        } catch (e) {
            console.log("Select2SingleSelectedDropDownBuilder method exception, Message:" + e.message);
        }
    }


    Select2MultipleSelectedDropDownBuilder(data, element) {
        try {
            for (var key in data) {
                console.log(data[key]);
                let selectedOption = '<option selected value="' + key + '">' + data[key] + '<option>';
                element.append(selectedOption);
                element.trigger("change");
            }
            //for (i = 0; i < data.length; i++) {
            //    var s = '<option selected value="' + data.Id + '">' +data.Name + '<option>';
            //    element.append(s);
            //    element.trigger("change");
            //}
        } catch (e) {
            console.log("Select2MultipleSelectedDropDownBuilder method exception, Message:" + e.message);
        } 
    }

    AddElementsToDropDown(array, select2Id) {
        try {
            for (let key in array) {
                if (array.hasOwnProperty(key)) {
                    select2Id.append($("<option></option>").val(key).html(array[key]));
                }
            }

        } catch (e) {
            console.log(`Exception in AddElementsToDropDown method : ${e.message}`);
        }
    }
}
