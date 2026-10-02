# Puremax Paints website

Responsive Next.js starter for Puremax Paints Industries Limited. It uses verified product details from the supplied brief and leaves unprovided company details as explicit placeholders. The Puremax logo mark was rendered from the supplied `PDF.pdf`; the source is preserved at `public/puremax-logo.pdf`, with a web-sized, transparent PNG at `public/puremax-logo-transparent.png`. Product and project imagery elsewhere remains illustrative placeholder artwork.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Use `npm run typecheck` and `npm run build` to validate the site.

## Business content and setup

- Edit products, articles, FAQs, dealers, social links and visible contact placeholders in `data/site-data.ts`.
- Add only verified projects to the `projects` collection. The project and dealer pages intentionally show empty states until verified records are entered.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS production origin before deployment.
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the approved international-format digits only (no `+`). Forms and WhatsApp links remain visibly unconfigured until then. The forms prepare a message and do not store or submit personal data on this site.
- Product prices are `null` by default and render as “Contact us for current price”. Add a verified price to the product data only after approval.
- Replace draft legal pages with reviewed policies that match the final hosting, analytics and enquiry-handling setup.

## Integrations

- **Enquiry management:** connect a reviewed server-side form endpoint/CRM before claiming that web submissions are received or stored. The current form intentionally opens a user-reviewed WhatsApp message; the optional image is not uploaded.
- **Analytics and Search Console:** `.env.example` documents `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Analytics scripts are not loaded by this starter; implement them only alongside an appropriate consent and privacy review.
- **Google Maps:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is reserved for a future map integration. The dealer finder currently uses a searchable, verified-data list and requires no map key.
- **CMS:** structured collections are in `data/site-data.ts`; replace the in-repository data source with a CMS adapter when the provider is selected.
- **Email:** no email delivery provider is configured. Add one server-side if direct website submission is required; never place its secret key in a `NEXT_PUBLIC_` variable.

## SEO

The App Router metadata, page-specific titles/descriptions, Open Graph fields, product/article JSON-LD, `sitemap.xml` and `robots.txt` are included. Set a real canonical site URL, then verify properties in Google Search Console and confirm all business information before launch. LocalBusiness schema is intentionally omitted until a verified address and contact information are available.
