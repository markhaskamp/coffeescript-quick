class FirstDivView

  div_template = '<li class="first_div_line">${s}</li>'

  append_text: (s) ->
    $.tmpl(div_template, {'s': s}).appendTo('#first_div')

  input_string_is_valid: (s) ->
    (s.trim().length > 0)

