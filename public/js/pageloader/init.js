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

function teamRosterTemplate({ kicker, title, lead, prMembers, engMembers }) {

    const memberCard = ({ name, role, photo, lead: isLead, mentor: isMentor }) => {
        const isPlaceholder = photo.endsWith("SpectrumBits.jpg");
        return `
                <article class="member-card${isLead ? " is-lead" : ""}">
                    <div class="member-avatar-wrap">
                        <img class="member-avatar${isPlaceholder ? "" : " member-avatar-photo"}" src="${photo}" alt="${name}">
                    </div>
                    <h3 class="member-name">${name}</h3>
                    <p class="member-role">${role}</p>
                    ${isLead ? '<span class="lead-badge">Lead</span>' : ""}
                    ${isMentor ? '<span class="mentor-badge">Mentor</span>' : ""}
                </article>`;
    };

    return `
<style>
.team-columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 2.5rem;
    width: 100%;
    text-align: left;
    margin-top: 2rem;
}

.team-column-title {
    font-size: 1.35rem;
    font-weight: 900;
    color: var(--second);
    text-transform: uppercase;
    letter-spacing: .03em;
    margin-bottom: 1.25rem;
    padding-bottom: .5rem;
    border-bottom: 2px solid rgba(109,40,217,.12);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 1rem;
}

.member-card {
    background: rgba(255,255,255,.8);
    border: 1px solid rgba(109,40,217,.08);
    backdrop-filter: blur(10px);
    border-radius: 14px;
    padding: 1rem .75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: .25s ease;
}

.member-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,.08);
}

.member-card.is-lead {
    border-color: var(--third);
    box-shadow: 0 0 0 2px rgba(250,204,21,.4);
}

.member-avatar-wrap {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    overflow: hidden;
    background: #f4f0ff;
    border: 2px solid rgba(109,40,217,.15);
    margin-bottom: .65rem;
    flex-shrink: 0;
}

.member-avatar {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
}

.member-avatar-photo {
    transform: scale(1.35);
    transform-origin: 50% 20%;
}

.member-name {
    font-size: .92rem;
    font-weight: 800;
    color: var(--ink);
    margin-bottom: .2rem;
}

.member-role {
    font-size: .68rem;
    color: #71717a;
    text-transform: uppercase;
    letter-spacing: .02em;
    margin-bottom: .4rem;
}

.lead-badge,
.mentor-badge {
    display: inline-block;
    font-size: .62rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .03em;
    padding: .2rem .55rem;
    border-radius: 999px;
}

.lead-badge {
    background: var(--third);
    color: #3f3f46;
}

.mentor-badge {
    background: var(--second);
    color: #fff;
}

@media (max-width: 800px) {
    .team-columns {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .team-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<section style="width:100%;text-align:left;">
    <p class="robot-kicker" style="text-align:center;">${kicker}</p>
    <h1 style="text-align:center;">${title}</h1>
    <p class="robot-lead" style="text-align:center;">
        ${lead}
    </p>

    <div class="team-columns">
        <div class="team-column">
            <h2 class="team-column-title">Public Relations</h2>
            <div class="team-grid">${prMembers.map(memberCard).join("")}
            </div>
        </div>
        <div class="team-column">
            <h2 class="team-column-title">Engineering</h2>
            <div class="team-grid">${engMembers.map(memberCard).join("")}
            </div>
        </div>
    </div>
</section>
`;
}

const PR_MEMBERS = [
    { name: "Cimpeni Eduard", role: "PR", photo: "../assets/mugshots/Cimpeni_Eduard.jpg", lead: true },
    { name: "Revnic Matei", role: "PR", photo: "../assets/mugshots/Revnic_Matei.jpg" },
    { name: "Tarmure Vanessa", role: "PR", photo: "../assets/mugshots/Tarmure_Vanessa.jpg" },
    { name: "Opris Ingrid", role: "PR", photo: "../assets/mugshots/Opris_Ingrid.jpg" },
    { name: "Lacusteanu Alex", role: "PR", photo: "../assets/mugshots/Lacusteanu_Alex.jpg" },
    { name: "Magdaș Teodora-Diana", role: "PR", photo: "../assets/SpectrumBits.jpg" },
    { name: "Muresan David", role: "PR", photo: "../assets/mugshots/Muresan_David.jpg" },
    { name: "Manole Maria", role: "PR", photo: "../assets/SpectrumBits.jpg" },
    { name: "Pop Matei", role: "PR", photo: "../assets/SpectrumBits.jpg" },
];

const ENGINEERING_MEMBERS = [
    { name: "Gabor Bogdan", role: "Software + Hardware", photo: "../assets/mugshots/Gabor_bogdan.jpg", lead: true },
    { name: "Diosan Stefan Andrei", role: "Hardware + Software", photo: "../assets/mugshots/Diosan_Stefan_Andrei.jpg", lead: true },
    { name: "Mateiu Vladimir", role: "Software + Hardware", photo: "../assets/SpectrumBits.jpg" },
    { name: "Hopârtean Radu Alexandru", role: "Software", photo: "../assets/SpectrumBits.jpg" },
    { name: "Vadan Filip", role: "Software + PR", photo: "../assets/mugshots/Vadan_Filip.jpg" },
    { name: "Chis Victor", role: "Hardware", photo: "../assets/mugshots/Chis_Victor.jpg" },
    { name: "Schiau Alex", role: "PR + Hardware", photo: "../assets/mugshots/Schiau_Alex1.jpg" },
    { name: "Hrusca Marc", role: "Hardware", photo: "../assets/mugshots/Hrusca_Marc.jpg" },
];

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

const TEAM_PAGE_MD = teamRosterTemplate({
    kicker: "Meet the Team",
    title: "SpectrumBits Members",
    lead: "Meet the people behind SpectrumBits, organized by department.",
    prMembers: PR_MEMBERS,
    engMembers: ENGINEERING_MEMBERS
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
