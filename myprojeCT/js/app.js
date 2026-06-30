const contactform = document.getElementById ("contact-form");
const formfeedback = document.getElementById ("formFeedback");

contactform.addEventListener("submit", (e)=>{
    e.preventDefault();

    const clientName = document.getElementById("name").value.trim();

    // Dynamically insert confirmation data
    formfeedback.textContent = alert(`Thank you ${clientName} for choosing us.`);

    // Use our custom utility behaviour
    formfeedback.classList.remove("hidden");
    formfeedback.classList.add("success-msg")

    contactform.reset();

    //clear notification message view safely after a delay
    setTimeout(() => {
        formfeedback.classList.add("hidden");
        formfeedback.classList.remove("success-msg");
        5000;
    })


})


// HAMBURGER TOGGLE

const navtoggle = document.querySelector(".nav-toggle");
const navmenu =  document.querySelector(".nav-menu");

navtoggle.addEventListener("click", () => {
    navmenu.classList.toggle("open");
    navtoggle.classList.toggle("open");
}) 

//  CHANGING TEXT

const roles = [
    "Frontend Developer",
    "Web Developer",
    "Digital Creator",
    "UI Designer",
    "Freelancer",

];

let index = 0;
const roleText = document.querySelector(".changing-text");

setInterval(() => {
    // console.log("index");
    index++;
    if (index > 4) {
        index = 0;
    }

    roleText.textContent = roles[index];
    

},2000)

const filterbtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

console.log(cards)

filterbtns.forEach((btn)=>{
   btn.addEventListener("click",()=>{

    const activeBtn = document.querySelector(".filter-btn.active");
    activeBtn.classList.remove("active");
    btn.classList.add("active");
    

        const filter = btn.dataset.filter;
        cards.forEach((el)=>{
            // console.log(el)
            if (el.dataset.category === filter || filter ==="all") {
                el.classList.remove("hide");
            } else{
                el.classList.add("hide");
            }
        })
    })
})
    








