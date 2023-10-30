function basic_coefficient_matrix = get_basic_variable_matrix(variable)
basic_variables = str2num(variable)
number_of_rows = length(basic_variables)
basic_variable_matrix = zeros(number_of_rows, 1);

for r = 1:number_of_rows
    row_element =basic_variables(r);
        basic_coefficient_matrix(r, 1) = row_element;
    end
end