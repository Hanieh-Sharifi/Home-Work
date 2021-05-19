let dropdown = document.getElementById("dropdown");
let icon = document.getElementById("icon")

function toggler()
{
    dropdown.classList.toggle("active");
    icon.classList.toggle("transform")
    let dropDownContent = document.getElementById("dropdownCont")
    if (dropDownContent.style.display == "flex")
    {
        dropDownContent.style.display = "none";
    } 
    else
    {
        dropDownContent.style.display = "flex";
        dropDownContent.style.flexDirection = "column";
    }
}
