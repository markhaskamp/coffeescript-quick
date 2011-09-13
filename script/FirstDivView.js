var FirstDivView;
FirstDivView = (function() {
  var div_template;
  function FirstDivView() {}
  div_template = '<div><span>${s}</span></div>';
  FirstDivView.prototype.set_text = function(s) {
    var json_struct;
    json_struct = {
      's': s
    };
    console.log(json_struct);
    return $.tmpl(div_template, json_struct).appendTo('#first_div');
  };
  return FirstDivView;
})();