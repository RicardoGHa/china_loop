const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const whatsappBtn = document.getElementById("whatsappBtn");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");

    if (mobileMenu.classList.contains("show")) {
      menuBtn.textContent = "Close";
    } else {
      menuBtn.textContent = "Menu";
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      menuBtn.textContent = "Menu";
    });
  });
}

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const country = document.getElementById("countryInput").value.trim();
    const item = document.getElementById("itemInput").value.trim();
    const method = document.getElementById("methodInput").value;
    const message = document.getElementById("messageInput").value.trim();

    const finalName = name || "Not provided";
    const finalCountry = country || "Not provided";
    const finalItem = item || "Not provided";
    const finalMethod = method || "Not sure yet";
    const finalMessage = message || "No extra details provided";

    const whatsappText = [
      "Hello China Loop,",
      "",
      "I want to request a shipping quote.",
      "",
      `Name: ${finalName}`,
      `Shipping from: ${finalCountry}`,
      `Item: ${finalItem}`,
      `Preferred method: ${finalMethod}`,
      `Extra details: ${finalMessage}`,
      "",
      "Thank you."
    ].join("\n");

    const whatsappUrl = `https://wa.me/96179059704?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, "_blank");
  });
}

const introVideo = document.getElementById("introVideo");

if (introVideo) {
  introVideo.muted = true;
  introVideo.playsInline = true;

  setTimeout(() => {
    introVideo.play().catch((error) => {
      console.log("Video autoplay failed:", error);
    });
  }, 1000);
}