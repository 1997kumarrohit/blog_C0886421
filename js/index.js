function toggleMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
      x.className += " responsive-menu ";
    } else {
      x.className = "nav-menu";
    }
  }