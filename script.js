console.log("🎉 script.js conectado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  alert("Bienvenida, Alejandra 👩‍💻 ¡Tu sitio está activo y estilizado!");

  const heading = document.querySelector("h2");
  if (heading) {
    heading.addEventListener("click", () => {
      heading.textContent = "¡Gracias por visitar mi portafolio!";
      heading.style.color = "#16a34a"; // Verde Tailwind
    });
  }
});
