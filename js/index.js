const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const HTML = document.documentElement;

document.body.onload = function() {
    displayTheme(); // Display current theme
    var images = document.querySelectorAll('img');
    new simpleParallax(images, {
        scale: 1.5
    });
}

function displayTheme(toggle=false) {
    var current_theme = getCookie("theme") == "" ? "light" : getCookie("theme"); // If the cookie is null, treat it as if it were light
    var toggled_theme = current_theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME; // Decide what the toggled theme should be
    
    HTML.classList.remove(LIGHT_THEME, DARK_THEME) // Reset the theme
    // Toggle and display
    if(toggle) {
        createCookie("theme", toggled_theme);
        HTML.classList.add(toggled_theme);
    }
    // Just display
    else
        HTML.classList.add(current_theme);
}

// An optimized function for getting cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// Creates a cookie or overwrites an existing one
function createCookie(cname, cvalue, expire = "10000") {
    document.cookie = `${cname}=${cvalue};expires=${expire};path=/`
}