---
layout: default
title: "Portfolio"
permalink: /projekte/
---

<section>
  <h2>Meine Projekte</h2>
  <p>Hier findest du eine Auswahl meiner Projekte mit Beschreibung, Technologien und ggf. Links zu GitHub oder Live-Demos.</p>
  <!-- Später durch Jekyll Collections ergänzen -->

  {% for project in site.projects %}
     <h2>
      <a href="{{ project.url }}">
        {{ project.title }}
      </a>
    </h2>
  {% endfor %}

</section>