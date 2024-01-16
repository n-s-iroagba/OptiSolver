function crow = get_crow(rows,columns,constraint_equation_matrix,basic_variable_matrix,objective_function_coefficients)

temp = zeros(1,columns);
crow = zeros(1,columns);
for i = 1:columns
    temp_constraint  = constraint_equation_matrix(:,i);
    for j = 1:rows
        b = basic_variable_matrix(j,1);
        t= temp_constraint(j,1);
        temp(1,j) =b*t;
    end
    crow(1,i) = objective_function_coefficients(1,i)-sum(temp)
end