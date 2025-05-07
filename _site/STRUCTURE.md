# Evernia Design Website Structure

## 1. Purpose
A professional web presence for Evernia Design, representing a team of web designers and developers. The site will showcase services, portfolio, team, and contact information.

## 2. Tech Stack
- **Phase 1:** Jekyll static site, hosted on GitHub Pages.
- **Phase 2 (future):** Option to migrate to a more advanced stack (e.g., Next.js, Astro, or custom backend) for dynamic features.

## 3. Site Structure

### Pages
- **Home:** Agency intro, value proposition, call to action.
- **About:** Team bios, agency story, mission/vision.
- **Services:** List and details of services offered.
- **Portfolio:** Showcase of past projects (images, descriptions, links).
- **Blog/Insights:** (Optional) Articles, news, or design tips.
- **Contact:** Contact form, email, phone, social links.
- **Careers:** (Optional) Open positions, team culture.

### Navigation
- Persistent top navigation bar with links to all main pages.
- Footer with contact info, social links, copyright.

### Team Representation
- Each team member has a profile (photo, bio, role, links).
- "Meet the Team" section on About page.

## 4. Content Management
- All content in Markdown files for easy editing.
- Images in `/assets/images/`.
- Team, portfolio, and services as data files (`_data/team.yml`, `_data/portfolio.yml`, etc.) for easy updates.

## 5. Design Guidelines
- Clean, modern, professional aesthetic.
- Consistent color palette and typography.
- Responsive/mobile-friendly layout.

## 6. Future-Proofing
- Keep content and data decoupled from layout for easy migration.
- Use includes/partials for repeated elements (nav, footer, team cards).
- Document any custom code or plugins used.

---

## 7. Deployment
- Hosted on GitHub Pages (branch: `main` or `gh-pages`).
- Custom domain (optional).

---

## 8. Migration Plan (for future)
- If advanced features are needed, migrate content to a more dynamic stack.
- Keep all data in portable formats (Markdown, YAML, JSON).

---

# Instructions
- Follow this structure for all new pages and features.
- Document any deviations or customizations in this file.
- Update this file as the project evolves.
