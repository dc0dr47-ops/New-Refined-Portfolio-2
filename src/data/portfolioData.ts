import characterIllustrationCard480 from '../assets/images/character-illustration-card-480.webp';
import characterIllustrationCard768 from '../assets/images/character-illustration-card-768.webp';
import characterIllustrationCard1200 from '../assets/images/character-illustration-card-1200.webp';
import characterSkeletonExpanded768 from '../assets/images/character-skeleton-expanded-768.webp';
import characterSkeletonExpanded1200 from '../assets/images/character-skeleton-expanded-1200.webp';
import characterSkeletonExpanded1536 from '../assets/images/character-skeleton-expanded-1536.webp';
import isometricTechCard480 from '../assets/images/isometric-tech-card-480.webp';
import isometricTechCard768 from '../assets/images/isometric-tech-card-768.webp';
import isometricTechCard1200 from '../assets/images/isometric-tech-card-1200.webp';
import oleMissExpanded768 from '../assets/images/ole-miss-expanded-768.webp';
import oleMissExpanded1200 from '../assets/images/ole-miss-expanded-1200.webp';
import oleMissExpanded1672 from '../assets/images/ole-miss-expanded-1672.webp';
import eagleMascotCard480 from '../assets/images/eagle-mascot-card-480.webp';
import eagleMascotCard768 from '../assets/images/eagle-mascot-card-768.webp';
import eagleMascotCard1200 from '../assets/images/eagle-mascot-card-1200.webp';
import eagleMascotExpanded768 from '../assets/images/eagle-mascot-expanded-768.webp';
import eagleMascotExpanded1200 from '../assets/images/eagle-mascot-expanded-1200.webp';
import eagleMascotExpanded1672 from '../assets/images/eagle-mascot-expanded-1672.webp';
import gamecocksCard480 from '../assets/images/gamecocks-card-480.webp';
import gamecocksCard768 from '../assets/images/gamecocks-card-768.webp';
import gamecocksCard1200 from '../assets/images/gamecocks-card-1200.webp';
import gamecocksExpanded768 from '../assets/images/gamecocks-expanded-768.webp';
import gamecocksExpanded1200 from '../assets/images/gamecocks-expanded-1200.webp';
import gamecocksExpanded1672 from '../assets/images/gamecocks-expanded-1672.webp';
import universityLogosCard480 from '../assets/images/university-logos-card-480.webp';
import universityLogosCard768 from '../assets/images/university-logos-card-768.webp';
import universityLogosCard1200 from '../assets/images/university-logos-card-1200.webp';
import universityLogosExpanded768 from '../assets/images/university-logos-expanded-768.webp';
import universityLogosExpanded1200 from '../assets/images/university-logos-expanded-1200.webp';
import universityLogosExpanded1672 from '../assets/images/university-logos-expanded-1672.webp';
import photoEditorialPortrait480 from '../assets/images/photo-editorial-portrait-480.webp';
import photoEditorialPortrait768 from '../assets/images/photo-editorial-portrait-768.webp';
import photoEditorialPortrait1200 from '../assets/images/photo-editorial-portrait-1200.webp';
import photoSurrealComposite480 from '../assets/images/photo-surreal-composite-480.webp';
import photoSurrealComposite768 from '../assets/images/photo-surreal-composite-768.webp';
import photoSurrealComposite1200 from '../assets/images/photo-surreal-composite-1200.webp';
import photoRestoration480 from '../assets/images/photo-restoration-480.webp';
import photoRestoration768 from '../assets/images/photo-restoration-768.webp';
import photoRestoration1200 from '../assets/images/photo-restoration-1200.webp';
import photoArchitecture480 from '../assets/images/photo-architecture-480.webp';
import photoArchitecture768 from '../assets/images/photo-architecture-768.webp';
import photoArchitecture1200 from '../assets/images/photo-architecture-1200.webp';
import photoProductRetouch480 from '../assets/images/photo-product-retouch-480.webp';
import photoProductRetouch768 from '../assets/images/photo-product-retouch-768.webp';
import photoProductRetouch1200 from '../assets/images/photo-product-retouch-1200.webp';
import socialFoodpandaCampaign from '../assets/images/social-foodpanda-campaign.png';
import socialJazzCampaign from '../assets/images/social-jazz-campaign.png';
import socialDarazCampaign from '../assets/images/social-daraz-campaign.png';
import socialKhaadiCampaign from '../assets/images/social-khaadi-campaign.png';
import socialShanFoodsCampaign from '../assets/images/social-shan-foods-campaign.png';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  proficiency: 'Advanced' | 'Proficient' | 'Daily Use';
  color: string;
  badgeBg: string;
  shortCode: string;
  iconType: 'illustrator' | 'photoshop' | 'figma' | 'canva' | 'ai';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  filterTag: 'Illustration' | 'Photo Editing' | 'Social Media' | 'Logos' | 'Branding' | 'Web Design';
  shortDescription: string;
  thumbnailBg: string;
  image: string;
  imageSrcSet?: string;
  detailImage?: string;
  detailImageSrcSet?: string;
  detailAspect?: '16/9' | '4/3' | '3/2' | 'wide';
  gallery: string[];
  client: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  approach: string;
  toolsUsed: string[];
  outcome: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const DESIGNER_INFO = {
  name: "Aftab Nadeem",
  title: "Graphic Designer, Visual Storyteller and Creative Problem Solver",
  tagline: "I create meaningful visual experiences through illustration, branding, photo editing, social media design and modern web interfaces.",
  location: "Lahore, Pakistan",
  email: "grafexlabs@gmail.com",
  availability: "Available for freelance projects",
  bio: "I'm a multidisciplinary graphic designer focused on creating visual work that is clear, engaging and purposeful. My experience includes vector illustration, photo editing, social media content, logo design and web design. I combine strong design fundamentals with modern tools and AI-assisted workflows to produce polished, effective results.",
  qualities: [
    "Detail-oriented perfectionist",
    "Creative problem solver",
    "Focused on clear communication",
    "Fast turnaround & collaborative"
  ],
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Completed", value: "140+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Design Awards", value: "12" }
  ],
  socials: {
    behance: "https://behance.net",
    dribbble: "https://dribbble.net",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

// EXACT REQUESTED ORDER FOR SERVICES / EXPERTISE
export const SERVICES_DATA: Service[] = [
  {
    id: "vector-illustration",
    number: "01",
    title: "Vector Illustration",
    description: "Scalable illustrations, characters, icons and visual assets created with clean shapes and expressive detail.",
    iconName: "PenTool",
    tags: ["Custom Characters", "Scalable Vector Art", "Icon Sets", "Editorial Graphics"]
  },
  {
    id: "photo-editing",
    number: "02",
    title: "Photo Editing",
    description: "Professional retouching, image enhancement, compositing, color correction and creative manipulation.",
    iconName: "Image",
    tags: ["Portrait Retouching", "Creative Compositing", "Color Grading", "Background Removal"]
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Posts",
    description: "Engaging branded content designed for campaigns, promotions and consistent online communication.",
    iconName: "Share2",
    tags: ["Instagram Carousels", "Ad Creatives", "Campaign Banners", "Branded Templates"]
  },
  {
    id: "logo-designing",
    number: "04",
    title: "Logo Designing",
    description: "Distinctive and memorable visual identities built around strategy, clarity and brand personality.",
    iconName: "Compass",
    tags: ["Brand Identity", "Wordmarks & Monograms", "Brand Guidelines", "Vector Assets"]
  },
  {
    id: "web-designing",
    number: "05",
    title: "Web Designing",
    description: "Responsive, user-focused website layouts that balance attractive visuals with intuitive usability.",
    iconName: "Layout",
    tags: ["UI/UX Layouts", "Responsive Landing Pages", "Figma Prototypes", "Design Systems"]
  }
];

// EXACT REQUESTED ORDER FOR TOOLS
export const TOOLS_DATA: Tool[] = [
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    description: "Vector illustrations, logos, icons and scalable visual assets.",
    proficiency: "Daily Use",
    color: "#FF9A00",
    badgeBg: "bg-amber-100 text-amber-800",
    shortCode: "Ai",
    iconType: "illustrator"
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    description: "Photo retouching, manipulation, compositing and digital artwork.",
    proficiency: "Daily Use",
    color: "#31A8FF",
    badgeBg: "bg-sky-100 text-sky-800",
    shortCode: "Ps",
    iconType: "photoshop"
  },
  {
    id: "figma",
    name: "Figma",
    description: "Responsive interfaces, wireframes, prototypes and design systems.",
    proficiency: "Advanced",
    color: "#F24E1E",
    badgeBg: "bg-orange-100 text-orange-800",
    shortCode: "Fg",
    iconType: "figma"
  },
  {
    id: "canva",
    name: "Canva",
    description: "Fast, effective social content, presentations and branded marketing materials.",
    proficiency: "Proficient",
    color: "#00C4CC",
    badgeBg: "bg-teal-100 text-teal-800",
    shortCode: "Cv",
    iconType: "canva"
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    description: "Idea exploration, image generation, workflow acceleration and creative experimentation.",
    proficiency: "Daily Use",
    color: "#8B5CF6",
    badgeBg: "bg-purple-100 text-purple-800",
    shortCode: "Ai✨",
    iconType: "ai"
  }
];

