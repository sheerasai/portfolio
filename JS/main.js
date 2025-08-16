 window.addEventListener("load", function () {

//   setTimeout(function () {
//     const preLoader = document.getElementById("preloader");
//     const MainContent = document.getElementById("main-content");
//     preLoader.classList.add("fade-out");
//     setTimeout(() => {
//       preLoader.style.display = "none";
//       MainContent.classList.remove("opacity-0");
//       MainContent.classList.add("fade-in");
//     }, 1000);
//   }, 1000);


//typed.js
var typed = new Typed("#type", {
  strings: ["UI/UX Developer", "UI/UX Designer"],
  smartBackspace: 100, // Default value
  typeSpeed: 100,
  loop: true,
});

//custom cursor
 const Body = document.querySelector("#body");
const Cursor = document.querySelector("#cursor");
Body.addEventListener("mousemove", function (dets) {
  gsap.to(Cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out",
  });
});

 

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 4,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed:5,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });


//Tabs//

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Activate first tab by default
if (tabButtons.length > 0 && tabContents.length > 0) {
  tabButtons[0].classList.add("active");
  tabContents[0].classList.add("active");
}

// Tab click functionality
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active from all
    tabButtons.forEach(btn => btn.classList.remove("active-btn"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active to clicked button
    button.classList.add("active-btn");
    // Show corresponding content
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

  
  
 
  
});

