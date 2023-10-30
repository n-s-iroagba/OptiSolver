classdef SolvedTableau 
  properties
  
  basic_coefficient_matrix
  constraint_equation_matrix
  constant_matrix
  c_row
  ratio_matrix
  most_negative_column
  minimum_row_index
  end
  methods
      function object = SolvedTableau(basic_coefficient_matrix,constraint_equation_matrix,constant_matrix,c_row,ratio_matrix,most_negative_column,minimum_row_index)
         object.basic_coefficient_matrix =basic_coefficient_matrix
         object.constraint_equation_matrix =constraint_equation_matrix
         object.constant_matrix = constant_matrix
         object.c_row= c_row
         object.ratio_matrix=ratio_matrix
         object.most_negative_column= most_negative_column
         object.minimum_row_index = minimum_row_index
         
      end
    end
end