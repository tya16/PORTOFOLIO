function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

function showPage(pageId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => section.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");

  const sidebar = document.querySelector(".sidebar");
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  }
}

const menuLinks = document.querySelectorAll(".sidebar ul li a");
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    menuLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});
