

function solved_tableaus = simplex(unsolved_tableau)
columns = unsolved_tableau.columns
rows = unsolved_tableau.rows
solved_tableaus = []
objective_function_coefficients_matrix = get_objective_coefficient(unsolved_tableau.objective_function_coefficients)

constraint_equation_matrix = get_constraint_equations_matrix(rows,columns,unsolved_tableau.constraint_equations)

basic_coefficient_matrix = get_basic_coefficient_matrix(unsolved_tableau.basic_coefficient)

c_row = get_crow(rows,columns,constraint_equation_matrix,basic_coefficient_matrix,objective_function_coefficients_matrix)

constant_matrix = get_constant_matrix(rows,unsolved_tableau.constant_matrix)
most_negative_column = get_most_negative_crow_value(columns,c_row)
most_negative_value = c_row(1,most_negative_column)


while most_negative_value < 0
        minimum_row_index = get_minimum_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
        ratio_matrix = get_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
        basic_coefficient_matrix = next_get_basic_variable_matrix(basic_coefficient_matrix,objective_function_coefficients_matrix,minimum_row_index,most_negative_column)
        constraint_equation_matrix = pivot(rows,constraint_equation_matrix,minimum_row_index,most_negative_column)
        c_row = get_crow(rows,columns,constraint_equation_matrix,basic_coefficient_matrix,objective_function_coefficients_matrix)
        most_negative_column = get_most_negative_crow_value(columns,c_row)
        most_negative_value= c_row(1,most_negative_column);
        tableau = SolvedTableau(basic_coefficient_matrix,constraint_equation_matrix,constant_matrix,c_row,ratio_matrix,most_negative_column,minimum_row_index)
        solved = jsonencode(tableau)
        
        solved_tableaus = [solved_tableaus,solved]
   end



end

