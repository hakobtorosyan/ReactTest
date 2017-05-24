class Parent {
    constructor(id, name, parents) {
        this.Id = id;
        this.Name = name;
        this.Parents = parents;
    }
};

function NavBarToggle() {
    document.getElementById("navBarToggleId").click();
}

//Create general Wiki page
function WikiPage(treeBar, treeObj) {
    let id;
    if (treeObj === undefined) {
        id = 0;
    } else id = treeObj.Id;

    GetWikiRequest(id).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            let data = JSON.parse(value);
            if (treeObj === undefined) {
                $("#wikiContentId").empty();
                let mainDiv = document.createElement("div");
                mainDiv.setAttribute("id", "mainDivId");
                $("#wikiContentId").append(mainDiv);

                let insertDiv = document.createElement("div");
                insertDiv.setAttribute("id", "insertDivId");
                mainDiv.appendChild(insertDiv);

                let insertDivTable = document.createElement("table");
                insertDivTable.setAttribute("style", "margin:5px;");
                insertDiv.appendChild(insertDivTable);

                let insertDivTr = document.createElement("tr");
                insertDivTr.setAttribute("id", "insertDivTrId");
                insertDivTable.appendChild(insertDivTr);

                let insertCategoryTd = document.createElement("td");
                insertDivTr.appendChild(insertCategoryTd);

                let insertCategory = document.createElement("button");
                insertCategory.setAttribute("id", "insertCategoryId");
                insertCategory.setAttribute("style", "margin-right:3px;");
                insertCategory.setAttribute("class", "btn btn-info");
                insertCategory.textContent = "Insert Category";
                insertCategory.addEventListener("click", function () { CategoryDropdownModal(); });
                insertCategoryTd.appendChild(insertCategory);

                let insertPageTd = document.createElement("td");
                insertDivTr.appendChild(insertPageTd);

                let insertPage = document.createElement("button");
                insertPage.setAttribute("id", "insertPageId");
                insertPage.setAttribute("class", "btn btn-info");
                insertPage.textContent = "Insert Page";
                insertPage.addEventListener("click", function () { PageDropdownModal(); });
                insertPageTd.appendChild(insertPage);

                let textEditorDiv = document.createElement("div");
                textEditorDiv.setAttribute("class", "row");
                mainDiv.appendChild(textEditorDiv);

                let treeDiv = document.createElement("div");
                treeDiv.setAttribute("class", "col-md-2");
                treeDiv.setAttribute("id", "treeDivId");
                textEditorDiv.appendChild(treeDiv);

                let treeBarUl = document.createElement("ul");
                treeBarUl.setAttribute("class", "treeview");
                treeBarUl.setAttribute("id", "treeBarUlId");
                treeDiv.appendChild(treeBarUl);
                treeBar = treeBarUl;

                let richText = document.createElement("div");
                richText.setAttribute("class", "col-md-10");
                richText.setAttribute("id", "editorId");
                textEditorDiv.appendChild(richText);

                let pathDiv = document.createElement("div");
                pathDiv.setAttribute("id", "pathDivId");
                $("#editorId").append(pathDiv);

                let pathTable = document.createElement("table");
                pathDiv.appendChild(pathTable);

                let pathTr = document.createElement("tr");
                pathTr.setAttribute("id", "pathTrId");
                pathTable.appendChild(pathTr);

                let buttonsDiv = document.createElement("div");
                buttonsDiv.setAttribute("id", "buttonsId");
                buttonsDiv.setAttribute("style", "display:inline;margin:8px");
                $("#editorId").append(buttonsDiv);

                let textArea = document.createElement("div");
                textArea.setAttribute("id", "textareaId");
                $("#editorId").append(textArea);

                let wikiPageDiv = document.createElement("div");
                wikiPageDiv.setAttribute("id", "wikiPageDivId");
                $("#editorId").append(wikiPageDiv);
                //initialize tinymce 
                tinymce.init({
                    height: 900,
                    selector: "#textareaId",
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste code"
                    ],
                    toolbar:
                        "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                    content_css: "//www.tinymce.com/css/codepen.min.css"
                });
                $("#editorId").hide();

                // div for dropdowns
                let dropdownsDiv = document.createElement("div");
                dropdownsDiv.setAttribute("id", "dropdownsId");
                $("#mainDivId").append(dropdownsDiv);

                //create Category Dropdown
                let categoryDropdown = document.createElement("div");
                categoryDropdown.setAttribute("id", "addNewCategoryId");
                categoryDropdown.setAttribute("class", "modal fade");
                categoryDropdown.setAttribute("style", "overflow: auto;");
                categoryDropdown.setAttribute("role", "dialog");
                dropdownsDiv.appendChild(categoryDropdown);

                let categoryModalDialog = document.createElement("div");
                categoryModalDialog.setAttribute("class", "modal-dialog");
                categoryDropdown.appendChild(categoryModalDialog);

                let categoryModalContent = document.createElement("div");
                categoryModalContent.setAttribute("class", "modal-content");
                categoryModalContent.setAttribute("id", "contentId");
                categoryModalDialog.appendChild(categoryModalContent);

                let categoryModalHeader = document.createElement("div");
                categoryModalHeader.setAttribute("class", "modal-header");
                categoryModalContent.appendChild(categoryModalHeader);

                let closeCategoryDropdownsButton = document.createElement("button");
                closeCategoryDropdownsButton.setAttribute("class", "close");
                closeCategoryDropdownsButton.setAttribute("data-dismiss", "modal");
                closeCategoryDropdownsButton.textContent = "x";
                categoryModalHeader.appendChild(closeCategoryDropdownsButton);

                let categoryDropdownsHeaderText = document.createElement("h4");
                categoryDropdownsHeaderText.setAttribute("class", "modal-title");
                categoryDropdownsHeaderText.textContent = "Add new Category";
                categoryDropdownsHeaderText.setAttribute("id", "categoryDropDownsHeaderId");
                categoryModalHeader.appendChild(categoryDropdownsHeaderText);

                let categoryDropdownsBody = document.createElement("div");
                categoryDropdownsBody.setAttribute("class", "modal-body");
                categoryDropdownsBody.setAttribute("id", "categoryDropdownsBodyId");
                categoryModalContent.appendChild(categoryDropdownsBody);

                //create Page Dropdown
                let pageDropdown = document.createElement("div");
                pageDropdown.setAttribute("id", "addNewPageId");
                pageDropdown.setAttribute("class", "modal fade");
                pageDropdown.setAttribute("style", "overflow: auto; backgrund-color:white;");
                pageDropdown.setAttribute("role", "dialog");
                dropdownsDiv.appendChild(pageDropdown);

                let pageModalDialog = document.createElement("div");
                pageModalDialog.setAttribute("class", "modal-dialog");
                pageDropdown.appendChild(pageModalDialog);

                let pageModalContent = document.createElement("div");
                pageModalContent.setAttribute("class", "modal-content");
                pageModalContent.setAttribute("id", "pageContentId");
                pageModalDialog.appendChild(pageModalContent);

                let pageModalHeader = document.createElement("div");
                pageModalHeader.setAttribute("class", "modal-header");
                pageModalContent.appendChild(pageModalHeader);

                let closePageDropdownsButton = document.createElement("button");
                closePageDropdownsButton.setAttribute("class", "close");
                closePageDropdownsButton.setAttribute("data-dismiss", "modal");
                closePageDropdownsButton.textContent = "x";
                pageModalHeader.appendChild(closePageDropdownsButton);

                let pageDropdownsHeaderText = document.createElement("h4");
                pageDropdownsHeaderText.setAttribute("class", "modal-title");
                pageDropdownsHeaderText.setAttribute("id", "pageHeaderTextId");
                pageDropdownsHeaderText.textContent = "Add new Page";
                pageModalHeader.appendChild(pageDropdownsHeaderText);

                let pageDropdownsBody = document.createElement("div");
                pageDropdownsBody.setAttribute("class", "modal-body");
                pageDropdownsBody.setAttribute("id", "pageDropdownsBodyId");
                pageModalContent.appendChild(pageDropdownsBody);

                //Ajax request to get Categories to set dropdowns
                DropdownRequest().then(function (result) {
                    if (result === null) {
                        document.getElementById("wikiId").click();
                    } else {
                        const info = JSON.parse(result);
                        $("#categoryDropdownsBodyId").empty();
                        const firstRow = document.createElement("div");
                        firstRow.setAttribute("class", "row");
                        $("#categoryDropdownsBodyId").append(firstRow);

                        const nameDiv = document.createElement("div");
                        nameDiv.setAttribute("class", "col-md-6");
                        firstRow.appendChild(nameDiv);

                        const nameFormDiv = document.createElement("div");
                        nameFormDiv.setAttribute("class", "form-group has-feedback");
                        nameDiv.appendChild(nameFormDiv);

                        const nameLabel = document.createElement("label");
                        nameLabel.setAttribute("style", "color: black");
                        nameLabel.textContent = "Name";
                        nameFormDiv.appendChild(nameLabel);

                        const nameInput = document.createElement("input");
                        nameInput.setAttribute("type", "text");
                        nameInput.setAttribute("class", "form-control");
                        nameInput.setAttribute("id", "categoryNameId");
                        nameInput.setAttribute("name", "Name");
                        nameFormDiv.appendChild(nameInput);

                        const idInput = document.createElement("input");
                        idInput.setAttribute("type", "text");
                        idInput.setAttribute("class", "form-control");
                        idInput.setAttribute("id", "categoryidId");
                        idInput.setAttribute("name", "Id");
                        nameFormDiv.appendChild(idInput);
                        $("#categoryidId").hide();

                        const parentDiv = document.createElement("div");
                        parentDiv.setAttribute("id", "categoryParentId");
                        parentDiv.setAttribute("class", "col-md-6");
                        firstRow.appendChild(parentDiv);

                        const parentFormDiv = document.createElement("div");
                        parentFormDiv.setAttribute("class", "form-group has-feedback");
                        parentDiv.appendChild(parentFormDiv);

                        const parentLabel = document.createElement("label");
                        parentLabel.setAttribute("style", "color: black");
                        parentLabel.textContent = "Parent Category";
                        parentFormDiv.appendChild(parentLabel);

                        const parentSelect = document.createElement("select");
                        parentSelect.setAttribute("id", "parentCategoryId");
                        parentSelect.setAttribute("name", "Parent");
                        parentSelect.setAttribute("class", "form-control select2");
                        parentSelect.setAttribute("data-placeholder", "Select a State");
                        parentFormDiv.appendChild(parentSelect);

                        const parent = $("#parentCategoryId");
                        if (info.Item1 != null) {
                            for (let i = 0; i < info.Item1.length; i++) {
                                parent.append($("<option></option>").val(info.Item1[i].Id).html(info.Item1[i].Name));
                            }
                        }

                        const categorySecondRow = document.createElement("div");
                        categorySecondRow.setAttribute("class", "row");
                        $("#categoryDropdownsBodyId").append(categorySecondRow);

                        const categoryContentDiv = document.createElement("div");
                        categoryContentDiv.setAttribute("class", "col-md-12");
                        categorySecondRow.appendChild(categoryContentDiv);

                        const categoryContentFormDiv = document.createElement("div");
                        categoryContentFormDiv.setAttribute("class", "form-group has-feedback");
                        categoryContentDiv.appendChild(categoryContentFormDiv);

                        const categoryContentLabel = document.createElement("label");
                        categoryContentLabel.setAttribute("style", "color: black");
                        categoryContentLabel.textContent = "Wiki Page";
                        categoryContentFormDiv.appendChild(categoryContentLabel);

                        const categoryContentTextArea = document.createElement("div");
                        categoryContentTextArea.setAttribute("id", "categoryContentId");
                        categoryContentFormDiv.appendChild(categoryContentTextArea);
                        tinymce.init({
                            height: 350,
                            selector: "#categoryContentId",
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table contextmenu paste code"
                            ],
                            toolbar:
                                "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                            content_css: "//www.tinymce.com/css/codepen.min.css"
                        });
                        let addDiv = document.createElement("div");
                        addDiv.setAttribute("id", "addDivId");
                        addDiv.setAttribute("class", "modal-footer");
                        $("#contentId").append(addDiv);

                        let addButton = document.createElement("button");
                        addButton.setAttribute("type", "submit");
                        addButton.setAttribute("id", "insertButtonId");
                        addButton.setAttribute("class", "btn btn-sm btn-info btn-flat");
                        addButton.addEventListener("click",
                            function() {
                                AddCategory();
                            });
                        addButton.textContent = "Add";
                        addButton.setAttribute("data-dismiss", "modal");
                        addDiv.appendChild(addButton);

                        const cancelButton = document.createElement("button");
                        cancelButton.setAttribute("class", "btn btn-default");
                        cancelButton.setAttribute("data-dismiss", "modal");
                        cancelButton.textContent = "Cancel";
                        addDiv.appendChild(cancelButton);

                        //Create Insert Page Popup
                        $("#pageDropdownsBodyId").empty();
                        const pageFirstRow = document.createElement("div");
                        pageFirstRow.setAttribute("class", "row");
                        $("#pageDropdownsBodyId").append(pageFirstRow);

                        const titleDiv = document.createElement("div");
                        titleDiv.setAttribute("class", "col-md-6");
                        pageFirstRow.appendChild(titleDiv);

                        const titleFormDiv = document.createElement("div");
                        titleFormDiv.setAttribute("class", "form-group has-feedback");
                        titleDiv.appendChild(titleFormDiv);

                        const titleLabel = document.createElement("label");
                        titleLabel.setAttribute("style", "color: black");
                        titleLabel.textContent = "Title";
                        titleFormDiv.appendChild(titleLabel);

                        const titleInput = document.createElement("input");
                        titleInput.setAttribute("type", "text");
                        titleInput.setAttribute("class", "form-control");
                        titleInput.setAttribute("id", "pageTitleId");
                        titleInput.setAttribute("name", "Title");
                        titleFormDiv.appendChild(titleInput);

                        const idInputpage = document.createElement("input");
                        idInputpage.setAttribute("type", "text");
                        idInputpage.setAttribute("class", "form-control");
                        idInputpage.setAttribute("id", "pageidId");
                        idInputpage.setAttribute("name", "Id");
                        titleFormDiv.appendChild(idInputpage);
                        $("#pageidId").hide();

                        const categoriesDiv = document.createElement("div");
                        categoriesDiv.setAttribute("class", "col-md-6");
                        pageFirstRow.appendChild(categoriesDiv);

                        const categoriesFormDiv = document.createElement("div");
                        categoriesFormDiv.setAttribute("class", "form-group has-feedback");
                        categoriesDiv.appendChild(categoriesFormDiv);

                        const categoriesLabel = document.createElement("label");
                        categoriesLabel.setAttribute("style", "color: black");
                        categoriesLabel.textContent = "Categories";
                        categoriesFormDiv.appendChild(categoriesLabel);

                        const categoriesSelect = document.createElement("select");
                        categoriesSelect.setAttribute("id", "pageCategoriesId");
                        categoriesSelect.setAttribute("name", "Categories");
                        categoriesSelect.setAttribute("class", "form-control select2");
                        categoriesSelect.setAttribute("style", "width:100%;");
                        categoriesSelect.setAttribute("multiple", "multiple");
                        categoriesSelect.setAttribute("data-placeholder", "Select a State");
                        categoriesFormDiv.appendChild(categoriesSelect);

                        $("#pageCategoriesId").select2();

                        const secondRow = document.createElement("div");
                        secondRow.setAttribute("class", "row");
                        $("#pageDropdownsBodyId").append(secondRow);

                        const wikiEditorPageDiv = document.createElement("div");
                        wikiEditorPageDiv.setAttribute("class", "col-md-12");
                        secondRow.appendChild(wikiEditorPageDiv);

                        const wikiPageFormDiv = document.createElement("div");
                        wikiPageFormDiv.setAttribute("class", "form-group has-feedback");
                        wikiEditorPageDiv.appendChild(wikiPageFormDiv);

                        const wikiPageLabel = document.createElement("label");
                        wikiPageLabel.setAttribute("style", "color: black");
                        wikiPageLabel.textContent = "Wiki Page";
                        wikiPageFormDiv.appendChild(wikiPageLabel);

                        const pageTextArea = document.createElement("div");
                        pageTextArea.setAttribute("id", "wikiPageId");
                        wikiPageFormDiv.appendChild(pageTextArea);
                        tinymce.init({
                            height: 350,
                            selector: "#wikiPageId",
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table contextmenu paste code"
                            ],
                            toolbar:
                                "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                            content_css: "//www.tinymce.com/css/codepen.min.css"
                        });
                        const categories = $("#pageCategoriesId");

                        if (info.Item1 != null) {
                            for (let i = 0; i < info.Item1.length; i++) {
                                categories.append($("<option></option>").val(info.Item1[i].Id)
                                    .html(info.Item1[i].Name));
                            }
                        }
                        let addPageDiv = document.createElement("div");
                        addPageDiv.setAttribute("class", "modal-footer");
                        addPageDiv.setAttribute("id", "addPageDivId");
                        $("#pageContentId").append(addPageDiv);


                        $("#editPageButtonId").hide();

                        let addPageButton = document.createElement("button");
                        addPageButton.setAttribute("type", "submit");
                        addPageButton.setAttribute("id", "addPageId");
                        addPageButton.setAttribute("class", "btn btn-sm btn-info btn-flat  ");
                        addPageButton.addEventListener("click",
                            function() {
                                AddPage();
                            });
                        addPageButton.textContent = "Add";
                        addPageButton.setAttribute("data-dismiss", "modal");
                        addPageDiv.appendChild(addPageButton);
                        const cancelPageButton = document.createElement("button");
                        cancelPageButton.setAttribute("class", "btn btn-default");
                        cancelPageButton.setAttribute("data-dismiss", "modal");
                        cancelPageButton.textContent = "Cancel";
                        addPageDiv.appendChild(cancelPageButton);
                    }
                });
            }
            if (data.Item1 === undefined) {
                const li = document.createElement("li");
                li.setAttribute("class", "treeview-branch");
                li.setAttribute("name", "category");
                treeBar.appendChild(li);
                let table = document.createElement("table");
                li.appendChild(table);
                let tr1 = document.createElement("tr");
                let tr2 = document.createElement("tr");
                table.appendChild(tr1);
                table.appendChild(tr2);
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                tr1.appendChild(td1);
                tr2.appendChild(td2);
                let ul = document.createElement("ul");
                td2.appendChild(ul);
                let slack = document.createElement("i");
                slack.setAttribute("class", "tree-indicator glyphicon glyphicon-chevron-right");
                slack.addEventListener("click",
                    function (e) {
                        if (this === e.target) {
                            $(this).toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
                            if ($(this).attr("class") === "tree-indicator glyphicon glyphicon-chevron-down") {
                                const treeObject = {};
                                treeObject.Parents = [];
                                treeObject.Parents.push(new Parent(data.Id, data.Name));
                                treeObject.Id = data.Id;
                                WikiPage(ul, treeObject);
                            } else {
                                while (ul.firstChild) {
                                    ul.removeChild(ul.firstChild);
                                }
                            }
                        }
                    });
                td1.prepend(slack);
                let a = document.createElement("a");
                a.setAttribute("href", "#");
                a.addEventListener("click",
                    function () {
                        const treeObject = {};
                        treeObject.Parents = [];
                        treeObject.Parents.push(new Parent(data.Id, data.Name));
                        treeObject.Id = data.Id;
                        ShowCategory(data.Id, treeObject);
                    });
                td1.appendChild(a);
                let strong = document.createElement("strong");
                strong.textContent = data.Name;
                a.appendChild(strong);
            } else {
                for (let treeItem of data.Item1) {
                    const li = document.createElement("li");
                    li.setAttribute("class", "treeview-branch");
                    li.setAttribute("name", "category");
                    treeBar.appendChild(li);
                    let table = document.createElement("table");
                    li.appendChild(table);
                    let tr1 = document.createElement("tr");
                    let tr2 = document.createElement("tr");
                    table.appendChild(tr1);
                    table.appendChild(tr2);
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    tr1.appendChild(td1);
                    tr2.appendChild(td2);
                    let ul = document.createElement("ul");
                    td2.appendChild(ul);
                    let slack = document.createElement("i");
                    slack.setAttribute("class", "tree-indicator glyphicon glyphicon-chevron-right");
                    slack.addEventListener("click",
                        function (e) {
                            if (this === e.target) {
                                $(this).toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
                                if ($(this).attr("class") === "tree-indicator glyphicon glyphicon-chevron-down") {
                                    const treeObject = {};
                                    treeObject.Parents = [];
                                    for (let j = 0; j < treeObj.Parents.length; j++) {
                                        const parent = new Parent();
                                        parent.Id = treeObj.Parents[j].Id;
                                        parent.Name = treeObj.Parents[j].Name;
                                        treeObject.Parents.push(parent);
                                    }
                                    treeObject.Id = treeItem.Id;
                                    treeObject.Parents.push(new Parent(treeItem.Id, treeItem.Name));
                                    WikiPage(ul, treeObject);
                                } else {
                                    while (ul.firstChild) {
                                        ul.removeChild(ul.firstChild);
                                    }
                                }
                            }
                        });
                    td1.prepend(slack);
                    let a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.addEventListener("click",
                        function () {
                            const treeObject = {};
                            treeObject.Parents = [];
                            for (let j = 0; j < treeObj.Parents.length; j++) {
                                const parent = new Parent();
                                parent.Id = treeObj.Parents[j].Id;
                                parent.Name = treeObj.Parents[j].Name;
                                treeObject.Parents.push(parent);
                            }
                            treeObject.Id = treeItem.Id;
                            treeObject.Parents.push(new Parent(treeItem.Id, treeItem.Name));
                            ShowCategory(treeItem.Id, treeObject);
                        });
                    td1.appendChild(a);
                    let strong = document.createElement("strong");
                    strong.textContent = treeItem.Name;
                    a.appendChild(strong);
                }
            }
            if (data.Item2 !== undefined) {
                for (let treeItem of data.Item2) {
                    const li = document.createElement("li");
                    li.setAttribute("name", "page");
                    treeBar.appendChild(li);
                    const a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.addEventListener("click",
                        function () {
                            const treeObject = {};
                            treeObject.Parents = [];
                            for (let j = 0; j < treeObj.Parents.length; j++) {
                                const parent = new Parent();
                                parent.Id = treeObj.Parents[j].Id;
                                parent.Name = treeObj.Parents[j].Name;
                                treeObject.Parents.push(parent);
                            }
                            treeObject.Id = treeItem.Id;
                            treeObject.Parents.push(new Parent(treeItem.Id, treeItem.Title));
                            ShowPage(treeItem.Id, treeObject);
                        });
                    li.appendChild(a);
                    const i = document.createElement("i");
                    i.textContent = treeItem.Title;
                    a.appendChild(i);
                }
            }
        }
    });
};

