let title = document.getElementsByClassName("footer__title")

for (let i=0; i<title.length; i++){
    title[i].addEventListener("click", function (){
        this.classList.toggle("active");
        let links = this.nextElementSibling;
        if (links.style.display === "flex") {
            links.style.display = "none";
        }
        else {
            links.style.display = "flex";
        }
    })
}