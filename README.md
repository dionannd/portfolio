# Dion's Portfolio

[My Portfolio](https://dianananda.vercel.app/)

## Tech Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.
- [Auth.js](https://authjs.dev/) - Authentication for the Web. Free and open source.

## Project structure

```
$PROJECT_ROOT
│   # Static files for images
├── public
│   # All resource file for pages
└── src
    │   # Pages files App router
    ├── app
    │   # React component files
    ├── components
    │   # Content for blog (MDX)
    ├── content
    │   # Library / Helper files
    ├── lib
    │   # CSS files
    ├── Styles
    │   # Types file
    └── types
    
```

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE guestbook (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);

CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```

## Repo Activity

![Dion Portfolio](https://repobeats.axiom.co/api/embed/f113bd30fc59888248c5cc1b14ff50a1966ddb6b.svg "Repobeats analytics image")