function GetWikiRequest(id) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/WikiPage";
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
        request.send(JSON.stringify({ Id: id }));
    });
};

function ShowPage(id, parent) {
    $("#editPageButtonId").remove();
    GetPage(id).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            let data = JSON.parse(value);
            $("#editorId").show();
            $("#textareaId").empty();
            const preloader = document.createElement("div");
            preloader.setAttribute("id", "load");
            preloader.setAttribute("class", "preloader");
            preloader.setAttribute("style", "align:center");
            $("#textareaId").append(preloader);
            const preloaderStatus = document.createElement("div");
            preloaderStatus.setAttribute("class", "status");
            preloader.appendChild(preloaderStatus);
            $("#textareaId").empty();
            $("#textareaId").append(data.Item1.Content);
            tinyMCE.activeEditor.setContent(data.Item1.Content);
            $("#buttonsId").empty();
            const editPageButton = document.createElement("button");
            editPageButton.addEventListener("click",
                function() {
                    EditPage(id, parent);
                });
            editPageButton.textContent = "Edit";
            editPageButton.setAttribute("class", "btn btn-primary");
            editPageButton.setAttribute("style", "margin:5px;");
            $("#buttonsId").append(editPageButton);
            const deletePageButton = document.createElement("button");
            deletePageButton.addEventListener("click",
                function() {
                    DeletePage(id);
                });
            deletePageButton.textContent = "Delete";
            deletePageButton.setAttribute("class", "btn btn-primary");
            deletePageButton.setAttribute("style", "background-color:red; margin:5px;");
            $("#buttonsId").append(deletePageButton);
            $("#mceu_27-body").remove();
            $("#mceu_16").hide();
            $("#wikiPageDivId").show();
            $("#wikiPageDivId").empty();
            $("#wikiPageDivId").append(data.Item1.Content);
            $("#pathTrId").empty();
            for (let i = 0; i < parent.Parents.length; i++) {
                const td = document.createElement("td");
                $("#pathTrId").append(td);
                if (i !== parent.Parents.length - 1) {
                    const a = document.createElement("a");
                    a.setAttribute("href", "#");
                    a.addEventListener("click",
                        function() {
                            parent.Parents = parent.Parents.slice(0, i + 1);
                            ShowCategory(parent.Parents[i].Id, parent);
                        });
                    a.textContent = parent.Parents[i].Name;
                    td.appendChild(a);
                } else {
                    td.textContent = parent.Parents[i].Name;
                }
                const slash = document.createElement("td");
                slash.textContent = " / ";
                if (i !== parent.Parents.length - 1)
                    $("#pathTrId").append(slash);
            }
        }
    });
};

