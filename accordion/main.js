let elemAccordion = document.getElementsByClassName("accordion__title");
elemAccordion = [...elemAccordion];

let elemContent = document.getElementsByClassName("accoridon__content");
elemContent = [...elemContent];


for (i = 0; i < elemContent.length; i++) {
    elemAccordion[i].addEventListener('click', handleclik)
}

function handleclik() {
    let e = this.classList.toggle("accordion");
    let header = this.nextElementSibling;

    if (header.style.display === "block") {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }


}




