const SUPABASE_URL = "https://qzwerhocrouicmdgndzq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_h39JGygFjpEFTX1sHxfB3g_ft8sq2Rs";

let supabaseClient;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn("Supabase library not loaded. Falling back to local data.");
}

// Fallback Data
const FALLBACK_PROFILE = {
    name: "Opoku Kelvin NanaYaw",
    title: "Data Analyst & Junior IT Support",
    bio: "I am a Business Information Technology student at KNUST, pioneering the intersection of data-driven business intelligence and robust systems engineering. As a developer and analyst, I build high-density, real-world platforms—from precision geolocation trackers mapping physical farms, to automated WhatsApp notification systems and AI-powered vehicle telemetry dashboards.\n\nMy mission is simple: transform manual, error-prone business operations into elegant, automated, and highly optimized digital assets.",
    email: "opoku3765@gmail.com",
    phone: "+233 050 966 3058",
    location: "Accra, Ghana",
    whatsapp: "233509663058",
    linkedin_url: "https://linkedin.com",
    github_url: "https://github.com",
    read_cv_url: "https://read.cv",
    instagram_url: "https://instagram.com",
    profile_images: ["1000509484.jpg", "1000441044%20(2).png"]
};

const FALLBACK_PROJECTS = [
    {
        id: "1",
        title: "Student Database System",
        category: "Academic Project",
        description: "A relational database with 5 normalized tables managing 500+ records, reducing redundancy and improving query efficiency.",
        image_url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
        project_url: "",
        year: 2024,
        tags: ["Database", "SQL", "Academic"],
        card_size: "featured"
    },
    {
        id: "2",
        title: "Personal Portfolio Website",
        category: "Web Dev",
        description: "A fully responsive portfolio website with a 95+ Lighthouse score, implementing a mobile-first design approach.",
        image_url: "port.png",
        project_url: "#",
        year: 2024,
        tags: ["Web Development", "HTML/CSS/JS"],
        card_size: "tall"
    },
    {
        id: "3",
        title: "Objective & Mission",
        category: "Text Card",
        description: "Seeking to apply analytical and programming skills to drive decision-making.",
        image_url: "",
        project_url: "",
        year: 2026,
        tags: ["Objective"],
        card_size: "small"
    },
    {
        id: "4",
        title: "Power BI & Python Analysis",
        category: "Data Analysis",
        description: "Developed interactive Power BI dashboards and Python scripts for automated data cleaning, processing, and visual analytics.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        project_url: "",
        year: 2025,
        tags: ["POWER BI", "PYTHON", "PANDAS"],
        card_size: "horizontal"
    },
    {
        id: "5",
        title: "Knotty & Nice",
        category: "Salon & Booking / Web App",
        description: "A premium student-focused hair appointment and salon booking platform tailored specifically for the KNUST student community. Developed a highly polished Progressive Web App with a theme-aware glassmorphic UI, a dynamic hairdresser directory, and automated WhatsApp inquiry integration to optimize student scheduling.",
        image_url: "Screenshot%202026-05-25%20154759.png",
        project_url: "https://knottyandnice.vercel.app",
        year: 2026,
        tags: ["FIREBASE", "HTML/CSS/JS", "TAILWIND CSS", "PWA", "AUTOMATED BOOKINGS"],
        card_size: "full",
        images: ["Screenshot%202026-05-25%20154759.png", "Screenshot%202026-05-25%20154822.png", "Screenshot%202026-05-25%20154844.png"]
    },
    {
        id: "6",
        title: "Agritwin Platform",
        category: "AgriTech / Web App",
        description: "De-risking African agriculture with digital twins. Bridged the gap between farmers and institutional capital by mapping physical farms into real-time digital twins, providing lenders and insurers with 99.9% verifiable telemetry.",
        image_url: "agritwin.png",
        project_url: "",
        year: 2026,
        tags: ["LIVE IN GHANA", "1.2M+ HECTARES MAPPED"],
        card_size: "full"
    },
    {
        id: "7",
        title: "Kwabz Store",
        category: "E-Commerce / Web App",
        description: "A fully functional student e-commerce center. Developed a robust Progressive Web App (PWA) to handle secure authentication, product browsing, and a seamless checkout process tailored specifically for students.",
        image_url: "Screenshot%202026-05-17%20132635.png",
        project_url: "https://kwabz-store-v2.vercel.app",
        year: 2026,
        tags: ["FIREBASE", "HTML", "CSS", "JS", "PWA"],
        card_size: "full",
        images: ["Screenshot%202026-05-17%20132635.png", "Screenshot%202026-05-17%20132647.png", "Screenshot%202026-05-17%20132722.png"]
    },
    {
        id: "8",
        title: "Between 2 Breads",
        category: "Food Tech / Rendering Service",
        description: "A premium food rendering and online ordering service. Designed a highly interactive frontend platform enabling users to browse handcrafted sandwiches, select customized pairings, and place seamless, real-time orders with direct WhatsApp feedback integration.",
        image_url: "Screenshot%202026-04-03%20020404.png",
        project_url: "https://between-dous-pan.netlify.app",
        year: 2026,
        tags: ["HTML/CSS/JS", "TAILWIND CSS", "FRONTEND DEVELOPMENT", "WHATSAPP API"],
        card_size: "full",
        images: ["Screenshot%202026-04-03%20020404.png", "Screenshot%202026-04-03%20020419.png", "Screenshot%202026-04-03%20020439.png", "Screenshot%202026-04-03%20020448.png"]
    },
    {
        id: "9",
        title: "Bobafie",
        category: "E-Commerce / Boba Tea Store",
        description: "A sleek Boba Tea ordering system and store. Designed a fully functional, mobile-responsive Progressive Web App (PWA) allowing customers to browse a vibrant menu of handcrafted milk teas, customize sweetness/ice levels, manage a dynamic cart, and check out with real-time order tracking.",
        image_url: "Screenshot%202026-05-17%20135729.png",
        project_url: "https://bobafie-store.netlify.app",
        year: 2026,
        tags: ["FIREBASE", "HTML/CSS/JS", "TAILWIND CSS", "PWA"],
        card_size: "full",
        images: ["Screenshot%202026-05-17%20135729.png", "Screenshot%202026-05-17%20135803.png", "Screenshot%202026-05-17%20135820.png"]
    },
    {
        id: "10",
        title: "Autocare",
        category: "Automotive / AI Diagnostics & Bookings",
        description: "An AI-driven car maintenance and diagnostic system. Designed a comprehensive portal combining real-time vehicle telemetry diagnostic dashboards, automated scheduling and service bookings, and an integrated e-commerce shop for replacement parts and automotive accessories.",
        image_url: "Screenshot%202026-05-17%20141411.png",
        project_url: "",
        year: 2026,
        tags: ["AI DIAGNOSTICS", "HTML/CSS/JS", "TAILWIND CSS", "AUTOMATED BOOKINGS"],
        card_size: "full",
        images: ["Screenshot%202026-05-17%20141411.png", "Screenshot%202026-05-17%20141455.png", "Screenshot%202026-05-17%20141709.png"]
    }
];

