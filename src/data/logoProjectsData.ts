import { Project } from './portfolioData';

const logoPreview = (mark: string, wordmark: string, accent: string, background = '#FFF9F6') =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <rect width="1200" height="900" rx="48" fill="${background}"/>
      <circle cx="600" cy="350" r="170" fill="${accent}" opacity="0.12"/>
      <rect x="430" y="180" width="340" height="340" rx="86" fill="white" stroke="${accent}" stroke-width="18"/>
      <text x="600" y="398" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="170" font-weight="800" fill="${accent}">${mark}</text>
      <text x="600" y="650" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="800" fill="#20284F">${wordmark}</text>
      <text x="600" y="712" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" letter-spacing="8" fill="#7E7A78">LOGO CONCEPT</text>
    </svg>
  `)}`;

const northstarLogo = logoPreview('N', 'NORTHSTAR', '#FF745A');
const vertexLogo = logoPreview('V', 'VERTEX LABS', '#5B6CFF', '#F5F7FF');
const emberLogo = logoPreview('E', 'EMBER & CO.', '#F59E0B', '#FFF8E8');
const harborLogo = logoPreview('H', 'HARBOR COFFEE', '#0F766E', '#F0FDFA');
const monogramLogo = logoPreview('AM', 'ATLAS MONOGRAM', '#7C3AED', '#FAF5FF');

export const LOGO_PROJECTS_DATA = [
  {
    id: 'northstar-logo-system',
    title: 'Northstar Identity Mark',
    category: 'Logos',
    filterTag: 'Logos',
    shortDescription: 'A clean directional monogram built for a modern consulting and strategy brand.',
    thumbnailBg: 'from-orange-50 via-white to-rose-50',
    image: northstarLogo,
    detailImage: northstarLogo,
    detailAspect: '4/3',
    gallery: [],
    client: 'Northstar Consulting — Sample Concept',
    year: '2026',
    role: 'Logo & Identity Designer',
    overview: 'Developed a compact monogram and wordmark concept focused on clarity, direction and confident positioning.',
    challenge: 'Creating a recognizable symbol that remains readable at small sizes while still feeling distinctive in larger brand applications.',
    approach: 'Reduced the idea to a bold initial-based mark, paired it with a straightforward wordmark, and tested the system for digital and print use.',
    toolsUsed: ['Adobe Illustrator', 'Figma'],
    outcome: 'Produced a flexible sample identity suitable for stationery, social profiles, presentations and web headers.'
  },
  {
    id: 'vertex-labs-logo',
    title: 'Vertex Labs Tech Logo',
    category: 'Logos',
    filterTag: 'Logos',
    shortDescription: 'A sharp geometric identity concept for a technology and product-development studio.',
    thumbnailBg: 'from-indigo-50 via-white to-blue-50',
    image: vertexLogo,
    detailImage: vertexLogo,
    detailAspect: '4/3',
    gallery: [],
    client: 'Vertex Labs — Sample Concept',
    year: '2026',
    role: 'Logo Designer',
    overview: 'Created a technology-focused identity concept using a compact geometric letterform and strong visual hierarchy.',
    challenge: 'Balancing a technical personality with enough simplicity to keep the mark usable across app icons, websites and documents.',
    approach: 'Built the symbol from minimal geometry and paired it with a clear uppercase wordmark for a modern, scalable system.',
    toolsUsed: ['Adobe Illustrator', 'Figma'],
    outcome: 'Delivered a crisp sample logo direction that works across small digital placements and larger brand surfaces.'
  },
  {
    id: 'ember-co-logo',
    title: 'Ember & Co. Brand Mark',
    category: 'Logos',
    filterTag: 'Logos',
    shortDescription: 'A warm premium identity concept designed for a boutique lifestyle and home-goods brand.',
    thumbnailBg: 'from-amber-50 via-white to-orange-50',
    image: emberLogo,
    detailImage: emberLogo,
    detailAspect: '4/3',
    gallery: [],
    client: 'Ember & Co. — Sample Concept',
    year: '2026',
    role: 'Brand Identity Designer',
    overview: 'Designed a warm, approachable logo concept that can move comfortably between packaging, social media and retail applications.',
    challenge: 'Keeping the identity premium without making it feel overly formal or difficult to reproduce.',
    approach: 'Used a simple initial mark, restrained color palette and balanced typography to create an adaptable identity foundation.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    outcome: 'Created a versatile sample mark ready for packaging mockups, labels, online storefronts and promotional assets.'
  },
  {
    id: 'harbor-coffee-logo',
    title: 'Harbor Coffee Logo',
    category: 'Logos',
    filterTag: 'Logos',
    shortDescription: 'A calm, dependable logo direction for a neighborhood coffee shop and packaged coffee line.',
    thumbnailBg: 'from-teal-50 via-white to-emerald-50',
    image: harborLogo,
    detailImage: harborLogo,
    detailAspect: '4/3',
    gallery: [],
    client: 'Harbor Coffee — Sample Concept',
    year: '2026',
    role: 'Logo & Packaging Designer',
    overview: 'Explored a friendly identity system that feels equally at home on storefront signage, cups, bags and digital menus.',
    challenge: 'Creating a mark with enough character for hospitality while keeping the shape simple for stamps and small packaging labels.',
    approach: 'Focused on a bold initial, strong contrast and uncomplicated typography to keep reproduction reliable at every size.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    outcome: 'Produced a clear sample identity that can extend naturally into packaging, signage and social content.'
  },
  {
    id: 'atlas-monogram-logo',
    title: 'Atlas Monogram System',
    category: 'Logos',
    filterTag: 'Logos',
    shortDescription: 'A compact two-letter monogram concept for a premium architecture and interiors studio.',
    thumbnailBg: 'from-purple-50 via-white to-fuchsia-50',
    image: monogramLogo,
    detailImage: monogramLogo,
    detailAspect: '4/3',
    gallery: [],
    client: 'Atlas Studio — Sample Concept',
    year: '2026',
    role: 'Monogram & Identity Designer',
    overview: 'Created a restrained two-letter monogram system intended for an architecture and interiors practice with a premium visual tone.',
    challenge: 'Combining two initials without sacrificing legibility, balance or scalability across drawings, stationery and signage.',
    approach: 'Used simplified letter construction, generous spacing and a controlled palette to make the monogram feel precise and architectural.',
    toolsUsed: ['Adobe Illustrator', 'Figma'],
    outcome: 'Delivered a polished sample monogram direction suited to stationery, project documents, signage and digital brand use.'
  }
] as unknown as Project[];
