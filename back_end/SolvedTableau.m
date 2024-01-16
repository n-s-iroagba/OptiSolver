classdef SolvedTableau 
  properties
  basicCoefficients
  constraintEquations 
  constants
  crow
  basicVariables
  ratio
  fValue
  optimal
  end
  methods
      function object = SolvedTableau(basic_coefficient_matrix,constraint_equation_matrix,constant_matrix,c_row,ratio_matrix,basic_variable,fValue,optimal)
         object.basicCoefficients =basic_coefficient_matrix
         object.constraintEquations =constraint_equation_matrix
         object.constants = constant_matrix
         object.crow= c_row
         object.ratio=ratio_matrix
         object.basicVariables = basic_variable
         object.fValue = fValue
         object.optimal = optimal
      end
    end
end