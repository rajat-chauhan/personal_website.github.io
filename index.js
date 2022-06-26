let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let arrow3 = document.getElementById("arrow3");
let arrow4 = document.getElementById("arrow4");
let arrow5 = document.getElementById("arrow5");

let btn1 = document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

arrow1.addEventListener('click', function(){
    btn1.click();
})

arrow2.addEventListener('click', function(){
    btn2.click();
})

arrow3.addEventListener('click', function(){
    btn3.click();
})

arrow4.addEventListener('click', function(){
    btn4.click();
})

arrow5.addEventListener('click', function(){
    btn5.click();
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
