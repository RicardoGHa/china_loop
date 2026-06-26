const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const whatsappBtn = document.getElementById("whatsappBtn");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("show");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    });
  });
}

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput")?.value.trim() || "Not provided";
    const country = document.getElementById("countryInput")?.value.trim() || "Not provided";
    const item = document.getElementById("itemInput")?.value.trim() || "Not provided";
    const method = document.getElementById("methodInput")?.value || "Not sure yet";
    const message = document.getElementById("messageInput")?.value.trim() || "No extra details";

    const whatsappMessage = `Hello China Loop, I want to request a shipment.%0A%0AName: ${encodeURIComponent(name)}%0AShipping from: ${encodeURIComponent(country)}%0AItem: ${encodeURIComponent(item)}%0AMethod: ${encodeURIComponent(method)}%0AExtra details: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/96179059704?text=${whatsappMessage}`, "_blank");
  });
}
