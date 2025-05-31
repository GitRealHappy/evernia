---
layout: default
title: "Executive Team"
description: "Meet the strategic minds behind Evernia Design's premium web solutions. Executive-level expertise driving measurable results."
permalink: /team/
---

<section style="padding: 4rem 0; background: var(--rich-charcoal);">
  <div class="container">
    <div class="text-center mb-4">
      <h1 class="font-display">Executive <span class="text-gold">Team</span></h1>
      <p class="text-muted" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Strategic minds driving intelligent web solutions. Our team combines deep technical expertise with business acumen to deliver exceptional results.</p>
    </div>
  </div>
</section>

<section style="padding: 6rem 0;">
  <div class="container">
    
    <!-- Leadership Team -->
    <div class="team-section mb-4">
      <div class="text-center mb-4">
        <h2 class="font-display text-primary">Leadership <span class="text-blue">Team</span></h2>
        <p class="text-muted">Executive leadership with proven track records in digital transformation</p>
      </div>
      
      <div class="team-grid">
        {% for member in site.data.team %}
          {% if member.name == "Jesse Boyes" %}
            <div class="team-card glass-card">
              <div class="team-photo-container">
                {% if member.photo %}
                  <img src="{{ '/assets/images/' | append: member.photo | relative_url }}" alt="{{ member.name }}" class="team-photo">
                {% else %}
                  <div class="team-photo-placeholder">
                    <span class="team-initials">{{ member.name | split: ' ' | map: 'first' | join: '' | upcase }}</span>
                  </div>
                {% endif %}
                <div class="team-status-badge">
                  <span class="status-indicator"></span>
                  <span class="status-text">Available</span>
                </div>
              </div>
              
              <div class="team-content">
                <h3 class="text-gold mb-1">{{ member.name }}</h3>
                <p class="team-role text-blue mb-2">{{ member.role }}</p>
                
                <div class="team-expertise mb-3">
                  <h4 class="expertise-title">Core Expertise</h4>
                  <div class="expertise-tags">
                    {% assign expertises = member.expertise | split: ', ' %}
                    {% for expertise in expertises %}
                      <span class="expertise-tag">{{ expertise }}</span>
                    {% endfor %}
                  </div>
                </div>
                
                <p class="team-bio text-muted">{{ member.bio }}</p>
                
                {% if member.achievements %}
                  <div class="team-achievements">
                    <h4 class="achievements-title">Key Achievements</h4>
                    <ul class="achievements-list">
                      {% assign achievements = member.achievements | split: '|' %}
                      {% for achievement in achievements %}
                        <li>{{ achievement }}</li>
                      {% endfor %}
                    </ul>
                  </div>
                {% endif %}
                
                {% if member.linkedin or member.github or member.twitter %}
                  <div class="team-social">
                    {% if member.linkedin %}
                      <a href="{{ member.linkedin }}" target="_blank" class="social-link">LinkedIn</a>
                    {% endif %}
                    {% if member.github %}
                      <a href="{{ member.github }}" target="_blank" class="social-link">GitHub</a>
                    {% endif %}
                    {% if member.twitter %}
                      <a href="{{ member.twitter }}" target="_blank" class="social-link">Twitter</a>
                    {% endif %}
                  </div>
                {% endif %}
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- AI-Enhanced Team -->
    <div class="team-section">
      <div class="text-center mb-4">
        <h2 class="font-display text-primary">AI-Enhanced <span class="text-purple">Specialists</span></h2>
        <p class="text-muted">Advanced AI agents engineered for specialized tasks, supervised by our executive team</p>
      </div>
      
      <div class="ai-disclosure glass-card mb-4">
        <div class="disclosure-icon">🤖</div>
        <div class="disclosure-content">
          <h3 class="text-gold mb-2">Advanced AI Integration</h3>
          <p class="text-muted">Our team leverages sophisticated AI agents to enhance productivity and deliver exceptional results. These specialized systems are carefully managed and supervised by our executive team to ensure consistent quality and strategic alignment with your business objectives.</p>
        </div>
      </div>
      
      <div class="team-grid">
        {% for member in site.data.team %}
          {% if member.name == "Haggard Lumhoven" or member.name == "John Hidelgeiser" %}
            <div class="team-card glass-card ai-team-card">
              <div class="ai-badge">
                <span>AI Specialist</span>
              </div>
              
              <div class="team-photo-container">
                {% if member.photo %}
                  <img src="{{ '/assets/images/' | append: member.photo | relative_url }}" alt="{{ member.name }}" class="team-photo ai-photo">
                {% else %}
                  <div class="team-photo-placeholder ai-placeholder">
                    <span class="ai-icon">🤖</span>
                  </div>
                {% endif %}
                <div class="team-status-badge ai-status">
                  <span class="status-indicator ai-indicator"></span>
                  <span class="status-text">Active</span>
                </div>
              </div>
              
              <div class="team-content">
                <h3 class="text-blue mb-1">{{ member.name }}</h3>
                <p class="team-role text-purple mb-2">{{ member.role }}</p>
                
                <div class="team-expertise mb-3">
                  <h4 class="expertise-title">Specializations</h4>
                  <div class="expertise-tags">
                    {% assign expertises = member.expertise | split: ', ' %}
                    {% for expertise in expertises %}
                      <span class="expertise-tag ai-tag">{{ expertise }}</span>
                    {% endfor %}
                  </div>
                </div>
                
                <p class="team-bio text-muted">{{ member.bio }}</p>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
    
    <!-- Team CTA -->
    <div class="team-cta">
      <div class="glass-card text-center">
        <h3 class="text-gold mb-3">Ready to Work with Our Team?</h3>
        <p class="text-muted mb-4">Experience the power of executive-level strategy combined with advanced AI capabilities.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
          <a href="/services" class="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.team-section {
  margin-bottom: 6rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-card {
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-large);
  border-color: var(--champagne-gold);
}

