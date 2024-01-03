function fvalue = get_f_value(rows,basic_variables,constants,objective_coefficient)

fvalue = 0
for r=1:rows
    fvalue = fvalue + objective_coefficient(basic_variables(r,1)) * constants(r,1)
end
end
  