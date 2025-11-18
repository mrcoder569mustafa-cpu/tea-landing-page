// ===== Toggle active nav link =====
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===== Button click alerts =====
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`You clicked "${btn.textContent}"`);
  });
});

// ===== Optional: Simple image hover effect =====
const cards = document.querySelectorAll(".card-img");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});
