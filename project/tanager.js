// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// CTA button interaction
const buttons = document.querySelectorAll(".cta-button");
buttons.forEach(btn => btn.addEventListener("click", () => {
  alert("Redirecting you to get started!");
}));

// Simple localStorage interaction: save contact name
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  localStorage.setItem("tanager_user_name", name);
  alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
  form.reset();
});

// Show welcome message if user has submitted before
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("tanager_user_name");
  if (savedName) {
    console.log(`Welcome back, ${savedName}!`);
  }
});
