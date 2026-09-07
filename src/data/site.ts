/**
 * ------------------------------------------------------------------
 * SITE CONTENT — edit everything here (text, projects, links, images)
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "Saidul Alam Dipu",
  role: "Web Developer",
  stack: "Shopify • WordPress • Wix",
  email: "sa.dipu1045@gmail.com",
  location: "Dhaka, Bangladesh — Working Worldwide",
  availability: "Available for new projects",
};

/**
 * FORM DELIVERY
 * Submissions are sent via FormSubmit (https://formsubmit.co).
 * First submission sends an activation email to sa.dipu1045@gmail.com.
 */
export const formEndpoint = "https://formsubmit.co/ajax/sa.dipu1045@gmail.com";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Fiverr", href: "https://www.fiverr.com/" },
  { label: "Upwork", href: "https://www.upwork.com/" },
];

export type Platform = "Shopify" | "WordPress" | "Wix";

export type Project = {
  id: string;
  name: string;
  industry: string;
  platform: Platform;
  year: string;
  projectType: string;
  role: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  image: string;
  href: string;
  size: "featured" | "wide" | "tall" | "standard";
};

/**
 * ------------------------------------------------------------------
 * HOW TO ADD A NEW PROJECT (2 minutes)
 * 1. Copy the template below and paste it after the last project inside
 *    the `projects` array.
 * 2. Fill in your real information (keep the same field names).
 * 3. Save — the new project will automatically appear in Selected Work
 *    behind the "Load More Projects" button (no other change needed).
 *
 * Notes:
 *  - `platform` must be "Shopify" | "WordPress" | "Wix" (used by filters).
 *  - `size` controls the mosaic tile: "featured" | "wide" | "tall" | "standard".
 *    Use "standard" if you are unsure — it always fits nicely.
 *  - `href` starting with http opens the live site in a new tab.
 *
 * CASE STUDY — no separate file needed. The popup behind each card's
 * "Case Study" button is generated automatically from the same object:
 *  - `description`                    -> "Overview" paragraph
 *  - `challenge`                      -> "Challenge" paragraph
 *  - `solution`                       -> "Solution" paragraph
 *  - `features`                       -> "Work Completed" bullet list
 *  - `projectType` / `role` / `year`
 *    / `industry` / `platform`
 *    / `services`                     -> info sidebar
 *  - `image`                          -> case study header visual
 *  - `href`                           -> "Visit Live Website" button
 * So: adding a project = adding its case study. Keep the text factual
 * (no invented metrics/results) and each case study stays credible.
 *
 * {
 *   id: "my-new-project",
 *   name: "Project Name",
 *   industry: "Industry Name",
 *   platform: "Shopify",
 *   year: "2026",
 *   projectType: "E-commerce Website",
 *   role: "Web Developer",
 *   services: ["Website Design", "Development"],
 *   description: "One-line overview of the website.",
 *   challenge: "What the project needed to solve.",
 *   solution: "How the website solved it.",
 *   features: ["Feature one", "Feature two", "Feature three"],
 *   image: "https://example.com/screenshot.jpg",
 *   href: "https://live-website.com/",
 *   size: "standard",
 * },
 * ------------------------------------------------------------------
 */
