var SecondDivView;
SecondDivView = (function() {
  var div_template;
  function SecondDivView() {}
  div_template = '<li class="second_div_line">${s}</li>';
  SecondDivView.prototype.append_text = function(s) {
    return $.tmpl(div_template, {
      's': s
    }).appendTo('#second_div');
  };
  SecondDivView.prototype.input_string_is_valid = function(s) {
    return s.trim().length > 0;
  };
  return SecondDivView;
})();