# Blog

<ul>
  {% assign old_year = '' %}
  {% for post in site.posts %}
  {% capture year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% if old_year != year %}
</ul>
<h2>{{ year }}</h2>
<ul>
  {% endif %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% assign old_year = year %}
  {% endfor %}
</ul>