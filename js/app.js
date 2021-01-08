// Global Variables

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", (e) => {
  target = e.target;
  const html = `
    <div class="ageCheck">
      <h1>Please return when you have reached legal dinking age!</h1>
    </div>
  `;

  if (target.className === "yes") {
    console.log("working");
    overlay.style.display = "none";
  } else {
    overlay.innerHTML = html;
  }
});
