export const siteConfig = {
  name: "Puremax Paints Industries Limited",
  shortName: "Puremax Paints",
  tagline: "Colouring Your World",
  description:
    "Discover Puremax Paints Industries Limited — quality paint solutions for homes, businesses and projects in Kenya. Explore our products, projects and paint solutions.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "+254 721 177 035",
  address: "Ruiru Bypass, opposite Nexus Gym, immediately after you come down the overpass",
  openingHours: "Monday – Saturday, 8:00 am – 5:00 pm",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254721177035",
  social: {
    facebook: "https://www.facebook.com/search/top?q=Puremax%20Paints%20Industries%20Limited",
    instagram: "https://www.instagram.com/explore/search/keyword/?q=Puremax%20Paints%20Industries%20Limited",
    tiktok: "",
    x: "",
    linkedin: "",
  },
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  packSize: string;
  variants: string[];
  finish: string;
  price: string | null;
  previousPrice: string | null;
  promotionalPrice: string | null;
  sku: string | null;
  availability: "available" | "out-of-stock" | "contact";
  imageAlt: string;
  image: string;
  mockupImage?: string;
  labelImage: string;
  uses: string;
  features: string[];
  application: string[];
};

const packFeatures = [
  "Smooth finish",
  "Washable",
  "Suitable for interior and exterior surfaces",
  "Low odour",
  "15-year life expectancy (as printed on the pack)",
  "Extreme weather and UV resistant",
  "Waterproof and breathable finish",
  "Anti-fungal and anti-mould shield",
];

const commonApplication = [
  "Make sure the surface is clean, dry, sound and free from dust, grease, loose paint and efflorescence.",
  "Repair cracks and holes and allow repairs to cure fully before painting.",
  "Stir the product thoroughly before use. Do not dilute unless the pack label says so.",
];

