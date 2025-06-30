document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll contact you shortly 🥰");
  this.reset();
});
