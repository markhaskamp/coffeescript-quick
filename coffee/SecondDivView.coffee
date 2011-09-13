class SecondDivView

  div_template = '<li class="second_div_line">${s}</li>'

  append_text: (s) ->
    $.tmpl(div_template, {'s': s}).appendTo('#second_div')

  input_string_is_valid: (s) ->
    return (s.trim().length > 0)

