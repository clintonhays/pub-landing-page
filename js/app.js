// Overlay Toggle

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", (e) => {
  target = e.target;
  const html = `
    <div class="ageCheck">
      <h1>Please return when you have reached legal dinking age!</h1>
    </div>
  `;

  if (target.className === "yes") {
    overlay.style.display = "none";
  } else {
    overlay.innerHTML = html;
  }
});

// Hamburger Toggle

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navItem");

const hamburgerToggle = () => {
  navigation.classList.toggle("showNav");
  hamburger.classList.toggle("hamburgerClose");
};

hamburger.addEventListener("click", hamburgerToggle);

navLinks.forEach((link) => {
  link.addEventListener("click", hamburgerToggle);
});
