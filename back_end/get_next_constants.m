function new_constants = get_next_constants(rows,prev_constraint_equation_matrix,minimum_row_index,most_negative_column,ratio_matrix)
new_constants = ratio_matrix
cons = prev_constraint_equation_matrix

for   i = 1:rows
        if i == minimum_row_index
         continue
        end
        a = prev_constraint_equation_matrix(i,most_negative_column)
        b = (new_constants(i,1)-(ratio_matrix(minimum_row_index,1)))
        new_constants(i,1) = (new_constants(i,1)-(ratio_matrix(minimum_row_index,1)))*(prev_constraint_equation_matrix(i,most_negative_column))
    end
end