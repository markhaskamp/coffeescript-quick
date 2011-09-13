$(document).ready ->
  first_div = new FirstDivView
  second_div = new SecondDivView

  line_1 = 'eddie would go'
  line_2 = 'we excel on ice'
  line_3 = 'kilroy was here'
  line_4 = ''
  first_div.append_text line_1 if first_div.input_string_is_valid(line_1)
  first_div.append_text line_2 if first_div.input_string_is_valid(line_2)
  second_div.append_text line_3 if second_div.input_string_is_valid(line_3)
  second_div.append_text line_4 if second_div.input_string_is_valid(line_4)
