var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    if (evt && evt.preventDefault) { evt.preventDefault(); } // the tab links are href="#"; without this the page jumps to the top
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// A link such as research.html#talk opens that tab and scrolls to it (used by the quick links on the Home page).
function openTabFromHash() {
    var name = (window.location.hash || "").replace("#", "");
    var target = name ? document.getElementById(name) : null;
    if (!target || (" " + target.className + " ").indexOf(" tabcontent ") < 0) { return; }
    var i, tabcontent = document.getElementsByClassName("tabcontent"), tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        if ((tablinks[i].getAttribute("onclick") || "").indexOf("'" + name + "'") >= 0) { tablinks[i].className += " active"; }
    }
    target.style.display = "block";
    var bar = document.querySelector("ul.tab");
    if (bar && bar.scrollIntoView) { bar.scrollIntoView(); }
}
window.addEventListener("load", openTabFromHash);
window.addEventListener("hashchange", openTabFromHash);
