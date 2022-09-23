import * as views from './views.js'; // import the views file to use its exported functions.
    // this file is where most of the html code is placed.

/**
 * A placeholder array of super fund names.
*/
let superfundList = ["Fund 1", "Fund 2", "Fund 3", "Fund 4", "Fund 5", "Fund 6"];

/**
 * A placeholder array of markets that may concern potential customers of super funds.
*/
let concernList = ["Concern 1", "Concern 2", "Concern 3", "Concern 4", "Concern 5", "Concern 6"]; // 

/**
 * A list of what super funds have been selected in the sidebar.
 */
let selectedSuperfunds = [0, 0, 0, 0, 0, 0];

/**
 * A list of what markets of concern have been selected in the sidebar.
 */
let selectedConcerns = [0, 0, 0, 0, 0, 0];

/**
 * Checks the hash address of the site and then injects the corresponding data into the html document.
 * The html code is loaded from views.js and then injected into the #main div of the document.
 */
function redraw() {
    let targetId = "main";
    if (window.location.hash == "#!/info") { // if the info box is currently open.
        views.mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns);
        views.infoPage();
    }
    else if (window.location.hash == "") { // if on the main screen without info box.
        views.mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns);
    }
    else { // if a wrong page is entered, an error code is presented.
        views.missingPage(targetId);
    }
}

/**
 * This function is a work in progress in will eventually receive data from the sidebar to determine what
 * categories the user has currently selected.
 * This data will then be stored in the 'selectedSuperfunds' and 'selectedConcerns' arrays.
 */
function loadSelectedContent() {
    for (let i = 0; i < superfundList.length; i++) {
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

/**
 * Runs the redraw function upon a change of the hash address.
 */
window.onhashchange = function () {
    redraw();
};
/**
 * Runs the redraw function upon a load of the website.
 */
window.onload = function() {
    redraw();
};