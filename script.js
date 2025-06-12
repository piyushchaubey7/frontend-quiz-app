document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("modeToggle");
    const body = document.body;
    const icon = document.getElementById("icon");
  
    // Load saved mode
    if (localStorage.getItem("mode") === "dark") {
      body.classList.add("dark");
      toggle.checked = true;
      icon.classList.replace("fa-moon", "fa-sun");
    }
  
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      body.classList.toggle("dark", isDark);
      icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
      localStorage.setItem("mode", isDark ? "dark" : "light");
    });
  });