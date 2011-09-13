var FirstDivView;
FirstDivView = (function() {
  var div_template;
  function FirstDivView() {}
  div_template = '<div class="first_div_line"><span>${s}</span></div>';
  FirstDivView.prototype.append_text = function(s) {
    var json_struct;
    json_struct = {
      's': s
    };
    return $.tmpl(div_template, json_struct).appendTo('#first_div');
  };
  return FirstDivView;
})();