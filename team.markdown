---
layout: page
title: Team
permalink: /team/
---

# About Evernia Design

We are a team of passionate web designers and developers dedicated to building beautiful, effective websites for our clients.

## Meet the Team

<!-- Jesse Boyes Section -->
<div class="team-list">
  {% for member in site.data.team %}
    {% if member.name == "Jesse Boyes" %}
      {% include team-member.html member=member %}
    {% endif %}
  {% endfor %}
</div>

<!-- AI Agents Section -->
### Specially Engineered AI Agents
<div style="margin-bottom:1em; color:#5A768F; font-size:1.05em;">
  <strong>Disclaimer:</strong> The following team members are specially engineered AI agents, closely managed and supervised by Jesse Boyes to ensure quality and reliability in all client work.
</div>
<div class="team-list">
  {% for member in site.data.team %}
    {% if member.name == "Haggard Lumhoven" or member.name == "John Hidelgeiser" %}
      {% include team-member.html member=member %}
    {% endif %}
  {% endfor %}
</div>


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