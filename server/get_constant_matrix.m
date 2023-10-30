function constant_matrix = get_constant_matrix(rows,variable)
constants = str2num(variable)

constant_matrix = zeros(rows,1);
for r = 1:rows
    constant_matrix(r, 1) = constants(r);
    
end
end