export {mainPage, infoPage, missingPage}; // export functions for use by main.js

/**
 * Loads the content of the site into the main div.
 * This includes loading the sidebar and the main content of the site.
 * 
 * @param {*} targetId The ID in the html document to inject the content into.
 * @param {*} superfundList The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} concernList The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determing what markets of concern will appear in the content area.
 */
function mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns) {
    document.getElementById(targetId).innerHTML = generateSidebar(superfundList, concernList, selectedSuperfunds, selectedConcerns) +
    "<article id=\"content-area\">" + generateContent(superfundList, concernList, selectedSuperfunds, selectedConcerns) + "<article>";
    document.getElementById("help-control").innerHTML = "<a href=\"./#!/info\"" +
        "class=\"help-icon\"" + 
        "alt=\"help information\">?</a>";
    generateContent(superfundList, concernList, selectedSuperfunds, selectedConcerns);
}

/**
 * Html code for the site when the info box is open.
 * This is run after the mainPage function and will run in conjunction with it.
 * It will open up the info box in content area of the site, as well as
 * change the help icon in the header into a 'close help box' icon.
 */
 function infoPage() {
    // Inject the help dialogue box into the content area of the site
    document.getElementById("content-area").innerHTML += "<div id=\"help-dialogue\" class=\"content-block\">" +
    "<div class=\"content-block-heading\">Information on the ESG Comparison Tool</div><br>" +
    "There will be some information about what the tool does. This includes an explanation of ESGs and BT Financial." +
    "</div>";

    // Inject close help icon into site. 
        // This will navigate back to the main page and close the help box.
    document.getElementById("help-control").innerHTML = "<a href=\".\/\"" +
        "class=\"help-icon\"" +
        "id=\"help-close-icon\"" + 
        "alt=\"close help menu\">?<div id=\"little-x\">x</div></a>";
}

/**
 * Loads an error code if the hash code is wrong.
 * 
 * @param {*} targetId The ID in the html document to inject the content into.
 */
function missingPage(targetId) {
    document.getElementById(targetId).innerHTML = "This page does not exist.";
}

/**
 * Generate the html code for the sidebar of the site.
 * The various categories of super funds are loaded as a form by the generateSuperfundList 
 * and generateConcernList functions.
 * 
 * @param {*} superfundList The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} concernList The array of markets of concern received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determing what markets of concern will appear in the content area.
 * @returns The content of the sidebar to use for injection by other functions.
 */
const generateSidebar = (superfundList, concernList, selectedSuperfunds, selectedConcerns) => {
    return "<form id=\"sidebar\">" +
        "<div id=\"superfund-list\" class=\"sidebar-list\">" +
            "<p class=\"sidebar-category-heading\">Super Funds</p>" +
            generateSuperfundList(superfundList, selectedSuperfunds) +
        "</div>" +
        "<div id=\"area-concern-list\" class=\"sidebar-list\">" +
            "<p class=\"sidebar-category-heading\">Areas of Concern</p>" +
            generateConcernList(concernList , selectedConcerns) +
        "</div>" +
    "</form>";
}

/**
 * Generate a list of checkboxes representing super funds for the sidebar.
 * 
 * @param {*} superfundList The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @returns A list of checkboxes representing the various super funds.
 */
const generateSuperfundList = (superfundList, selectedSuperfunds) => {
    let result = "";
    let numFunds = 0;
    for (const superfund of superfundList) {
        let tag = "fund" + numFunds;
        let selected = "";
        if (selectedSuperfunds[numFunds] == 1) {
            selected = "checked";
        }
        let input = "<input type=\"checkbox\" " +
            "id=\"" + tag + "\" " +
            "name=\"" + tag + "\" " +
            "value=\"" + 1 + "\"" +
            "onchange=\"this.form.requestSubmit()\"" +
            selected + ">";

        let label = "<label for=\"" + tag + "\">" + superfund + "</label>";
        result += input + label + "<br>";
        numFunds += 1;
    }
    return result;
}

/**
 * Generate a list of checkboxes representing areas of concern for the sidebar.
 * 
 * @param {*} concernList The array of areas of concern received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determine what markets of concern will appear in the content area.
 * @returns A list of checkboxes representing the various markets of concern.
 */
const generateConcernList = (concernList, selectedConcerns) => {
    let result = "";
    let numConcerns = 0;
    for (const concern of concernList) {
        let tag = "concern" + numConcerns;
        let selected = "";
        if (selectedConcerns[numConcerns] == 1) {
            selected = "checked";
        }
        let input = "<input type=\"checkbox\" " +
            "id=\"" + tag + "\" " +
            "name=\"" + tag + "\" " +
            "value=\"" + 1 + "\" " +
            "onchange=\"this.form.requestSubmit()\"" +
            selected + ">";
            
        let label = "<label for=\"" + tag + "\">" + concern + "</label>";
        result += input + label + "<br>";
        numConcerns += 1;
    }
    return result;
}

/**
 * Generate the content of the site as a list of info cards on each selected superfund.
 * 
 * @param {*} superfundList The array of super funds received from main.js. 
 * @param {*} concernList The array of super funds received from main.js. 
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 */
const generateContent = (superfundList, concernList, selectedSuperfunds, selectedConcerns) => {
    let cards = "";
    for (let i = 0; i < superfundList.length; i++) {
        if (selectedSuperfunds[i] == 1) {
            cards += generateFundCard(superfundList[i], concernList, selectedConcerns);
        }
    }
    console.log(cards);
    return cards;
}

/**
 * Generates html code for the given superfund's info card.
 * 
 * @param {*} superfund The superfund to create an info card for.
 * @param {*} concernList A list of all markets of concern.
 * @param {*} selectedConcerns A list of all markets of concern that are currently selected.
 */
const generateFundCard = (superfund, concernList, selectedConcerns) => {
    let result = "<div id=\"fund-card\" class=\"content-block\">" +
    "<div class=\"content-block-heading\">" + superfund + "</div><br>";
    for (let i = 0; i < concernList.length; i++) {
        if (selectedConcerns[i] == 1) {
            let id = superfund + "-subheading-" + i;
            result += "<div class=\"content-block-subheading\" id=\"" + id + "\">" + concernList[i] + "</div><br>";
        }
    }
    return result + "</div>";
}