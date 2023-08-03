function constraint_equation_matrix = pivot(rows,constraint_equation_matrix,minimum_row_index,most_negative_column)
temp_constraint_equation_matrix = constraint_equation_matrix

constraint_equation_matrix(minimum_row_index,:) = constraint_equation_matrix(minimum_row_index,:)/constraint_equation_matrix(minimum_row_index,most_negative_column);
for i = 1:rows
    if i == minimum_row_index
        continue
    else
        constraint_equation_matrix(i,:) = constraint_equation_matrix(i,:)-(constraint_equation_matrix(minimum_row_index,:)*constraint_equation_matrix(i,most_negative_column))
            %(constraint_equation_matrix(i,:)/constraint_equation_matrix(i,most_negative_column))*constraint_equation_matrix(i,most_negative_column))*-1
    end
end