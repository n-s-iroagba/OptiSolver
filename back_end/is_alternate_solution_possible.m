function alternate_non_basic_variables = is_alternate_solution_possible(crow, basic_variables)
alternate_non_basic_variables =[]
    indices = find(crow == 0);
    nonBasicIndices = indices(~ismember(indices, basic_variables));
    if ~isempty(nonBasicIndices)
        alternate_non_basic_variables = nonBasicIndices
    else
        result = [];
    end
end
