# The Editorial Academy

A premium editorial education platform UI — dark-elegant, executive-class, built with vanilla HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build step, no framework, no dependencies beyond CDN links.

---

## Project Structure

```plaintext
Editorial-Academy/
├── index.html           # Landing page
├── about.html           # Brand story, mission, testimonials, impact stats
├── careers.html         # Careers and team culture page with sticky sub-nav
├── curricula.html       # Course catalog with filters, search, and pagination
├── library.html         # Resource library with featured hero, filters, and masterworks
├── instructors.html     # Faculty directory with search and discipline pills
├── certifications.html  # Certification track explorer with credential preview
├── press.html           # Newsroom/press page with stories, stats, and media contact
├── HelpCenter.html      # Support hub with FAQ accordion and article search
├── termsofservice.html  # Terms of service page with sidebar TOC and nav highlight
├── style.css            # Global stylesheet and shared custom utility classes
├── script.js            # Global page helpers and page-specific render logic
├── HelpCenterScript.js  # Help Center FAQ and search behavior
├── tos.js               # Terms of Service section tracking and TOC state
└── README.md            # Project documentation
```

---

## Pages

### `index.html` — Landing Page

- Fixed top navigation with blur backdrop
- Hero section with bold headline, membership CTA, and supporting action buttons
- Promo banner with featured Winter Elite Pass offer
- Trending courses preview in an asymmetric bento grid
- Social proof testimonials and brand logo section
- Final CTA and footer with multi-column links

### `about.html` — About Us

- Company narrative and mission-focused brand story
- Hero image, news ticker, and video play-style CTA
- Global impact stats, testimonial cards, and values section
- Final call-to-action section with alumni and trust messaging

### `careers.html` — Careers Page

- Main navbar plus sticky subsection navigation
- Recruitment story with employee testimonials and spotlight cards
- Team bio sections and department showcase
- Perks & benefits grid with polished UI cards
- Locations section and CTA to apply or explore roles

### `curricula.html` — Course Catalog

- Live search and filter sidebar
- Course listing with category, level, rating, and tuition filters
- Responsive course grid rendered by JS
- Pagination with hover states and ellipsis
- Clear filters button to reset selection

### `library.html` — Resource Library

- Featured resource hero card for highlighted content
- Library search, discipline and type filters, and access-level selection
- Paginated resource grid with sorting options
- Instructor masterworks gallery with hover reveal effect

### `instructors.html` — Faculty Directory

- Searchable instructor roster
- Discipline filter pills for Visual Narrative, Digital Strategy, Editorial Design, and more
- Responsive instructor grid with staff details and role tags

### `certifications.html` — Certification Tracks

- Certification track overview with 5 discipline programs
- How-it-works section with step-by-step enrollment path
- Expandable track cards that reveal course lists on click
- Digital credential preview and alumni credential holders section

### `press.html` — Press Room

- Newsroom hero messaging and media contact panel
- Press stats section with founders, practitioners, and global reach
- Story cards with hover interactions and modal-style article preview
- Press filters, featured assets, and call-to-action for media enquiries

### `HelpCenter.html` — Help Center

- Search bar and categorized support cards
- FAQ accordion interface for common questions
- Popular articles, tags, and contact card
- Article overlay/modal for in-page detail display

### `termsofservice.html` — Terms of Service

- Fixed top navigation and breadcrumb path
- Sidebar table of contents for easy section jumps
- Legal terms, privacy, and policy sections
- `tos.js` drives active TOC highlighting as users scroll

---

## Key JavaScript Files

### `script.js`

This file contains shared page utilities and dynamic render logic for multiple pages.

- Navigation helpers for active link styling and scroll shadow
- Smooth scrolling for anchor links
- Mobile hamburger menu support when used
- Page-specific renderers for `curricula.html`, `library.html`, `instructors.html`, and `certifications.html`
- Guard clauses ensure functions only execute on matching pages

### `HelpCenterScript.js`

- FAQ accordion toggle logic
- Category expand/collapse interactions
- Search keyboard handling for the help center page

### `tos.js`

- Intersection Observer for legal page section tracking
- Active link state updates in the sidebar TOC

---

## Design System

Built with Tailwind CSS via CDN and custom theme extensions. The product uses a refined editorial palette, premium typography, and subtle motion effects.

- Fonts: `Manrope` for headlines and `Inter` for body text
- Accent palette: dark navy, gold/tawny highlights, soft surface backgrounds
- Lightweight custom CSS in `style.css` supports site-wide utilities
- Page-specific inline styles support hero visuals, cards, ticker tape, and modal UI

---

## How to Run

Open any page directly in a browser, or run a simple local server for best behavior.

```bash
cd 'C:\Users\user\HTML\Editorial-Academy\Editorial-Academy'
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Notes

- The repo is designed as a static marketing and product showcase site for an editorial learning platform
- All styling comes from Tailwind CDN plus project-specific custom CSS
- No build step or package manager is required
- `HelpCenterScript.js` powers the FAQ accordion, category toggles, and search behavior on `HelpCenter.html`
- `tos.js` powers Table of Contents active state highlighting on `termsofservice.html`
- Page-specific code is contained in inline scripts and separate JS files, while shared UI behavior is in `script.js`
- Images and fonts are loaded from external CDN sources, so the project runs as a static site without local image assets
