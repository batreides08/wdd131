const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

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
