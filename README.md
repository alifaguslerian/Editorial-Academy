# The Editorial Academy

A premium editorial education platform UI — dark-elegant, executive-class, built with vanilla HTML, Tailwind CSS (CDN), and vanilla JavaScript.

---

## Project Structure

```
project/
├── index.html       # Landing page — hero, promo banner, trending courses, testimonials
├── curricula.html   # Course catalog — 24 programs, filter, sort, pagination
├── style.css        # Global styles — shared across all pages
├── script.js        # Global scripts — navbar, pagination, filter, countdown
└── README.md
```

---

## Pages

### `index.html` — Landing Page

Sections (top to bottom):

- **Navbar** — fixed, blur backdrop, links to `curricula.html`
- **Hero** — headline, CTA buttons, hero image with quote overlay
- **Winter Elite Pass** — dark promo banner with live countdown timer (`#countdown-hours`, `#countdown-mins`, `#countdown-secs`)
- **Curated Excellence / Trending Disciplines** — asymmetric bento grid of 4 featured courses, links to `curricula.html`
- **Alumni Social Proof** — logo cloud + 3 testimonial cards
- **Final CTA** — dark membership call-to-action
- **Footer** — 4-column links

### `curricula.html` — Course Catalog

- **Navbar** — same structure, "Curricula" link is active (bold + border-b)
- **Page Header** — title + live search input (`#search-input`)
- **Sidebar** — category checkboxes (`#category-filters`), experience level radios, rating filter, clear button (`#clear-filters`)
- **Course Grid** (`#course-grid`) — rendered by `script.js`, 6 cards per page
- **Pagination** (`#pagination`) — rendered by `script.js`, with ellipsis for large page counts
- **Footer** — same structure as index

---

## Courses — 24 Executive Programs

| # | Category | Title |
|---|---|---|
| 1–5 | Visual Narrative | Minimalist Brand Identity, Editorial Photography Mastery, The Language of Luxury Imagery, Color Theory for Editorial Excellence, Motion & Still: Cinematic Storytelling |
| 6–10 | Digital Strategy | The Architecture of Digital Narrative, Algorithmic Content Curation, Monetising Digital Media at Scale, Audience Intelligence & Data Storytelling, Executive Presence in the Digital Age |
| 11–15 | Editorial Design | Modern Magazine Layouts, Grid Systems & White Space Mastery, Print to Digital: Transitional Design, Cover Design: The Art of First Impression, Interactive Editorial: UX for Long-Form |
| 16–19 | Typography | Advanced Glyphs & Visual Systems, Type as Image: Expressive Letterforms, Variable Fonts & the Future of Reading, Heritage Typefaces: History & Application |
| 20–24 | Artificial Intelligence | Generative AI for Editorial Leaders, AI-Augmented Content Strategy, Machine Perception & Visual Intelligence, Ethical AI in Modern Newsrooms, Prompt Engineering for Creative Executives |

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

All code is wrapped in an IIFE `(function(){ ... })()` to avoid polluting global scope.

| Function | Runs on | Purpose |
|---|---|---|
| `setActiveNavLink()` | Both pages | Highlights nav link matching current filename |
| `handleNavbarScroll()` | Both pages | Adds `shadow-md` to navbar on scroll |
| `initMobileMenu()` | Both pages | Hamburger toggle — hooks to `#hamburger-btn` + `#mobile-menu` if present |
| `initSmoothScroll()` | Both pages | Smooth scroll for `href="#..."` anchor links |
| `initCountdown()` | `index.html` | Live countdown for Winter Elite Pass banner |
| `initCurriculaPage()` | `curricula.html` | Renders course grid, pagination, filter, sort, search |

### `initCurriculaPage()` — How it works

1. Checks if `#course-grid` exists — skips silently on `index.html`
2. Holds all 24 course objects in a `courses` array
3. `filteredCourses` is a copy of `courses` — modified by filters/search/sort
4. `renderPage()` slices `filteredCourses` by `currentPage` and `COURSES_PER_PAGE = 6`, injects HTML into `#course-grid` and `#pagination`
5. Pagination buttons are re-attached after every render (because `innerHTML` replaces DOM nodes)
6. `applyFilters()` reads checked checkboxes from `#category-filters` and the search input value, filters `courses`, resets to page 1, re-renders
7. Sort select reorders `filteredCourses` in place, resets to page 1, re-renders
8. `#clear-filters` resets all checkboxes + search input, calls `applyFilters()`

---

## Design System

Built on **Tailwind CSS CDN** with a custom config. All colors are extended from Material Design 3 tonal tokens.

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#000000` | Buttons, active states, headings |
| `secondary` | `#545f73` | Body text, labels, muted content |
| `tertiary` | `#735c00` | Gold accent — ratings, badges, highlights |
| `tertiary-fixed` | `#ffe088` | Light gold — text selection |
| `primary-container` | `#131b2e` | Dark navy — CTA section, promo banner |
| `surface` | `#fcf8fa` | Page background |
| `surface-container-low` | `#f6f3f5` | Card/input backgrounds |

Typography: **Manrope** (headlines, `font-headline`) + **Inter** (body, `font-body`)

---

## How to Run

No build step required. Just open `index.html` in a browser — Tailwind loads from CDN.

```bash
# Option 1: direct open
open index.html

open with live server

```

---


---

## Notes

- Images are sourced from Google AIDA public CDN and Unsplash — no local assets required
- The countdown timer on the index page counts down from a fixed offset; it's decorative and resets on refresh
- `script.js` is safe to include on both pages — `initCurriculaPage()` exits early if `#course-grid` is not found
- All `href="#"` links (Library, Instructors, Certifications) are placeholder — ready to be replaced when those pages are built
