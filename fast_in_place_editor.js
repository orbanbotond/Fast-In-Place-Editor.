(function() {  
  document.observe("dom:loaded", function() {
    var inPlaceEditables = $$('[data-in-place-editable]');
    inPlaceEditables.each(function(editable) {
      var id = editable.id;
      var entity = editable.readAttribute("data-entity");
      var field = editable.readAttribute("data-field");
      var submitUrl = editable.readAttribute("data-url");
      var columnNr = editable.readAttribute("data-cols");
      var rowNr = editable.readAttribute("data-rows");

      var options = {
        callback: function(form, value) {
          return entity + "[" + field + "]=" + encodeURIComponent(value) +
                 "&delta=" + encodeURIComponent(value) +
                 "&_method=PUT";
        }
      };

      if(columnNr && rowNr){
        Object.extend(options, {cols: columnNr, rows: rowNr})
      }

      new Ajax.InPlaceEditor(
        id,
        submitUrl,
        options
      );

    });
  });
})();