.ai-team-card {
  border-color: var(--royal-purple);
}

.ai-team-card:hover {
  border-color: var(--electric-blue);
}

.ai-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: linear-gradient(135deg, var(--royal-purple), var(--electric-blue));
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.team-photo-container {
  position: relative;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--champagne-gold);
}

.ai-photo {
  border-color: var(--royal-purple);
}

.team-photo-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--champagne-gold), var(--electric-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.ai-placeholder {
  background: linear-gradient(135deg, var(--royal-purple), var(--electric-blue));
}

.team-initials {
  font-size: 2rem;
  font-weight: 700;
  color: var(--deep-black);
}

.ai-icon {
  font-size: 3rem;
}

.team-status-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success-green);
  animation: pulse 2s infinite;
}

.ai-indicator {
  background: var(--electric-blue);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.team-content {
  text-align: left;
}

.team-role {
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.team-expertise {
  margin-bottom: 1.5rem;
}

.expertise-title, .achievements-title {
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.expertise-tag {
  background: var(--elevated-dark);
  color: var(--champagne-gold);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.ai-tag {
  color: var(--royal-purple);
  border-color: rgba(108, 99, 255, 0.3);
}

.team-bio {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements-list li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: bold;
}

.team-social {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: var(--electric-blue);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid var(--electric-blue);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--electric-blue);
  color: var(--deep-black);
}

.ai-disclosure {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--elevated-dark);
  border: 1px solid var(--royal-purple);
}

.disclosure-icon {
  font-size: 3rem;
  color: var(--royal-purple);
  flex-shrink: 0;
}

.disclosure-content {
  flex-grow: 1;
}

.team-cta {
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-card {
    padding: 1.5rem;
  }
  
  .ai-disclosure {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .disclosure-icon {
    font-size: 2rem;
  }
}
</style>

<!-- 
This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll 
-->