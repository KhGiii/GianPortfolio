//info kontak
const CONTACT = {
    email: 'khansa.gianika@binus.ac.id',
    linkedin: 'https://www.linkedin.com/in/khansa-areta-gianika-b39661326/',
    github: 'https://github.com/KhGiii',
    resume: 'https://drive.google.com/file/d/1OUEylJo1WFzhgMdujXfyX4E4m-EbOq3u/view?usp=drive_link'
};

// info project
const PROJECTS = [
    {
        id: 'project1',
        title: 'Benang.com',
        tagline: 'Elastic yarn e-commerce website',
        thumbnail: 'images/benangcom_thumbnail.png',
        banner: 'images/benangcom_banner.png',
        description: 'Designing the shopping flow, UI/UX, and brand identity through a Figma prototype for an elastic yarn brand made for elderly and younger shoppers.',
        role: 'UI/UX Designer',
        year: '2026',
        tools: 'Figma',
        problem: 'Most buyers of Fun-Strings, a highly elastic yarn product, were elderly and many were tailors. The brand wanted to expand their sales to the online market through a website called Benang.com. <br><br>The Benang.com website is expected to be <strong>visually appealing to younger shoppers</strong> but also must stay <strong>clear and easy to use across different levels of digital literacy</strong> to accommodate the elder audience.',
        solution: 'An interactive high-fidelity Figma prototype for a shopping flow covering <strong> home, search, product list, product detail, cart, checkout, favorites, login, sign up, and profile pages with user flowchart as well as user personas of the Benang.com website.</strong> <br><br> Typography, color, spacing, and components were tuned for <strong> readability across ages, </strong> and a custom logo with yarn-thread details defined the brand identity.',
        shots: [
            'images/bc_1.png',
            'images/bc_2.png',
            'images/bc_3.png',
            'images/bc_4.png',
            'images/bc_5.png',
            'images/bc_6.png'
        ],
        goals: [
            'Design a user shopping experience that is clear and easy to navigate',
            'Ensure readability and usability for elderly and younger users alike',
            'Establish a brand identity with a custom logo'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/GYOrHNKt5DKk6HoUuyqj4S/LnT-Mid-Project-UIUX_Khansa-Areta-Gianika?node-id=0-1&t=9oYcBpTp8dCjj5xR-1'}
        ]
    },
    {
        id: 'project2',
        title: 'Furnish.id',
        tagline: 'Home furniture e-commerce mobile app',
        thumbnail: 'images/furnishid_thumbnail.png',
        banner: 'images/furnishid_banner.png',
        description: 'Designing the end-to-end app flow, UI/UX, design system and documentation of a furniture brand through a Figma prototype with guest and logged-in experiences.',
        role: 'UI/UX Designer',
        year: '2026',
        tools: 'Figma',
        problem: 'Furnish.id, a home furnishing brand, needed a mobile app. The design had to follow <strong>mobile design principles and guidelines, utilize given assets,</strong> and work for both <strong>guests and logged-in users</strong>.<br><br>The brand only had a logo with no fixed colors, so the <strong>visual direction had to be built around it</strong> without changing its shape or adding effects.',
        solution: 'An interactive high-fidelity Figma prototype covering <strong>splash screen, home, product list, product detail, profile, wishlist, transaction status, login, and register pages</strong>, with separate <strong>guest and logged-in user flow.</strong><br><br>A <strong>design system</strong> of colors, typography, UI components, and additional assets was built to match the logo, with <strong>documentation</strong> on how and why each component is used.',
        shots: [
            'images/fi_1.png',
            'images/fi_2.png',
            'images/fi_3.png'
        ],
        goals: [
            'Follow mobile design principles and guidelines',
            'Ensure consistent and seamless user flow for guest and logged-in users',
            'Build a documented design system from the provided logo for the app'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/M2YJKmjXx088ToLeWkBtni/LnT-Final-Project-UIUX_Khansa-Areta-Gianika?node-id=0-1&t=MwVpHXxMCdmmReUW-1'}
        ]
    },
    {
        id: 'project3',
        title: 'MelaKnow',
        tagline: 'AI-powered melanoma risk assessment web platform',
        thumbnail: 'images/melaknow_thumbnail.png',
        banner: 'images/melaknow_banner.png',
        description: 'Designing the user flow, UI/UX, and contributing to the initial ideation of a web platform that assesses melanoma risk from skin lesion images.',
        role: 'UI/UX Designer - Group Project & Paper',
        year: '2026',
        tools: 'Figma, VSCode',
        problem: '<strong>Melanoma is a potentially deadly, yet highly survivable type of skin cancer when caught early.</strong> Unfortunately, many cases go undetected as <strong>checkups are costly and lack of awareness for Melanoma</strong> keeps many people from getting tested at all. <br><br>An <strong>accessible screening tool could let anyone assess their risk early</strong> and raise awareness before making a trip to a professional. The platform had to <strong>analyze skin lesion images with machine learning</strong> and show medical results <strong>clearly without overwhelming users</strong>.',
        solution: 'A web platform where users upload a <strong>skin lesion image</strong> and get a melanoma risk assessment from an <strong>SE-ResNeXt50 classification model</strong> combined with the <strong>ABCDE visual method</strong>.<br><br>MelaKnow offers a <strong>camera and photo upload scan, an information bar, and a personal assessment history</strong> across <strong>home, about, scan, scan history, profile, login, and register pages</strong>. A black ribbon representing Melanoma awareness is incorporated to the custom logo, while the choice of color theme, layout, and typography make <strong>medical information feel approachable.</strong>',
        shots: [
            'images/mk_1.png',
            'images/mk_2.png',
            'images/mk_3.png',
            'images/mk_4.png',
            'images/mk_5.png',
            'images/mk_6.png',
            'images/mk_7.png'
        ],
        goals: [
            'Design an upload and result flow that is easy to navigate',
            'Ensure results are readable and understandable for non-medical users',
            'Balance clarity and simplicity of the interface'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/kQx6db6rOAFDevtmobRKR0/Melaknow--Personal-Copy-?t=MwVpHXxMCdmmReUW-1'},
            {label: 'View Research Paper', url: 'https://drive.google.com/file/d/1L-c2DK12ZCJY1-HXzN8a7rjsQkZKoDcA/view?usp=sharing'}
        ]
    },
    {
        id: 'project4',
        title: 'MR.COFFEE',
        tagline: 'Cozy coffee shop website',
        thumbnail: 'images/mrcoffee_thumbnail.png',
        banner: 'images/mrcoffee_banner.png',
        description: 'Designing the ordering flow, UI/UX, brand identity, and building the front-end of a coffee shop through a Figma prototype and a responsive website.',
        role: 'UI/UX Designer & Front-End Developer',
        year: '2025',
        tools: 'Figma, VSCode',
        problem: 'MR.COFFEE is a small coffee shop known for its <strong>cozy, quirky, community feel.</strong> Its founder wanted a <strong>digital presence</strong> that brings that atmosphere online and helps more people discover its coffee.<br><br>They required a Figma prototype covering the menu ordering flow, with <strong>consistent colors, layouts, and themes that matches the shop identity</strong> as well as a <strong>five-page website</strong> that is <strong>responsive across desktop, tablet, and phone.</strong>',
        solution: 'An interactive high-fidelity Figma prototype and a responsive front-end website covering <strong>Home, Rewards, About Us, Menu with product filtering, and Order pages</strong>.<br><br><strong>Custom logo</strong> and thematically chosen doodles and illustrations built <strong>one cohesive identity</strong> around the cozy, artistic character of the shop, with a consistent color and typography direction across every page.',
        shots: [
            'images/mc_1.png',
            'images/mc_2.png',
            'images/mc_3.png',
            'images/mc_4.png',
            'images/mc_5.png',
            'images/mc_6.png'
        ],
        goals: [
            'Capture the cozy and artistic atmosphere of the shop online',
            'Build one cohesive visual identity with consistent colors and layouts',
            'Ensure responsiveness of the website across desktop, tablet, and phone'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/RtBISdVon8YyBOek7Gbf59/MR.-COFFEE--Revised-_Khansa-Areta-Gianika?node-id=0-1&t=MwVpHXxMCdmmReUW-1'}
        ]
    },
    {
        id: 'project5',
        title: 'LockedIn',
        tagline: 'All-in-one productivity platform',
        thumbnail: 'images/lockedin_thumbnail.png',
        banner: 'images/lockedin_banner.png',
        description: 'Designing the user flow and UI/UX of a focus workspace that auto-locks phone during focus sessions.',
        role: 'UI/UX Designer - Group Project',
        year: '2026',
        tools: 'Figma, VSCode',
        problem: 'Students and workers often have to use <strong>multiple apps at once</strong> to get their work done. <strong>Distractions from other apps</strong> pull them away from the task, and <strong>homework and assignments</strong> get forgotten.<br><br>An all-in-one workspace that avoids the use of phone and  separate browser tabs could help remove distractions and enhance user productivity.',
        solution: 'A web workspace that connects the desktop account to the phone and <strong>auto-locks the phone screen</strong> whenever a focus session timer begins. It covers <strong>home, focus room, notes, schedule, lock screen, help, profile, login, and register pages</strong>, where each user gets a <strong>personal customizable study room</strong> with file attachments, background, music or ambience, and a built-in timer, along with notes and a calendar to record and plan every session.<br><br>Dark mode <strong>keeps the interface comfortable on the eyes of students and workers during long focus sessions</strong>, a help page specialized for the lock screen feature provided <strong>easy-access guide</strong> for users, and a <strong>custom logo</strong> defines the brand identity.',
        shots: [
            'images/li_1.png',
            'images/li_2.png',
            'images/li_3.png',
            'images/li_4.png'
        ],
        goals: [
            'Streamline the workflow by centralizing work materials in one workspace',
            'Minimize phone and on-screen distractions during focus sessions',
            'Support better planning through a clear session scheduling flow'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/41UyUb5P2nwLdH3aavQWKV/LockedIn---SofEng-Kelompok-2--Personal-Copy-?node-id=0-1&t=he2vHzQecvJaVmhl-1'}
        ]
    },
    {
        id: 'project6',
        title: 'Glissence',
        tagline: 'AI-powered skin analysis web platform',
        thumbnail: 'images/glissence_thumbnail.png',
        banner: 'images/glissence_banner.png',
        description: 'Designing the user flow, UI/UX, and building the front-end of a website that gives a preliminary facial skin wellness diagnosis and skincare and makeup recommendations.',
        role: 'UI/UX Designer & Front-End Developer - Group Project',
        year: '2025',
        tools: 'Figma, VSCode',
        problem: 'Choosing skincare and makeup is hard without knowing your <strong>skin type, face structure, and skin problems</strong>.<br><br>A <strong>freely accessible platform</strong> that gives a preliminary facial skin analysis, adjusted to skin type, gender, age, and other skin wellness concerns, and recommends skincare and makeup accordingly, can help users make beauty decisions that take their <strong>skin health and properties</strong> into account.',
        solution: 'An interactive high-fidelity Figma prototype and a responsive front-end website where users <strong>upload a photo to detect skin type and face structure, diagnose facial skin problems,</strong> and get <strong>skincare and makeup</strong> recommendations that match the result, with links to stores that sell the products. Glissence covers <strong>home, about us, services, contact, profile, login, and register pages</strong>, with the skin analysis done on the services page.<br><br>The interface follows current trends with an <strong>aesthetic look for young users</strong>, yet stays <strong>easy to understand for all ages</strong> and flexible enough to adjust to <strong>any skin concern</strong>. Results are presented so people with no medical or analysis background can follow them, and a <strong>custom logo</strong> defines the brand identity.',
        shots: [
            'images/g_1.png',
            'images/g_2.png',
            'images/g_3.png',
            'images/g_4.png',
            'images/g_5.png',
            'images/g_6.png'
        ],
        goals: [
            'Design a flexible analysis flow that adapts to different users and skin concerns',
            'Ensure a youthful, aesthetic look that stays simple to use for all ages',
            'Guide users from uploading materials to recommendations for products'
        ],
        links: [
            {label: 'View on Figma', url: 'https://www.figma.com/design/Rp1mYKnLKzxnwoOUJE4dRW/Glissense--Personal-Copy-?t=jS7N834h9l1TWsTo-1'}
        ]
    }
];