function ShowCategory(id, parent) {
    $("#editCategoryButtonId").remove();
    GetCategory(id).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
        let data = JSON.parse(value);
        console.log(data);
        $("#editorId").show();
        $("#textareaId").empty();
        const preloader = document.createElement("div");
        preloader.setAttribute("id", "load");
        preloader.setAttribute("class", "preloader");
        preloader.setAttribute("style", "align:center");
        $("#textareaId").append(preloader);
        const preloaderStatus = document.createElement("div");
        preloaderStatus.setAttribute("class", "status");
        preloader.appendChild(preloaderStatus);
        $("#textareaId").empty();
        $("#textareaId").append(data.Item1.Content);
        tinyMCE.activeEditor.setContent(data.Item1.Content);
        $("#buttonsId").empty();
        const editPageButton = document.createElement("button");
        editPageButton.addEventListener("click",
            function() {
                EditCategory(id,parent);
            });
        editPageButton.textContent = "Edit";
        editPageButton.setAttribute("style", "margin:5px;");
        editPageButton.setAttribute("class", "btn btn-primary");
        $("#buttonsId").append(editPageButton);
        const deletePageButton = document.createElement("button");
        deletePageButton.addEventListener("click",
            function() {
                DeleteCategory(id);
            });
        deletePageButton.textContent = "Delete";
        deletePageButton.setAttribute("class", "btn btn-primary");
        deletePageButton.setAttribute("style", "background-color:red; margin:5px;");
        $("#buttonsId").append(deletePageButton);

        $("#mceu_27-body").remove();
        $("#mceu_16").hide();
        $("#wikiPageDivId").show();
        $("#wikiPageDivId").empty();
        $("#wikiPageDivId").append(data.Item1.Content);
        $("#pathTrId").empty();
            if (parent.Parents.length === 1) {
                const td = document.createElement("td");
                $("#pathTrId").append(td);
                td.textContent = parent.Parents[0].Name;
            } else {
                for (let i = 0; i < parent.Parents.length; i++) {
                    const td = document.createElement("td");
                    $("#pathTrId").append(td);
                    if (i !== parent.Parents.length - 1) {
                        const a = document.createElement("a");
                        a.setAttribute("href", "#");
                        a.addEventListener("click",
                            function() {
                                parent.Parents = parent.Parents.slice(0, i + 1);
                                ShowCategory(parent.Parents[i].Id, parent);
                            });
                        a.textContent = parent.Parents[i].Name;
                        td.appendChild(a);
                    } else {
                        td.textContent = parent.Parents[i].Name;
                    };
                    const slash = document.createElement("td");
                    slash.textContent = " / ";
                    if (i !== parent.Parents.length - 1)
                        $("#pathTrId").append(slash);
                }
            }
        }
    });
};

