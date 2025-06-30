---
layout: default
title: "Portfolio"
permalink: /projekte/
---

<section>
  <h2>Meine Projekte</h2>
  <p>Meine Projekte, welche ich während der FH oder auch im privatem mache oder gemacht habe.</p>
  <!-- Später durch Jekyll Collections ergänzen -->

  
<div class="projects-grid">
  {% for project in site.projects %}
    {% if project.technologien %}
      <div class="project-card">
        <h2> 
          <a href="{{ project.url }}">
            {{ project.title }}
          </a>
      </h2>

        {% if project.link %}
          <p><a href="{{ project.link }}" target="_blank">🔗 Zum Projekt auf GitHub</a></p>
        {% endif %}

        <div class="tech-stack">
          {% for tech in project.technologien %}
            <span class="badge">{{ tech }}</span>
          {% endfor %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

</section>