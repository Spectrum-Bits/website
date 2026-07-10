import { PageListener } from "./pagelistener.js";

function robotTemplate({ kicker, title, lead, details, body, mediaAlt, extra = "" }) {
    const detailItems = details.map(({ label, value }) => `
                <div>
                    <span>${label}</span>
                    <strong>${value}</strong>
                </div>`).join("")

    return `
<section class="robot-showcase">
    <div class="robot-copy">
        <p class="robot-kicker">${kicker}</p>
        <h1>${title}</h1>
        <p class="robot-lead">
            ${lead}
        </p>
        <div class="robot-details">
${detailItems}
        </div>
        ${extra}
        <p>
            ${body}
        </p>
    </div>
    <figure class="robot-media">
        <img src="../assets/placeholder.svg" alt="${mediaAlt}">
    </figure>
</section>
`
}

const TEAM_LIST = `
<div class="team-list" aria-label="Team members">
    <div class="team-row team-row-heading">
        <span>Name</span>
        <span>Role</span>
    </div>
    <div class="team-row">
        <span>Member 1</span>
        <span>Team Captain</span>
    </div>
    <div class="team-row">
        <span>Member 2</span>
        <span>Programming</span>
    </div>
    <div class="team-row">
        <span>Member 3</span>
        <span>Mechanical Design</span>
    </div>
    <div class="team-row">
        <span>Member 4</span>
        <span>Driver</span>
    </div>
</div>
`;

const ROBOTS_PAGE_MD = robotTemplate({
    kicker: "Current build preview",
    title: "SpectrumBits Competition Robot",
    lead: "This is the current state of the robot for the next FIRST Tech Challenge season.",
    details: [
        { label: "Name", value: "FTC YGA" },
        { label: "Focus", value: "Scoring consistency" },
        { label: "Status", value: "Testing and tuning" }
    ],
    body: "Please note that this is just a demo and the robot is still under development. The final version may differ from what is shown here.",
    mediaAlt: "Robot placeholder"
});

const TEAM_PAGE_MD = robotTemplate({
    kicker: "Team roster",
    title: "SpectrumBits Team",
    lead: "A simple roster view for team members and their roles.",
    details: [
        { label: "Season", value: "Current" },
        { label: "Format", value: "Name and role" },
        { label: "Status", value: "Ready to update" }
    ],
    extra: TEAM_LIST,
    body: "Replace these placeholder rows with the final team names and responsibilities when the roster is ready.",
    mediaAlt: "Team placeholder"
});

const CONTACT_PAGE_MD = robotTemplate({
    kicker: "Get in touch",
    title: "Contact SpectrumBits",
    lead: "Use this page for team contact details, sponsorship conversations, and event coordination.",
    details: [
        { label: "Email", value: "Add contact email" },
        { label: "Response", value: "Team inbox" },
        { label: "Purpose", value: "Questions and support" }
    ],
    body: "Add the final contact channels here once they are ready to publish.",
    mediaAlt: "Contact placeholder"
});

const CONTESTS_PAGE_MD = robotTemplate({
    kicker: "Competition log",
    title: "FTC Contests",
    lead: "Track the events, matches, and results for the current robotics season.",
    details: [
        { label: "Program", value: "FIRST Tech Challenge" },
        { label: "Events", value: "To be announced" },
        { label: "Results", value: "Coming soon" }
    ],
    body: "The contests page can grow into a season archive with schedules, awards, and match notes.",
    mediaAlt: "Contests placeholder"
});

const SPONSORS_PAGE_MD = robotTemplate({
    kicker: "Support the team",
    title: "SpectrumBits Sponsors",
    lead: "Highlight the organizations and people who help the team build, travel, and compete.",
    details: [
        { label: "Partners", value: "Coming soon" },
        { label: "Support", value: "Equipment and travel" },
        { label: "Contact", value: "Sponsor us" }
    ],
    body: "Add sponsor logos, benefits, and contribution details here as the sponsor program is finalized.",
    mediaAlt: "Sponsors placeholder"
});

const MENTORS_PAGE_MD = robotTemplate({
    kicker: "Guidance",
    title: "SpectrumBits Mentors",
    lead: "Recognize the mentors who support engineering, programming, strategy, and outreach.",
    details: [
        { label: "Engineering", value: "Build support" },
        { label: "Software", value: "Code reviews" },
        { label: "Strategy", value: "Match planning" }
    ],
    body: "This page can list mentor names, specialties, and short notes about their contributions.",
    mediaAlt: "Mentors placeholder"
});

function handleListener() {
    
    let pl;

    if (!window.pageListener) {
        pl = new PageListener();
        pl.createPage('/contact/', CONTACT_PAGE_MD)
        pl.createPage('/contests/', CONTESTS_PAGE_MD)
        pl.createPage('/sponsors/', SPONSORS_PAGE_MD)
        pl.createPage('/mentors/', MENTORS_PAGE_MD)
        pl.createPage('/team/', TEAM_PAGE_MD)
        pl.createPage('/robots/', ROBOTS_PAGE_MD)
    } else {
        pl = window.pageListener;
    }

    pl.listen();
}

handleListener();
