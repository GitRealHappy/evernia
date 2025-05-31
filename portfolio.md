---
title: "Success Stories & Case Studies"
description: "Explore our portfolio of premium web solutions that drive measurable results for ambitious businesses across Canada."
layout: default
---

<section style="padding: 4rem 0; background: var(--rich-charcoal);">
  <div class="container">
    <div class="text-center mb-4">
      <h1 class="font-display">Success Stories & <span class="text-gold">Case Studies</span></h1>
      <p class="text-muted" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Discover how our intelligent web solutions transform businesses, drive premium positioning, and deliver measurable ROI for ambitious entrepreneurs.</p>
    </div>
  </div>
</section>

<section style="padding: 4rem 0;">
  <div class="container">
    <div class="portfolio-grid">
      {% for project in site.data.portfolio %}
        <div class="portfolio-card glass-card">
          <div class="portfolio-image">
            <img src="{{ '/assets/images/portfolio/' | append: project.image | relative_url }}" alt="{{ project.title }}" />
            <div class="portfolio-overlay">
              <div class="overlay-content">
                {% if project.link and project.link != "#" %}
                  <a href="{{ project.link }}" class="btn btn-primary" target="_blank">View Live Site</a>
                {% endif %}
              </div>
            </div>
          </div>
          
          <div class="portfolio-content">
            <h3 class="text-primary mb-2">{{ project.title }}</h3>
            
            {% if project.type %}
              <div class="portfolio-badge">
                <span class="badge">{{ project.type }}</span>
              </div>
            {% endif %}
            
            <p class="text-muted portfolio-description">{{ project.description }}</p>
            
            {% if project.technologies %}
              <div class="tech-stack mb-3">
                <span class="tech-label">Technologies:</span>
                <div class="tech-tags">
                  {% assign techs = project.technologies | split: ', ' %}
                  {% for tech in techs %}
                    <span class="tech-tag">{{ tech }}</span>
                  {% endfor %}
                </div>
              </div>
            {% endif %}
            
            <div class="portfolio-actions">
              {% if project.link and project.link != "#" %}
                <a href="{{ project.link }}" class="portfolio-link" target="_blank">
                  <span>Visit Site</span>
                  <span>→</span>
                </a>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
    <div class="portfolio-cta">
      <div class="glass-card text-center">
        <h3 class="text-gold mb-3">Ready to Join Our Success Stories?</h3>
        <p class="text-muted mb-4">Transform your business with a premium web presence that commands attention and drives results.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/contact" class="btn btn-primary">Start Your Project</a>
          <a href="/services" class="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.portfolio-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.portfolio-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-large);
  border-color: var(--champagne-gold);
}

.portfolio-image {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.05);
}

.overlay-content {
  text-align: center;
}

.portfolio-content {
  padding: 2rem;
}

.portfolio-badge {
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--champagne-gold), var(--electric-blue));
  color: var(--deep-black);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.portfolio-description {
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.tech-stack {
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
}

.tech-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--elevated-dark);
  color: var(--electric-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.portfolio-actions {
  margin-top: 1.5rem;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: var(--champagne-gold);
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--champagne-gold);
  border-radius: 25px;
  transition: all 0.3s ease;
  background: transparent;
  width: 100%;
}

.portfolio-link:hover {
  background: var(--champagne-gold);
  color: var(--deep-black);
  box-shadow: var(--glow-gold);
  transform: translateX(5px);
}

.portfolio-cta {
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .portfolio-card {
    margin: 0 auto;
    max-width: 400px;
  }
  
  .portfolio-content {
    padding: 1.5rem;
  }
}
</style> 