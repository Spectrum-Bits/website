import { PageListener } from "./pagelistener.js";

function robotTemplate({ 
    kicker, 
    title, 
    lead, 
    details, 
    body, 
    mediaAlt, 
    mediaSrc = "../assets/robot.jpeg",
    extra = "" 
}) {
    const detailItems = details.map(({ label, value }) => `
                <div>
                    <span>${label}</span>
                    <strong>${value}</strong>
                </div>`).join("");

    return `
<style>
.robot-media {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
}

.robot-media img {
    width: 100%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
    display: block;
    border-radius: 16px;
}

.robot-details {
    display: grid;
    gap: 1rem;
}

.robot-details div {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.robot-details span {
    font-size: 0.8rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.robot-details strong {
    overflow-wrap: anywhere;
    word-break: break-word;
    font-size: 1rem;
}

.robot-details a {
    color: inherit;
    text-decoration: none;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition: color .2s ease;
}

.robot-details a:hover {
    color: #3b82f6;
    text-decoration: underline;
}
</style>

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

   <figure
    class="team-media"
    style="align-self:flex-start;margin-top:0;border-radius:16px;overflow:hidden;"
>
    <img
        src="${mediaSrc}"
        alt="${mediaAlt}"
        style="display:block;width:100%;height:100%;object-fit:cover;border-radius:16px;"
    >
</figure>
</section>
`;
}

const TEAM_LIST = `
<div class="team-list" aria-label="SpectrumBits Team Members">
<div class="team-row team-row-heading">
    <span>Name</span>
    <span>Role</span>
</div>

<!-- Leads -->
<div class="team-row">
    <span>Gabor Bogdan</span>
    <span>Lead Software + Hardware</span>
</div>

<div class="team-row">
    <span>Diosan Stefan</span>
    <span>Lead Hardware + Software</span>
</div>

<div class="team-row">
    <span>Cimpeni Eduard</span>
    <span>Lead PR</span>
</div>

<!-- Software -->
<div class="team-row">
    <span>Mateiu Vladimir</span>
    <span>Software + Hardware</span>
</div>

<div class="team-row">
    <span>Hopârtean Radu Alexandru</span>
    <span>Software</span>
</div>

<div class="team-row">
    <span>Vadan Filip</span>
    <span>Software + PR</span>
</div>

<!-- Hardware -->
<div class="team-row">
    <span>Chis Victor</span>
    <span>Hardware</span>
</div>

<!-- PR + Mixed -->
<div class="team-row">
    <span>Tarmure Vanessa</span>
    <span>PR + Hardware</span>
</div>

<div class="team-row">
    <span>Schiau Alex</span>
    <span>PR + Hardware</span>
</div>

<div class="team-row">
    <span>Opris Ingrid</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Lacusteanu Alex</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Magdaș Teodora-Diana</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Muresan David</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Manole Maria</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Pop Matei</span>
    <span>PR</span>
</div>

<div class="team-row">
    <span>Revnic Matei</span>
    <span>PR</span>
</div>
</div>
`;

const ROBOTS_PAGE_MD = robotTemplate({
    kicker: "2026 Competition Robot",
    title: "SpectrumBits FTC Robot",
    lead: "A demo image of our robot",
    details: [
        { label: "Robot Name", value: "FTC YGA" },
        { label: "Season", value: "2026–2027" }
    ],
    body: `
Our current robot is still under development, we are in the process of testing and iterating.
`,
    mediaSrc: "../assets/robot.jpeg",
    mediaAlt: "SpectrumBits FTC Robot"
});

const TEAM_PAGE_MD = robotTemplate({
    kicker: "Meet the Team",
    title: "SpectrumBits Members",
    lead: "List of our Team Members and their roles within the team.",
    details: [
        { label: "Season", value: "2026–2027" },
        { label: "Program", value: "FIRST Tech Challenge" },
        // { label: "Status", value: "Recruiting & Building" }
    ],
    extra: TEAM_LIST,
    body: `
`,
    mediaSrc: "../assets/team.jpeg",
    mediaAlt: "SpectrumBits Team"
});