export const products: Product[] = [
  {
    slug: "wall-master",
    name: "Wall Master",
    shortDescription: "Premium textured finish for interior and exterior walls",
    description:
      "Wall Master is a premium textured wall finish from Puremax. Its designer texture lets applicators create custom wall patterns, and it is available in Normal, Fine and Stoneless variants for different looks.",
    packSize: "30 KG",
    variants: ["Normal", "Fine", "Stoneless"],
    finish: "Premium textured finish",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Puremax Wall Master 30 KG premium textured finish pack",
    image: "/products/wall-master-front.jpg",
    mockupImage: "/products/wall-master-bucket.jpg",
    labelImage: "/paint/paint-5.jpeg",
    uses: "Interior and exterior walls where a designed, textured look is wanted.",
    features: ["Designer texture for custom-crafted wall patterns", ...packFeatures],
    application: [
      ...commonApplication,
      "Apply with a stainless steel trowel and work the texture pattern while the material is workable.",
      "Allow the finish to dry fully before handling or recoating.",
    ],
  },
  {
    slug: "silk-vinyl",
    name: "Silk Vinyl",
    shortDescription: "Smooth, washable interior gloss finish",
    description:
      "Silk Vinyl is a smooth interior gloss finish from Puremax. It is washable and low odour, making it a practical choice for living areas, bedrooms and offices.",
    packSize: "20 Ltr",
    variants: [],
    finish: "Interior gloss finish",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Puremax Silk Vinyl 20 litre interior gloss finish bucket",
    image: "/products/silk-vinyl-front.jpg",
    mockupImage: "/products/silk-vinyl-bucket.jpg",
    labelImage: "/paint/paint-4.jpeg",
    uses: "Interior walls and ceilings in homes, offices and commercial spaces.",
    features: packFeatures,
    application: [
      ...commonApplication,
      "Apply over a suitable undercoat using a good-quality brush, roller or spray.",
      "Apply two coats, allowing the first coat to dry before applying the second.",
    ],
  },
  {
    slug: "under-coat",
    name: "Under Coat",
    shortDescription: "Premium finish primer and undercoat",
    description:
      "Under Coat is a premium primer and undercoat from Puremax. It prepares walls for the final finish, helping create an even base before topcoats such as Silk Vinyl are applied.",
    packSize: "20 Ltr",
    variants: [],
    finish: "Premium primer / undercoat",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Puremax Under Coat 20 litre premium finish pack",
    image: "/products/under-coat-front.jpg",
    labelImage: "/paint/paint-3.jpeg",
    uses: "A base coat on new or previously painted interior and exterior walls before the final finish.",
    features: packFeatures,
    application: [
      ...commonApplication,
      "Apply one to two coats with a brush or roller, depending on the surface and porosity.",
      "Allow to dry fully, then apply the chosen finish coat.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  description: string;
  productsUsed: string[];
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonial: string | null;
};

const asset = (file: string) => `/assets/${encodeURIComponent(file)}`;
const img = (time: string, suffix = "") => asset(`WhatsApp Image ${time}${suffix}.jpeg`);

export const projectVideo = {
  src: asset("WhatsApp Video 2026-09-15 at 21.31.13.mp4"),
  poster: "/products/video-poster.jpg",
  title: "Finishing work on site",
};

export const stockPhoto = img("2026-09-15 at 21.57.21");

export const projects: Project[] = [
  {
    slug: "bungalow-exterior-repaint",
    title: "Bungalow exterior repaint",
    location: "Kenya",
    category: "Residential",
    description:
      "A single-storey home refreshed with a new exterior colour scheme. Use the slider to compare the home before and after the new colours were applied.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.31.20")],
    beforeImage: img("2026-09-15 at 21.31.13"),
    afterImage: img("2026-09-15 at 21.31.20"),
    testimonial: null,
  },
  {
    slug: "apartment-block-exterior",
    title: "Apartment block exterior finish",
    location: "Kenya",
    category: "Apartments",
    description:
      "A multi-storey apartment block taken from bare plaster to a warm, even exterior finish. Use the slider to compare the building before and after painting.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.31.22")],
    beforeImage: img("2026-09-15 at 21.31.23"),
    afterImage: img("2026-09-15 at 21.31.22"),
    testimonial: null,
  },
  {
    slug: "hipped-roof-home",
    title: "Hipped-roof family home",
    location: "Kenya",
    category: "Residential",
    description:
      "A new-build family home with a covered veranda, shown during construction and again once the clean white finish was complete.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.31.25")],
    beforeImage: img("2026-09-15 at 21.31.24"),
    afterImage: img("2026-09-15 at 21.31.25"),
    testimonial: null,
  },
  {
    slug: "two-storey-maisonette",
    title: "Two-storey maisonette",
    location: "Kenya",
    category: "Residential",
    description:
      "A two-storey home with a rounded balcony, shown during preparation and after the final exterior colours were applied.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.31.29")],
    beforeImage: img("2026-09-15 at 21.37.55"),
    afterImage: img("2026-09-15 at 21.31.29"),
    testimonial: null,
  },
  {
    slug: "arched-window-residence",
    title: "Arched-window residence",
    location: "Kenya",
    category: "Residential",
    description:
      "A white-painted two-storey residence with arched windows and a wrap-around balcony, finished with a crisp, clean exterior look.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.31.27")],
    testimonial: null,
  },
  {
    slug: "multi-storey-finishing",
    title: "Multi-storey finishing work",
    location: "Kenya",
    category: "Apartments",
    description:
      "Exterior construction and finishing in progress on multi-storey residential buildings, with scaffolding in place for access to every elevation.",
    productsUsed: [],
    images: [
      img("2026-09-15 at 21.31.26"),
      img("2026-09-15 at 21.51.04"),
      img("2026-09-15 at 21.51.05", " (1)"),
      img("2026-09-15 at 21.53.43"),
    ],
    testimonial: null,
  },
  {
    slug: "textured-finish-application",
    title: "Textured finish application",
    location: "Kenya",
    category: "Texture",
    description:
      "An applicator working a textured wall finish by hand on a site wall, showing the detail that a designed texture can bring.",
    productsUsed: [],
    images: [img("2026-09-15 at 21.51.05")],
    testimonial: null,
  },
];

