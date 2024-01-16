function solution = simplex(tableau)
    unsolved_tableau = jsondecode(tableau);
    class(unsolved_tableau);
    columns = length(unsolved_tableau.objectiveCoefficients);
    rows = length(unsolved_tableau.basicVariables);
    solved = [];
    optimal = false;
    stop = false;
    ratios = [];
    boundedness = 'bounded'
    uniqueness=''
    feasibility = ''
    failed_minimum_ratio_rule = true
    alternate_stop = 1

    objective_function_coefficients = get_objective_coefficient(columns, unsolved_tableau.objectiveCoefficients);
    constraint_equations = get_constraint_equations(rows, columns, unsolved_tableau.constraintEquations);
    basic_coefficients = get_basic_coefficients(rows, unsolved_tableau.basicCoefficients);
    basic_variables = get_basic_variables(rows, unsolved_tableau.basicVariables);
    constants = get_constants(rows, unsolved_tableau.constants);
    fvalue = get_f_value(rows, basic_variables, constants, objective_function_coefficients);
    c_row = get_crow(rows, columns, constraint_equations, basic_coefficients, objective_function_coefficients);
    minimum_crow_value_index = get_most_negative_crow_index(columns, c_row);
    minimum_crow_value = c_row(1, minimum_crow_value_index);
    
    if minimum_crow_value >= 0
            optimal = true;
            feasibility = 'feasible'
        if minimum_crow_value > 0
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau];
                stop = true;
        else                 
               alternate_non_basic_variables = is_alternate_solution_possible(c_row, basic_variables)
               if ~isempty(alternate_non_basic_variables)   
                  for i = 1:length(alternate_non_basic_variables)
                    if check_minimum_ratio_rule(constraint_equations, alternate_non_basic_variables(i))
                        alternate_stop = alternate_stop+1
                        minimum_crow_value_index = alternate_non_basic_variables(i)
                        uniqueness = 'alternate'
                        ratios = get_ratio(constants, constraint_equations, minimum_crow_value_index, rows)
                        tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                        solved = [solved, tableau];
                       failed_minimum_ratio_rule = false
                    end
                  end
               end
               if failed_minimum_ratio_rule
                  boundedness = 'unbounded';
                  tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                  solved = [solved, tableau];
                  stop = true;
              end  
        end
    else
            if check_minimum_ratio_rule(constraint_equations, minimum_crow_value_index)
                ratios = get_ratio(constants, constraint_equations, minimum_crow_value_index, rows)
                optimal = false;
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau]; 
            else
                optimal = false;
                feasibility= 'not feasible'
                boundedness = 'unbounded';
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau];
                stop = true;
            end
    end

    while ~stop && alternate_stop<3
        failed_minimum_ratio_rule =true       
        minimum_row_index = get_minimum_ratio(ratios,rows)
        basic_variables = get_next_basic_variables(basic_variables, minimum_row_index, minimum_crow_value_index);
        basic_coefficients = get_next_basic_coefficients(basic_coefficients, objective_function_coefficients, minimum_row_index, minimum_crow_value_index);
        constants = get_next_constants(rows, constraint_equations, minimum_row_index, minimum_crow_value_index, ratios);
        ratios = []
        constraint_equations = pivot(rows, constraint_equations, minimum_row_index, minimum_crow_value_index)
        c_row = get_crow(rows, columns, constraint_equations, basic_coefficients, objective_function_coefficients);
        minimum_crow_value_index = get_most_negative_crow_index(columns, c_row);
        minimum_crow_value = c_row(1, minimum_crow_value_index);
        fvalue = get_f_value(rows,basic_variables,constants,objective_function_coefficients)
        if minimum_crow_value >= 0
            optimal = true;
            feasibility= 'feasible'
            if minimum_crow_value > 0
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau];
                stop = true;
            else                 
               alternate_non_basic_variables = is_alternate_solution_possible(c_row, basic_variables)
               if ~isempty(alternate_non_basic_variables)   
                  for i = 1:length(alternate_non_basic_variables)
                    if check_minimum_ratio_rule(constraint_equations, alternate_non_basic_variables(i))
                        alternate_stop = alternate_stop+1
                        minimum_crow_value_index = alternate_non_basic_variables(i)
                        uniqueness = 'alternate'
                        ratios = get_ratio(constants, constraint_equations, minimum_crow_value_index, rows)
                        tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                        solved = [solved, tableau];
                       failed_minimum_ratio_rule = false
                    end
                  end
               end
               if failed_minimum_ratio_rule
                  boundedness = 'unbounded';
                  tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                  solved = [solved, tableau];
                  stop = true;
              end  
            end
        else
            if check_minimum_ratio_rule(constraint_equations, minimum_crow_value_index)
                ratios = get_ratio(constants, constraint_equations, minimum_crow_value_index, rows)
                optimal = false;
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau]; 
            else
                optimal = false;
                boundedness = 'unbounded';
                feasibility = 'not feasible'
                tableau = SolvedTableau(basic_coefficients, constraint_equations, constants, c_row, ratios, basic_variables, fvalue, optimal);
                solved = [solved, tableau];
                stop = true;
            end
        end
    end
    count = check_uniqueness(solved)
    if count == 0
      feasibility = 'not feasible'
    elseif  count == 1
      uniqueness = 'unique'
    end
    disp(boundedness)
    disp(uniqueness)

    disp(solved)
    temp_solution = Solution(boundedness,uniqueness,feasibility,solved)
    solution = jsonencode(temp_solution);
end
