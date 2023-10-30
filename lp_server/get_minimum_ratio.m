function minimum_row_index = get_minimum_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)

for i = 1:rows
    constant_matrix(i,1) = constant_matrix(i,1)/constraint_equation_matrix(i,most_negative_column);
end
minimum_value =  constant_matrix(1,1);

for i = 1:rows
   if constant_matrix(i,1) <= minimum_value
       minimum_value = constant_matrix(i,1)
       minimum_row_index = i
   end
end