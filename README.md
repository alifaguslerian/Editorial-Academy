# The Editorial Academy

A premium editorial education platform UI — dark-elegant, executive-class, built with vanilla HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build step, no framework, no dependencies beyond CDN links.

---

## Project Structure

```plaintext
project/
├── index.html            # Landing page
├── curricula.html        # Course catalog — 24 programs
├── library.html          # Resource library + instructor masterworks
├── instructors.html      # Faculty directory — 24 instructors
├── certifications.html   # 5 discipline certification tracks
├── style.css             # Global styles — shared across all pages
├── script.js             # Global scripts — all page logic in one file
└── README.md
```

---

## Pages

### `index.html` — Landing Page

| Section | Description |
|---|---|
| Navbar | Fixed, blur backdrop, links to all 4 inner pages |
| Hero | Headline, CTA buttons, hero image with quote overlay |
| Winter Elite Pass | Dark promo banner with live countdown timer (`#countdown-hours`, `#countdown-mins`, `#countdown-secs`) |
| Curated Excellence | Asymmetric bento grid of 4 featured courses, links to `curricula.html` |
| Alumni Social Proof | Logo cloud (STRIPE, VOGUE, SpaceX, Pantone, FRAME) + 3 testimonial cards |
| Final CTA | Dark navy membership call-to-action |
| Footer | 4-column links |

### `curricula.html` — Course Catalog

| Section | Description |
|---|---|
| Page Header | Title + live search (`#search-input`) |
| Sidebar | Category checkboxes (`#category-filters`), experience level, rating filter, clear button (`#clear-filters`) |
| Course Grid | `#course-grid` — JS-rendered, 6 cards per page |
| Pagination | `#pagination` — JS-rendered with ellipsis |

### `library.html` — Resource Library

| Section | Description |
|---|---|
| Page Header | Title + live search (`#library-search`) |
| Featured Hero | Full-width card for the featured resource (`#featured-resource`) |
| Sidebar | Type filter (`#type-filters`), discipline filter (`#discipline-filters`), access level, clear button (`#clear-library-filters`) |
| Resource Grid | `#resource-grid` — JS-rendered, 6 cards per page |
| Pagination | `#resource-pagination` — JS-rendered |
| Instructor Masterworks | `#masterworks-grid` — 10 instructor portfolio works, hover reveal effect |

### `instructors.html` — Faculty Directory

| Section | Description |
|---|---|
| Page Header | Title + live search (`#instructor-search`) |
| Filter Bar | Pill buttons for each discipline + All, updates count in real-time |
| Instructor Grid | `#instructor-grid` — JS-rendered, all 24 instructors, no pagination |

### `certifications.html` — Certification Tracks

| Section | Description |
|---|---|
| Page Header | Title + tagline |
| How It Works | 3-step process — Enroll → Complete → Earn |
| Tracks | `#tracks-grid` — 5 expandable discipline track cards, each shows course list on click |
| Digital Credential Preview | Credential mockup (`#credential-mockup`) + feature list |
| Certified Practitioners | `#holders-grid` — 8 alumni credential holders |

---

## Courses — 24 Executive Programs

| # | Category | Title | Instructor |
|---|---|---|---|
| 1 | Visual Narrative | Minimalist Brand Identity | Anders Holm |
| 2 | Visual Narrative | Editorial Photography Mastery | Lydia Grant |
| 3 | Visual Narrative | The Language of Luxury Imagery | Celeste Aurore |
| 4 | Visual Narrative | Color Theory for Editorial Excellence | Naomi Sato |
| 5 | Visual Narrative | Motion & Still: Cinematic Storytelling | Rafael Moreno |
| 6 | Digital Strategy | The Architecture of Digital Narrative | Julian Vane |
| 7 | Digital Strategy | Algorithmic Content Curation | Sofia Chen |
| 8 | Digital Strategy | Monetising Digital Media at Scale | Marcus Elliot |
| 9 | Digital Strategy | Audience Intelligence & Data Storytelling | Priya Nair |
| 10 | Digital Strategy | Executive Presence in the Digital Age | Thomas Whitfield |
| 11 | Editorial Design | Modern Magazine Layouts | Marcus Thorne |
| 12 | Editorial Design | Grid Systems & White Space Mastery | Ingrid Larsen |
| 13 | Editorial Design | Print to Digital: Transitional Design | Olivier Dumont |
| 14 | Editorial Design | Cover Design: The Art of First Impression | Alicia Monroe |
| 15 | Editorial Design | Interactive Editorial: UX for Long-Form | Kwame Osei |
| 16 | Typography | Advanced Glyphs & Visual Systems | Dr. Elena Rossi |
| 17 | Typography | Type as Image: Expressive Letterforms | Hana Yamamoto |
| 18 | Typography | Variable Fonts & the Future of Reading | Sven Albers |
| 19 | Typography | Heritage Typefaces: History & Application | Prof. Beatrice Wren |
| 20 | Artificial Intelligence | Generative AI for Editorial Leaders | Dr. Amara Okafor |
| 21 | Artificial Intelligence | AI-Augmented Content Strategy | Leon Hartmann |
| 22 | Artificial Intelligence | Machine Perception & Visual Intelligence | Dr. Yuki Tanaka |
| 23 | Artificial Intelligence | Ethical AI in Modern Newsrooms | Prof. Isabelle Laurent |
| 24 | Artificial Intelligence | Prompt Engineering for Creative Executives | Nathan Cole |

---

## Library — 24 Resources

| Type | Count | Access |
|---|---|---|
| Article | 6 | Mix of Free + Elite Member |
| E-Book | 4 | Mix of Free + Elite Member |
| Research Paper | 5 | Mix of Free + Elite Member |
| PDF Guide | 5 | Mix of Free + Elite Member |
| Reading List | 4 | Free |

