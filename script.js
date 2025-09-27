
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function submitForm(event) {
  event.preventDefault();
  document.getElementById("formMsg").innerText = "✅ Message sent successfully!";
  return false;
}
