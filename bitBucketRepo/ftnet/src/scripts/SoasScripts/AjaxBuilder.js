class AjaxBuilder {
    //GenerateAjax(data, Url, SuccessFunction) {
    //    $.ajax({
    //        type: 'POST',
    //        dataType: "json",
    //        //contentType: 'application/json; charset=utf-8',
    //        data: data,
    //        url: Url,
    //        success: SuccessFunction
    //    });
    //}

    GenerateAjax(data, Url, SuccessFunction, BeforeSendFunction, CompleteFunction) {
        $.ajax({
            type: 'POST',
            dataType: "json",
            //contentType: 'application/json; charset=utf-8',
            data: data,
            url: Url,
            beforeSend:BeforeSendFunction, 
            success: SuccessFunction,
            complete: CompleteFunction 
        });
    }
}