function EditPage(id,parentList) {
    GetPage(id).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            const data = JSON.parse(value);
            $("#pageHeaderTextId").text("Edit Page");
            document.getElementById("pageTitleId").value = data.Item1.Title;
            document.getElementById("pageidId").value = id;
            $("#pageCategoriesId").empty();
            const categories = $("#pageCategoriesId");
            for (let i = 0; i < data.Item2.length; i++) {
                for (let j = 0; j < data.Item1.Categories.length; j++) {
                    if (data.Item1.Categories[j].Id !== data.Item2[i].Id)
                        categories.append($("<option></option>").val(data.Item2[i].Id).html(data.Item2[i].Name));
                }
            }
            for (let i = 0; i < data.Item1.Categories.length; i++) {
                categories.append($("<option></option>").val(data.Item1.Categories[i].Id)
                    .html(data.Item1.Categories[i].Name).attr("selected", "selected"));
            }
            $("#addPageId").hide();
            $("#editPageButtonId").remove();
            const editPageButton = document.createElement("button");
            editPageButton.setAttribute("type", "submit");
            editPageButton.setAttribute("id", "editPageButtonId");
            editPageButton.setAttribute("class", "btn btn-sm btn-info btn-flat");
            editPageButton.textContent = "Edit";
            editPageButton.setAttribute("data-dismiss", "modal");
            editPageButton.addEventListener("click",
                function() {
                    SendPageEdit(parentList);
                });
            $("#addPageDivId").prepend(editPageButton);
            $("#wikiPageId").empty();
            $("#wikiPageId").append(data.Item1.Content);
            tinyMCE.get("wikiPageId").setContent(data.Item1.Content);           
            $("#addNewPageId").modal("show");
        }
    });
};

