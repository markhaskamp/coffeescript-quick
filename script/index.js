(function() {
  $(document).ready(function() {
    var first_div, second_div;
    first_div = new FirstDivView;
    second_div = new SecondDivView;
    first_div.set_text('eddie would go');
    return second_div.set_text('we excel on ice');
  });
}).call(this);
