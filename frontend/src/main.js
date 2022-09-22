import * as views from './views.js';

let superfundList = ["Fund 1", "Fund 2", "Fund 3", "Fund 4", "Fund 5", "Fund 6"];
let concernList = ["Concern 1", "Concern 2", "Concern 3", "Concern 4", "Concern 5", "Concern 6"];

let selectedSuperfunds = [0, 0, 0, 0, 0, 0];
let selectedConcerns = [0, 0, 0, 0, 0, 0];

let form = document.getElementById("sidebar");
//form.addEventListener('submit', loadSelectedContent);

function redraw() {
    let targetId = "main";
    if (window.location.hash == "#!/info") {
        views.mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns);
        views.infoPage();
    }
    else if (window.location.hash == "") {
        views.mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns);
    }
    else {
        views.missingPage(targetId);
    }
}

function loadSelectedContent() {
    for (let i = 0; i < superFundList.length; i++) {
        let id = "fund" + i;
        if (document.getElementById(id).value == 1) {
            selectedSuperfunds[i] = 1;
        }
        else {
            selectedSuperFunds[i] = 0;
        }
    }
    for (let i = 0; i < concernList.length; i++) {
        let id = "concern" + i;
        if (document.getElementById(id).value == 1) {
            selectedConcerns[i] = 1;
        }
        else {
            selectedConcerns[i] = 0;
        }
    }
    console.log(selectedSuperfunds);
    console.log(selectedConcerns)
}

window.onhashchange = function () {
    redraw();
};
window.onload = function() {
    redraw();
};