function EditCategory(id,parentList) {
    GetCategory(id).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            const data = JSON.parse(value);
            $("#categoryDropDownsHeaderId").text("Edit Category");
            document.getElementById("categoryidId").value = id;
            document.getElementById("categoryNameId").value = data.Item1.Name;
            if (data.Item1.Parent.Id !== 0) {
                $("#categoryParentId").show();
                $("#parentCategoryId").empty();
                const parent = $("#parentCategoryId");
                if (data.Item2 != null) {
                    for (let i = 0; i < data.Item2.length; i++) {
                        if (data.Item2[i].Id !== data.Item1.Parent.Id) {
                            parent.append($("<option></option>").val(data.Item2[i].Id).html(data.Item2[i].Name));
                        }
                    }
                    parent.append($("<option></option>").val(data.Item1.Parent.Id).html(data.Item1.Parent.Name)
                        .attr("selected", "selected").attr("style", "background-color:grey;"));
                }
            } else {
                $("#categoryParentId").hide();
            }
            $("#categoryContentId").append(data.Item1.Content);
            tinyMCE.get("categoryContentId").setContent(data.Item1.Content);
            $("#insertButtonId").hide();
            $("#editCategoryButtonId").remove();
            const editCategoryButton = document.createElement("button");
            editCategoryButton.setAttribute("type", "submit");
            editCategoryButton.setAttribute("id", "editCategoryButtonId");
            editCategoryButton.setAttribute("class", "btn btn-sm btn-info btn-flat");
            editCategoryButton.textContent = "Edit";
            editCategoryButton.setAttribute("data-dismiss", "modal");
            editCategoryButton.addEventListener("click",
                function() {
                    SendCategoryEdit(parentList);
                });
            $("#addDivId").prepend(editCategoryButton);
            $("#editCategoryButtonId").show();
            $("#addNewCategoryId").modal("show");
        }
    });
};

