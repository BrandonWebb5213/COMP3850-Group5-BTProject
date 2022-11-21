export {Model}; // export the data for use in main.js

let fundURL = "http://localhost:1337/funds"
let concernURL = "http://localhost:1337/concerns"

/**
 * Defines the data for each superfund and market of concern.
 */
const Model = {
    loadData: () => {
        fetch(fundURL)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((Data) => {
            Model.data.superfunds = Data;
            console.log(Model.data.superfunds)
            const event = new CustomEvent("fundModelUpdated");
            window.dispatchEvent(event);
        })

        fetch(concernURL)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((Data) => {
            Model.data.concerns = Data;
            console.log(Model.data.concerns)
            const event = new CustomEvent("concernModelUpdated");
            window.dispatchEvent(event);
        })
    },

    data: {
        superfunds: [],
        concerns: [],
    }
}