const FALLBACK_CERTIFICATIONS = [
    { name: "Introduction to Fintech", issuer: "LinkedIn", year: 2026, url: "CertificateOfCompletion_Introduction to Fintech.pdf" },
    { name: "Digital Banking Fundamentals", issuer: "LinkedIn", year: 2026, url: "CertificateOfCompletion_Digital Banking Fundamentals.pdf" },
    { name: "Mastering Power BI", issuer: "Udemy", year: 2025, url: "UC-74cc5aa2-696b-4681-ac73-a15a95ccf1cc.jpg" },
    { name: "AI Essentials: Intro to AI", issuer: "Udemy", year: 2025, url: "UC-094f847c-3b51-49cf-9408-bf6f15e4a36a.jpg" },
    { name: "CyberSecurity: Ultimate Guide", issuer: "Udemy", year: 2025, url: "UC-b10473d2-e7cb-488d-9116-51de5c4a631a.jpg" },
    { name: "AI Career Essentials", issuer: "ALX", year: 2025, url: "" },
    { name: "Python Programming", issuer: "Udemy", year: 2024, url: "" },
    { name: "SQL for Database Management", issuer: "Udemy", year: 2024, url: "" },
    { name: "Web Development Fundamentals", issuer: "Udemy", year: 2024, url: "" }
];

// API Functions
async function getProfile() {
    if (!supabaseClient) return FALLBACK_PROFILE;
    try {
        const { data, error } = await supabaseClient
            .from('profile')
            .select('*')
            .eq('id', 'main')
            .single();
        if (error || !data) throw new Error(error ? error.message : "No data");
        return data;
    } catch (e) {
        console.warn("Error fetching profile from Supabase, using fallback data:", e.message);
        return FALLBACK_PROFILE;
    }
}

async function getProjects() {
    if (!supabaseClient) return FALLBACK_PROJECTS;
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .select('*')
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });
        if (error) throw error;
        if (!data || data.length === 0) return FALLBACK_PROJECTS;
        
        // Ensure image lists are correctly parsed if stored as JSON/Arrays
        return data.map(p => {
            // Support comma-separated tags or array tags
            let tags = p.tags;
            if (typeof tags === 'string') {
                tags = tags.split(',').map(t => t.trim());
            }
            return {
                ...p,
                tags: tags || []
            };
        });
    } catch (e) {
        console.warn("Error fetching projects from Supabase, using fallback data:", e.message);
        return FALLBACK_PROJECTS;
    }
}

async function getCertifications() {
    if (!supabaseClient) return FALLBACK_CERTIFICATIONS;
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .select('*')
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });
        if (error) throw error;
        if (!data || data.length === 0) return FALLBACK_CERTIFICATIONS;
        return data;
    } catch (e) {
        console.warn("Error fetching certifications from Supabase, using fallback data:", e.message);
        return FALLBACK_CERTIFICATIONS;
    }
}
