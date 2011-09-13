class FirstDivView
  div_template = '<div><span>${s}</span></div>'

  set_text: (s) ->
    json_struct = {'s': s}
    console.log json_struct
    $.tmpl(div_template, json_struct).appendTo('#first_div')
