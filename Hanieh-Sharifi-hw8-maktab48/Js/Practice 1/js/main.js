
function valueDeleter()
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
}


function emailValidation()
{
    let message = document.getElementById("eValidAns")
    let email = (document.getElementById("email").value).toLowerCase()
    const mailvalidation = /^([\w\.\+]{1,})([^\W])(@)([\w]{3,})(\.[\w]{2,3})+$/;
    if (mailvalidation.test(email) != true && email != "")
    {
        message.innerHTML = "!ایمیل وارد شده صحیح نمیباشد";
        // document.getElementById("myBtn").disabled = true;
    }
    else
    {
        message.innerHTML = "";
    }
}

function phoneValidation()
{
    let message = document.getElementById("pValidAns")
    let number = document.getElementById("phone").value
    const numValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im
    if (numValidation.test(number) != true && number != "")
    {
        message.innerHTML = "!شماره وارد شده صحیح نمیباشد";
        // document.getElementById("myBtn").disabled = true;
    }
    else
    {
        message.innerHTML = "";
    }
}

function submit()
{
    let phoneMessage = document.getElementById("pValidAns").innerHTML
    let emailMessage = document.getElementById("eValidAns").innerHTML
    let number = document.getElementById("phone").value
    let email = document.getElementById("email").value
    if(phoneMessage == "" && emailMessage == "" && number != "" && email != "")
    {
        alert("اطلاعات شما با موفقیت ثبت شد!");
        valueDeleter();
    }
    if(phoneMessage != "")
    {
        alert("لطفا شماره تلفن خود را دوباره چک کنید!");
        document.getElementById("pValidAns").innerHTML = ""
        document.getElementById("phone").value = "";
    }
    if (emailMessage != "")
    {
        alert("لطفا ایمیل خود را دوباره چک کنید!");
        document.getElementById("eValidAns").innerHTML = ""
        document.getElementById("email").value = "";
    }
    if (number == "") {
        alert("لطفا شماره خود را وارد کنید")
    }
    if (email == "") {
        alert("لطفا ایمیل خود را وارد کنید")
    }
}



document.getElementById("email").onkeyup = () => {emailValidation()}
document.getElementById("phone").onkeyup = () => {phoneValidation()}