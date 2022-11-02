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
                name: "Australian",
                desc: "A short description of the fund...",
                icon: "images/logos/australiansuper.png",
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
                name: "Aware",
                desc: "A short description of the fund...",
                icon: "images/logos/aware.png",
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
                name: "QSuper",
                desc: "A short description of the fund...",
                icon: "images/logos/qsuper.png",
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
                name: "UniSuper",
                desc: "A short description of the fund...",
                icon: "images/logos/unisuper.png",
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
                name: "Colonial",
                desc: "A short description of the fund...",
                icon: "images/logos/colonial.png",
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
                name: "MLC",
                desc: "A short description of the fund...",
                icon: "images/logos/mlc.png",
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
                id: "fund6",
                name: "MSBF",
                desc: "A short description of the fund...",
                icon: "images/logos/military.png",
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
                id: "fund7",
                name: "Rest",
                desc: "A short description of the fund...",
                icon: "images/logos/rest.png",
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
                id: "fund8",
                name: "HESTA",
                desc: "A short description of the fund...",
                icon: "images/logos/hesta.png",
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
                id: "fund9",
                name: "Cbus",
                desc: "A short description of the fund...",
                icon: "images/logos/cbus.png",
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
                id: "fund10",
                name: "AMP",
                desc: "A short description of the fund...",
                icon: "images/logos/amp.png",
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
                id: "fund11",
                name: "Hostplus",
                desc: "A short description of the fund...",
                icon: "images/logos/hostplus.png",
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
                id: "fund12",
                name: "CSC",
                desc: "A short description of the fund...",
                icon: "images/logos/csc.png",
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
                id: "fund13",
                name: "MyNorth",
                desc: "A short description of the fund...",
                icon: "images/logos/north.png",
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
                id: "fund14",
                name: "MLC",
                desc: "A short description of the fund...",
                icon: "images/logos/mlc.png",
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
                id: "fund15",
                name: "ANZ",
                desc: "A short description of the fund...",
                icon: "images/logos/anz.png",
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
                id: "fund16",
                name: "Equipsuper",
                desc: "A short description of the fund...",
                icon: "images/logos/equip.png",
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
                id: "fund17",
                name: "IOOF",
                desc: "A short description of the fund...",
                icon: "images/logos/ioof.png",
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
                id: "fund18",
                name: "Mercer",
                desc: "A short description of the fund...",
                icon: "images/logos/mercer.png",
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
                id: "fund19",
                name: "Spirit",
                desc: "A short description of the fund...",
                icon: "images/logos/spirit.png",
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
                id: "fund20",
                name: "Care",
                desc: "A short description of the fund...",
                icon: "images/logos/care.png",
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