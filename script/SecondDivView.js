var SecondDivView;
SecondDivView = (function() {
  var div_template;
  function SecondDivView() {}
  div_template = '<div class="second_div_line"><span>${s}</span></div>';
  SecondDivView.prototype.append_text = function(s) {
    var json_struct;
    json_struct = {
      's': s
    };
    return $.tmpl(div_template, json_struct).appendTo('#second_div');
  };
  return SecondDivView;
})();