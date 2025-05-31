---
title: "Insights & Strategy"
description: "Expert insights on premium web design, strategic digital marketing, and business growth for ambitious entrepreneurs."
layout: default
---

<section style="padding: 4rem 0; background: var(--rich-charcoal);">
  <div class="container">
    <div class="text-center mb-4">
      <h1 class="font-display">Insights & <span class="text-gold">Strategy</span></h1>
      <p class="text-muted" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Expert insights on premium web design, strategic digital marketing, and business growth for ambitious entrepreneurs.</p>
    </div>
  </div>
</section>

<section style="padding: 6rem 0;">
  <div class="container">
    <div class="blog-posts">
      {% for post in site.posts %}
        <article class="blog-post-preview glass-card">
          <div class="post-header">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
              {% if post.author %}
                <span class="author">by {{ post.author }}</span>
              {% endif %}
              {% if post.categories %}
                <div class="categories">
                  {% for category in post.categories %}
                    <span class="category">{{ category | replace: '-', ' ' | capitalize }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </div>
          
          <div class="post-excerpt">
            {% if post.excerpt %}
              {{ post.excerpt }}
            {% else %}
              {{ post.content | strip_html | truncatewords: 50 }}
            {% endif %}
          </div>
          
          <div class="post-actions">
            <a href="{{ post.url | relative_url }}" class="btn btn-outline">Read Full Article</a>
          </div>
        </article>
      {% endfor %}
    </div>

    {% if site.posts.size == 0 %}
      <div class="no-posts glass-card text-center">
        <div class="no-posts-icon">📝</div>
        <h3 class="text-gold mb-2">Coming Soon</h3>
        <p class="text-muted">Expert insights and strategic content are on the way. Check back soon for valuable tips on premium web design and business growth.</p>
      </div>
    {% endif %}
  </div>
</section>

<style>
.blog-posts {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-post-preview {
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.blog-post-preview:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-large);
  border-color: var(--champagne-gold);
}

.post-header {
  margin-bottom: 1.5rem;
}

.blog-post-preview h2 {
  margin: 0 0 1rem 0;
  line-height: 1.3;
  font-size: 1.8rem;
}

.blog-post-preview h2 a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-post-preview h2 a:hover {
  color: var(--champagne-gold);
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.post-meta time {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}

.author {
  color: var(--electric-blue);
  font-size: 0.95rem;
}

.author:before {
  content: "• ";
  color: var(--text-muted);
}

.categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category {
  background: linear-gradient(135deg, var(--royal-purple), var(--electric-blue));
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.post-actions {
  display: flex;
  justify-content: flex-start;
}

.no-posts {
  max-width: 500px;
  margin: 4rem auto;
  padding: 3rem;
}

.no-posts-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: var(--electric-blue);
}

@media (max-width: 768px) {
  .blog-posts {
    gap: 1.5rem;
  }
  
  .blog-post-preview {
    padding: 2rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .author:before {
    content: "";
  }
  
  .no-posts {
    margin: 2rem auto;
    padding: 2rem;
  }
}
</style> 