function GetPage(id) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/GetPage";
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
        request.send(JSON.stringify({ Id: id }));
    });
};

function GetCategory(id) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/GetCategory";
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
        request.send(JSON.stringify({ Id: id }));
    });
};

function CategoryDropdownModal() {
    DropdownRequest().then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            const data = JSON.parse(value);
            $("#categoryDropDownsHeaderId").text("Add Category");
            document.getElementById("categoryidId").value = "";
            document.getElementById("categoryNameId").value = "";
            $("#categoryParentId").show();
            $("#parentCategoryId").empty();
            $("#categoryContentId").empty();
            const parent = $("#parentCategoryId");
            if (data.Item1 != null) {
                for (let i = 0; i < data.Item1.length; i++) {
                    parent.append($("<option></option>").val(data.Item1[i].Id).html(data.Item1[i].Name));
                }
            }
            tinyMCE.get("categoryContentId").setContent("");
            $("#editCategoryButtonId").hide();
            $("#insertButtonId").show();
        }
    });
    $("#addNewCategoryId").modal("show");
};

function PageDropdownModal() {
    DropdownRequest().then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            const data = JSON.parse(value);
            $("#pageHeaderTextId").text("Add Page");
            document.getElementById("pageidId").value = "";
            document.getElementById("pageTitleId").value = "";
            $("#wikiPageId").empty();
            $("#pageCategoriesId").empty();
            const categories = $("#pageCategoriesId");
            for (let i = 0; i < data.Item1.length; i++) {
                categories.append($("<option></option>").val(data.Item1[i].Id).html(data.Item1[i].Name));
            }
            $("#editPageButtonId").hide();
            $("#addPageId").show();
            tinyMCE.get("wikiPageId").setContent("");
            $("#addNewPageId").modal("show");
        }
    });
};

