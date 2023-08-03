% input box dimension
box_dimension= [5 135];

objective_function_coefficients = get_objective_coefficient(box_dimension)

number_of_constraint_equations = get_number_of_constraint_equations(box_dimension)

columns = length(objective_function_coefficients)

rows = number_of_constraint_equations

constraint_equation_matrix = get_constraint_equations_matrix(rows,columns,box_dimension)

basic_variable_matrix = get_basic_variable_matrix(rows,box_dimension)

c_row = get_crow(rows,columns,constraint_equation_matrix,basic_variable_matrix,objective_function_coefficients)

constant_matrix = get_constant_matrix(rows,box_dimension)
most_negative_column = get_most_negative_crow_value(columns,c_row)
most_negative_value = c_row(1,most_negative_column)

while most_negative_value < 0
        minimum_row_index = get_minimum_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
        basic_variable_matrix = next_get_basic_variable_matrix(basic_variable_matrix,objective_function_coefficients,minimum_row_index,most_negative_column)

        constraint_equation_matrix = pivot(rows,constraint_equation_matrix,minimum_row_index,most_negative_column)
        c_row = get_crow(rows,columns,constraint_equation_matrix,basic_variable_matrix,objective_function_coefficients)
        most_negative_column = get_most_negative_crow_value(columns,c_row)
        most_negative_value = crow(1,most_negative_column);
   end



disp('optimal')


