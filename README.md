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
- `results` — 2-3 items of `{ metric, value, icon }`. Only use real numbers/facts you have. If you don't have a quantified before/after, use a short descriptive value (e.g. `"RBAC"`, `"3"`) rather than inventing a percentage — several existing entries already do this. **Keep `value` a single word/token with no spaces** — the stat tiles are narrow, and any value with a space in it (even something like `"SPF + DKIM"`) will wrap across multiple lines and break the layout. Use `"SPF+DKIM"` instead, or shorten it further.
- `image`, `category`, `color`, `href` — follow the pattern of the nearest existing entry

**Keep proof balanced across all three pillars** (IT Infrastructure & Security, Software & Web Development, Managed IT & Support). As of this writing, Managed IT & Support has no case study yet — that should be the next one added once a real support/AMC engagement exists to document. Web Development already has 3, Infrastructure & Security has 2 (Global Laser Solutions, SoftPixel Works).

If a case study is significant enough to be a service's flagship proof point, also consider adding a short "Featured Project" callout directly on that service's page under `app/services/*/page.js` — see the Infrastructure & Security page for the existing pattern.

**Testimonials**: ask the client for a quick quote right when the project ends, while it's easy for them to give one — don't wait. Add real quotes only to `components/Testimonials.jsx`; never write a quote and attribute it to a client who didn't say it.

Revisit this balance roughly quarterly, or whenever a new project closes.

## Contact Form Setup

The contact form (`components/Contact.jsx`) submits directly to a Google Sheet via a Google Apps Script Web App — no third-party form service, no backend of our own, just your Google account.

### One-time setup

1. Create a Google Sheet. Add a header row: `Timestamp | Name | Email | Phone | Service | Message`
2. In the sheet: `Extensions → Apps Script`. Replace the editor contents with:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       new Date(),
       data.name || '',
       data.email || '',
       data.phone || '',
       data.service || '',
       data.message || ''
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. `Deploy → New deployment → Web app`. Set **Execute as: Me**, **Who has access: Anyone**. Deploy, and authorize the permissions Google prompts for (the "unverified app" warning is expected — it's your own script).
4. Copy the deployment URL (ends in `/exec`).
5. Set it as `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` — in `.env.local` for local testing, and as a Netlify build environment variable for production (required at **build** time, since this is a static export with no server to read env vars at request time).

### Notes

- The form posts with `mode: 'no-cors'`, a necessary workaround since Apps Script Web Apps don't return proper CORS headers. This means the browser can't read the actual response — the form treats "the request didn't throw" as success. If you ever need to redeploy the script, you must create a **new deployment** (not just save) for the URL to pick up code changes, or update the existing deployment's version in the deploy dialog.
- If the webhook URL isn't configured at all, the form shows an error asking the visitor to call/email directly instead of failing silently.

## Contact Info

For questions, contact: info@nextlayerlabs.in
