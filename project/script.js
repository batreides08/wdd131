document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("ctaBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Explore listings now!");
    });
  }

  const modifiedSpan = document.getElementById("last-modified");
  if (modifiedSpan) {
    modifiedSpan.textContent += document.lastModified;
  }
});
