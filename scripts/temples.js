
document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  // Toggle the hamburger icon 
  if (navigation.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});
