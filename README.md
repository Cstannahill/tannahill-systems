# Tannahill Systems Website

The corporate website and project inquiry platform for [Tannahill Systems](https://tannahillsystems.com).

## Tech Stack

- Next.js 16 (App Router, Turbopack) and React 19
- Tailwind CSS v4
- nodemailer for contact form delivery
- lucide-react icons
- Inter and JetBrains Mono via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

All site content (company name, domain, emails, services, products, and tech stack copy) lives in [src/config/site.ts](src/config/site.ts). The contact form posts to [src/app/api/contact/route.ts](src/app/api/contact/route.ts).

## Environment Variables

Create a `.env.local` file to test form delivery locally. It is gitignored, so do not commit it.

```bash
SMTP_URL=smtps://christian%40tannahillsystems.com:<16_CHAR_GOOGLE_APP_PASSWORD>@smtp.gmail.com:465
EMAIL_FROM="Tannahill Systems <contact@tannahillsystems.com>"
```

| Variable     | Required               | Description                                                                                                                                                                                                                               |
| ------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SMTP_URL`   | Yes, for form delivery | SMTP connection string. Use a Google Workspace App Password, not the account password. URL-encode the `@` in the username as `%40`. If unset, `/api/contact` returns 503 and the form directs visitors to `contact@tannahillsystems.com`. |
| `EMAIL_FROM` | No                     | Sender shown on inquiry emails. Defaults to `contact@tannahillsystems.com`.                                                                                                                                                               |

Inquiries are delivered to `christian@tannahillsystems.com`, with the visitor's address set as the reply-to.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Learn More
