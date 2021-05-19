$(function(){
    let counter = 1;
    let priceHelper = 0;
    let taxHelper = 0;
    let id;
    $.fn.valueStyle = function(value)
    {
        $(this).parent().text(value.toLocaleString("ar-SA"));
    }

    // add btn

    $("#add").on("click", function(){
            $("tbody").append(`<tr id='${counter}'>
            <th><div class="row-parent" id='tr-num-${counter}'>
                #
            </div></th>
            <th id='selection-${counter}'><div class="sleection-parent">
                <select id='selection-value-${counter}'>
                    <option value="">Select...</option>
                    <option >کالا</option>
                    <option >خدمات</option>
                </select>
            </div></th>
            <th id='explain-${counter}'><div class="explanation-parent">
                <input type="text" class="input-explenation" id='explain-value-${counter}'>
            </div></th>
            <th id='unit-${counter}'><div class="unit-parent">
                <input type="text" class="unit-input" id='unit-value-${counter}'>
            </div></th>
            <th id='num-${counter}'><div class="num">
                <input type="number" class="num-input" id='num-value-${counter}'>
            </div></th>
            <th id='price-${counter}'><div class="unit-price-parent">
                <input type="number" class="unit-price-input" id='price-value-${counter}'>
            </div></th>
            <th id='off-${counter}'><div class="off-parent">
                <input type="number" class="off-input" id='off-value-${counter}'>
            </div></th>
            <th id='tax-${counter}'><div class="tax-parent">
                <input type="number" class="tax-input" id='tax-value-${counter}'>
            </div></th>
            <th id='result-${counter}'><div class="result-price-parent">
                <input type="number" placeholder="-" style="outline: none;" readonly>
            </div></th>
            <th id='save-edit-${counter}'><div class="btn-parent">
                    <button class="undo-btn fa fa-undo" id='undo-${counter}'></button>
                    <button class="save-btn fa fa-save" id='save-${counter}'></button>
            </div></th>
            </tr>`)
        counter++;
    })

    // save btn

    $(document).on("click",".fa-save", function(){
        id = $(this).parent().parent().parent().attr("id").replace(/[^0-9]/g, '');
        let selectionValue = $(`#selection-value-${id}`).val();
        let explainValue = $(`#explain-value-${id}`).val();
        let unitValue = $(`#unit-value-${id}`).val();
        let numValue = parseInt($(`#num-value-${id}`).val());
        let priceValue = parseInt($(`#price-value-${id}`).val());
        let offValue = parseInt($(`#off-value-${id}`).val());
        let taxValue = parseInt($(`#tax-value-${id}`).val());
        if (selectionValue == "" || explainValue == "" || unitValue == "" || numValue == 0 || priceValue == 0 || offValue == 0 || taxValue == 0)
        {
            alert("write something !");
        }
        else
        {

            $(this).parent().html(`<button id='trash-${id}' class='trash-btn fa fa-trash m-0'></button>
                                    <button id='undo-${id}' class='fa fa-edit edit-btn'></button>`);
            taxHelper = taxHelper + taxValue;
            $(`#tr-num-${id}`).text(`${id.toLocaleString("ar-SA")}`);
            $(`#tax-value-${id}`).valueStyle(taxValue);
            $(`#off-value-${id}`).valueStyle(offValue);
            $(`#price-value-${id}`).valueStyle(priceValue);
            $(`#num-value-${id}`).valueStyle(numValue);
            $(`#unit-value-${id}`).valueStyle(unitValue);
            $(`#explain-value-${id}`).valueStyle(explainValue);
            $(`#selection-value-${id}`).valueStyle(selectionValue);
            $(`#result-${id}`).html(((numValue*priceValue) + taxValue - offValue).toLocaleString("ar-SA"));
            priceHelper += (numValue*priceValue) + taxValue - offValue;
            $("#price-result").text(`مبلغ کل: ${priceHelper.toLocaleString("ar-SA")} ریال`);
            $("#tax-result").text(`مالیات کل: ${taxHelper.toLocaleString("ar-SA")} ریال`);
        }
    })

    // trash btn

    $(document).on("click", ".fa-trash", function(){
        id = $(this).parent().parent().parent().attr("id").replace(/[^0-9]/g, '');
        let priceMinus = $(`#result-${id}`).text().split("مبلغ کل:");
        let taxMinus = $(`#tax-${id}`).text().split("مبلغ کل:");
        let changeNum = $(this).parent().parent().parent().children().length;
        priceHelper -= parseInt(priceMinus);
        taxHelper -= parseInt(taxMinus);
        if (priceHelper == 0 && taxHelper == 0)
        {
            $("#price-result").text(`مبلغ کل: 0 ریال`);
            $("#tax-result").text(`مالیات کل: 0 ریال`);
        }
        else
        {
            $("#price-result").text(`مبلغ کل: ${priceHelper.toLocaleString("ar-SA")} ریال`);
            $("#tax-result").text(`مالیات کل: ${taxHelper.toLocaleString("ar-SA")} ریال`);
        }
        $(this).parent().parent().parent().remove();
        for (let i=parseInt(id);i<=changeNum;i++)
        {
            $(this).parent().parent().parent().attr("id",`${i-1}`)
            $(`#tr-num-${i}`).text(`${i-1}`);
            $(`#tr-num-${i}`).attr("id", `tr-num-${i-1}`);
        }
    })

    // edit btn

    $(document).on("click", ".edit-btn" , function()
    {
        id = $(this).parent().parent().parent().attr("id").replace(/[^0-9]/g, '');
        let selectionValueEdit = $(`#selection-${id}`).text();
        let explainValueEdit = $(`#explain-${id}`).text();
        let unitValueEdit = $(`#unit-${id}`).text();
        let numValueEdit = parseInt($(`#num-${id}`).text().replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/٬/g, ""));
        let priceValueEdit = parseInt($(`#price-${id}`).text().replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/٬/g, ""));
        let offValueEdit = parseInt($(`#off-${id}`).text().replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/٬/g, ""));
        let taxValueEdit = parseInt($(`#tax-${id}`).text().replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/٬/g, ""));
        if (selectionValueEdit == "کالا")
        {
            $(this).parent().parent().parent().html(`
            <th><div class="row-parent" id='tr-num-${id}'>
                #
            </div></th>
            <th id='selection-${id}'><div class="sleection-parent">
                <select id='selection-value-${id}'>
                    <option value="">Select...</option>
                    <option selected>کالا</option>
                    <option >خدمات</option>
                </select>
            </div></th>
            <th id='explain-${id}'><div class="explanation-parent">
                <input value='${explainValueEdit}' type="text" class="input-explenation" id='explain-value-${id}'>
            </div></th>
            <th id='unit-${id}'><div class="unit-parent">
                <input type="text" value='${unitValueEdit}' class="unit-input" id='unit-value-${id}'>
            </div></th>
            <th id='num-${id}'><div class="num">
                <input type="number" value=${numValueEdit} class="num-input" id='num-value-${id}'>
            </div></th>
            <th id='price-${id}'><div class="unit-price-parent">
                <input type="number" value=${priceValueEdit} class="unit-price-input" id='price-value-${id}'>
            </div></th>
            <th id='off-${id}'><div class="off-parent">
                <input type="number" value=${offValueEdit} class="off-input" id='off-value-${id}'>
            </div></th>
            <th id='tax-${id}'><div class="tax-parent">
                <input type="number" value=${taxValueEdit} class="tax-input" id='tax-value-${id}'>
            </div></th>
            <th id='result-${id}'><div class="result-price-parent">
                <input type="number" placeholder="-" style="outline: none;" readonly>
            </div></th>
            <th id='save-edit-${id}'><div class="btn-parent">
                    <button class="undo-btn fa fa-undo" id='undo-${id}'></button>
                    <button class="save-btn fa fa-save" id='save-${id}'></button>
            </div></th>`)
        }
        else if(selectionValueEdit == "خدمات")
        {
            $(this).parent().parent().parent().html(`
            <th><div class="row-parent" id='tr-num-${id}'>
                #
            </div></th>
            <th id='selection-${id}'><div class="sleection-parent">
                <select id='selection-value-${id}'>
                    <option value="">Select...</option>
                    <option >کالا</option>
                    <option selected>خدمات</option>
                </select>
            </div></th>
            <th id='explain-${id}'><div class="explanation-parent">
                <input value=${explainValueEdit} type="text" class="input-explenation" id='explain-value-${id}'>
            </div></th>
            <th id='unit-${id}'><div class="unit-parent">
                <input type="text" value=${unitValueEdit} class="unit-input" id='unit-value-${id}'>
            </div></th>
            <th id='num-${id}'><div class="num">
                <input type="number" value=${numValueEdit} class="num-input" id='num-value-${id}'>
            </div></th>
            <th id='price-${id}'><div class="unit-price-parent">
                <input type="number" value=${priceValueEdit} class="unit-price-input" id='price-value-${id}'>
            </div></th>
            <th id='off-${id}'><div class="off-parent">
                <input type="number" value=${offValueEdit} class="off-input" id='off-value-${id}'>
            </div></th>
            <th id='tax-${id}'><div class="tax-parent">
                <input type="number" value=${taxValueEdit} class="tax-input" id='tax-value-${id}'>
            </div></th>
            <th id='result-${id}'><div class="result-price-parent">
                <input type="number" placeholder="-" style="outline: none;" readonly>
            </div></th>
            <th id='save-edit-${id}'><div class="btn-parent">
                    <button class="undo-btn fa fa-undo" id='undo-${id}'></button>
                    <button class="save-btn fa fa-save" id='save-${id}'></button>
            </div></th>`)};
        priceHelper -= (numValueEdit*priceValueEdit) + taxValueEdit - offValueEdit;
        taxHelper -= taxValueEdit;
        $("#price-result").text(`مبلغ کل: ${priceHelper.toLocaleString("ar-SA")} ریال`);
        $("#tax-result").text(`مالیات کل: ${taxHelper.toLocaleString("ar-SA")} ریال`);
    })



})