function ratio_matrix = get_ratio(constant_matrix,constraint_equation_matrix,most_negative_column,rows)
     ratio_matrix=[]
      for i = 1:rows
    constant_matrix(i,1) = constant_matrix(i,1)/constraint_equation_matrix(i,most_negative_column);
    ratio_matrix = constant_matrix
end
end