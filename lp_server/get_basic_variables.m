function new_basic_variable = get_basic_variables(rows,most_negative_column,minimum_index,basic_variable)
new_basic_variable = zeros(rows,1)
new_basic_variable = basic_variable
new_basic_variable(minimum_index,1) = most_negative_column
end