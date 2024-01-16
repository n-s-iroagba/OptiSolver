function result = check_minimum_ratio_rule(constraint_equations, minimum_crow_value_index)
    num_rows = size(constraint_equations, 1);
    positive_found = false;
    zero_found = false;
    result = true
    for row = 1:num_rows
        value = constraint_equations(row, minimum_crow_value_index)
        if value > 0 
            positive_found = true;
            break;
        end
    end
    for row = 1:num_rows
        value = constraint_equations(row, minimum_crow_value_index);
        if value == 0 
            zero_found = true;
            break;
        end
    end
    if zero_found
       result = false
    end
    if ~positive_found
       result = false
    end    
end