export const projects: Project[] = [
  {
    id: "reigning-champ",
    name: "Reigning Champ",
    industry: "Premium Apparel",
    platform: "Shopify",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A premium Shopify apparel storefront with editorial product storytelling, collection browsing and a refined mobile shopping experience.",
    challenge:
      "Create a polished apparel shopping experience that feels premium while remaining easy to browse and navigate across devices.",
    solution:
      "Built a clean Shopify storefront focused on product presentation, responsive layouts and a smooth path from discovery to purchase.",
    features: [
      "Shopify storefront build",
      "Product and collection presentation",
      "Responsive shopping experience",
      "Editorial product storytelling layout",
    ],
    image:
      "https://reigningchamp.com/cdn/shop/files/center_20260619_FW26_Lookbook-Testing4402_FULLRES_compressed_3f485d26-3ffa-407c-9e8d-959daafb9855.jpg?v=1788219268&width=1500",
    href: "https://reigningchamp.com/",
    size: "featured",
  },
  {
    id: "big-bud-press",
    name: "Big Bud Press",
    industry: "Fashion & Apparel",
    platform: "Shopify",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A bold Shopify storefront for an independent apparel brand, pairing strong product photography with clear shopping flows.",
    challenge:
      "Present a distinctive apparel brand with strong product visuals and a storefront that stays usable on every screen size.",
    solution:
      "Developed a Shopify e-commerce experience centered on product discovery, clear hierarchy and responsive browsing.",
    features: [
      "Shopify product pages",
      "Collection and catalog browsing",
      "Responsive e-commerce layout",
      "Campaign-ready homepage structure",
    ],
    image:
      "https://cdn.shopify.com/s/files/1/0775/2355/files/03ECOMMCALYPSOTEEOFFWHITEMULTIPALEXBYMIGUEL8-28-260504.png?v=1788451169",
    href: "https://bigbudpress.com/",
    size: "standard",
  },
  {
    id: "trinity-solutions",
    name: "Trinity Solutions Inc.",
    industry: "Managed IT Services",
    platform: "WordPress",
    year: "2025",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Development", "Responsive Optimization"],
    description:
      "A corporate WordPress website for a managed IT services provider, with service pages, trust content and a clear path to contact.",
    challenge:
      "Communicate professional IT services clearly while keeping the website approachable, readable and easy to navigate.",
    solution:
      "Built a WordPress business website with structured service content, strong visual hierarchy and a simple contact path.",
    features: [
      "WordPress business website",
      "Service page structure",
      "Responsive layout",
      "Clear contact and conversion path",
    ],
    image:
      "https://trinitysolutionsinc.com/wp-content/uploads/2025/08/1340423_astronaut-1-1.gif",
    href: "https://trinitysolutionsinc.com/",
    size: "wide",
  },
  {
    id: "frilete",
    name: "Frilete",
    industry: "Activewear & Lifestyle",
    platform: "WordPress",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["Website Design", "E-commerce", "Development"],
    description:
      "A purpose-driven activewear website with product discovery, brand storytelling and an energetic visual direction.",
    challenge:
      "Support both product shopping and brand storytelling without overwhelming the visitor.",
    solution:
      "Developed a WordPress e-commerce experience that balances product presentation with lifestyle-focused content.",
    features: [
      "WordPress e-commerce setup",
      "Product discovery sections",
      "Brand storytelling pages",
      "Mobile-friendly shopping layout",
    ],
    image:
      "https://frilete.com.au/wp-content/uploads/2024/12/Frilete-UQ-Summer-0186.jpg",
    href: "https://frilete.com.au/",
    size: "standard",
  },
  {
    id: "feteaverse",
    name: "Fete-E-Verse",
    industry: "Events & Experiences",
    platform: "WordPress",
    year: "2025",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Events Calendar", "Development"],
    description:
      "A lively WordPress destination for discovering upcoming experiences, with event content and launch-focused presentation.",
    challenge:
      "Help visitors quickly understand upcoming experiences and explore event-related content with ease.",
    solution:
      "Created a WordPress website structure focused on event discovery, clear sections and responsive browsing.",
    features: [
      "WordPress website build",
      "Event calendar presentation",
      "Content-focused layout",
      "Responsive design",
    ],
    image:
      "https://images.pexels.com/photos/18796698/pexels-photo-18796698.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    href: "https://feteaverse.com/",
    size: "tall",
  },
  {
    id: "visit-mauritius-paradise",
    name: "Visit Mauritius Paradise",
    industry: "Luxury Travel & Transport",
    platform: "WordPress",
    year: "2025",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Booking Experience", "Development"],
    description:
      "A destination website for luxury transfers, private tours and island experiences across Mauritius.",
    challenge:
      "Present travel and transfer services clearly so visitors can understand options and take the next step.",
    solution:
      "Built a polished WordPress website with destination-focused content, service clarity and a smooth browsing experience.",
    features: [
      "WordPress travel website",
      "Service and destination pages",
      "Booking-oriented structure",
      "Responsive layouts",
    ],
    image:
      "https://www.visitmauritiusparadise.com/_next/image?url=%2Fimages%2Fislands%2Fle-morne.jpg&w=1200&q=75",
    href: "https://www.visitmauritiusparadise.com/",
    size: "wide",
  },
  {
    id: "allied-training-institute",
    name: "Allied Training Institute",
    industry: "Healthcare Education",
    platform: "Wix",
    year: "2025",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Course Pages", "Responsive Optimization"],
    description:
      "A Wix website for a healthcare training provider, making it simple for aspiring professionals to explore courses and get started.",
    challenge:
      "Make training programs easy to understand and help prospective students take the first step with confidence.",
    solution:
      "Designed and built a clean Wix website with clear course information, approachable messaging and responsive layouts.",
    features: [
      "Wix website build",
      "Course and program pages",
      "Clear inquiry path",
      "Mobile-friendly layout",
    ],
    image:
      "https://static.wixstatic.com/media/ba9c87_32e62763b38141c5a465f4f24872e51c~mv2.jpg/v1/fill/w_900,h_720,al_c,q_85,enc_avif,quality_auto/hero-nurse.jpg",
    href: "https://www.alliedtraininginstitute.com/",
    size: "standard",
  },
  {
    id: "hokkaido-taxi",
    name: "Hokkaido Taxi",
    industry: "Private Transfer & Tours",
    platform: "WordPress",
    year: "2026",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Development", "Responsive Optimization"],
    description:
      "A service website for a premium private taxi and airport transfer operator in Hokkaido, Japan, covering transfers, charters and custom day trips.",
    challenge:
      "Present multiple services, vehicle capacities and booking guidance clearly for international travellers arriving at New Chitose Airport.",
    solution:
      "Built a structured WordPress website with dedicated service sections, a vehicle capacity guide and a clear quote-and-contact flow.",
    features: [
      "Service and route presentation",
      "Vehicle capacity guide",
      "Booking-oriented contact flow",
      "Responsive multi-section layout",
    ],
    image: "https://hokkaido.taxi/_next/image?url=%2Fassets%2Fimages%2FheroBg.jpg&w=1920&q=75",
    href: "https://hokkaido.taxi/",
    size: "wide",
  },
  {
    id: "variaform",
    name: "VariaForm",
    industry: "Custom Furniture",
    platform: "Shopify",
    year: "2026",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A Shopify storefront for a made-to-order furniture brand where every piece is customizable and delivered flat-packed.",
    challenge:
      "Explain a parametric, configure-to-order furniture process online without overwhelming shoppers.",
    solution:
      "Developed a Shopify store with a step-by-step 'how it works' story and product pages that support configurator-driven items.",
    features: [
      "Shopify storefront build",
      "Step-by-step process content",
      "Configurator-ready product pages",
      "Clean responsive layout",
    ],
    image:
      "https://cdn.shopify.com/s/files/1/0729/6404/7067/files/APERTURERECTANGULARDININGTABLEANDSTOOLS.jpg?v=1788716397",
    href: "https://variaform.com/",
    size: "standard",
  },
  {
    id: "drink-collider",
    name: "Collider",
    industry: "Non-Alcoholic Beverages",
    platform: "Shopify",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A bold Shopify storefront for an adaptogen-infused, non-alcoholic beer brand focused on direct-to-consumer sales and bundles.",
    challenge:
      "Communicate a unique product position — relaxing beer without alcohol — while driving bundle and subscription purchases.",
    solution:
      "Built a high-impact Shopify experience with product storytelling, comparison content and clear bundle/subscription paths.",
    features: [
      "Shopify DTC storefront",
      "Bundle and subscription flows",
      "Product storytelling sections",
      "Review and FAQ integration",
    ],
    image:
      "https://www.drinkcollider.com/cdn/shop/files/preview_images/79e23f06f9bd4fdfbc0ddb95ea4e63d7.thumbnail.0000000000_2160x.jpg?v=1746891371",
    href: "https://www.drinkcollider.com/",
    size: "wide",
  },
  {
    id: "bart-magielski",
    name: "Bart Magielski",
    industry: "Affiliate Marketing Consulting",
    platform: "WordPress",
    year: "2026",
    projectType: "Business Website",
    role: "Web Developer",
    services: ["Website Design", "Development", "Responsive Optimization"],
    description:
      "A personal-brand WordPress website for an affiliate marketing consultant offering audits, strategy and program building.",
    challenge:
      "Position a consultant's expertise and services credibly for gaming, e-commerce and SaaS companies.",
    solution:
      "Designed and built a focused WordPress site with clear service blocks, social proof and a simple contact path.",
    features: [
      "Personal-brand layout",
      "Service and testimonial sections",
      "Contact and lead capture",
      "Responsive build",
    ],
    image: "https://bartmagielski.com/wp-content/uploads/2026/05/bart-portrait.jpg",
    href: "https://bartmagielski.com/",
    size: "tall",
  },
  {
    id: "rare-beauty",
    name: "Rare Beauty",
    industry: "Beauty & Cosmetics",
    platform: "Shopify",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A large-scale Shopify beauty storefront organized around collections, campaign heroes and community content.",
    challenge:
      "Keep a high-volume catalogue with frequent campaign launches easy to browse and shop on every device.",
    solution:
      "Structured the Shopify storefront around clear collection paths, campaign modules and fast product discovery.",
    features: [
      "Collection-first navigation",
      "Campaign hero modules",
      "Shade-finder and content integration",
      "Responsive performance focus",
    ],
    image:
      "https://www.rarebeauty.com/cdn/shop/files/HP-SPLIT-TOUT-ABOUT-1522x1522-V2.jpg?format=pjpg&v=1775105293&width=1522",
    href: "https://www.rarebeauty.com/",
    size: "featured",
  },
  {
    id: "sands-of-scents",
    name: "Sands of Scents",
    industry: "Luxury Perfumery",
    platform: "Shopify",
    year: "2026",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A minimal, elegant Shopify storefront for a UAE perfumery house focused on refined fragrance presentation.",
    challenge:
      "Let a luxury fragrance brand feel premium online without heavy decoration or clutter.",
    solution:
      "Built a quiet, image-led Shopify store with calm typography and a collection-focused shopping flow.",
    features: [
      "Minimal luxury layout",
      "Collection-focused browsing",
      "Brand storytelling sections",
      "Responsive storefront",
    ],
    image: "https://www.sandsofscents.ae/cdn/shop/files/Banner-Image-v2.png?v=1772013135&width=2400",
    href: "https://www.sandsofscents.ae/",
    size: "standard",
  },
  {
    id: "shiko-beauty",
    name: "Shikō Beauty",
    industry: "Japanese Skincare",
    platform: "Shopify",
    year: "2025",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A curated Shopify storefront bringing Japanese skincare brands together with editorial, educational content.",
    challenge:
      "Present multiple curated brands and educational articles without making the store feel like a blog or a marketplace.",
    solution:
      "Developed a Shopify experience balancing curated product tabs, brand stories and a connected journal.",
    features: [
      "Curated brand collections",
      "Editorial journal integration",
      "Product tab modules",
      "Responsive shopping layout",
    ],
    image: "https://shikobeauty.com/cdn/shop/files/HP_01_Our_Story.jpg?v=1739919220&width=700",
    href: "https://shikobeauty.com/",
    size: "wide",
  },
  {
    id: "live-it-up",
    name: "Live it Up",
    industry: "Nutrition & Superfoods",
    platform: "Shopify",
    year: "2026",
    projectType: "E-commerce Website",
    role: "Web Developer",
    services: ["E-commerce", "Shopify", "Responsive Optimization"],
    description:
      "A subscription-focused Shopify storefront for a natural nutrition brand built around daily wellness rituals and bundles.",
    challenge:
      "Make a multi-product supplement routine easy to understand and easy to subscribe to.",
    solution:
      "Built a Shopify storefront with ritual-based product grouping, bundle offers and subscribe-and-save flows.",
    features: [
      "Ritual-based product grouping",
      "Bundle and subscribe flows",
      "Review and expert endorsement sections",
      "Responsive e-commerce layout",
    ],
    image:
      "https://cdn.shopify.com/s/files/1/0079/9994/6842/files/liu-hp-hero-LaborDay-desk-lowres.jpg?v=1788280811&width=1600",
    href: "https://letsliveitup.com/",
    size: "standard",
  },
];

