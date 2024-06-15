const d = document;
const titles = d.querySelectorAll(".title-content");
const paragraphs = d.querySelectorAll(".paragraph");
const arrowDowns = d.querySelectorAll(".arrow-down")

titles.forEach((title, i)  => {
    title.addEventListener("click", (e) => {        
        for(let j = 0; j < paragraphs.length; j++) {
            if(i === j) {
                paragraphs[j].classList.toggle("hide");
                arrowDowns[j].classList.toggle("arrow-up")
            }
        }
    })
});


