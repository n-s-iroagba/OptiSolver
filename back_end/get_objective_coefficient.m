function objective_coefficients_matrix = get_objective_coefficient(columns,objective_coefficient)
objective_coefficients_matrix = zeros(1,columns);
for c = 1:columns
    objective_coefficients_matrix(1,c) = objective_coefficient(c); 
end
end