export const PROJECTS_DATA: Project[] = [
  // ================= PROJECTS =================
  {
    id: "skull-typography-apparel",
    title: "Skull Typography Apparel Collection",
    category: "Vector Illustration",
    filterTag: "Illustration",
    shortDescription: "Bold black-and-white skull illustrations paired with expressive lettering for apparel and merchandise.",
    thumbnailBg: "from-slate-100 via-zinc-100 to-stone-100",
    image: characterIllustrationCard768,
    imageSrcSet: `${characterIllustrationCard480} 480w, ${characterIllustrationCard768} 768w, ${characterIllustrationCard1200} 1200w`,
    detailImage: characterSkeletonExpanded1200,
    detailImageSrcSet: `${characterSkeletonExpanded768} 768w, ${characterSkeletonExpanded1200} 1200w, ${characterSkeletonExpanded1536} 1536w`,
    detailAspect: '3/2',
    gallery: [],
    client: "Independent Apparel Collection",
    year: "2026",
    role: "Vector Illustrator & Lettering Designer",
    overview: "Developed a coordinated collection of skull-based graphics combining detailed monochrome illustration with bold, personality-driven typography for shirts, stickers, and print merchandise.",
    challenge: "Keeping intricate skull details, decorative elements, and varied lettering styles readable at both small print sizes and large-format applications without losing visual impact.",
    approach: "Built each design with clean high-contrast linework, balanced negative space, and carefully matched type treatments, then refined the artwork for dependable reproduction across print and digital formats.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "AI Tools"],
    outcome: "Delivered a cohesive, print-ready collection of distinctive skull graphics suitable for apparel, stickers, posters, and merchandise."
  },
  {
    id: "ole-miss-rebels-branding",
    title: "Ole Miss Rebels Branding Collection",
    category: "Vector Illustration",
    filterTag: "Illustration",
    shortDescription: "A collegiate branding study featuring Ole Miss wordmarks, Rebels lettering, emblems, and mascot artwork.",
    thumbnailBg: "from-red-100 via-white to-blue-100",
    image: isometricTechCard768,
    imageSrcSet: `${isometricTechCard480} 480w, ${isometricTechCard768} 768w, ${isometricTechCard1200} 1200w`,
    detailImage: oleMissExpanded1200,
    detailImageSrcSet: `${oleMissExpanded768} 768w, ${oleMissExpanded1200} 1200w, ${oleMissExpanded1672} 1672w`,
    detailAspect: '16/9',
    gallery: [],
    client: "Ole Miss Rebels — Concept Study",
    year: "2026",
    role: "Brand & Mascot Illustration Designer",
    overview: "Created a presentation-ready collegiate identity study uniting Ole Miss scripts, Rebels wordmarks, varsity emblems, and illustrated mascot variations within one consistent visual collection.",
    challenge: "Maintaining a recognizable red-and-navy identity across very different assets, from compact badges and lettermarks to expressive scripts and detailed mascot illustrations.",
    approach: "Standardized the color palette, outline hierarchy, letter proportions, and mascot styling so every element feels related while remaining clear and distinctive at different sizes.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    outcome: "Produced a cohesive branding collection suitable for presentations, fan merchandise concepts, social graphics, and promotional applications."
  },
  {
    id: "bald-eagle-mascot-collection",
    title: "Bald Eagle Mascot Illustration Collection",
    category: "Vector Illustration",
    filterTag: "Illustration",
    shortDescription: "A bold series of bald-eagle mascot illustrations developed for athletic branding, apparel, and merchandise.",
    thumbnailBg: "from-amber-100 via-white to-stone-100",
    image: eagleMascotCard768,
    imageSrcSet: `${eagleMascotCard480} 480w, ${eagleMascotCard768} 768w, ${eagleMascotCard1200} 1200w`,
    detailImage: eagleMascotExpanded1200,
    detailImageSrcSet: `${eagleMascotExpanded768} 768w, ${eagleMascotExpanded1200} 1200w, ${eagleMascotExpanded1672} 1672w`,
    detailAspect: '16/9',
    gallery: [],
    client: "Athletic Mascot Concept Series",
    year: "2026",
    role: "Vector Illustrator & Mascot Designer",
    overview: "Developed a coordinated collection of bald-eagle mascot heads exploring frontal, profile, angled, calm, and aggressive expressions for sports identities and promotional artwork.",
    challenge: "Preserving the eagle's recognizable anatomy and commanding personality across multiple poses while keeping every variation consistent, scalable, and readable at logo sizes.",
    approach: "Constructed each mascot with sharp black contour work, layered white feather shapes, controlled brown shadows, and a unified gold palette for the beak and eyes.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "AI Tools"],
    outcome: "Delivered a versatile, print-ready mascot system suitable for team identities, uniforms, apparel, stickers, signage, and digital campaigns."
  },
  {
    id: "south-carolina-gamecocks-collection",
    title: "South Carolina Gamecocks Illustration Collection",
    category: "Vector Illustration",
    filterTag: "Illustration",
    shortDescription: "A collegiate illustration series featuring Gamecocks mascot artwork, campus emblems, badges, and fan graphics.",
    thumbnailBg: "from-red-100 via-white to-zinc-100",
    image: gamecocksCard768,
    imageSrcSet: `${gamecocksCard480} 480w, ${gamecocksCard768} 768w, ${gamecocksCard1200} 1200w`,
    detailImage: gamecocksExpanded1200,
    detailImageSrcSet: `${gamecocksExpanded768} 768w, ${gamecocksExpanded1200} 1200w, ${gamecocksExpanded1672} 1672w`,
    detailAspect: '16/9',
    gallery: [],
    client: "South Carolina Gamecocks — Concept Study",
    year: "2026",
    role: "Vector Illustrator & Collegiate Graphics Designer",
    overview: "Created a coordinated collection of South Carolina Gamecocks artwork combining a bold rooster mascot with university-inspired crests, campus symbols, fan slogans, and athletic badge designs.",
    challenge: "Maintaining consistent garnet, black, and white styling across mascot illustration, typography, architectural icons, state symbols, and differently shaped emblems.",
    approach: "Built a unified visual system using strong athletic lettering, high-contrast outlines, controlled color hierarchy, and repeatable badge construction suited to both detailed and compact applications.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "AI Tools"],
    outcome: "Delivered a versatile, print-ready collection suitable for fan apparel concepts, stickers, campus merchandise, social graphics, signage, and promotional materials."
  },
  {
    id: "university-logo-design-collection",
    title: "University Logo Design Collection",
    category: "Vector Illustration",
    filterTag: "Illustration",
    shortDescription: "A polished collection of university-inspired wordmarks, monograms, crests, and athletic logo concepts.",
    thumbnailBg: "from-red-100 via-amber-100 to-white",
    image: universityLogosCard768,
    imageSrcSet: `${universityLogosCard480} 480w, ${universityLogosCard768} 768w, ${universityLogosCard1200} 1200w`,
    detailImage: universityLogosExpanded1200,
    detailImageSrcSet: `${universityLogosExpanded768} 768w, ${universityLogosExpanded1200} 1200w, ${universityLogosExpanded1672} 1672w`,
    detailAspect: '16/9',
    gallery: [],
    client: "Collegiate Identity Concept Series",
    year: "2026",
    role: "Vector Logo & Identity Designer",
    overview: "Created a coordinated set of university-inspired identity concepts, pairing bold letterforms and classic crest construction with athletic emblems, school-color systems, and recognisable mascots.",
    challenge: "Giving each identity a distinct collegiate personality while keeping the shapes clean, legible, and strong enough for uniforms, signage, digital media, and small-format merchandise.",
    approach: "Used geometric letter construction, carefully balanced outlines, traditional varsity proportions, and focused color palettes to produce marks that remain clear and cohesive at every scale.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "AI Tools"],
    outcome: "Delivered a flexible set of presentation-ready logo concepts suitable for university branding studies, athletics graphics, apparel, stickers, and promotional design."
  },

  // ================= PHOTO EDITING (5 PROJECTS) =================
  {
    id: "editorial-portrait-retouch",
    title: "Editorial Portrait Retouching",
    category: "Photo Editing",
    filterTag: "Photo Editing",
    shortDescription: "High-end fashion portrait color grading, skin retouching, and creative lighting manipulation.",
    thumbnailBg: "from-rose-100 via-pink-100 to-peach-100",
    image: photoEditorialPortrait768,
    imageSrcSet: `${photoEditorialPortrait480} 480w, ${photoEditorialPortrait768} 768w, ${photoEditorialPortrait1200} 1200w`,
    detailImage: photoEditorialPortrait1200,
    detailImageSrcSet: `${photoEditorialPortrait480} 480w, ${photoEditorialPortrait768} 768w, ${photoEditorialPortrait1200} 1200w`,
    detailAspect: '4/3',
    gallery: [],
    client: "Vogue Creative Lab",
    year: "2025",
    role: "Senior Retoucher & Colorist",
    overview: "Conducted high-end frequency separation, non-destructive skin retouching, dodge & burn modeling, and customized color grading for a luxury cover story feature.",
    challenge: "Achieving a natural skin texture and glowing lighting composition while removing harsh glare without making the portraits look artificial or overly filtered.",
    approach: "Utilized Adobe Photoshop frequency separation techniques, curves adjustment layers, and target luminance masking.",
    toolsUsed: ["Adobe Photoshop", "AI Tools"],
    outcome: "Featured across 3 major digital fashion magazines with over 500,000 social media impressions."
  },
  {
    id: "surreal-photo-composite",
    title: "Surreal Commercial Photo Compositing",
    category: "Photo Editing",
    filterTag: "Photo Editing",
    shortDescription: "Immersive fantasy photomontage and surreal product compositing for an audio gear release.",
    thumbnailBg: "from-purple-100 via-fuchsia-100 to-pink-100",
    image: photoSurrealComposite768,
    imageSrcSet: `${photoSurrealComposite480} 480w, ${photoSurrealComposite768} 768w, ${photoSurrealComposite1200} 1200w`,
    detailImage: photoSurrealComposite1200,
    detailImageSrcSet: `${photoSurrealComposite480} 480w, ${photoSurrealComposite768} 768w, ${photoSurrealComposite1200} 1200w`,
    detailAspect: '4/3',
    gallery: [],
    client: "SoundWave Headphones",
    year: "2024",
    role: "Digital Artist & Image Manipulator",
    overview: "Combined over 15 stock photographs, 3D render passes, and hand-painted lighting effects into a surreal hero advertisement image.",
    challenge: "Matching atmospheric perspective, light directional sources, color temperature, and realistic shadow casting from multiple exposure sources.",
    approach: "Utilized Photoshop advanced blending modes, luminosity masking, custom brush lighting, and frequency separation.",
    toolsUsed: ["Adobe Photoshop", "AI Tools"],
    outcome: "Awarded 'Best Ad Composite' by Digital Art Showcase and featured in global digital campaigns."
  },
  {
    id: "vintage-photo-restoration",
    title: "Historical Photo Restoration & Colorization",
    category: "Photo Editing",
    filterTag: "Photo Editing",
    shortDescription: "Precision scratch removal, damaged photo repair, and AI-assisted historical colorization.",
    thumbnailBg: "from-amber-100 via-yellow-100 to-stone-100",
    image: photoRestoration768,
    imageSrcSet: `${photoRestoration480} 480w, ${photoRestoration768} 768w, ${photoRestoration1200} 1200w`,
    detailImage: photoRestoration1200,
    detailImageSrcSet: `${photoRestoration480} 480w, ${photoRestoration768} 768w, ${photoRestoration1200} 1200w`,
    detailAspect: '4/3',
    gallery: [],
    client: "Heritage Archives Foundation",
    year: "2025",
    role: "Photo Restoration Specialist",
    overview: "Restored a rare collection of 25 heavily damaged, scratched, and faded mid-20th-century archival family portraits.",
    challenge: "Reconstructing missing facial features and torn paper texture while respecting historical authenticity.",
    approach: "Combined Photoshop clone stamp, healing brushes, content-aware fill with custom hand-painted skin tones and AI detail enhancement.",
    toolsUsed: ["Adobe Photoshop", "AI Tools"],
    outcome: "Exhibited in the City Cultural Museum and published in a commemorative photo hardcover book."
  },
  {
    id: "architectural-dusk-grading",
    title: "Luxury Architectural Photo Enhancement",
    category: "Photo Editing",
    filterTag: "Photo Editing",
    shortDescription: "Day-to-dusk lighting transformation, perspective correction, and HDR real estate editing.",
    thumbnailBg: "from-blue-100 via-sky-100 to-indigo-100",
    image: photoArchitecture768,
    imageSrcSet: `${photoArchitecture480} 480w, ${photoArchitecture768} 768w, ${photoArchitecture1200} 1200w`,
    detailImage: photoArchitecture1200,
    detailImageSrcSet: `${photoArchitecture480} 480w, ${photoArchitecture768} 768w, ${photoArchitecture1200} 1200w`,
    detailAspect: '4/3',
    gallery: [],
    client: "Apex Luxury Properties",
    year: "2025",
    role: "Architectural Retoucher",
    overview: "Enhanced raw interior and exterior architectural photographs for a $15M luxury estate listing, including virtual twilight conversions.",
    challenge: "Correcting severe lens distortion and window glare while creating natural, glowing interior lighting during sunset.",
    approach: "Used Camera Raw perspective grid adjustments, multi-exposure bracket blending, sky replacements, and window pull exposures.",
    toolsUsed: ["Adobe Photoshop"],
    outcome: "Property sold in under 14 days and setting a regional price record."
  },
  {
    id: "e-commerce-product-retouch",
    title: "High-End E-Commerce Product Retouching",
    category: "Photo Editing",
    filterTag: "Photo Editing",
    shortDescription: "Flawless cosmetics and jewelry product retouching with realistic reflection generation.",
    thumbnailBg: "from-neutral-100 via-slate-100 to-stone-100",
    image: photoProductRetouch768,
    imageSrcSet: `${photoProductRetouch480} 480w, ${photoProductRetouch768} 768w, ${photoProductRetouch1200} 1200w`,
    detailImage: photoProductRetouch1200,
    detailImageSrcSet: `${photoProductRetouch480} 480w, ${photoProductRetouch768} 768w, ${photoProductRetouch1200} 1200w`,
    detailAspect: '4/3',
    gallery: [],
    client: "Luxe Glow Cosmetics",
    year: "2025",
    role: "Commercial Product Retoucher",
    overview: "Retouched a line of 30 luxury glass perfume bottles and skincare containers for web catalog and billboard advertisements.",
    challenge: "Eliminating dust, fingerprints, and uneven studio reflection highlights on reflective glass and metallic caps.",
    approach: "Created pristine vector path clipping, custom gradient reflection masks, and color balance consistency.",
    toolsUsed: ["Adobe Photoshop"],
    outcome: "Standardized product imagery across international e-commerce storefronts."
  },

  // ================= SOCIAL MEDIA (5 PROJECTS) =================
  {
    id: "product-launch-campaign",
    title: "foodpanda Pakistan Campaign Concept",
    category: "Social Media Posts",
    filterTag: "Social Media",
    shortDescription: "Landscape campaign concept showing shared Pakistani dining, delivery, and foodpanda convenience.",
    thumbnailBg: "from-emerald-100 via-teal-100 to-cyan-100",
    image: socialFoodpandaCampaign,
    detailImage: socialFoodpandaCampaign,
    detailAspect: '16/9',
    gallery: [],
    client: "foodpanda Pakistan — independent concept",
    year: "2026",
    role: "Social Media Designer & Art Director",
    overview: "Created an independent foodpanda Pakistan campaign concept built around a shared restaurant moment, delivery arrival, and clear brand-first messaging.",
    challenge: "Making delivery feel social and immediate while keeping food, people, product touchpoints, and headline readable in one landscape frame.",
    approach: "Used warm Pakistani night lighting, coral brand cues, a wide dining scene, and strong left-aligned typography for feed-first scanning.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    outcome: "Portfolio concept only; no affiliation with foodpanda and no performance claims."
  },
  {
    id: "podcast-cover-infographics",
    title: "Jazz Pakistan Connectivity Campaign Concept",
    category: "Social Media Posts",
    filterTag: "Social Media",
    shortDescription: "Landscape telecom campaign concept showing friends, Lahore skyline, smartphones, and shared connection.",
    thumbnailBg: "from-amber-100 via-orange-100 to-rose-100",
    image: socialJazzCampaign,
    detailImage: socialJazzCampaign,
    detailAspect: '16/9',
    gallery: [],
    client: "Jazz Pakistan — independent concept",
    year: "2026",
    role: "Social Media Designer & Art Director",
    overview: "Created an independent Jazz Pakistan campaign concept using a rooftop gathering and Lahore skyline to make mobile connection feel human.",
    challenge: "Showing network-enabled connection through people and place without cluttering a wide social ad with technical detail.",
    approach: "Built a red-led visual system, sunset city depth, candid group interaction, and large high-contrast headline placement.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    outcome: "Portfolio concept only; no affiliation with Jazz and no performance claims."
  },
  {
    id: "fitness-app-social-kit",
    title: "Daraz Pakistan Shopping Campaign Concept",
    category: "Social Media Posts",
    filterTag: "Social Media",
    shortDescription: "Landscape e-commerce campaign concept showing one Daraz delivery opening into a full everyday shopping scene.",
    thumbnailBg: "from-lime-100 via-emerald-100 to-teal-100",
    image: socialDarazCampaign,
    detailImage: socialDarazCampaign,
    detailAspect: '16/9',
    gallery: [],
    client: "Daraz Pakistan — independent concept",
    year: "2026",
    role: "Social Media Designer & Art Director",
    overview: "Created an independent Daraz Pakistan campaign concept showing the variety of everyday shopping inside one bright home delivery moment.",
    challenge: "Communicating product range and app convenience in one believable lifestyle frame while keeping the orange brand block dominant.",
    approach: "Combined an orange parcel hero, natural home light, multiple product categories, and direct headline hierarchy.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    outcome: "Portfolio concept only; no affiliation with Daraz and no performance claims."
  },
  {
    id: "fashion-week-story-templates",
    title: "Khaadi Pakistan Fashion Campaign Concept",
    category: "Social Media Posts",
    filterTag: "Social Media",
    shortDescription: "Landscape fashion campaign concept pairing a Khaadi-inspired outfit with Lahore architecture and surrounding textiles.",
    thumbnailBg: "from-stone-100 via-rose-100 to-pink-100",
    image: socialKhaadiCampaign,
    detailImage: socialKhaadiCampaign,
    detailAspect: '16/9',
    gallery: [],
    client: "Khaadi Pakistan — independent concept",
    year: "2026",
    role: "Social Media Designer & Art Director",
    overview: "Created an independent Khaadi Pakistan campaign concept that places fashion, textile texture, and Lahore heritage in one editorial landscape frame.",
    challenge: "Keeping the outfit as focal point while giving textile rolls, architecture, and brand message enough room to tell a fuller story.",
    approach: "Used warm editorial light, layered fabric foregrounds, heritage architecture, and restrained white typography.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    outcome: "Portfolio concept only; no affiliation with Khaadi and no performance claims."
  },
  {
    id: "culinary-reels-graphics",
    title: "Shan Foods Pakistan Family Campaign Concept",
    category: "Social Media Posts",
    filterTag: "Social Media",
    shortDescription: "Landscape food campaign concept showing Shan Foods, biryani preparation, spices, and family dining in one scene.",
    thumbnailBg: "from-orange-100 via-amber-100 to-red-100",
    image: socialShanFoodsCampaign,
    detailImage: socialShanFoodsCampaign,
    detailAspect: '16/9',
    gallery: [],
    client: "Shan Foods Pakistan — independent concept",
    year: "2026",
    role: "Social Media Designer & Art Director",
    overview: "Created an independent Shan Foods Pakistan campaign concept centered on a mother-daughter cooking moment, spice prep, and family dining.",
    challenge: "Showing product use, recipe context, and emotional warmth without losing clarity around the food and package.",
    approach: "Built a warm kitchen scene with layered ingredients, copper cookware, family depth, and a strong red-and-yellow brand lockup.",
    toolsUsed: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    outcome: "Portfolio concept only; no affiliation with Shan Foods and no performance claims."
  },

  // ================= LOGOS (5 PROJECTS) =================
  {
    id: "apex-crest-logo-design",
    title: "Apex Peak Emblem & Wordmark",
    category: "Logo Designing",
    filterTag: "Logos",
    shortDescription: "Geometric mountain crest symbol and modern sans-serif wordmark for an outdoor adventure brand.",
    thumbnailBg: "from-cyan-100 via-sky-100 to-blue-100",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Apex Outdoor Gear",
    year: "2025",
    role: "Logo & Monogram Designer",
    overview: "Designed a minimalist geometric mountain emblem paired with custom typographic kerning for an outdoor sports and apparel brand.",
    challenge: "Creating an icon that scales cleanly from a tiny 16px favicon to giant embroidered jacket badges.",
    approach: "Utilized golden ratio vector grids in Adobe Illustrator with clean monochrome and duo-tone colorways.",
    toolsUsed: ["Adobe Illustrator", "Figma"],
    outcome: "Adopted as the official brand icon across 120+ retail product lines."
  },
  {
    id: "lumin-tech-monogram-logo",
    title: "Lumin AI Tech Monogram",
    category: "Logo Designing",
    filterTag: "Logos",
    shortDescription: "Futuristic interlocking 'L' and spark monogram mark for an artificial intelligence analytics startup.",
    thumbnailBg: "from-indigo-100 via-purple-100 to-violet-100",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Lumin AI Systems",
    year: "2025",
    role: "Brand Identity & Logo Specialist",
    overview: "Created a modern gradient monogram and wordmark conveying intelligence, precision, and forward velocity.",
    challenge: "Balancing abstract futuristic geometry with immediate readability and trustworthy corporate appeal.",
    approach: "Built precise mathematical bezier vectors with glowing gradient accents and clean dark/light mode variants.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    outcome: "Secured $14M Series-A funding with a unified, high-tech brand mark."
  },
  {
    id: "veritas-coffee-roasters-logo",
    title: "Veritas Artisan Coffee Stamp Logo",
    category: "Logo Designing",
    filterTag: "Logos",
    shortDescription: "Vintage circular badge mark with handcrafted serif lettering for a specialty coffee roastery.",
    thumbnailBg: "from-amber-100 via-stone-100 to-orange-100",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Veritas Coffee Roasters",
    year: "2025",
    role: "Vector Emblem & Logo Designer",
    overview: "Designed a rustic, seal-style logo featuring hand-drawn coffee branch details and custom curved typography.",
    challenge: "Maintaining vintage craftsmanship texture while ensuring crisp vector scalability for stamps, bags, and neon signs.",
    approach: "Hand-penciled initial concepts, refined anchor points in Illustrator, and tested embossing, foil stamping, and embroidery.",
    toolsUsed: ["Adobe Illustrator"],
    outcome: "Featured on national coffee packaging design awards and 15 café storefronts."
  },
  {
    id: "horizon-real-estate-wordmark",
    title: "Horizon Properties Minimalist Wordmark",
    category: "Logo Designing",
    filterTag: "Logos",
    shortDescription: "Architectural luxury wordmark and geometric 'H' icon for high-end real estate developments.",
    thumbnailBg: "from-slate-100 via-zinc-100 to-emerald-100",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Horizon Real Estate Group",
    year: "2024",
    role: "Corporate Identity Designer",
    overview: "Crafted a refined architectural logotype with custom ligature details reflecting structure, elevation, and trust.",
    challenge: "Distinguishing the brand from generic house-icon real estate logos through sophisticated typographic minimalism.",
    approach: "Designed custom letterforms with subtle 45-degree angle cuts mirroring modern architectural rooflines.",
    toolsUsed: ["Adobe Illustrator", "Figma"],
    outcome: "Unified 4 regional property branches under a prestige luxury identity."
  },
  {
    id: "solaris-clean-energy-symbol",
    title: "Solaris Renewable Energy Icon",
    category: "Logo Designing",
    filterTag: "Logos",
    shortDescription: "Vibrant solar burst and leaf combination logo mark for a sustainable green tech company.",
    thumbnailBg: "from-emerald-100 via-lime-100 to-yellow-100",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Solaris Clean Energy",
    year: "2026",
    role: "Brand Identity Designer",
    overview: "Created a dynamic geometric symbol combining sun rays and leaf silhouettes to represent clean, sustainable energy.",
    challenge: "Merging two distinct concepts (sun and leaf) into a single unified symbol without visual clutter.",
    approach: "Used overlapping geometric curves and a vivid gradient palette transition from green to golden yellow.",
    toolsUsed: ["Adobe Illustrator", "AI Tools"],
    outcome: "Rolled out on corporate fleets, solar panel branding, and international eco summits."
  },

  // ================= BRANDING (5 PROJECTS) =================
  {
    id: "modern-brand-identity",
    title: "Modern Brand Identity & Guidelines",
    category: "Branding",
    filterTag: "Branding",
    shortDescription: "Complete visual identity including geometric logo design, color swatches, and typography rules.",
    thumbnailBg: "from-violet-100 via-purple-100 to-indigo-100",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Aura Architecture Studio",
    year: "2024",
    role: "Brand Identity Designer",
    overview: "Crafted a clean, geometric logo mark, stationery package, brand guidelines book, and digital assets for an upscale architectural firm.",
    challenge: "Refining a complex monogram concept into an elegant, timeless, minimalist symbol that communicates precision and warmth.",
    approach: "Executed golden-ratio grid alignment in Adobe Illustrator, paired with custom typography kerning and a warm architectural color palette.",
    toolsUsed: ["Adobe Illustrator", "Figma"],
    outcome: "Successfully rebranded Aura Studio across 5 regional offices and elevated client perception."
  },
  {
    id: "artisan-coffee-branding",
    title: "Artisan Roastery Brand Identity",
    category: "Branding",
    filterTag: "Branding",
    shortDescription: "Handcrafted logo badges, eco-friendly packaging, and brand guidelines for specialty coffee.",
    thumbnailBg: "from-amber-100 via-stone-100 to-orange-100",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Craft & Roast Co.",
    year: "2025",
    role: "Brand Identity & Packaging Designer",
    overview: "Developed a warm, handcrafted brand identity featuring custom vector emblem designs, eco-friendly coffee bag packaging, and cafe collateral.",
    challenge: "Crafting a nostalgic yet contemporary aesthetic that stands out in a crowded specialty coffee retail market.",
    approach: "Hand-sketched emblem concepts before vectorizing in Illustrator, pairing rustic typography with warm earth-tone palettes.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    outcome: "Helped Craft & Roast launch 3 new retail locations and expand bag distribution by 200%."
  },
  {
    id: "cyber-security-identity",
    title: "Quantum Security Brand System",
    category: "Branding",
    filterTag: "Branding",
    shortDescription: "Sleek tech logo design, dynamic brand guidelines, and corporate identity system for a cybersecurity firm.",
    thumbnailBg: "from-cyan-100 via-blue-100 to-indigo-100",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "ShieldX Cyber Labs",
    year: "2025",
    role: "Lead Brand Strategist & Designer",
    overview: "Created an authoritative tech brand identity system including vector logo mark, dark-mode brand manual, and digital collateral.",
    challenge: "Designing a security symbol that avoids overused shield clichés while conveying trust, intelligence, and modern speed.",
    approach: "Combined overlapping geometric node structures with sharp cyan-to-indigo gradients in Adobe Illustrator.",
    toolsUsed: ["Adobe Illustrator", "Figma"],
    outcome: "Secured enterprise client trust during $15M Series A funding round."
  },
  {
    id: "boutique-hotel-branding",
    title: "Mirage Boutique Hotel Visual Identity",
    category: "Branding",
    filterTag: "Branding",
    shortDescription: "Luxury hospitality branding, gilded stationery, door signs, and custom monogram design.",
    thumbnailBg: "from-amber-100 via-rose-100 to-neutral-100",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Mirage Luxury Resorts",
    year: "2024",
    role: "Senior Visual Designer",
    overview: "Designed complete luxury branding collateral including foil-stamped room key cards, restaurant menus, spa packaging, and hotel signage.",
    challenge: "Establishing an atmosphere of high-end relaxation and timeless elegance across both print and digital touchpoints.",
    approach: "Utilized custom serif typography, gold-leaf accent palettes, and minimalist geometric palm motifs.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    outcome: "Voted 'Top 10 Hotel Brand Designs' by Hospitality Design Magazine."
  },
  {
    id: "organic-skincare-packaging",
    title: "Natura Organic Skincare Packaging",
    category: "Branding",
    filterTag: "Branding",
    shortDescription: "Minimalist eco-conscious glass bottle packaging, outer box designs, and brand system.",
    thumbnailBg: "from-teal-100 via-emerald-100 to-stone-100",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Natura Botanicals",
    year: "2025",
    role: "Packaging & Brand Designer",
    overview: "Developed recyclable glass bottle labels and unboxing package structures for an organic botanical skincare brand.",
    challenge: "Creating clean product labeling that holds essential ingredient compliance text while remaining ultra-minimalist and elegant.",
    approach: "Utilized high-contrast sans-serif typography paired with subtle blind debossing on textured paper stock.",
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    outcome: "Selected for nationwide retail distribution across Sephora and specialty beauty stores."
  },

  // ================= WEB DESIGN (5 PROJECTS) =================
  {
    id: "creative-agency-landing-page",
    title: "Creative Agency Landing Page",
    category: "Web Design",
    filterTag: "Web Design",
    shortDescription: "Modern, responsive UI/UX landing page design with custom micro-animations and warm peach aesthetics.",
    thumbnailBg: "from-peach-100 via-coral-100 to-orange-100",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Pulse Creative Hub",
    year: "2025",
    role: "UI/UX Web Designer",
    overview: "Designed an interactive, high-converting desktop & mobile landing page layout featuring warm illustrations, dynamic project filters, and intuitive CTA paths.",
    challenge: "Balancing rich visual illustrations with fast page loading times and effortless responsive desktop-to-mobile layout fluidities.",
    approach: "Built high-fidelity interactive wireframes and component design systems in Figma with auto-layout padding math.",
    toolsUsed: ["Figma", "Adobe Illustrator"],
    outcome: "Boosted landing page conversion rate by 42% and won a Site of the Day nomination."
  },
  {
    id: "fintech-saas-dashboard",
    title: "Fintech SaaS Platform Web Design",
    category: "Web Design",
    filterTag: "Web Design",
    shortDescription: "Sleek dark & light mode dashboard UI, landing page design, and component system for a financial platform.",
    thumbnailBg: "from-slate-100 via-blue-100 to-cyan-100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Zenith Financial Technologies",
    year: "2025",
    role: "Lead UI/UX Designer",
    overview: "Designed the web application interface and responsive marketing landing page for an AI-powered financial portfolio manager.",
    challenge: "Organizing complex financial data, real-time charts, and transaction feeds into an uncluttered, accessible interface.",
    approach: "Built a modular design system in Figma with WCAG AA compliant color contrast ratios, clear typographic hierarchy, and clean data visualizations.",
    toolsUsed: ["Figma", "Adobe Illustrator"],
    outcome: "Reduced user onboarding drop-off by 28% and received praise from fintech industry reviewers."
  },
  {
    id: "luxury-real-estate-web",
    title: "Horizon Estate Luxury Portal",
    category: "Web Design",
    filterTag: "Web Design",
    shortDescription: "High-end real estate listing website with interactive map search, full-screen video heroes, and schedule tour modals.",
    thumbnailBg: "from-blue-100 via-indigo-100 to-slate-100",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Horizon Real Estate Group",
    year: "2025",
    role: "Senior Web & Interaction Designer",
    overview: "Designed a immersive luxury home search portal with high-resolution gallery grids, floorplan viewer, and agent contact booking flows.",
    challenge: "Creating an expansive desktop experience that maintains fluid speed and effortless thumb-navigation on mobile devices.",
    approach: "Crafted clean grid structures, generous line heights, custom vector map markers, and polished micro-interactions in Figma.",
    toolsUsed: ["Figma", "Adobe Photoshop"],
    outcome: "Increased qualified luxury home tour inquiries by 55% within 60 days of launch."
  },
  {
    id: "ai-creative-agency-site",
    title: "Nexus Interactive Studio Website",
    category: "Web Design",
    filterTag: "Web Design",
    shortDescription: "Cutting-edge web design featuring interactive case studies, dark-mode toggle, and smooth page transitions.",
    thumbnailBg: "from-purple-100 via-violet-100 to-indigo-100",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Nexus Digital Agency",
    year: "2025",
    role: "UI/UX & Web Designer",
    overview: "Designed a portfolio website for a Tokyo-based digital product studio, showcasing award-winning client work and interactive labs.",
    challenge: "Crafting a unique typographic layout that stands out from standard corporate templates while remaining easy to navigate.",
    approach: "Paired large display headlines with sleek monospaced subheadings and custom interactive cursor states.",
    toolsUsed: ["Figma", "Adobe Illustrator"],
    outcome: "Won Awwwards Site of the Day and increased client contract requests by 70%."
  },
  {
    id: "meditation-wellness-app",
    title: "Serene Mind Wellness Web App",
    category: "Web Design",
    filterTag: "Web Design",
    shortDescription: "Calming mindfulness web portal design with breathing exercise visualizers, audio player UI, and progress trackers.",
    thumbnailBg: "from-teal-100 via-cyan-100 to-emerald-100",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80"
    ],
    client: "Serene Health Technologies",
    year: "2025",
    role: "Lead UI/UX Designer",
    overview: "Designed an eye-safe, soothing web application interface for guided meditation, ambient soundscapes, and mood journaling.",
    challenge: "Reducing cognitive strain and visual noise through soft organic color palettes and gentle glassmorphic card elements.",
    approach: "Designed with soft pastel cyan-to-peach backgrounds, spacious padding math, and rounded pill button controls.",
    toolsUsed: ["Figma", "Adobe Illustrator"],
    outcome: "Achieved a 4.9/5 user satisfaction rating with over 100,000 active monthly subscribers."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding the goal, audience and visual direction.",
    icon: "Search",
    details: ["Project Brief Analysis", "Audience Research", "Moodboard Creation", "Goal Setting"]
  },
  {
    step: "02",
    title: "Explore",
    description: "Researching references and developing initial creative concepts.",
    icon: "Compass",
    details: ["Creative Brainstorming", "Quick Vector Sketches", "Concept Variations", "Color & Type Tests"]
  },
  {
    step: "03",
    title: "Design",
    description: "Transforming the strongest concept into a polished visual solution.",
    icon: "Palette",
    details: ["High-Fidelity Rendering", "Pixel-Perfect Layouts", "Custom Illustrations", "Brand Alignment"]
  },
  {
    step: "04",
    title: "Refine",
    description: "Reviewing details, applying feedback and preparing final deliverables.",
    icon: "CheckCircle",
    details: ["Client Feedback Loops", "Detail Optimization", "Asset Exports (SVG/PNG/PDF)", "Final Delivery"]
  }
];
