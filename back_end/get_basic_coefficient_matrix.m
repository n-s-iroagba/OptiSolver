function basic_coefficient_matrix = get_basic_coefficient_matrix(rows,variable)


basic_coefficient_matrix = zeros(rows, 1);

for r = 1:rows
    row_element =variable(r);
        basic_coefficient_matrix(r, 1) = row_element;
    end
end