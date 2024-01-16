classdef Solution
  properties
  type
  boundedness
  uniqueness
  feasibility
  solution
  end
  methods
      function object = Solution(boundedness,uniqueness,feasibility,solution)
         object.boundedness= boundedness
         object.uniqueness = uniqueness
         object.feasibility = feasibility
         object.solution =  solution
      end
    end
end