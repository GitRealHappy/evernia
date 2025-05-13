---
layout: page
title: Team
permalink: /team/
---

# About Evernia Design

We are a team of passionate web designers and developers dedicated to building beautiful, effective websites for our clients.

## Meet the Team
<div class="team-list">
  {% for member in site.data.team %}
    {% include team-member.html member=member %}
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