const openBtn = document.querySelector(".openSideNavBtn");
const closeBtn = document.querySelector(".closeSideNavBtn");

const wrap = document.querySelectorAll(".side-nav");

openBtn.addEventListener("click", function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.add("visible");
    }
})

closeBtn.addEventListener("click", function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.remove("visible");
    }
})


//JS smooth scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