function AddCategory() {
    const name = $("#categoryNameId").val();
    const parent = $("#parentCategoryId").val();
    const content = tinyMCE.activeEditor.getContent();
    AddCategoryRequest(0, content, name, parent).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            document.getElementById("wikiId").click();
        }
    });
};
function AddCategoryRequest(id, content, name, parent) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/AddCategory";
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
        request.send(JSON.stringify({ Id: id, Content: content, Name: name, Parent: { Id: parent } }));
    });
};
function EditCategoryRequest(id, content, name, parent) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/EditCategory";
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
        request.send(JSON.stringify({ Id: id, Content: content, Name: name, Parent: { Id: parent } }));
    });
};
function AddPage() {
    const title = $("#pageTitleId").val();
    const categories = $("#pageCategoriesId").val();
    const content = tinyMCE.activeEditor.getContent();
    AddPageRequest(0, content, name, categories, title).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            document.getElementById("wikiId").click();
        }
    });
};
function AddPageRequest(id, content, name, categories, title) {
    const parents = [];
    for (let i = 0; i < categories.length; i++) {
        parents.push(new Parent(categories[i]));
    };
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/AddPage";
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
        request.send(JSON.stringify({ Id: id, Content: content, Title: title, Categories: parents }));
    });
};
function EditPageRequest(id, content, name, categories, title) {
    const parents = [];
    for (let i = 0; i < categories.length; i++) {
        parents.push(new Parent(categories[i]));
    };
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/EditPage";
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
        request.send(JSON.stringify({ Id: id, Content: content, Title: title, Categories: parents }));
    });
};
function DropdownRequest() {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Wiki/GetDropDowns";
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
};
function SendCategoryEdit(parentList) {
    const id = $("#categoryidId").val();
    const name = $("#categoryNameId").val();
    const parent = $("#parentCategoryId").val();
    const content = tinyMCE.activeEditor.getContent();
    EditCategoryRequest(id, content, name, parent).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            ShowCategory(id, parentList);
        }
    });
}
function SendPageEdit(parentList) {
    const id = $("#pageidId").val();
    const title = $("#pageTitleId").val();
    const categories = $("#pageCategoriesId").val();
    const content = tinyMCE.activeEditor.getContent();
    EditPageRequest(id, content, name, categories, title).then(function (value) {
        if (value === null) {
            document.getElementById("wikiId").click();
        } else {
            ShowPage(id, parentList);
        }
    });
}
function DeletePage(id) {
    console.log(id);
    document.getElementById("pageId").value = id;
    $("#pagedeletemodal").modal("show");
}
function DeleteCategory(id) {
    document.getElementById("categoryId").value = id;
    $("#categorydeletemodal").modal("show");
}

