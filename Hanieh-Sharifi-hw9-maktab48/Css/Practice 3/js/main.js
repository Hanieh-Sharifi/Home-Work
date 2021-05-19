$(function(){
    function nextBtnDisplay(rowNum, paginationOptions)
    {
        if (rowNum != paginationOptions-1 && rowNum != paginationOptions)
        {
            $(`.added:nth-child(${rowNum-2})`).hide();
            $(`.added:nth-child(${rowNum-1})`).hide();
            $(`.added:nth-child(${rowNum})`).hide();
            $(`.added:nth-child(${rowNum+1})`).show();
            $(`.added:nth-child(${rowNum+2})`).show();
            $(`.added:nth-child(${rowNum+3})`).show();
        }
    }
    function prevBtnDisplay(rowNum)
    {
        if (rowNum >= 3)
        {
            $(`.added:nth-child(${rowNum-1})`).show();
            $(`.added:nth-child(${rowNum})`).show();
            $(`.added:nth-child(${rowNum+2})`).hide();
            $(`.added:nth-child(${rowNum+3})`).hide();
        }
    }
    // make ID numbers
    for (let i = 1;i<=151;i++)
    {
        $(`tr:nth-child(${i-1}) #num`).text(`${i-1}`);
    }
    let rows;
    let rowNum;
    let paginationOptions;
    // changing the rows on changin the input
    $("#maxRows").on("change", function(){
        $("tbody tr").hide()
        rows = $("#maxRows").val();
        $(".added").remove();
        paginationOptions = Math.ceil(150/rows);
        for (let i= 1; i<= paginationOptions;i++)
        {
            $("#next").before(`<li class='added' id='row${i}'><button class='btn btn-sm btn-outline-primary border-left-0 rounded-0'>${i}</button></li>`);
        }
        $(".added").hide();
        for (let i=1;i<=4;i++)
        {
            $(`.added:nth-child(${i})`).show();
        }
        $('li:nth-child(2)').addClass("active");
        rowNum = 1;
        for (let i=1; i<= rows;i++)
        {
            $(`tbody tr:nth-child(${i})`).show();
        }
    });
    // change the view when the numbers are clicked
    $(document).on("click",".added", function() {
        $("li").removeClass("active");
        $(this).addClass("active");
        $("tbody tr").hide()
        let num = $(this).attr("id").split("row");
        rowNum = parseInt(num[1]);
        console.log(rowNum);
        for (let i= (rows*(rowNum-1))+1; i<=(rows*rowNum); i++)
        {
            $(`tbody tr:nth-child(${i})`).show();
        }

    })
    // change the view when prev button clicked
    $('#prev').on("click", function(){
        prevBtnDisplay(rowNum);
        if (rowNum != 1)
        {
            $("tbody tr").hide()
            rowNum -=1;
            $("li").removeClass("active");
            $(`li:nth-child(${rowNum+1})`).addClass("active");
            for (let i= (rows*(rowNum-1))+1; i<=(rows*rowNum); i++)
            {
                $(`tbody tr:nth-child(${i})`).show();
            }
        }
    })
    // change the view when next button clicked
    $('#next').on("click", function(){
        nextBtnDisplay(rowNum, paginationOptions);
        if (rowNum == 1)
        {
            console.log(rowNum);
            $("tbody tr").hide()
            rowNum= rowNum + 1;
            $("li").removeClass("active");
            $(`li:nth-child(${rowNum+1})`).addClass("active");
            for (let i= (rows*(rowNum-1))+1; i<=(rows*rowNum); i++)
            {
                console.log("working");
                $(`tr:nth-child(${i})`).show();
            }
        }
        else if(rowNum != paginationOptions)
        {
            $("tbody tr").hide()
            rowNum= rowNum + 1;
            $("li").removeClass("active");
            $(`li:nth-child(${rowNum+1})`).addClass("active");
            for (let i= (rows*(rowNum-1))+1; i<=(rows*rowNum); i++)
            {
                console.log("working");
                $(`tr:nth-child(${i})`).show();
            }
        }
    })
})