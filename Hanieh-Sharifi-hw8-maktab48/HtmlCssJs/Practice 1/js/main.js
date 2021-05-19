let button = document.getElementsByClassName("btn");


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function()
    {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        let span = this.firstElementChild;
        if (panel.style.display === "block")
        {
            panel.style.display = "none";
            this.classList.remove("height")
            span.innerHTML = "+";
            span.style.fontSize = "1.5rem";
        }
        else
        {
            panel.style.display = "block";
            this.classList.add("height")
            span.innerHTML = "-";
            span.style.fontSize = "2rem";
        }
    });
}