function constraint_equation_matrix = get_constraint_equations_matrix(rows,columns,equations)

constraint_equation = str2num(equations)
length_of_equation = length(constraint_equation)
constraint_equation_matrix = zeros(rows, columns);
row_number = 1
column_data_number = 1

for r = 1:length_of_equation

    if column_data_number == columns+1

     row_number=row_number+1
     column_data_number = 1
    end
constraint_equation_matrix(row_number,column_data_number) = constraint_equation(r);
column_data_number=column_data_number+1
    
end
end