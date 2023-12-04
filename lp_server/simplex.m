

function solved_tableaus = simplex(tableau)
unsolved_tableau = jsondecode(tableau)
class(unsolved_tableau)
columns = length(unsolved_tableau.objectiveCoefficients)
rows = length(unsolved_tableau.basicVariables)
solved = []
objective_function_coefficients_matrix = get_objective_coefficient(columns,unsolved_tableau.objectiveCoefficients)

constraint_equation_matrix = get_constraint_equations_matrix(rows,columns,unsolved_tableau.constraintEquations)

basic_coefficient_matrix = get_basic_coefficient_matrix(rows,unsolved_tableau.basicCoefficients)
basic_variable =  get_basic_variables(rows,unsolved_tableau.basicVariables)
c_row = get_crow(rows,columns,constraint_equation_matrix,basic_coefficient_matrix,objective_function_coefficients_matrix)

constant_matrix = get_constant_matrix(rows,unsolved_tableau.constants)
most_negative_column = get_most_negative_crow_value(columns,c_row)
most_negative_value = c_row(1,most_negative_column)
ratio_matrix = get_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
fvalue = get_f_value(rows,basic_variable,constant_matrix,objective_function_coefficients_matrix)
tableau = SolvedTableau(basic_coefficient_matrix,constraint_equation_matrix,constant_matrix,c_row,ratio_matrix,basic_variable,fvalue);
 minimum_row_index = get_minimum_ratio(ratio_matrix,rows)
solved = [solved,tableau];

while most_negative_value < 0
        basic_variable= get_next_basic_variable_matrix(basic_variable,minimum_row_index,most_negative_column)
        basic_coefficient_matrix=get_next_basic_coefficient(basic_coefficient_matrix,objective_function_coefficients_matrix ,minimum_row_index,most_negative_column)
        prev_constraint_equation_matrix = constraint_equation_matrix
        constraint_equation_matrix = pivot(rows,constraint_equation_matrix,minimum_row_index,most_negative_column)
        c_row = get_crow(rows,columns,constraint_equation_matrix,basic_coefficient_matrix,objective_function_coefficients_matrix)
        prev_most_negative_column = most_negative_column
        prev_minimum_row_index = minimum_row_index
        most_negative_column = get_most_negative_crow_value(columns,c_row)
        constant_matrix = get_next_constants(rows,prev_constraint_equation_matrix,prev_minimum_row_index,prev_most_negative_column,ratio_matrix)
        ratio_matrix = get_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
        minimum_row_index =  get_minimum_ratio(ratio_matrix,rows)
        fvalue = get_f_value(rows,basic_variable,constant_matrix,objective_function_coefficients_matrix)
        tableau = SolvedTableau(basic_coefficient_matrix,constraint_equation_matrix,constant_matrix,c_row,ratio_matrix,basic_variable,fvalue);
        solved = [solved,tableau]; 
        most_negative_value= c_row(1,most_negative_column)      
   end
   
solved_tableaus = jsonencode(solved);

end

 