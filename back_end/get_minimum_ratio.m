function minimum_row_index = get_minimum_ratio(ratio_matrix, rows)
    if isempty(ratio_matrix) || rows < 1 || rows > size(ratio_matrix, 1)
        error('Invalid input dimensions.');
    end

    minimum_row_index = 1; % Initialize to some default value
    minimum_value = ratio_matrix(1, 1);

    for i = 1:rows
        if ratio_matrix(i, 1) <= minimum_value
            minimum_value = ratio_matrix(i, 1);
            minimum_row_index = i;
        end
    end
end
