import * as views from './views.js'; // import the views file to use its exported functions.
    // this file is where most of the html code is placed.

/**
 * A placeholder array of super fund names.
*/
let superfundList = ["Fund 1", "Fund 2", "Fund 3", "Fund 4", "Fund 5", "Fund 6"];

/**
 * A placeholder array of markets that may concern potential customers of super funds.
*/
let concernList = ["Concern 1", "Concern 2", "Concern 3", "Concern 4", "Concern 5", "Concern 6"];

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

    // set submit event listener for sidebar search to run loadSelectedContent function
    let form = document.getElementById('sidebar');
    form.addEventListener('submit', loadSelectedContent);
}

/**
 * This function is a work in progress in will eventually receive data from the sidebar to determine what
 * categories the user has currently selected.
 * This data will then be stored in the 'selectedSuperfunds' and 'selectedConcerns' arrays.
 */
function loadSelectedContent() {
    // load selected super fund data into array
    for (let i = 0; i < superfundList.length; i++) {
        let id = "fund" + i;
        if (document.getElementById(id).checked) {
            selectedSuperfunds[i] = 1;
        }
        else {
            selectedSuperfunds[i] = 0;
        }
    }

    // load selected markets of concern data into array
    for (let i = 0; i < concernList.length; i++) {
        let id = "concern" + i;
        if (document.getElementById(id).checked) {
            selectedConcerns[i] = 1;
        }
        else {
            selectedConcerns[i] = 0;
        }
    }

    // save data into session storage so it can be loaded upon a refresh
    saveSessionStorage();
}

/**
 * Saves any necessary variables to session storage so that it can be saved upon refreshing.
 */
function saveSessionStorage() {
    for(let i = 0; i < selectedSuperfunds.length; i++) {
        sessionStorage.setItem("selectedFunds" + i, selectedSuperfunds[i]);
    }
    for(let i = 0; i < selectedSuperfunds.length; i++) {
        sessionStorage.setItem("selectedConcerns" + i, selectedConcerns[i]);
    }
}

/**
 * loads data from session storage and imports into local variables if not null.
 */
function loadSessionStorage() {
    let target; // used to load each variable form session storage so that it can be validated

    // iterate through session storage of selected superfunds and apply to variable if not null
    for(let i = 0; i < selectedSuperfunds.length; i++) {
        target = sessionStorage.getItem("selectedFunds" + i);
        // if session storage value is not null, load to respective variable
        if (target != null) {
            selectedSuperfunds[i] = target;
        }
        else {
            selectedSuperfunds[i] = 0;
        }
    }
    
    // iterate through session storage of selected concerns and apply to variable if not null
    for(let i = 0; i < selectedConcerns.length; i++) {
        target = sessionStorage.getItem("selectedConcerns" + i);
        // if session storage value is not null, load to respective variable
        if (target != null) {
            selectedConcerns[i] = target;
        }
        else {
            selectedConcerns[i] = 0;
        }
    }
}

/**
 * Runs the redraw function upon a change of the hash address.
 */
window.onhashchange = function () {
    loadSessionStorage();
    redraw();
};
/**
 * Runs the redraw function upon a load of the website.
 */
window.onload = function() {
    loadSessionStorage();
    redraw();
};