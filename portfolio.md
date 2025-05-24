---
title: Portfolio
layout: default
---

# Portfolio

Here are some of our recent projects. More examples of our work will be added soon.

<div class="portfolio-grid">
{% for project in site.data.portfolio %}
  <div class="portfolio-item">
    <div class="portfolio-image">
      <img src="{{ '/assets/images/portfolio/' | append: project.image | relative_url }}" alt="{{ project.title }}" />
    </div>
    <div class="portfolio-content">
      <h3>{{ project.title }}</h3>
      {% if project.type %}
        <p class="portfolio-type">{{ project.type }}</p>
      {% endif %}
      <p class="portfolio-description">{{ project.description }}</p>
      {% if project.technologies %}
        <p class="portfolio-tech"><strong>Technologies:</strong> {{ project.technologies }}</p>
      {% endif %}
      {% if project.link and project.link != "#" %}
        <a href="{{ project.link }}" class="portfolio-link" target="_blank">View Project</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

<div class="portfolio-note">
  <p><em>More projects coming soon! We're continuously adding new examples of our work.</em></p>
</div>

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1200px;
  gap: 1.5rem;
  margin: 2rem auto;
}

@media (min-width: 900px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.portfolio-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  max-width: 380px;
  margin: 0 auto;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.portfolio-content {
  padding: 1.5rem;
}

.portfolio-content h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.25rem;
}

.portfolio-type {
  color: #666;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.portfolio-description {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.portfolio-tech {
  color: #555;
  font-size: 0.9rem;
  margin: 0 0 1.5rem 0;
}

.portfolio-link {
  display: inline-block;
  background-color: #007acc;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.portfolio-link:hover {
  background-color: #005a9e;
}

.portfolio-note {
  text-align: center;
  margin: 3rem 0 2rem 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.portfolio-note p {
  margin: 0;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .portfolio-content {
    padding: 1rem;
  }
}
</style> 