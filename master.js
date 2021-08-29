
// ========= scroll navbar to bottom ===========
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-colored');
    } else {
        navbar.classList.remove('nav-colored');
    }
};

// =========== Scroll Reveal ===========
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 700,
  reset: true,
  opacity: null,
});

// =========== all boxes ===========
sr.reveal(".hero_img", { delay: 800 });
sr.reveal(".hero_title", { delay: 500 });
sr.reveal(".hero_social", { delay: 500 });
sr.reveal(".about_box1", { delay: 500 });
sr.reveal(".skill_box1", { delay: 500 });
sr.reveal(".about_box2", { delay: 800 });
sr.reveal(".skill_box2", { delay: 800 });

// ========== all circles ==========
ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
  opacity: 0,
}).reveal(".hero_circle", { delay: 800 });

ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 1000,
  reset: true,
  opacity: 0,
}).reveal(".about_circle", { delay: 800 });

ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
  opacity: 0,
}).reveal(".skill_circle", { delay: 800 });

// =========== skills interval ===========
ScrollReveal({
  origin: "right",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".skill_one", {
  interval: 60,
  reset: true,
});

ScrollReveal({
  origin: "right",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".about_info", {
  delay: 800,
});

ScrollReveal({
  origin: "left",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".b1", {
  delay: 600,
});

ScrollReveal({
  origin: "right",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".b2", {
  delay: 600,
});

ScrollReveal({
  origin: "right",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".contact_box2", {
  delay: 600,
});

ScrollReveal({
  origin: "left",
  distance: "40px",
  duration: 1000,
  reset: true,
  opacity: null,
}).reveal(".contact_box1", {
  delay: 600,
});

//onclick events;
const home = document.querySelector(".nav_home");
const about = document.querySelector(".nav_about");
const work = document.querySelector(".nav_work");
const skills = document.querySelector(".nav_skills");
const contact = document.querySelector(".nav_contact");
const ul = document.querySelector(".menu_ul");

function ulStyle(e) {
  ul.style.right = "-100%";
}

home.addEventListener("click" ,ulStyle);
about.addEventListener("click" ,ulStyle);
work.addEventListener("click" , ulStyle);
skills.addEventListener("click" , ulStyle);
contact.addEventListener("click" , ulStyle);


function ulClose() {
  if(ul.style.right === "0px"){
    ul.style.right = "-100%";
  } else {
    ul.style.right = "0px";
  }
}






