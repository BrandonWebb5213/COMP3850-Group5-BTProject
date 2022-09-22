export {infoPage, mainPage, missingPage};

function infoPage() {
    document.getElementById("content-area").innerHTML = "<div id=\"help-dialogue\" class=\"content-block\">" +
    "There will be some information about what the tool does. This includes an explanation of ESGs."
    "</div>";
    document.getElementById("help-control").innerHTML = "<a href=\".\/\"" +
        "class=\"help-icon\"" +
        "id=\"help-close-icon\"" + 
        "alt=\"close help menu\">?<div id=\"little-x\">x</div></a>"
}

function mainPage(targetId, superfundList, concernList, selectedSuperfunds, selectedConcerns) {
    document.getElementById(targetId).innerHTML = generateSidebar(superfundList, concernList, selectedSuperfunds, selectedConcerns) +
    "<article id=\"content-area\"><article>";
    document.getElementById("help-control").innerHTML = "<a href=\"./#!/info\"" +
        "class=\"help-icon\"" + 
        "alt=\"help information\">?</a>"
}

function missingPage(targetId) {
    document.getElementById(targetId).innerHTML = "This page does not exist.";
}

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
            "onchange=\"this.form.submit()\""+
            selected + ">";

        let label = "<label for=\"" + tag + "\">" + superfund + "</label>";
        result += input + label + "<br>";
        numFunds += 1;
    }
    return result;
}

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
            "onchange=\"this.form.submit()\"" +
            selected + ">";
            
        let label = "<label for=\"" + tag + "\">" + concern + "</label>";
        result += input + label + "<br>";
        numConcerns += 1;
    }
    return result;
}