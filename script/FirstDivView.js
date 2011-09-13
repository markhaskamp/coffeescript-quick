var FirstDivView;
FirstDivView = (function() {
  var div_template;
  function FirstDivView() {}
  div_template = '<li class="first_div_line">${s}</li>';
  FirstDivView.prototype.append_text = function(s) {
    return $.tmpl(div_template, {
      's': s
    }).appendTo('#first_div');
  };
  FirstDivView.prototype.input_string_is_valid = function(s) {
    return s.trim().length > 0;
  };
  return FirstDivView;
})();