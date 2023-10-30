function constraint_equation_matrix = get_constraint_equations_matrix(rows,columns,box_dimension)

constraint_equation_matrix = zeros(rows, columns);

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
    constraint_equation_coefficients_prompt = "enter the cofficients of the "+r+equation_number_tag+" constraint equation";
    constraint_equation_coefficients_title = 'constraint equation coefficient matrix';
    answer = inputdlg( constraint_equation_coefficients_prompt, constraint_equation_coefficients_title, box_dimension);
    row_elements = str2num(answer{1});
    if length(row_elements) == columns
        constraint_equation_matrix(r, :) = row_elements;
    else
        disp(['Invalid input for row ' num2str(r) '. Please enter exactly ' num2str(columns) ' elements.']);
        break;
    end
end