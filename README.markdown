An unobtrusively insertable inplace editor
==========================================

Requirements
------------
- prototype
- scriptaculous


All you need to do
------------------

  In your views:
    <p id="<%= project.id %>_project_content"
       data-in-place-editable="true"
       data-entity="project"
       data-field="content"
       data-url="<%= project_path(project, :authenticity_token => form_authenticity_token) %>"
       data-cols="60"
       data-rows="6"><%= project.content %></p>

  In your layout:
    <%= javascript_include_tag "myextensions/fast_in_place_editor.js" %>

And that's all. Enjoy :)
  

