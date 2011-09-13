$(document).ready ->
  first_div = new FirstDivView
  second_div = new SecondDivView

  line_1 = 'eddie would go'
  line_2 = 'we excel on ice'
  line_3 = 'kilroy was here'
  line_4 = ''
  first_div.append_text 'eddie would go' if first_div.input_string_is_valid(line_1)
  first_div.append_text 'we excel on ice' if first_div.input_string_is_valid(line_2)
  second_div.append_text 'kilroy was here' if second_div.input_string_is_valid(line_3)
  second_div.append_text 'kilroy was here' if second_div.input_string_is_valid(line_4)
