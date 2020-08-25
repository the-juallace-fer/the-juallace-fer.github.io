function o_nav() {
  var nav = document.getElementById("nav");
  var obtn = document.getElementById("open-nav");
  var cbtn = document.getElementById("close-nav");
  if ((nav.style.width = "0") &&
      (obtn.style.display = "flex") &&
      (cbtn.style.display = "none")) {
        nav.style.width = "20em";
        obtn.style.display = "none";
        cbtn.style.display = "flex";
      }
}

function c_nav() {
  var nav = document.getElementById("nav");
  var obtn = document.getElementById("open-nav");
  var cbtn = document.getElementById("close-nav");
  if ((nav.style.width = "20em") &&
      (obtn.style.display = "none") &&
      (cbtn.style.display = "flex")) {
        nav.style.width = "0";
        obtn.style.display = "flex";
        cbtn.style.display = "none";
      }
}
