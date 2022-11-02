export {Model}; // export the data for use in main.js

let baseURL = "http://localhost:1337/funds"    //once the webdomain is setup we will change this to pull from there


/**
 * Defines the data for each superfund and market of concern.
 * When the backend has been integrated, the data will be fetched from there and not defined here.
 */
const Model = {
    loadData: () => {
        fetch(baseURL)
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((Data) => {
            Model.funds.superfunds = Data;
            console.log(Model.funds.superfunds)
            const event = new CustomEvent("modelUpdated");
            window.dispatchEvent(event);
        })
    },
    
    funds: {
        superfunds: []
    },

    data: {
        superfunds: [
            {
                id: "fund0",
                name: "Fund 0",
                desc: "A short description of the fund...",
                icon: "images/icons/executivepay.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund1",
                name: "Fund 1",
                desc: "A short description of the fund...",
                icon: "images/icons/bribery.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 1,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund2",
                name: "Fund 2",
                desc: "A short description of the fund...",
                icon: "images/icons/boarddiversity.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 2,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund3",
                name: "Fund 3",
                desc: "A short description of the fund...",
                icon: "images/icons/whistle.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 3,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund4",
                name: "Fund 4",
                desc: "A short description of the fund...",
                icon: "images/icons/healthsafety.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund5",
                name: "Fund 5",
                desc: "A short description of the fund...",
                icon: "images/icons/airandwater.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern1",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern2",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern3",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern4",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern5",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
        ],
        concerns: [
            {
                id: "concern0",
                name: "Concern 0",
                desc: "A short description of the concern...",
                icon: "images/icons/world.png",
            },
            {
                id: "concern1",
                name: "Concern 1",
                desc: "A short description of the concern...",
                icon: "images/icons/taxes.png",
            },
            {
                id: "concern2",
                name: "Concern 2",
                desc: "A short description of the concern...",
                icon: "images/icons/renewable.png",
            },
            {
                id: "concern3",
                name: "Concern 3",
                desc: "A short description of the concern...",
                icon: "images/icons/humanrights.png",
            },
            {
                id: "concern4",
                name: "Concern 4",
                desc: "A short description of the concern...",
                icon: "images/icons/labourstandards.png",
            },
            {
                id: "concern5",
                name: "Concern 5",
                desc: "A short description of the concern...",
                icon: "images/icons/war.png",
            },
        ],
    }
}