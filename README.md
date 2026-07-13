# NextLayer Labs - Official Website

Marketing website for NextLayer Labs, a Bangalore-based IT consulting and technology solutions company. Built with Next.js (App Router) and Tailwind CSS, statically exported and deployed on Netlify.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export via `output: "export"`)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify (static hosting)

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

This produces a fully static site in the `out/` directory (see `next.config.js`'s `output: "export"`), which is what gets deployed.

## Project Structure

```
app/
├── layout.js                  # Root layout: header, footer, preloader, page transitions
├── page.js                    # Home page
├── about/page.js
├── contact/page.js
├── partners/page.js
├── case-studies/page.js
└── services/
    ├── it-infrastructure-security/page.js
    ├── software-web-development/page.js
    └── managed-it-support/page.js

components/                    # Section components used across the pages above
public/                        # Static assets (logos, icons, images)
```

## Adding a Case Study

Document each real project shortly after it wraps — details and client sentiment fade fast, and it's much harder to write a credible case study from memory three months later.

Case studies live in `components/CaseStudies.jsx`, in the `cases` array. Each entry needs:

- `title` — short, outcome-focused (e.g. "Business Email Setup & Website Launch")
- `client` — real client name, or an anonymized descriptor if under NDA
- `challenge` — the problem before you got involved
- `solution` — what was actually delivered (tools, stack, timeline if relevant)
- `results` — 2-3 items of `{ metric, value, icon }`. Only use real numbers/facts you have. If you don't have a quantified before/after, use a descriptive value (e.g. `"SPF + DKIM"`, `"3 Mailboxes"`) rather than inventing a percentage — several existing entries already do this.
- `image`, `category`, `color`, `href` — follow the pattern of the nearest existing entry

**Keep proof balanced across all three pillars** (IT Infrastructure & Security, Software & Web Development, Managed IT & Support). As of this writing, Managed IT & Support has no case study yet — that should be the next one added once a real support/AMC engagement exists to document. Web Development already has 3, Infrastructure & Security has 2 (Global Laser Solutions, SoftPixel Works).

If a case study is significant enough to be a service's flagship proof point, also consider adding a short "Featured Project" callout directly on that service's page under `app/services/*/page.js` — see the Infrastructure & Security page for the existing pattern.

**Testimonials**: ask the client for a quick quote right when the project ends, while it's easy for them to give one — don't wait. Add real quotes only to `components/Testimonials.jsx`; never write a quote and attribute it to a client who didn't say it.

Revisit this balance roughly quarterly, or whenever a new project closes.

## Contact Info

Site content is edited directly in the component files under `components/` and the relevant `app/**/page.js` file — there is no CMS or contact-form backend; the Contact page links directly to phone/email.

For questions, contact: info@nextlayerlabs.in
