document.getElementById("chat-toggle").addEventListener("click", () => {
  document.getElementById("chat-box").classList.toggle("hidden");
});

function reply(option) {
  if (option === "servicios") {
    window.location.href = "https://mayorkingdesign.com/#servicios";
  } else if (option === "portafolio") {
    window.location.href = "https://mayorkingdesign.com/#portafolio";
  } else if (option === "contacto") {
    window.open("https://wa.me/17186787899?text=Hola%20quiero%20más%20info%20de%20Mayorking%20Design", "_blank");
  }
}
