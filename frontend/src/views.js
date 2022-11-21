export {mainPage, infoPage, missingPage}; // export functions for use by main.js

let imageURL = "http://localhost:1337";

/**
 * Loads the content of the site into the main div.
 * This includes loading the sidebar and the main content of the site.
 * 
 * @param {*} targetId The ID in the html document to inject the content into.
 * @param {*} superfundData The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} concernData The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determing what markets of concern will appear in the content area.
 */
function mainPage(targetId, superfundData, concernData, selectedSuperfunds, selectedConcerns) {
    document.getElementById(targetId).innerHTML = generateSidebar(superfundData, concernData, selectedSuperfunds, selectedConcerns) +
    "<article id=\"content-area\">" + generateContent(superfundData, concernData, selectedSuperfunds, selectedConcerns) + "<article>";
    document.getElementById("help-control").innerHTML = "<a href=\"./#!/info\"" +
        "class=\"help-icon\"" + 
        "alt=\"help information\">?</a>";
    generateContent(superfundData, concernData, selectedSuperfunds, selectedConcerns);
}

/**
 * Html code for the site when the info box is open.
 * This is run after the mainPage function and will run in conjunction with it.
 * It will open up the info box in content area of the site, as well as
 * change the help icon in the header into a 'close help box' icon.
 */
 function infoPage(concernData, selectedConcerns) {
    // Find out what areas of concern are currently selected so that description of each can be shown
    let concernDescriptions = "";
    for (let i = 0; i < concernData.length; i++) {
        if (selectedConcerns[i] == 1) {
            concernDescriptions += "<br><br><div class=\"content-block-subheading\">" + 
            "<img src=" + imageURL + concernData[i].icon.formats.thumbnail.url + " class=\"concern-icon\">" + concernData[i].longName + ":</div>" + 
            concernData[i].desc;
        }
    }
    if (concernDescriptions == "") {
        concernDescriptions = 
            "<br><br>A description of each selected area of concern can be found " 
            + "inside this help box in case you need an explanation of them.";
    }

    // Inject the help dialogue box into the content area of the site
    document.getElementById("content-area").innerHTML = "<div id=\"help-box\" class=\"content-block\">" +
    "<div id=\"help-heading\" class=\"content-block-heading\">Information on the ESG Comparison Tool</div>" +
    "This tool enables you to view and compare the ESG policies of superfunds in the Australian market.<br>" +
    "You can edit your search settings using the sidebar on the left of the screen.<br>" +
    "Select any superfunds you are interested in, then select any areas of concern to see each fund's respective policies on them." +
    "<br><br>Each superfund is given a rating based on its policies in each area of concern:" +
    "<br>" + generateRatingIconHelp(3) + " Above average" + 
    "<br>" + generateRatingIconHelp(2) + " Average" + 
    "<br>" + generateRatingIconHelp(1) + " Below average" + 
    "<br>" + generateRatingIconHelp(0) + " No policies could be found" + 
    concernDescriptions +
    "</div>" + document.getElementById("content-area").innerHTML;

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
 * @param {*} superfundData The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} concernData The array of markets of concern received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determing what markets of concern will appear in the content area.
 * @returns The content of the sidebar to use for injection by other functions.
 */
const generateSidebar = (superfundData, concernData, selectedSuperfunds, selectedConcerns) => {
    return "<form id=\"sidebar\">" +
        "<div id=\"superfund-list\" class=\"sidebar-list\">" +
            "<p class=\"sidebar-category-heading\">Super Funds</p>" +
            generateSuperfundList(superfundData, selectedSuperfunds) +
        "</div>" +
        "<div id=\"area-concern-list\" class=\"sidebar-list\">" +
            "<p class=\"sidebar-category-heading\">Areas of Concern</p>" +
            generateConcernList(concernData, selectedConcerns) +
        "</div>" +
        "<button id=\"clear-button\" type=\"button\">Clear Search</button>" +
    "</form>";
}

/**
 * Generate a list of checkboxes representing super funds for the sidebar.
 * 
 * @param {*} superfundData The array of super funds received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 *  Used to determine what super funds will appear in the content area.
 * @returns A list of checkboxes representing the various super funds.
 */
const generateSuperfundList = (superfundData, selectedSuperfunds) => {
    let result = "";
    let numFunds = 0;
    for (const superfund of superfundData) {
        let tag = superfund._id;
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
        let image = "<img src=" + imageURL + superfund.fundLogo.formats.thumbnail.url + " class=\"sidebar-icon\">";

        let label = "<label for=\"" + tag + "\">" + image + superfund.shortName + "</label>";
        result += input + label + "<br>";
        numFunds += 1;
    }
    return result;
}

