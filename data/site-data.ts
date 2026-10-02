export const siteConfig = {
  name: "Puremax Paints Industries Limited",
  shortName: "Puremax Paints",
  tagline: "Colouring Your World",
  description:
    "Discover Puremax Paints Industries Limited — quality paint solutions for homes, businesses and projects in Kenya. Explore our products, projects and paint solutions.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "[Telephone Number]",
  email: "[Email Address]",
  address: "[Physical Address]",
  openingHours: "[Opening Hours]",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  social: {
    facebook: "",
    instagram: "",
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
};

export const products: Product[] = [
  {
    slug: "wall-master",
    name: "Wall Master",
    shortDescription: "Designer texture finish",
    description:
      "A designer texture finish from the Puremax range. Ask the Puremax team about the available options and guidance for your project.",
    packSize: "30 KG",
    variants: ["Normal", "Fine", "Stoneless"],
    finish: "Designer texture",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Illustrated Wall Master product pack placeholder",
  },
  {
    slug: "silk-vinyl",
    name: "Silk Vinyl",
    shortDescription: "Smooth, washable interior gloss finish",
    description:
      "An interior gloss finish described in the supplied product information as smooth and washable. Contact Puremax for current product guidance and availability.",
    packSize: "20 Ltr",
    variants: [],
    finish: "Interior gloss",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Illustrated Silk Vinyl product pack placeholder",
  },
  {
    slug: "under-coat",
    name: "Under Coat",
    shortDescription: "Premium finish primer / undercoat",
    description:
      "A primer and undercoat option in the Puremax range. Contact Puremax for product information and advice on suitability for your project.",
    packSize: "20 Ltr",
    variants: [],
    finish: "Primer / undercoat",
    price: null,
    previousPrice: null,
    promotionalPrice: null,
    sku: null,
    availability: "contact",
    imageAlt: "Illustrated Under Coat product pack placeholder",
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

export const projects: Project[] = [];
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
          "Puremax product prices and detailed application specifications are not published here yet. Contact the team for current information before purchasing.",
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
          "Silk Vinyl is described in the supplied Puremax product information as a smooth and washable interior gloss finish. Ask Puremax for its current product details and availability.",
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
      "Prices are not yet supplied for this website. Use the enquiry form or WhatsApp link to request the current price and availability.",
  },
  {
    question: "Where can I buy Puremax Paints?",
    answer:
      "The stockist directory is ready for verified dealer information, but no dealer locations have been provided yet. Contact Puremax to ask about a stockist near you.",
  },
  {
    question: "What sizes are available?",
    answer:
      "The supplied information lists Wall Master in 30 KG, Silk Vinyl in 20 Ltr and Under Coat in 20 Ltr. Confirm current availability with Puremax.",
  },
  {
    question: "What variants does Wall Master come in?",
    answer:
      "The supplied product information lists Normal, Fine and Stoneless variants. Ask Puremax to confirm current stock and product guidance.",
  },
  {
    question: "Where can I find application instructions?",
    answer:
      "Detailed technical sheets have not been supplied for this website. Request the latest product information from Puremax before starting a project.",
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
