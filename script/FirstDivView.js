(function() {
  var FirstDivView;
  FirstDivView = (function() {
    function FirstDivView() {}
    FirstDivView.prototype.div_template = '<div><span>${s}</span></div>';
    FirstDivView.prototype.set_text = function(s) {
      var json_struct;
      json_struct = {
        's': s
      };
      return $.tmpl(div_template, json_struct).appendTo('.first_div');
    };
    return FirstDivView;
  })();
}).call(this);