/**
 * Generate a list of checkboxes representing areas of concern for the sidebar.
 * 
 * @param {*} concernData The array of areas of concern received from main.js. 
 *  Used to generate the content of the site.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 *  Used to determine what markets of concern will appear in the content area.
 * @returns A list of checkboxes representing the various markets of concern.
 */
const generateConcernList = (concernData, selectedConcerns) => {
    console.log(concernData);
    let result = "";
    let numConcerns = 0;
    for (const concern of concernData) {
        let tag = concern._id;
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
        let image = "<img src=" + imageURL + concern.icon.url + " class=\"sidebar-icon\">";
            
        let label = "<label for=\"" + tag + "\">" + image + concern.shortName + "</label>";
        result += input + label + "<br>";
        numConcerns += 1;
    }
    return result;
}

/**
 * Generate the content of the site as a list of info cards on each selected superfund.
 * 
 * @param {*} superfundData The array of super funds received from main.js. 
 * @param {*} concernData The array of super funds received from main.js. 
 * @param {*} selectedSuperfunds The array of selected super funds received from main.js.
 * @param {*} selectedConcerns The array of selected markets of concern received from main.js.
 */
const generateContent = (superfundData, concernData, selectedSuperfunds, selectedConcerns) => {
    let cards = "";
    for (let i = 0; i < superfundData.length; i++) {
        if (selectedSuperfunds[i] == 1) {
            cards += generateFundCard(superfundData[i], concernData, selectedConcerns);
        }
    }
    if (cards == "") {
        return "<div class=\"content-block\" id=\"welcome-page\">" + 
        "<img src = \"" + imageURL + "/uploads/landscape_urbanpark_b7b4f5fde0.png\" id=\"welcome-image\">" +
        "<br><div class=\"content-block-subheading\">Welcome to the BT Financial ESG Comparison Tool.</div>" +
        "<br><div class=\"welcome-content\">Each industry in the market has varying levels of controversy. " +
        "Some superfunds avoid investing in particularly controversial industries so that they can be seen as more ethically aware than their competitors. " + 
        "A superfund's ESG (Environmental, Social and Governance) policies outline which industries each superfund will avoid investing in." +
        "<br><br>This ESG comparison tool allows consumers to view the respective ESG policies of superfunds in the Australian market, " + 
        "so that they can make more informed decisions when choosing a superfund." +
        "<br><br>To begin your search, select some superfunds and areas of concern in the sidebar on the left-side of your screen." +
        "</div>";
    }
    return cards;
}

/**
 * Generates html code for the given superfund's info card.
 * 
 * @param {*} superfund The superfund to create an info card for.
 * @param {*} concernList A list of all markets of concern.
 * @param {*} selectedConcerns A list of all markets of concern that are currently selected.
 */
const generateFundCard = (superfund, concernData, selectedConcerns) => {
    let result = "<div id=\"fund-card\" class=\"content-block\">" +
    "<div class=\"content-block-heading\">" + "<img src=" + imageURL + superfund.fundLogo.formats.thumbnail.url + " class=\"superfund-icon\">" +
     superfund.longName + "</div>" +
    "<div>" + superfund.fundIntro + "</div><br>";
    for (let i = 0; i < concernData.length; i++) {
        if (selectedConcerns[i] == 1) {
            let id = superfund._id + "-subheading-" + i;
            result += "<div class=\"content-block-subheading\" id=\"" + id + "\">" + 
            "<img src=" + imgURL + concernData[i].icon.formats.thumbnail.url + " class=\"concern-icon\">" +  concernData[i].longName + generateRatingIcon(superfund, i) + "</div>" +
            "<div>" + superfund.concerns[i].desc + "</div><br>";
        }
    }
    return result + "</div>";
}

/**
 * Loads the respective rating icon for a given superfund and area of concern.
 * 
 * @param {*} superfund The superfund to load the rating icon for.
 * @param {*} concernNum The area of concern to load the rating icon for.
 * @returns HTML code for a rating icon.
 */
const generateRatingIcon = (superfund, concernNum) => {
    let rating = superfund.concerns[concernNum].rating;
    if (rating == 1) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/red_313d7b430b.png\">"
    }
    if (rating == 2) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/yellow_4bfb66e5b8.png\">"
    }
    if (rating == 3) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/green_f624adbd60.png\">"
    }
    return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/na_698c529ec3.png\">"
}

/**
 * Loads the respective rating icon for a given rating number.
 * 
 * @param {*} rating The rating number to load an icon for.
 * @returns HTML code for a rating icon.
 */
const generateRatingIconHelp = (rating) => {
    if (rating == 1) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/red_313d7b430b.png\">"
    }
    if (rating == 2) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/yellow_4bfb66e5b8.png\">"
    }
    if (rating == 3) {
        return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/green_f624adbd60.png\">"
    }
    return "<img class=\"concern-rating\" src=\"" + imageURL + "/uploads/na_698c529ec3.png\">"
}