Resource #1 (Article — "The Death of the Homepage") is always rendered as the featured hero card and excluded from the paginated grid.

---

## Instructor Masterworks — 10 Featured Works

| Instructor | Work | Discipline |
|---|---|---|
| Julian Vane | The Collapse Issue | Digital Strategy |
| Dr. Elena Rossi | Forma Serif | Typography |
| Celeste Aurore | Quietude — Paris Fashion Week 2023 | Visual Narrative |
| Thomas Whitfield | FT Weekend Brand Evolution | Digital Strategy |
| Ingrid Larsen | Vogue Scandinavia — Launch Identity | Editorial Design |
| Rafael Moreno | Nocturne — Long-Form Documentary Series | Visual Narrative |
| Prof. Isabelle Laurent | The Curation Paradox — EU Policy White Paper | Artificial Intelligence |
| Hana Yamamoto | Monocle Typographic System — 2022 Refresh | Typography |
| Marcus Elliot | Bloomberg Connects — Museum Media Partnership | Digital Strategy |
| Kwame Osei | The Guardian — Long-Read Visual System | Editorial Design |

---

## Certification Tracks — 5 Discipline Tracks

| Track | Credential | Courses | Price |
|---|---|---|---|
| Visual Narrative | Certified Visual Narrative Director | 5 | $2,970 |
| Digital Strategy | Certified Digital Editorial Strategist | 5 | $4,690 |
| Editorial Design | Certified Editorial Design Director | 5 | $4,580 |
| Typography | Certified Editorial Typographer | 4 | $3,680 |
| Artificial Intelligence | Certified AI Editorial Leader | 5 | $9,000 |

Track cards are expandable — click to reveal the course list. Each track shows a digital credential preview on expand.

---

## `style.css` — Global Styles

| Class | Purpose |
|---|---|
| `.material-symbols-outlined` | Google icon font config — weight 200, fill 0 |
| `.text-gold-gradient` | Gold gradient text used in CTA headline |
| `.shroud-overlay` | Dark navy overlay for modal/shroud elements |
| `.glass-nav` | Backdrop blur for navbar (webkit + standard) |
| `.nav-active` | Active navbar link state — bold, black, border-b |
| `body { animation: pageFadeIn }` | Subtle fade-in on page load |

---

## `script.js` — Global Scripts

All code is wrapped in an IIFE `(function(){ ... })()` to avoid polluting global scope. Every page-specific function checks for its root element before running — safe to include on all pages.

| Function | Active on | Purpose |
|---|---|---|
| `setActiveNavLink()` | All pages | Highlights nav link matching current filename |
| `handleNavbarScroll()` | All pages | Adds `shadow-md` to navbar past 10px scroll |
| `initMobileMenu()` | All pages | Hamburger toggle — hooks to `#hamburger-btn` + `#mobile-menu` if present |
| `initSmoothScroll()` | All pages | Smooth scroll for `href="#..."` anchor links |
| `initCountdown()` | `index.html` | Live countdown timer for Winter Elite Pass banner, counts 8h from page load |
| `initCurriculaPage()` | `curricula.html` | Course grid, pagination, category filter, sort, search |
| `initLibraryPage()` | `library.html` | Featured hero, resource grid, pagination, type+discipline filter, search, sort, masterworks hover grid |
| `initInstructorsPage()` | `instructors.html` | Instructor card grid, discipline filter pills, search |
| `initCertificationsPage()` | `certifications.html` | Expandable track cards, credential mockup, alumni holders grid |

### Pattern shared across all page functions

1. Guard clause — checks if root element exists, exits early if not
2. Data array declared locally inside the function
3. `render*()` functions inject HTML via `innerHTML`
4. Event listeners attached after render for dynamic elements (pagination buttons)
5. Debounced search input (300ms) to avoid excessive re-renders
6. Filter state held in local variables, reset to page 1 on every filter change

---

## Design System

Built on **Tailwind CSS CDN** with a custom config extending Material Design 3 tonal tokens.

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#000000` | Buttons, active states, headings |
| `secondary` | `#545f73` | Body text, labels, muted content |
| `tertiary` | `#735c00` | Gold accent — ratings, badges, highlights |
| `tertiary-fixed` | `#ffe088` | Light gold — text selection highlight |
| `primary-container` | `#131b2e` | Dark navy — CTA sections, promo banners, credential mockup |
| `on-primary-container` | `#7c839b` | Muted text on dark navy backgrounds |
| `surface` | `#fcf8fa` | Page background |
| `surface-container-low` | `#f6f3f5` | Card and input backgrounds |
| `outline-variant` | `#c6c6cd` | Borders, dividers |

Typography: **Manrope** (`font-headline`) for headings and nav, **Inter** (`font-body`) for body text.

---

## How to Run

No build step required. Tailwind loads from CDN, all images from Unsplash and Google AIDA public CDN.

```bash
# Option 1: open directly
open index.html/open live server

# Option 2: local server (recommended — avoids CORS on some assets)
npx serve .
# or
python -m http.server 8000
```

---

---

## Notes

- Images sourced from Unsplash and Google AIDA public CDN — no local assets required
- Countdown timer counts down from 8 hours from page load — decorative, resets on refresh
- All page-specific `init*()` functions are safe to include in `script.js` globally — each exits early via guard clause if its root element is not found on the current page
- `href="#"` links (Library, Instructors, Certifications) have all been replaced with actual page links
- Track cards on `certifications.html` use inline `onclick` to toggle the `.track-body` expand — no separate event listener needed

