function constant_matrix = get_constant_matrix(rows,box_dimension)
constant_matrix = zeros(rows,1);
for r = 1:rows
    switch mod(r,10)
        case 1
            equation_number_tag = 'st';
        case 2
            equation_number_tag = 'nd';
        case 3
            equation_number_tag = 'rd';
        otherwise
            equation_number_tag = 'th';
    end

    prompt = "Enter the constant of the "+r+equation_number_tag+" constraint equation";
    dlgtitle = "constant matrix";
    constant_answer = inputdlg(prompt, dlgtitle,box_dimension );
    constant_row_element = str2num(constant_answer{1});
    if length(constant_row_element) == 1;
         constant_matrix(r, 1) = constant_row_element;
    else
        disp(['Invalid input for row ' num2str(r) '. Please enter exactly ' num2str('1') ' elements.']);
        break;
    end
end