function ratio_matrix = get_ratio(ratio_matrix,constraint_equation_matrix,most_negative_column,rows)
    
      for i = 1:rows
    ratio_matrix(i,1) = ratio_matrix(i,1)/constraint_equation_matrix(i,most_negative_column)
end
end