---
title: Blog
layout: default
---

# Blog

Insights, tips, and expert advice for growing your business online.

<div class="blog-posts">
{% for post in site.posts %}
  <article class="blog-post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    
    <div class="post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      {% if post.author %}
        <span class="author">by {{ post.author }}</span>
      {% endif %}
      {% if post.categories %}
        <span class="categories">
          {% for category in post.categories %}
            <span class="category">{{ category | replace: '-', ' ' | capitalize }}</span>
          {% endfor %}
        </span>
      {% endif %}
    </div>
    
    <div class="post-excerpt">
      {% if post.excerpt %}
        {{ post.excerpt }}
      {% else %}
        {{ post.content | strip_html | truncatewords: 50 }}
      {% endif %}
    </div>
    
    <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
  </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p><em>No posts yet. Check back soon for valuable insights and tips!</em></p>
</div>
{% endif %}

<style>
.blog-posts {
  max-width: 800px;
  margin: 2rem auto;
}

.blog-post-preview {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.blog-post-preview:last-child {
  border-bottom: none;
}

.blog-post-preview h2 {
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.blog-post-preview h2 a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-post-preview h2 a:hover {
  color: #007acc;
}

.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.author:before {
  content: "• ";
}

.categories {
  display: flex;
  gap: 0.5rem;
}

.category {
  background-color: #f0f8ff;
  color: #007acc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.post-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: #007acc;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #005a9e;
}

.no-posts {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .blog-posts {
    margin: 1rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .author:before {
    content: "";
  }
}
</style> 