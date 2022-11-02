import * as views from './views.js'; // import the views file to use its exported functions.
    // this file is where most of the html code is placed.

import {Model} from './model.js'; // import the data for superfunds and markets of concern.

/**
 * Data model for list of superfunds.
 */
let superfundData = [];

/**
 * Data model for list of markets of concern.
 */
let concernData = [];

/**
 * A list of what super funds have been selected in the sidebar.
 */
let selectedSuperfunds = [];

/**
 * A list of what markets of concern have been selected in the sidebar.
 */
let selectedConcerns = [];

/**
 * Checks the hash address of the site and then injects the corresponding data into the html document.
 * The html code is loaded from views.js and then injected into the #main div of the document.
 */
function redraw() {
    let targetId = "main";
    if (window.location.hash == "#!/info") { // if the info box is currently open.
        views.mainPage(targetId, superfundData, concernData, selectedSuperfunds, selectedConcerns);
        views.infoPage(concernData, selectedConcerns);
    }
    else if (window.location.hash == "") { // if on the main screen without info box.
        views.mainPage(targetId, superfundData, concernData, selectedSuperfunds, selectedConcerns);
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
    for (let i = 0; i < superfundData.length; i++) {
        let id = superfundData[i].id;
        if (document.getElementById(id).checked) {
            selectedSuperfunds[i] = 1;
        }
        else {
            selectedSuperfunds[i] = 0;
        }
    }

    // load selected markets of concern data into array
    for (let i = 0; i < concernData.length; i++) {
        let id = concernData[i].id;
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
    for(let i = 0; i < superfundData.length; i++) {
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
    for(let i = 0; i < concernData.length; i++) {
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
 * Loads the data from model.js and saves into local variables.
 */
function loadModel() {
    superfundData = Model.data.superfunds;
    concernData = Model.data.concerns;
    let data = Model.funds.superfunds
    console.log("data" , data)
    console.log("superfunddata", superfundData)
    
    console.log("concerndata", concernData)
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
    Model.loadData();
    loadModel();
    loadSessionStorage();    
    redraw();
};

window.addEventListener("modelUpdated", loadModel);