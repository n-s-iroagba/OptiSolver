function basic_variable_matrix = get_basic_variable_matrix(rows,box_dimension)
basic_variable_matrix = zeros(rows, 1);

for r = 1:rows
    switch mod(r,10)
        case 1
            equation_number_tag = 'st'
        case 2
            equation_number_tag = 'nd'
        case 3
            equation_number_tag = 'rd'
        otherwise
            equation_number_tag = 'th'
    end

    prompt = "Enter the coefficient of the "+r+equation_number_tag+" basic variable";
    dlgtitle = 'Basic variable matrix';
    answer = inputdlg(prompt, dlgtitle, box_dimension);
    row_element = str2num(answer{1});
    if length(row_element) == 1;
         basic_variable_matrix(r, 1) = row_element;
    else
        disp(['Invalid input for row ' num2str(r) '. Please enter exactly ' num2str('1') ' elements.']);
        break;
    end
end