class SecondDivView

  div_template = '<div><span>${s}</span></div>'

  set_text: (s) ->
    json_struct = {'s': s}
    $.tmpl(div_template, json_struct).appendTo('#second_div')

