(function() {
  var SecondDivView;
  SecondDivView = (function() {
    function SecondDivView() {}
    SecondDivView.prototype.div_template = '<div><span>${s}</span></div>';
    SecondDivView.prototype.set_text = function(s) {
      var json_struct;
      json_struct = {
        's': s
      };
      return $.tmpl(div_template, json_struct).appendTo('.second_div');
    };
    return SecondDivView;
  })();
}).call(this);
