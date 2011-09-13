class SecondDivView

  div_template = '<div class="second_div_line"><span>${s}</span></div>'

  append_text: (s) ->
    json_struct = {'s': s}
    $.tmpl(div_template, json_struct).appendTo('#second_div')