export const dealers: {
  name: string;
  town: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
}[] = [];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  content: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "prepare-a-wall-before-painting",
    title: "How to Prepare a Wall Before Painting",
    category: "Painting Tips",
    excerpt:
      "A practical starting checklist for inspecting and preparing a wall before a new paint finish.",
    publishedAt: "2026-10-02",
    content: [
      {
        heading: "Start with the surface",
        paragraphs: [
          "Look over the wall for loose or flaking material, cracks, damp patches and areas that may need repair. The right preparation depends on the condition of the surface, so resolve underlying moisture or structural concerns before painting.",
          "If you are unsure what a particular mark or defect means, ask a qualified painter or building professional to assess it before proceeding.",
        ],
      },
      {
        heading: "Clean and allow it to dry",
        paragraphs: [
          "Remove dust and ordinary surface dirt using a method appropriate for the wall. Let the surface dry fully before applying any coating. Follow the product label for surface preparation and application requirements.",
        ],
      },
      {
        heading: "Choose products for the job",
        paragraphs: [
          "Different surfaces and locations may call for different preparation products and finishes. Check the current technical information for the product you plan to use, and ask the supplier if the right system is not clear.",
          "Each Puremax product page lists typical application steps. Contact the team for current prices and availability before purchasing.",
        ],
      },
    ],
  },
  {
    slug: "choosing-an-interior-paint-finish",
    title: "Choosing an Interior Paint Finish",
    category: "Product Guides",
    excerpt:
      "Questions to consider when comparing interior finishes for rooms and surfaces.",
    publishedAt: "2026-10-02",
    content: [
      {
        heading: "Think about the room",
        paragraphs: [
          "Consider how a room is used, the appearance you want and how often the surface may need cleaning. These practical needs can help narrow down the finish to discuss with your painter or paint supplier.",
        ],
      },
      {
        heading: "Check the product information",
        paragraphs: [
          "Finish names alone do not provide every application detail. Review the current product label or technical sheet for approved surfaces, preparation, application and care guidance.",
          "Silk Vinyl is a smooth, washable interior gloss finish, and Under Coat is a premium primer for preparing the wall first. Ask Puremax for current product details and availability.",
        ],
      },
    ],
  },
  {
    slug: "planning-exterior-paint-maintenance",
    title: "Planning Exterior Paint Maintenance",
    category: "Paint Maintenance",
    excerpt:
      "A simple way to plan an exterior inspection without assuming one coating suits every building.",
    publishedAt: "2026-10-02",
    content: [
      {
        heading: "Inspect before planning work",
        paragraphs: [
          "Check exterior walls periodically for visible peeling, cracks, staining or other changes. A visual inspection can help you identify where further assessment may be needed, but it does not establish the cause of a defect.",
        ],
      },
      {
        heading: "Address the cause, not just the appearance",
        paragraphs: [
          "Before repainting, determine whether water ingress, surface failure or another issue needs attention. For persistent or extensive damage, consult an appropriate building professional.",
        ],
      },
      {
        heading: "Confirm the coating system",
        paragraphs: [
          "Ask a qualified painter or supplier to confirm which preparation and products suit the surface and conditions. Follow the current product documentation rather than relying on a generic coverage or coat-count estimate.",
        ],
      },
    ],
  },
];

export const faqs = [
  {
    question: "How can I get the current price of a Puremax product?",
    answer:
      "Prices vary with pack size, colour and location, so we confirm them on request. Use the enquiry form or WhatsApp link to get the current price and availability.",
  },
  {
    question: "Where can I buy Puremax Paints?",
    answer:
      "Contact Puremax with your town or county and we will point you to the nearest stockist. A stockist directory will be added to this site as dealers are confirmed.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Wall Master comes in 30 KG packs, while Silk Vinyl and Under Coat come in 20 Ltr buckets. Confirm current availability with Puremax.",
  },
  {
    question: "What variants does Wall Master come in?",
    answer:
      "Wall Master comes in Normal, Fine and Stoneless variants, giving different texture looks. Ask Puremax to confirm current stock and which suits your wall.",
  },
  {
    question: "Where can I find application instructions?",
    answer:
      "Each product page lists typical application steps. Always follow the label on the pack, and request the latest product information from Puremax before starting a project.",
  },
  {
    question: "Are Puremax paints approved by KEBS?",
    answer:
      "Yes. The Puremax products shown on this website, Wall Master, Silk Vinyl and Under Coat, are the products approved by the Kenya Bureau of Standards (KEBS). Only approved products are listed.",
  },
  {
    question: "Can I request a quote for a project?",
    answer:
      "Yes. Complete the quote form with your project details. When the WhatsApp number is configured, the form will prepare a message for you to send directly.",
  },
];

export function whatsappUrl(message: string): string | null {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.siteUrl).toString();
}
