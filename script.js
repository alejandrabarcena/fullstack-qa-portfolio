// --------------------------------------
// script.js personalizado para tu portafolio
// --------------------------------------

console.log("🎉 script.js conectado correctamente");

// Ejecutar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar alerta de bienvenida
  alert("Bienvenida, Alejandra 👩‍💻 ¡Tu sitio está activo y estilizado!");

  // Estilo dinámico (ejemplo básico)
  const heading = document.querySelector("h2");
  if (heading) {
    heading.addEventListener("click", () => {
      heading.textContent = "¡Gracias por visitar mi portafolio!";
      heading.style.color = "#16a34a"; // Verde Tailwind
    });
  }
});
