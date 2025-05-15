# Evernia Design Website Structure

## 1. Purpose
A professional web presence for Evernia Design, representing a team of web designers and developers. The site will showcase services, portfolio, team, and contact information.

## 2. Tech Stack
- **Phase 1:** Jekyll static site, hosted on GitHub Pages.
- **Phase 2 (future):** Option to migrate to a more advanced stack (e.g., Next.js, Astro, or custom backend) for dynamic features.

### 2.1. Local Development Environment
- **Ruby Version Management:** `rbenv` is used to manage Ruby versions. The project is configured to use a specific Ruby version (e.g., 3.3.8 via a `.ruby-version` file).
- **Dependencies:** Project dependencies (Jekyll, gems) are managed by `Bundler` via `Gemfile` and `Gemfile.lock`.
- **Running Locally:** Use `rbenv exec bundle exec jekyll serve` to ensure the correct Ruby environment and gems are used.

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
- **Configuration (`_config.yml`):**
  - For deployment to a subpath (e.g., `username.github.io/repositoryname/` or `customdomain.com/repositoryname/`):
    - `url`: Set to the main domain (e.g., `https://username.github.io` or `https://customdomain.com`).
    - `baseurl`: Set to the repository name/subpath (e.g., `"/repositoryname"`).
  - For deployment to a root custom domain (e.g., `www.yourprojectdomain.com/`):
    - `url`: Set to the full custom domain (e.g., `https://www.yourprojectdomain.com`).
    - `baseurl`: Set to `""` (empty string).
    - A `CNAME` file containing the custom domain (e.g., `www.yourprojectdomain.com`) must be present in the repository root.

---

## 8. Migration Plan (for future)
- If advanced features are needed, migrate content to a more dynamic stack.
- Keep all data in portable formats (Markdown, YAML, JSON).

---

## 9. Project Checkpoints / Updates

### Checkpoint: Initial Structure Implemented (2024-05-07)

**What's been completed:**
- All main pages scaffolded: Home, About, Services, Portfolio, Blog, Contact, Careers (with placeholder content).
- Persistent header/navigation bar and footer (with social links) implemented as includes.
- Responsive, modern CSS for header and footer.
- `_data/` directory with YAML files for team, portfolio, and services (with sample data).
- `assets/images/` directory created for future images.
- All content in Markdown or YAML for easy editing.

**Deviations from plan:**
- No major deviations. All foundational structure matches the plan.

**Next steps:**
- Render data from YAML files on relevant pages (e.g., team on About, services on Services, portfolio on Portfolio).
- Add real or sample images and update data files.
- Flesh out page content and add more design polish.
- Set up deployment to GitHub Pages for live preview.

**Notes:**
- This checkpoint documents the completion of the initial project skeleton. All future changes and customizations should be recorded in this section.

### Checkpoint: Local Environment & Config Update (2024-05-13)

**What's been completed:**
- Set up local Ruby development environment using `rbenv` (Ruby 3.3.8).
- Resolved `bundler` and `jekyll` gem installation issues.
- Successfully ran the Jekyll site locally.
- Updated `index.markdown` with new landing page content from `evernialanding.md`.
- Configured `_config.yml` with correct `url` and `baseurl` for deployment to `https://oakmoss.ca/evernia`.
- Pushed all changes to GitHub.

**Deviations from plan:**
- Encountered and resolved Ruby environment and bundler versioning issues.

**Next steps:**
- Verify site functionality and appearance on `https://www.everniadesign.com` after DNS propagation and GitHub Pages update.
- Address SASS deprecation warnings from the Minima theme (consider updating theme or overriding styles).
- Add `favicon.ico`.
- Render data from YAML files on relevant pages (Services, Portfolio).
- Flesh out remaining page content.

**Notes:**
- The `CNAME` file and updated `_config.yml` (empty `baseurl`, correct `url`) are critical for custom domain functionality.
- SASS deprecation warnings from Minima 2.5.2 are present but not currently breaking the build.

---

## 10. Maintenance
- **Theme Updates:** Periodically check for updates to the Jekyll theme (e.g., Minima) to incorporate bug fixes, new features, or address deprecations (like the current Sass warnings).
- **Dependency Review:** Regularly review and update gems in `Gemfile` using `bundle update` (especially the `github-pages` gem) to ensure compatibility and security.
- **Build Log Monitoring:** When changes are pushed, check GitHub Actions build logs for any new warnings or errors that might indicate emerging issues with dependencies or Jekyll itself.
- **Content Audit:** Periodically review content for accuracy, relevance, and broken links.

---

# Instructions
- Follow this structure for all new pages and features.
- Document any deviations or customizations in this file.
- Update this file as the project evolves.