function ConfirmDeletePage() {
    $("#pagedeletemodal").modal("hide");
    document.getElementById("wikiId").click();
}

function ConfirmDeleteCategory() {
    $("#categorydeletemodal").modal("hide");
    document.getElementById("wikiId").click();
}

$("#categorydeletemodal").on("hidden.bs.modal", function () {
    $("#categoryerrordiv").html("");
    $(".categorystartdelete").show();
    $(".categoryerrordelete").hide();
    $(".categorysuccessdelete").hide();
    document.getElementById("wikiId").click();
});

$("#pagedeletemodal").on("hidden.bs.modal", function () {
    $("#pageerrordiv").html("");
    $(".pagestartdelete").show();
    $(".pageerrordelete").hide();
    $(".pagesuccessdelete").hide();
    document.getElementById("wikiId").click();
});

function CategoryDeleteSuccess(result) {
    if (result === "Category is not Deleted") {
        $("#categorydeleteloader").hide();
        document.getElementById("categoryerrordiv").innerHTML = result;
        $(".categorystartdelete").hide();
        $(".categoryerrordelete").show();
    }
    else {
        $("#categorydeleteloader").hide();
        $(".categorystartdelete").hide();
        $(".categorysuccessdelete").show();
    }
}
function PageDeleteSuccess(result) {
    if (result === "Page is not Deleted") {
        $("#pagedeleteloader").hide();
        document.getElementById("pageerrordiv").innerHTML = result;
        $(".pagestartdelete").hide();
        $(".pageerrordelete").show();
    }
    else {
        $("#pagedeleteloader").hide();
        $(".pagestartdelete").hide();
        $(".pagesuccessdelete").show();
    }
}