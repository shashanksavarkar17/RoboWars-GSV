import Aman from "./assets/Aman.jpg";
import Arpit from "./assets/Arpit.jpg";
import Pranjal from "./assets/Pranjal.png";
import Saurabh from "./assets/Saurabh.png";
import Shashank from "./assets/Shashank.jpg";
import Lehar from "./assets/Lehar.jpg";

import Img_01 from "./assets/Img_01.jpeg";
import Img_02 from "./assets/Img_02.jpeg";
import Img_03 from "./assets/Img_03.jpeg";
import Img_04 from "./assets/Img_04.jpeg";

export const timelineData = [
    {
        date: "11th Feb 2026",
        title: "Registration Opens",
        description: "Early bird registrations begin for all weight categories.",
        status: "Ongoing"
    },
    {
        date: "25th Feb 2026",
        title: "Registration Ends",
        description: "Early bird registrations begin for all weight categories.",
        status: "UPCOMING"
    },
    {
        date: "9th Mar 2026",
        title: "ROUND 1: Documentation, Bot Verification, and Technical Inspection Round",
        description: "Virtual orientation and rulebook clarification session.",
        status: "UPCOMING"
    },
    {
        date: "14th Mar 2026",
        title: "ROUND 2: Knockout Rounds and Grand Finale",
        description: "Knockout rounds and Grand Finale at the main arena.",
        status: "UPCOMING"
    }
];

export const organizersData = [
    {
        id: 1,
        name: "Arpit Srivastava",
        role: "Overlooking Co-ordinator - Robotics & Engg. Dwg. TechnoCrats GSV",
        work: "Event Head",
        image: Arpit,
        phone: "9696579460",
        email: "aman.choudhary_btech23@gsv.ac.in"
    },
    {
        id: 2,
        name: "Aman Choudhary",
        role: "Ex-Domain Head - Robotics & Engg. Dwg. TechnoCrats GSV",
        work: "Event Head",
        image: Aman,
        phone: "7987347287",
        email: "arpit.srivastava_btech23@gsv.ac.in"
    },
    {
        id: 3,
        name: "Pranjal Chaturvedi",
        role: "Domain Head - Robotics & Engg. Dwg. TechnoCrats GSV",
        work: "Event Head",
        image: Pranjal,
        phone: "7878330376",
        email: "pranjal.chaturvedi_btech24@gsv.ac.in"
    },
    {
        id: 4,
        name: "Shashank Savarkar",
        role: "Domain Co-ordinator Robotics & Engg. Dwg. TechnoCrats GSV",
        work: "Event Head",
        image: Shashank,
        phone: "7410075050",
        email: "savarkar.shashank_btech24@gsv.ac.in"
    },
    {
        id: 5,
        name: "Lehar Gupta",
        role: "Domain Member Robotics & Engg. Dwg. TechnoCrats GSV",
        work: "Media Publicity",
        image: Lehar,
        phone: "6376849212",
        email: "lehar.gupta_btech24@gsv.ac.in"
    },
    {
        id: 6,
        name: "Saurabh Ahire",
        role: "Domain Member Profile Developement TechnoCrats GSV",
        work: "Graphics Desginer",
        image: Saurabh,
        phone: "9322040278",
        email: "saurabh.ahire_btech25@gsv.ac.in"
    },

];