export const services = [
  {
    number: "01",
    title: "Shopify Development",
    description:
      "Build a professional Shopify store that presents products clearly, feels easy to shop and supports stronger online sales.",
    tags: ["Theme Customization", "Product Pages", "Checkout UX"],
  },
  {
    number: "02",
    title: "WordPress Development",
    description:
      "Launch a modern WordPress website your team can manage easily — structured around your brand, content and business goals.",
    tags: ["Custom Themes", "CMS Setup", "Elementor"],
  },
  {
    number: "03",
    title: "Wix Websites",
    description:
      "Create a clean, professional Wix website that looks polished, stays easy to update and works well across devices.",
    tags: ["Wix Studio", "Editor X", "Brand Systems"],
  },
  {
    number: "04",
    title: "E-commerce Websites",
    description:
      "Design and develop online-store experiences focused on product clarity, usability and a smoother path to purchase.",
    tags: ["Catalog Design", "Payments", "Conversion"],
  },
  {
    number: "05",
    title: "Website Redesign",
    description:
      "Refresh an outdated website into a modern, responsive experience that better represents your brand and supports growth.",
    tags: ["UX Audit", "Rebuild", "Migration"],
  },
  {
    number: "06",
    title: "Landing Pages",
    description:
      "Build focused landing pages that clearly communicate an offer and guide visitors toward a single next step.",
    tags: ["Copy Structure", "Lead Capture", "Responsive Design"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, audience, goals and requirements before design or development begins.",
    detail: "Kickoff call · Competitor review · Sitemap & scope",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Create a clear structure and visual direction focused on the project's goals and user experience.",
    detail: "Wireframes · Design system · Page-by-page layouts",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the website with responsive layouts and clean, maintainable implementation on Shopify, WordPress or Wix.",
    detail: "Responsive build · CMS setup · Integrations",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "Test across devices, fix issues and prepare the website for a smooth launch.",
    detail: "QA · Speed & SEO checks · Handover + training",
  },
];

export const advantages = [
  {
    title: "Business-Focused Approach",
    text: "Every website starts with your goals, audience and offer — not a generic template.",
  },
  {
    title: "Clean, Modern Design",
    text: "Clear hierarchy, strong typography and layouts that feel professional and easy to use.",
  },
  {
    title: "Responsive Across Devices",
    text: "Websites that work smoothly on phones, tablets and desktops.",
  },
  {
    title: "Shopify, WordPress & Wix",
    text: "The right platform for the project — chosen based on your needs and content workflow.",
  },
  {
    title: "Clear Communication",
    text: "Straightforward updates, plain language and a predictable process from start to finish.",
  },
  {
    title: "Easy-to-Manage Websites",
    text: "You get a website your team can update with confidence after launch.",
  },
];

export const skills = [
  "Shopify",
  "WordPress",
  "Wix",
  "E-commerce",
  "Responsive Design",
  "Website Optimization",
];

export const expertise = [
  {
    title: "Platforms",
    items: ["Shopify", "WordPress", "Wix"],
  },
  {
    title: "Website Types",
    items: [
      "E-commerce",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Blogs",
      "Content Websites",
      "Service Websites",
      "LMS Websites",
      "Real Estate Websites",
    ],
  },
  {
    title: "Core Focus",
    items: [
      "Responsive Design",
      "Conversion-focused layouts",
      "UI/UX",
      "Website Redesign",
      "Performance",
      "Mobile Optimization",
    ],
  },
];

/** Testimonials provided for portfolio presentation. Replace with verified client quotes when available. */
export const testimonials = [
  {
    quote:
      "Dipu rebuilt our Shopify store from the ground up. It looks like a brand three times our size — and mobile sales went up within the first month.",
    name: "Daniel Carter",
    role: "Founder & CEO",
    company: "Carter & Co.",
  },
  {
    quote:
      "Clear communication, fast delivery and a WordPress site our team can actually manage. Exactly what we were promised, no surprises.",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Nova Wellness",
  },
  {
    quote:
      "He understood the business before touching the design. The new site finally feels professional and it converts far better than the old one.",
    name: "Michael Thompson",
    role: "Owner",
    company: "Thompson Property Group",
  },
  {
    quote:
      "The entire process felt organized from day one. Dipu gave us a website that feels premium, loads quickly, and makes it easy for our customers to find what they need.",
    name: "Sophia Bennett",
    role: "Creative Director",
    company: "Bloom Studio",
  },
  {
    quote:
      "Our old Wix site did not represent the quality of our work. The new design is clear, polished and easy for us to update — we have received great feedback already.",
    name: "James Anderson",
    role: "E-commerce Manager",
    company: "Urban Goods",
  },
];

/** Only existing portfolio claims — no invented metrics. */
export const stats = [
  { value: "40+", label: "Websites Delivered" },
  { value: "3", label: "Core Platforms" },
  { value: "100%", label: "Responsive Builds" },
];

export const projectTypes = [
  "Shopify Website",
  "WordPress Website",
  "Wix Website",
  "Website Redesign",
  "E-commerce Website",
  "Landing Page",
  "Other",
];

export const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
];
