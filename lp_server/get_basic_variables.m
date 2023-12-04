function basic_variable = get_basic_variables(rows,variable)


basic_variable = zeros(rows, 1);

for r = 1:rows
    row_element =variable(r);
        basic_variable(r, 1) = row_element;
    end
end