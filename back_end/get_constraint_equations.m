function constraint_equation_matrix = get_constraint_equations(rows,columns,equations)
constraint_equation_matrix = zeros(rows,columns);


for r = 1:rows
for c = 1:columns  
constraint_equation_matrix(r,c) = equations(r,c)

end
end