export const rulesData = [
    {
        title: "EVENT OVERVIEW",
        rules: [
            "RoboWars 2026 is a combat robotics tournament where student teams design and pilot remote-controlled robots to battle in a secure arena. The competition follows a direct-combat format where survival and aggression determine the winner."
        ],
    },
    {
        title: "GENERAL RULES AND DISQUALIFICATION",
        rules: [
            "Teams may be disqualified for the following reasons:",
            "Failing the pre-bout safety inspection.",
            "Exceeding weight or voltage limits.",
            "Unsportsmanlike conduct or sabotaging competing teams.\n",
            "Intentionally damaging the arena structure (walls/floor) beyond normal combat wear.\n",
        ],
    },
    {
        title: "ELIGIBILITY AND REGISTRATION",
        rules: [
            "Participation: Open to all undergraduate and postgraduate students.",
            "Team Composition: Minimum 2 members, maximum 5 members per team.",
            "Registration: Teams must register prior to the deadline. There will be a registration \n" +
            "fee of Rs.100 for each team. ",
        ],
    },
    {
        title: "Robot Specifications",
        rules: [
            "Strict adherence to these specifications is required to pass the safety inspection.\n",
            "Weight Class: 4 to 5 kg (inclusive of all batteries and onboard components).\n",
            "Dimensions:\n" +
            "○ Minimum: 200mm x 100mm.\n" +
            "○ Maximum: 500mm x 500mm (Standardized limit for this weight class).",
            "Power Supply:\n" +
            "○ Maximum Voltage: 24V.\n" +
            "○ Teams must have their own batteries.\n" +
            "○ Batteries must be securely mounted and shielded to prevent puncture or\n" +
            "dislodging during impact.\n",
            "Control Systems:\n" +
            "○ Wireless: Must use legal frequency bands and avoid interference.\n" +
            "○ Wired: Tethered robots are permitted if the cable length is at least 5 meters.\n" +
            "○ The robot must be fully self-contained; no external assistance is allowed\n" +
            "during the match."
        ],
    },
    {
        title: "ARENA AND HAZARDS",
        rules: [
            "The combat zone is a secured platform designed to test driver skill and robot durability.\n",
            "Hazards: The arena contains environmental obstacles including pits, floor spikes,\n" +
            "and active rotating discs.\n",
            "Boundary: Ejection from the arena (if physically possible based on arena walls)\n" +
            "results in immediate loss.",
        ],
    },
    {
        title: "WEAPONRY AND SAFETY GUIDELINES",
        rules: [
            "Permitted Weapons:\n" +
            "○ Kinetic energy transfers (spinners, drums, discs).\n" +
            "○ Hammers.\n" +
            "○ Flippers and lifters.",

            "Prohibited Items:\n" +
            "○ Fire or flammable liquids.\n" +
            "○ Explosives.\n" +
            "○ Entanglement devices (nets, strings).\n" +
            "○ Liquids or adhesives.\n" +
            "○ Drill machines (modified power drills prohibited; custom drill mechanisms\n" +
            "allowed if compliant).\n" +
            "○ Unsecured sharp edges that pose a handling risk outside the arena."
        ],
    },
    {
        title: "MATCH FORMAT AND SCORING",
        rules: [
            "Structure: The tournament operates on a knockout basis (Single or Double\n" +
            "Elimination, subject to team count).\n",
            "Duration: Each bout lasts 5 minutes.",
            "Winning Criteria:\n" +
            "○ Immobilization: If a robot is unresponsive or unable to move for 60\n" +
            "consecutive seconds, it is declared knocked out (KO).\n" +
            "○ Judges' Decision: If both robots are mobile after 5 minutes, the winner is\n" +
            "determined by points.",
            "Scoring Rubric:\n" +
            "○ Aggression (40%): Frequency of attacks and engagement.\n" +
            "○ Control (30%): Effective driving and use of arena hazards against the\n" +
            "opponent.\n" +
            "○ Damage (30%): Visible physical damage inflicted on the opposing bot.\n"
        ],
    },
    {
        title: "AWARDS",
        rules: [
            "Champion\n",
            "Best Engineering Design\n",
            "Most Innovative Mechanism\n",
            "Certificates of Participation (All teams)\n"
        ],
    },
    {
        title: "DISCLAIMER",
        rules: [
            "Modifications: The organizers reserve the right to amend rules at any time of the\n" +
            "event.",
            "Liability: Participating teams compete at their own risk. The organizers are not liable\n" +
            "for damage to equipment or injury during the competition.",
            "Disputes: All decisions made by the judges and organizers are final.\n",
            "Warning: Participating teams will be disqualified if they are involved in any verbal or\n" +
            "physical clash with the organising committee.\n",
        ],
    },
    {
        title: "Arena Gameplay",
        rules: [
            "Each round lasts for 3 minutes of active combat.",
            "A robot is considered 'out' if it remains immobile for 10 seconds.",
            "The referee's decision is final and binding for all participants.",
        ],
    },
];

export const homeData = {
    ticker: [
        "Registration is LIVE!",
        "Exciting Cash Prizes Await!",
        "Event Date: EPITOME 2026",
        "New Era, New Arena, New Rules"
    ],
    highlights: [
        { value: "10+", label: "War Robots" },
        { value: "Exciting Prizes", label: "Prize Pool" },
        { value: "200+", label: "Spectators" }
    ]
};

export const registrationData = {
    formUrl: "https://zfrmz.in/2KkNsGmjyPVnFcdx2PeA"
};

export const mediaData = [
    {
        id: 1,
        type: "Trailer",
        title: "Official Cinematic Trailer",
        url: Img_01, // YouTube Embed Link
        thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        id: 2,
        type: "Image",
        title: "Grand Opening Night",
        url: Img_02,
        thumb: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
    },
    {
        id: 3,
        type: "Poster",
        title: "Event Main Poster",
        url: Img_03,
        thumb: "https://images.unsplash.com/photo-1531050171669-a2444781444b"
    },
    {
        id: 4,
        type: "Poster",
        title: "Event Main Poster",
        url: Img_04,
        thumb: "https://images.unsplash.com/photo-1531050171669-a2444781444b"
    },
    // Add more items as needed...
];
