window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Handle submission counter on review.html
  if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);

    const msg = document.getElementById("review-counter");
    if (msg) {
      msg.textContent = `Total reviews submitted: ${count}`;
    }
  }

  // Set dynamic current date/time 
  const footerDate = document.getElementById("last-modified");
  if (footerDate) {
    const now = new Date();
    footerDate.textContent = `Last Modification: ${now.toLocaleString()}`;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const modified = document.getElementById("last-modified");
  if (modified) {
    modified.textContent += document.lastModified;
  }

  const productSelect = document.getElementById("product");
  if (productSelect) {
    const products = ["Nosara Jungle Villa", "Escazú City Apartment", "Santa Teresa Surf Retreat"];
    for (let item of products) {
      let option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      productSelect.appendChild(option);
    }
  }

  if (document.title === "Review Confirmation") {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);
    document.getElementById("review-counter").textContent = `Reviews submitted so far: ${count}`;
  }
});
