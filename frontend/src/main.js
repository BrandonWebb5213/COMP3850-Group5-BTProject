import * as views from './views.js';

function redraw() {
    let targetId = "main";
    if (window.location.hash == "#!/info") {
        views.infoPage(targetId);
    }
    else if (window.location.hash == "") {
        views.mainPage(targetId);
    }
    else {
        views.missingPage(targetId);
    }
}

window.onhashchange = function () {
    redraw();
}
window.onload = function() {
    redraw();
};