const CONTACT_PAGE_MD = robotTemplate({
    kicker: "Get in Touch",
    title: "Contact SpectrumBits",
    lead: "Are you interested in learning more about our team or even joining us as a sponsor? Check out our contact info!",
    details: [
        {
            label: "Email",
            value: `<a href="mailto:spectrum.bits@spectrum.ro">spectrum.bits@spectrum.ro</a>`
        },
        {
            label: "Instagram",
            value: `<a href="https://instagram.com/spectrumbits" target="_blank" rel="noopener">@spectrumbits</a>`
        },
        {
            label: "LinkedIn",
            value: `<a href="https://www.linkedin.com/in/spectrum-bits-29155b3b7?" target="_blank" rel="noopener">@spectrum-bits</a>`
        },
        {
            label: "Facebook",
            value: `<a href="https://www.facebook.com/profile.php?id=61582144958171" target="_blank" rel="noopener">@spectrum-bits</a>`
        },
        // {
        //     label: "Location",
        //     value: "Romania"
        // }
    ],
    body: "",
    mediaSrc: "../assets/phone.avif",
    mediaAlt: "SpectrumBits Contact"
});
const CONTESTS_PAGE_MD = robotTemplate({
    kicker: "Contests",
    title: "FTC",
    lead: "We are currently preparing for the 2026-2027 season of FTC",
    details: [
        { label: "League", value: "FIRST Tech Challenge" },
        { label: "Season", value: "2026–2027" },
        { label: "Results", value: "Coming Soon" }
    ],
    body: `
    Our main goal until the start of the season is to design, build, iterate and test our robot to ensure it is ready for the competition
`,
    mediaSrc: "../assets/contest.jpg",
    mediaAlt: "FTC Competitions"
});

const SPONSOR_LIST = `
<div class="team-list" aria-label="SpectrumBits Sponsors">
    <div class="team-row team-row-heading">
        <span>Sponsor Name</span>
       <!-- <span>Contribution</span> -->
    </div>

    <div class="team-row">
        <span>WEASWEB</span>
        <!-- <span>Main Partner</span> -->
    </div>

    <div class="team-row">
        <span>REVNIC, CRISTIAN & ASOCIAȚII</span>
        <!-- <span>Equipment Support</span> -->
    </div>

    <div class="team-row">
        <span>Napoca Invest Construct</span>
        <!-- <span>Travel Support</span> -->
    </div>
</div>
`;

const SPONSORS_PAGE_MD = robotTemplate({
    kicker: "Supporting Innovation",
    title: "Our Sponsors",
    lead: "These organizations provide us with financial support to help us further develop our robot.",
    details: [],
    extra: SPONSOR_LIST,
    body: "",
    mediaSrc: "../assets/paper.jpg",
    mediaAlt: "SpectrumBits Sponsors"
});

const MENTOR_LIST = `
<div class="team-list" aria-label="SpectrumBits Mentors">
    <div class="team-row team-row-heading">
        <span>Name</span>
    </div>

    <div class="team-row">
        <span>Oguz Salgur</span>
    </div>
</div>
`;

const MENTORS_PAGE_MD = robotTemplate({
    kicker: "Experience Matters",
    title: "Mentors",
    lead: "Mentors help us in the early and late stages of development by sharing their previous experience with us.",
    details: [],
    extra: MENTOR_LIST,
    body: "",
    mediaSrc: "../assets/programming.avif",
    mediaAlt: "SpectrumBits Mentors"
});

function handleListener() {

    let pl;

    if (!window.pageListener) {

        pl = new PageListener();

        pl.createPage("/contact/", CONTACT_PAGE_MD);
        pl.createPage("/contests/", CONTESTS_PAGE_MD);
        pl.createPage("/sponsors/", SPONSORS_PAGE_MD);
        pl.createPage("/mentors/", MENTORS_PAGE_MD);
        pl.createPage("/team/", TEAM_PAGE_MD);
        pl.createPage("/robots/", ROBOTS_PAGE_MD);

    } else {

        pl = window.pageListener;

    }

    pl.listen();
}

handleListener();