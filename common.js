const mainLink = document.getElementById("mainLink");
const options = document.getElementById("options");

mainLink.addEventListener("click", () => {
  options.classList.toggle("hidden");
});