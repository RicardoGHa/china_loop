const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const whatsappBtn = document.getElementById("whatsappBtn");
const nameInput = document.getElementById("nameInput");
const countryInput = document.getElementById("countryInput");
const itemInput = document.getElementById("itemInput");
const methodInput = document.getElementById("methodInput");
const messageInput = document.getElementById("messageInput");

whatsappBtn.addEventListener("click", () => {
  const name = nameInput.value || "Not provided";
  const country = countryInput.value || "Not sure yet";
  const item = itemInput.value || "Not provided";
  const method = methodInput.value || "Not sure yet";
  const message = messageInput.value || "No extra details";

  const text = `Hello China Loop, I want to request shipping to Lebanon.

Name: ${name}
Shipping from: ${country}
Item: ${item}
Shipping method: ${method}
Details: ${message}`;

  const encodedText = encodeURIComponent(text);

  window.open(`https://wa.me/96179059704?text=${encodedText}`, "_blank");
});