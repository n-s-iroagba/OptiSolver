function minimum_row_index = get_minimum_ratio(ratio_matrix, rows)

    minimum_row_index = 1; % Initialize to some default value
    minimum_value = ratio_matrix(1, 1);

    for i = 1:rows
        if ratio_matrix(i, 1) <= minimum_value
            minimum_value = ratio_matrix(i, 1);
            minimum_row_index = i;
        end
    end
end
