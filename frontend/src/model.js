export {Model}; // export the data for use in main.js

let baseURL = "http://localhost:1337/funds"    //once the webdomain is setup we will change this to pull from there
baseURL = "funds.json";

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
                longName: "Australian Super",
                desc: "Australian super is heavily invested in offering the application of ESG when super is invested with them. Australian super is focused largely on the environmental and social issues as they believe that these factors pose the greatest risks and opportunities to their members investment outcomes.\nSuch factors include board climate change, workplace practices, diversity, plastics, and the circular economy, etc. Australian Super are particularly focused on achieving net-zero carbon emissions in their investment portfolio by 2050 in which they also expect all companies they invest in to implement the same strategy as well.\nThey also place a spotlight on the reviewal of modern-day slavery and its labour chain risks focusing on ethical and transparent workplace practices in companies they invest in. The fund is a founding member of Investors Against Slavery and Trafficking in which it aims to have companies reassess and clean their operations and supply chains.\"",
                icon: "images/logos/australiansuper.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "Policy excerpt:\n\"AustralianSuper has made a commitment to achieve net zero carbon emissions by 2050 in the investment portfolio. This is in line with international scientific consensus on reducing the economic and social impacts of climate change. It's consistent with our objective of helping members achieve their best possible retirement outcome.\"\n\nReporting bodies, memberships, signatories\nAustralian Industry Energy Transitions Initiative\nFounding member of Climate Action 100+\nUN’s Principles for Responsible Investment\nInvestor Group on Climate Change\nThe Investor Agenda\"",
                        rating: 3,
                    },
                    {
                        id: "concern1",
                        desc: "Policy excerpt:\n\"AustralianSuper currently invests in a range of renewable energy projects across markets. We plan to have investments of over $1 billion in the sector by the end of 2022. We expect this allocation to increase over time.\"\n\nReporting bodies, memberships, signatories\nAustralian Industry Energy Transitions Initiative\nFounding member of Climate Action 100+\nUN’s Principles for Responsible Investment\nInvestor Group on Climate Change\nThe Investor Agenda\"",
                        rating: 3,
                    },
                    {
                        id: "concern2",
                        desc: "Policy excerpt:\n\"AustralianSuper believes that gender diversity at board level is an essential element of good corporate governance and can positively impact on long-term investment outcomes.\nAccordingly, AustralianSuper has implemented a board gender diversity voting approach for companies in the S&P/ASX 200 index. AustralianSuper votes against certain directors eligible for re-election in S&P/ASX 200 companies with fewer than two female directors which have not made a commitment to rectify the issue within a reasonable timeframe.\"\n\n\nReporting bodies, memberships, signatories\nWorkplace Gender Equality Agency\"",
                        rating: 3,
                    },
                    {
                        id: "concern3",
                        desc: "Statement excerpt:\n\"In 2016, The Ethics Centre conducted a review of our culture. The primary objective was testing whether our policies, procedures and day-to-day practices align with our purpose, values and principles.\n\nPleasingly, the review found a positive and constructive culture, aligned to our purpose, values and principles. They also found our overarching principle - ‘members first’ - is well understood, powerful and practical in guiding our organisation.\"\n\nReporting bodies, memberships, signatories\nChampions of Change Coalition\nThe Ethics Centre\"",
                        rating: 3,
                    },
                    {
                        id: "concern4",
                        desc: "Policy excerpt:\n\"Our Active Owner Program aims to ensure remuneration frameworks deliver appropriate pay for performance outcomes, reasonable pay levels and transparent disclosure.\nAn important part of this is ensuring the right long-term value creation mechanisms are in place and value is fairly distributed.\n\nThree principles guide our voting decisions on remuneration.\nIt aligns senior executives with the delivery of the company’s business strategy and maximises long term value.\nIt’s cost effective and not excessive.\nIts structure is not unduly complex and appropriate disclosures are made to assist shareholder understanding\"",
                        rating: 3,
                    },
                    {
                        id: "concern5",
                        desc: "Policy excerpt:\n\"For the 2021 financial year (FY2021), AustralianSuper paid approximately $3 billion of income tax on behalf of our members in Australia – making AustralianSuper one of Australia’s largest taxpayers. In addition, AustralianSuper pays taxes all over the world in respect of our global investments and activities. \n\nAustralianSuper is pleased to publish this tax transparency report for its fifth year adopting the federal government’s Voluntary Tax Transparency Code (the Code). \n\nWhilst the specific requirements of the Code do not extend to include superannuation funds, AustralianSuper recognises the importance of transparent disclosure and is pleased to provide our members and other interested parties with insight into: \nAustralianSuper’s strategic tax objectives; \nAustralianSuper’s approach to tax risk management and governance in support of these objectives; and \nThe significant contribution that AustralianSuper and our members make to taxes paid in Australia and in other locations around the globe.\"  \n",
                        rating: 3,
                    },
                    {
                        id: "concern6",
                        desc: "Policy excerpt \n\"AustralianSuper expects the highest standards of behaviour from all employees, Directors and Committee Members. These standards are embodied in AustralianSuper’s four key values (excellent outcomes, integrity, generosity of spirit and energy) and fundamental ‘Members First’ focus.\nAll employees, Directors (including alternates) and Committee Members have a responsibility to ensure that these values are upheld and to report matters that involve Improper Conduct within the organisation.\nAustralianSuper values an open and transparent environment for reporting Improper Conduct. AustralianSuper regards whistleblower disclosures as serious and will take all reasonable steps to protect and support people who report responsible disclosures. AustralianSuper will not tolerate detrimental treatment of any person who has madea report of Improper Conduct under this Policy.\"\n\nPositives\nSeveral internal and external reporting mechanisms\nEmergency and public interest  reporting procedures\nClear statement on confidentiality of the Reporter\n\nReporting bodies, memberships, signatories\nSTOPline\nASIC\nAPRA\nWorkforce Disclosure Initiative\n\n",
                        rating: 3,
                    },
                    {
                        id: "concern7",
                        desc: "Policy excerpt:\n\"AustralianSuper’s Innovate Reconciliation Action Plan (RAP) is a step in the journey towards helping all Australians live well in retirement.  \n\nOur RAP outlines Fund initiatives to support Aboriginal and Torres Strait Islander members. It also aims to build relationships with Aboriginal and Torres Strait Islander businesses and community service providers.\"\n\nPositives\nActive plan with current aims and future goals\nDocument is reviewed bi-annually\n\nReporting bodies, memberships, signatories\nUluru Statement from the Heart\n",
                        rating: 3,
                    },
                    {
                        id: "concern8",
                        desc: "Policy excerpt:\n\"We integrate labour supply chain and human rights considerations into the equity investment process and identify sectors where these issues can materially affect value.\nA good example of this is the consumer discretionary sector. We assess and score the companies in these sectors on the management of their labour supply chain. This assessment forms part of our decision to invest or not invest.\nWe monitor the integration of these issues by external fund managers who invest on our behalf. We review them on an ongoing basis regarding their management of various ESG issues, including labour supply chain risk\"\n\nReporting bodies, memberships, signatories\nWorkforce Disclosure Initiative\nUN's Principles for Responsible Investors\n",
                        rating: 3,
                    },
                    {
                        id: "concern9",
                        desc: "Policy excerpt:\n\"By actively addressing modern slavery and collaborating with other investors and civil society, we are seeking to contribute to the mitigation of modern slavery risk for some of the most vulnerable people globally.Highlights from our work in FY21 include:\nContinuation of a comprehensive company engagement program prioritising increased disclosure of how businesses are addressing modern slavery risks and gaining an in-depth understanding of company supply chains and supplier relationships.",
                        rating: 3,
                    },
                ],
            },
            {
                id: "fund1",
                name: "Aware",
                longName: "Aware Super",
                desc: "Aware Super integrates ESG issues into their portfolios as it supports the long-term returns of their members and helps build positive outcomes for the community, economy, and the environment.\nAware focuses primarily on environmental issues such as climate change and pollution as well as social and governance issues such as diversity and inclusion, workplace health and safety and board transparency.\nClimate change is the key focus of Aware Super’s ESG assessment as it poses the biggest financial risk to the portfolios and members retirement savings over the long term. Aware has recently announced they had separated from companies under their investments that derive more than 10 percent of their revenue from thermal coal resources. \nThey are also part of ESG initiatives such as Carbon and Water disclosure projects which are aimed at understanding the risks and opportunities of these issues on the world. Furthermore, they also focus on investors against modern day slavery and the 40:40 vision which aims to achieve gender balance within companies comprising of 40% women and men and 20% any gender.",
                icon: "images/logos/aware.png",
                concerns: [
                    {
                        id: "concern0",
                        desc: "Policy excerpt:\n\"We actively consider the impact of climate change in our investment decisions and in the ongoing investment management of our fund. With our focus on climate change, we are driving long-term returns for our members, and having a positive impact on society and the environment more broadly. Since 2015, we’ve been formulating our climate change approach. Our Climate Change Portfolio Transition Plan (Transition Plan), was approved by the board in early 2020, providing a framework of recommendations and targets to help us navigate the large, systemic, and structural shifts that climate change requires\"",
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
                    {
                        id: "concern6",
                        desc: "Policy excerpt:  \n\"The Whistleblower Policy is an important tool for helping Aware Super identify wrongdoing that may not be uncovered unless there is a safe and secure means for disclosing the same. The Policy encourages employees (and applicable non-employees) who are aware of possible wrongdoing to have the confidence to speak up. The purpose of this document is:\nto encourage more disclosures of wrongdoing;\nto help deter wrongdoing, in line with the entity’s risk management and governance framework;\nto ensure individuals who disclose wrongdoing can do so safely, securely and with confidence that they will be\nprotected and supported;\nto ensure disclosures are dealt with appropriately and on a timely basis;\nto provide transparency around the entity’s framework for receiving, handling and investigating disclosures;\nto support the entity’s values, code of conduct and/or ethics policy;\nto support the entity’s long-term sustainability and reputation;\nto meet the entity’s legal and regulatory obligations\"",
                        rating: 3,
                    },
                    {
                        id: "concern7",
                        desc: "Policy excerpt:\n\"It is the responsibility of all Australians and organisations like ours to work towards achieving better outcomes for and with Aboriginal and Torres Strait Islander peoples. Achieving reconciliation is mutually beneficial in that it makes Australia a strong, culturally diverse society that enables Aboriginal and Torres Strait Islander and non-Indigenous Australians to participate equally and equitably in all areas of life. Aware Super’s first Reconciliation Action Plan (RAP) has been a long time in the making. While our team has always participated enthusiastically in National Reconciliation Week and NAIDOC Week activities, we are looking forward to taking this next step.\"",
                        rating: 3,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "Policy excerpt:\n\"Aware Super believes that respect for human rights is strongly associated with value chain resilience and a stable business operating environment. In parallel, Aware Super is increasingly aware of and concerned about the significant operational, financial, legal, and reputational risks portfolio companies may face when they fail to manage human rights risks. These business risks include potential project delays and cancellations, lawsuits and other legal risks such as non-compliance with emerging human rights-related regulations, scrutiny from national level grievance mechanisms such as OECD National Contact Points, significant fines, productivity and recruitment challenges, and negative press coverage. \nAware Super is mindful of the need to assess and act upon longer-term risks such as human rights risks in making and managing investments on behalf of our members.\"  \n\nReporting bodies, memberships, signatories\nAustralian Asset Owner Stewardship Code\"",
                        rating: 3,
                    },
                ],
            },
            {
                id: "fund2",
                name: "QSuper",
                longName: "QSuper",
                desc: "QSuper believes in integrating ESG as it leads to consistent and positive investment outcomes for their members. The company offers a socially responsible investment option which they manage in house and look for investments that bring upon positive influences on the issues their members care about.\nQSuper focuses their ESG initiatives on factors such as clean energy, food and water scarcity, medical technological innovation, and education to name a few. They avoid any investments having to do with factors such as fossil fuels, tobacco products, gambling, and adult entertainment. \nTheir commitment to their members regarding the SRI investment option include sharing the progress of the collective investments and the positive impacts it has achieved as well as collaborating and adapting to both member and company preferences and ideas leading into the future. \n",
                icon: "images/logos/qsuper.png",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund3",
                name: "UniSuper",
                longName: "UniSuper",
                desc: "UniSuper have held over 10 years of experience in incorporating ESG themed strategies and have maintained a commitment in which they will factor this responsibility in all their investment decisions.\nUniSuper focuses their ESG policies primarily on the global environmental scale and research technology sector holding a strong focus on climate risk. The company’s key commitments are to contribute a 45% reduction in Australia’s emissions by 2030 and to be the leader in the superannuation sector by achieving net-zero carbon emissions in their investments by 2050. \nCurrently UniSuper has a 100 percent net-zero property portfolio, have all their corporate operations as carbon neutral and have $12 billion in sustainable and environmental branded investment strategies. \nUniSuper also has a Uniseed which focuses on providing funding for research and technology that are developed by universities around Australia and the CSIRO. Such an example is the LM-Plus company which develops liquid metal technology that converts greenhouse gases into usable by-products. \n",
                icon: "images/logos/unisuper.png",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund4",
                name: "Colonial",
                longName: "Colonial First State",
                desc: "Colonial First State understands the moral and ethical expectations of its members and incorporates a range of ESG principle related investment decisions which are backed by their pillars including integrity, balance, transparency, and focus. \nCFS focuses primarily on four different ESG factors including environmental factors in relation to climate change, waste and pollution, social causes including health and safety, human rights, and Governance issues including fraud, corruption, and transparency. \nCFS places importance on its climate change factors as it incurs a financial risk which will have a social and economic impact on its long-term investments. The fund is committed to achieving a 30 percent reduction in greenhouse gas emissions by 2030 and aims to achieve net zero greenhouse gas emissions by 2050. \nCFS also focus on modern day slavery and continues to strengthen its processes with its suppliers to understand any possibly human rights impacts. The fund currently has agreements with more than 70 investment managers and undertakes a strict process in retrieving and understanding their operational and supply chain processes. \n",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund5",
                name: "MLC",
                longName: "MLC",
                desc: "MLC believes that ESG investing will provide the highest standards and put its members in a better position to attract long-term financial returns. \nMLC places importance on environmental factors assessing its risks and opportunities including evaluating factors such as pollution, deforestation, climate change and carbon emissions. In addition to this they aim to make a social impact regarding factors such as working conditions and employee engagement and governance issues including transparency behind the board structure, bribery, and corruption. \nAn example of this ESG initiative taken by MLC includes one of its largest holdings under Novo Nordisk, which supplies 50 percent of the world’s insulin, however over 550 million of its plastic injection pens were not being recycled. MLC pushed and incorporated a change within the company and today its injection pens are being recycled and converted into plastic tables and chairs for schools.\n",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund6",
                name: "Military",
                longName: "Military Superannuation and Benefits Fund No.1",
                desc: "MSBF consider the ESG policies as a non-traditional risk which have little tangibility in the short term but hold significant effects in the long-term viability that are relevant to their customers. \nMSBF focused their policies on improving and managing climate investment risk in which they were the first Australian super fund to form an invitation to the climate institution to assess their carbon footprint. They manage climate investment in 3 main ways including investments in renewable energy, supporting the transition away from coal usage and improving net portfolio of carbon footprint. In addition to this, they have also placed focus over modern slavery where the company takes important steps to identify the risks related to practice of modern slavery that are within their investment supply chain line. \nGems Education is a great example of an investment made by MSBF that focuses on improving various aspects of the ESG policies. They are the largest K-12 schools’ group and provide quality education to more than 150,000 students in more than 80 schools across Europe, UAE, and Saudi Arabia. They’ve also helped in improving the gender equality image in Saudi Arabia enforcing a 49:51 ratio of girls and boys within the schools. ",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund7",
                name: "Rest",
                longName: "RestSuper",
                desc: "Rest Super has been included as one of the responsive investment leaders by the RIAA with its efforts in investing into a more sustainable future and listening to their members' views regarding ESG factors.\nRest have maintained a long-term objective in achieving a net zero carbon footprint by 2050 and use a climate change transition risk analysis to determine climate related financial risks. The fund uses negative screening to exclude industries in their investment portfolio such as tobacco manufacturers, controversial weapons and listed thermal coal mining companies to keep in pace with a sustainable investment.\nSuch an example of Rest’s sustainable portfolio includes that of wind farms in both western Australia and North America helping source clean energy as well as acquiring an interest in the Long Beach container terminal. LBCT is amongst one of the world's greenest port terminals through using electricity to power their plant which includes the machinery in the workplace such as cranes and guided vehicles.\n",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund8",
                name: "HESTA",
                longName: "HESTA",
                desc: "Hesta focuses on responsible investing that’s based on protecting and growing the retirement savings of their members whilst trying to obtain a sustainable future based on ESG factors. \nHesta focus their investment decisions between planet and people sectors. Under the planet sector, they make decisions including climate change, affordable clean energy, reducing pollution and waste, etc, and under the people sector they invest in gender equality, affordable housing, human rights etc. Their investments in companies are backed through ensuring that they have strong diverse boards, good business ethics, fair remuneration and transparency. \nExamples of this approach include their newly launched 40:40 vision which is an initiative aimed to achieve gender balance in executive leadership across all companies by 2030. Furthermore, they have contributed to affordable housing projects through investments made in financing affordable housing developments in Melbourne for more than 100 Australians living with disabilities. ",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund9",
                name: "Cbus",
                longName: "Cbus Super",
                desc: "Cbus believes that responsible investing is a key pillar to their strategy in delivering a sustainable long-term financial creation and return for their members focusing on ESG risks and opportunities. \nCbus recognises climate change as an important factor in which they have performed a lot of work in addressing the risks and opportunities associated with it. The fund has maintained its target to achieve net zero carbon emissions by 2050 and have encouraged their active external fund managers to invest considering the climate change risk. Additionally, they have received the federal government certification for being carbon neutral in the 2018-19 financial year. \nCbus have further made commitments to their sustainable development goals through incorporating more factors in their investment decisions that will make a difference. These include achieving gender equality, advocating sustainable economic growth with productive employment, ensuring access to affordable and reliable energy for everyone, etc. ",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund11",
                name: "Hostplus",
                longName: "Hostplus",
                desc: "Hostplus super recognizes that the world is facing many challenges, hence they offer a socially responsible investment option for their members to address these challenges to achieve a sustainable future.  \nHostplus invests in companies that contribute towards the United Nations Sustainable Development Goals, which include companies that tackle and find solutions towards ESG factors. Such factors include climate change, renewable energy, medical solutions, green bonds, etc. A majority of the fund’s priority investments are companies that have adopted net zero 2050 emission targets with more companies setting short to long term targets for emission reductions. An example of this would be the partnership with Octopus Australia providing funding to its renewable energy platform including the Darlington Point Solar Farm which is Australia’s largest solar operational project. \nThe fund avoids investing into companies and projects that have fossil fuel reserves, human rights breaches, gambling, live animal export, etc. Additionally, companies involved in the manufacturing of controversial weapons such as biological, chemical and laser weapons will also be avoided with data supplied through ISS.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund12",
                name: "CSC",
                longName: "CSC Fund",
                desc: "CSC Fund have been pioneers in considering ESG issues and focus on delivering sustainable financial outcomes for their customers in the long term.\nCSC assess the ecosystems that businesses operate including factors such as climate change, pollution, modern slavery, geo-political tension, etc. The fund has investments in renewable assets such as hydroelectric, wind and solar facilities helping in building storage and production projects around Australia, New Zealand, and Europe. \nThe fund stays away from investments within companies who deal with any activity that is contrary to the Australian government regulations. These include illegal or controversial weapon manufacturing, tobacco related products and any company that derives 70% or more of their revenue from thermal coal production.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund13",
                name: "MyNorth",
                longName: "Wealth Personal Superannuation and Pension Fund (MyNorth Super)",
                desc: "MyNorth Super believes their investment decisions based on ESG factors will make a difference to the world as well as the future returns of their members.\nThe fund focuses on concerns such as climate change, carbon emissions, working conditions, human rights, executive pay and political lobbying to name a few. MyNorth Super has 3 forms of ESG investment integration including moderately conservative, balanced and moderately aggressive. These investment objectives are differentiated by the length of the term, the type of returns and its specific portfolios to match their members' choices. \nThe fund is committed to transitioning to a low carbon economy and encouraging a positive and sustainable environmental outlook for the community. Additionally, with the usage of screening and monitoring, MyNorth avoided any material investments in companies related to the production or handling of thermal coal, tobacco, gambling, and controversial weapons. ",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund14",
                name: "ANZ",
                longName: "Retirement Portfolio Service (ANZ Super)",
                desc: "ANZ focuses on integrating an ESG approach into their investment strategy to better serve their customers and generate long-term shareholder value.\nThe fund focuses its ESG approach in 4 areas including financial wellbeing, environmental sustainability, housing, and fair and responsible banking. ANZ are committed to the transition to net zero by 2050 and are looking to increase the use of renewable electricity and reduce the greenhouse gas emissions. The fund has set a target to facilitate $50 billion by 2025 to support the reduction in emissions as well as their partnerships with climate advisory firm Pollination to help capitalise on the opportunities present in this global economic shift.\nANZ also focuses on supporting human rights of their employees and members and as such hold the expectation that all their investments respect the same standards. The fund realises the risks involved in modern slavery within their chain of operations and are committed to identifying and eradicating it completely.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund15",
                name: "Equipsuper",
                longName: "Equipsuper",
                desc: "Equipsuper believes in responsible investment with consideration to ESG factors while maximising the retirement income of their members. \nThe fund focuses on issues such as climate change, Diversity, modern slavery, Remuneration, etc. Their approach to integrating climate change into investment decisions is based on a transition to a low carbon future which is in accordance with the Paris Agreement. The fund has committed to net zero emissions by 2050 and also ask companies under their portfolio to commit to the Paris Agreement which is seen under collaborations with companies such as AGL and Origin to incorporate these incentive hurdles. \nAdditionally, the fund also focuses on indigenous rights by understanding how companies work on a systematic level with the indigenous people, ever since Rio Tinto’s destruction of heritage sites such as the Juukan Gorge in Western Australia. Equipsuper are also signatories to the tobacco free pledge and hence exclude any investments related to tobacco manufacturers or products.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund16",
                name: "IOOF",
                longName: "IOOF Portfolio Service Superannuation Fund",
                desc: "IOOF believes in making positive contributions with their investment decisions helping their members in the long term whilst increasing focus on ESG action at the corporate level. \nThe fund focuses its investments based on factors such as climate change, water management, employee relations, labour standards, corruption, and political lobbying to name a few. IOOF look at climate change implications such as Europe’s ban on new petrol and diesel cars by 2035, rapid adoption of renewable energy that is translating into Australian farms with the usage of solar farms and Australia’s commitment towards achieving net zero emissions by 2050. \nTo help with these implications, IOOF makes decisions with the collaborative efforts from investment managers at the climate change investors group in order to assess the impacts and incorporate climate change into their investments. Additionally, they also have all the managers and companies under their portfolio risk assessed to go with their modern slavery policy to eliminate any factors associated with the risk.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund17",
                name: "Mercer",
                longName: "Mercer Super Trust",
                desc: "Mercer Super Trust believes in being ethical and factor ESG in their investment decisions to make a positive impact within the society and produce sustainable returns for their members.\nMercer focus their ESG implications on climate change, biodiversity, human rights, modern slavery, shareholder rights and executive remuneration to name a few. The fund has committed to achieving a reduction in carbon emissions by 45% by 2030 and have their target set on reaching net zero carbon emissions by 2050 for all their investment options. Additionally, Mercer screens and monitors all their investments related to human rights, labour, environmental and corruption issues under the United Nations Global Compact principles to ensure all investments made are sustainable. \nThe fund stays away from investments in companies manufacturing or advocating harm such as tobacco related products, alcohol, gambling, adult entertainment, and controversial weapons. Mercer have published several climate changes reports in relation to the company’s approach to sustainable investment and have recently published their first modern slavery disclosure on risk management.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund18",
                name: "Spirit",
                longName: "Spirit Super",
                desc: "Spirit super proactively manages and engages with ESG risks and opportunities in order to function a critical role in delivering long-term sustainable returns on their members super. \nThe fund is committed in achieving their 5 ESG priority targets which include allocating more than 15% of all their funds towards impact investments addressing socio-ecological issues, reduce their portfolios carbon footprint by cutting co2 emissions and fossil fuel reserves by 50% by 2030 and also investing 1.5 billion in small business by 2030. Additionally, they want to create 10,000 new skilled jobs within Australia with half of these opportunities being placed in regional Australia and ensuring that there will be an elimination of modern slavery within supply chains by 2030.\nAn example of their portfolio includes the investment Spirit made into Naturgy, a Spanish company utilizing energy assets across 20 countries. The company is transforming the renewable energy horizon through the incorporation of 5.2GW of wind, solar and hydroelectricity that is tackling the challenge of energy transition and it’s expected to grow the value of its assets in the global economy.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
            {
                id: "fund19",
                name: "Care",
                longName: "Care Super",
                desc: "Care Super invests for the long term and takes into consideration ESG factors in their decision making so that their member’s future is sustainable and profitable. \nThe fund is committed to achieving net zero carbon emissions across their investment portfolio by 2050 in line with the Paris Agreement in line to transition to a low carbon economy. The fund requires all companies they invest in to comply with their responsible investing policy and also work with leading industry bodies to gain knowledge and understanding on the awareness and implications of climate change which reflects on their investment decision making. \nCare Super also invests in companies and projects that contribute to improvement within the society including education, healthcare, renewable energy, and water-based management. The fund further offers their members to reduce or avoid any investments in relation to exposure of thermal coal and the company reduces its own greenhouse emissions through continually monitoring and improving energy efficiencies within their own workplaces.",
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
                    {
                        id: "concern6",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern7",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern8",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                    {
                        id: "concern9",
                        desc: "A summary on the fund's stance in this area...",
                        rating: 0,
                    },
                ],
            },
        ],
        concerns: [
            {
                id: "concern0",
                name: "Carbon",
                longName: "Carbon Management",
                desc: "A short description of the concern...",
                icon: "images/icons/carbon.png",
            },
            {
                id: "concern1",
                name: "Renewables",
                longName: "Renewable Energy",
                desc: "A short description of the concern...",
                icon: "images/icons/renewable.png",
            },
            {
                id: "concern2",
                name: "Diversity",
                longName: "Board Diversity",
                desc: "A short description of the concern...",
                icon: "images/icons/boarddiversity.png",
            },
            {
                id: "concern3",
                name: "Corp Culture",
                longName: "Corporate Culture",
                desc: "A short description of the concern...",
                icon: "images/icons/corporateculture.png",
            },
            {
                id: "concern4",
                name: "Executive Pay",
                longName: "Executive Pay",
                desc: "A short description of the concern...",
                icon: "images/icons/executivepay.png",
            },
            {
                id: "concern5",
                name: "Taxes",
                longName: "Tax Transparency",
                desc: "A short description of the concern...",
                icon: "images/icons/taxes.png",
            },
            {
                id: "concern6",
                name: "Whistleblowing",
                longName: "Whistleblowing",
                desc: "A short description of the concern...",
                icon: "images/icons/whistle.png",
            },
            {
                id: "concern7",
                name: "First Nations",
                longName: "First Nations Reconciliation",
                desc: "This area of concern covers the impacts that an organisation has on the indigenous people of a country. <br>It is crucial that organisations reduce their negative impacts on indigenous people and promote equality and positivity for indigenous people.",
                icon: "images/icons/firstnations.png",
            },
            {
                id: "concern8",
                name: "Human Rights",
                longName: "Human Rights",
                desc: "A short description of the concern...",
                icon: "images/icons/humanrights.png",
            },
            {
                id: "concern9",
                name: "Slavery",
                longName: "Modern Slavery",
                desc: "Slavery is often thought of as an issue of the past, but it never really went away. There are more people living in slavery around the world today than there have been at any point in history. Organisations should not be supporting this industry in any form, and should be focusing their efforts on freeing slaves around the world.",
                icon: "images/icons/slavery.png",
            },
        ],
    }
}