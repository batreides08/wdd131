// Set the current year with id="currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date in the paragraph with id="lastModified"
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;