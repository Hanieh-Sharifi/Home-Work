function myFunction()
{
    /**تعریف متغیر ها بصورت گلوبال */
    var input, filter, table, tr, td, i, txtValue;
    /**گرفتن المنت با ایدی مای اینپوت */
    input = document.getElementById("myInput");
    /**تبدیل ولیو المنت مای اینپوت به حروف بزرگ و ریختن ان در متغیر فیلتر */
    filter = input.value.toUpperCase();
    /**گرفتن المنت با ایدی مای تیبل */
    table = document.getElementById("myTable");
    /**گرفتن المنت هایی با تگ نیم تی ار */
    tr = table.getElementsByTagName("tr");
    /**نوشتن فور به تعداد تگ های تی ار */
    for (i = 0; i < tr.length; i++)
    {
        /** گرفتن اولین المنت با تگ نیم تی دی در تی ار ای ام */
        td = tr[i].getElementsByTagName("td")[0];
        /** اگر تی دی خالی نبود */
        if (td)
        {
            /** قرار دادن مقدار متغیر با نوشته داخل تی دی */
            txtValue = td.textContent || td.innerText;
            /** چک کردن وجود حرف خواسته شده در متغیر */
            if (txtValue.toUpperCase().indexOf(filter) > -1)
            {
                /** اگر بود نشان داده شود */
                tr[i].style.display = "";
            }
            else 
            {
                /** اگر نبود نشان داده نشود */
                tr[i].style.display = "none";
            }
        }
    }
}