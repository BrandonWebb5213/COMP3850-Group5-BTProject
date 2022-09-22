export {infoPage, mainPage, missingPage};

function infoPage(targetId) {
    document.getElementById(targetId).innerHTML = "info";
}

function mainPage(targetId) {
    document.getElementById(targetId).innerHTML = generateSidebar();
}

function missingPage(targetId) {
    document.getElementById(targetId).innerHTML = "This page does not exist.";
}

const generateSidebar = () => {
    return "<div id=\"sidebar\">" +
        "<div id=\"super-fund-list\">" +
            "<p class=\"sidebar-category-heading\">Super Funds</p>" +
            generateSuperList() +
        "</div>" +
        "<div id=\"area-concern-list\">" +
            "<p class=\"sidebar-category-heading\">Areas of Concern</p>" +
            generateConcernList() +
        "</div>" +
    "</div>";
}

const generateSuperList = () => {
    return "<ul>" +
        "<li>Fund 1</li>" +
        "<li>Fund 2</li>" +
        "<li>Fund 3</li>" +
        "<li>Fund 4</li>" +
        "<li>Fund 5</li>" +
        "<li>Fund 6</li>" +
    "</ul>"
}

const generateConcernList = () => {
    return "<ul>" +
        "<li>Concern 1</li>" +
        "<li>Concern 2</li>" +
        "<li>Concern 3</li>" +
        "<li>Concern 4</li>" +
        "<li>Concern 5</li>" +
        "<li>Concern 6</li>" +
    "</ul>"
}