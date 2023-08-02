% receive objective function coefficient from the user
objective_prompt = {'Enter number of coefficients of objective function separated by a 3space-in-between'};
objective_prompt_title = 'Objective function coefficient'; 
objective_coefficient_dimension= [1 35];
inputCell1 = inputdlg(objective_prompt,objective_prompt_title,objective_coefficient_dimension);
objective_coefficient_in_string_format = inputCell1{1};
objective_Coefficient= str2num(objective_coefficient_in_string_format);

%receive number of constraint equations
number_of_constraints_prompt ={'enter the number of constraint equations'}
number_of_constraint_prompt_title = 'number of constraint equations'
number_of_constraint_equation_dimension= [1 35];
inputCell2 = inputdlg(number_of_constraints_prompt,number_of_constraint_prompt_title,number_of_constraint_equation_dimension)
number_of_constraint_equation_in_string_format = inputCell2{1};
number_of_constraint_equations = str2num(number_of_constraint_equation_in_string_format)
columns = length(objective_Coefficient)
rows = number_of_constraint_equations

constraint_equation_coefficients = zeros(rows, columns);

% Prompt the user to enter the coefficients of constraint equation
prompt = 'Enter the matrix elements row by row (separate elements with spaces):';
dlgtitle = 'Matrix Input';
dims = [1, 50]; % Set the input field size to accommodate a reasonable number of elements

for r = 1:rows
    answer = inputdlg(prompt, dlgtitle, dims);
    row_elements = str2num(answer{1});
    if length(row_elements) == columns
        constraint_equation_coefficients(r, :) = row_elements;
    else
        disp(['Invalid input for row ' num2str(r) '. Please enter exactly ' num2str(cols) ' elements.']);
        break;
    end
end

 basic_variable_coefficient_matrix = zeros(rows, 1);

% Prompt the user to enter the matrix elements
promp = 'Enter the matrix elements row by row (separate elements with spaces):';
dlgtit = 'Matrix Input';
dim = [1, 50]; % Set the input field size to accommodate a reasonable number of elements

for r = 1:rows
    answe = inputdlg(promp, dlgtit, dim);
    row_element = str2num(answe{1});
    if length(row_element) == 1;
         basic_variable_coefficient_matrix(r, 1) = row_element;
    else
        disp(['Invalid input for row ' num2str(r) '. Please enter exactly ' num2str('1') ' elements.']);
        break;
    end
end

temp = zeros(1,columns)
crow = zeros(1,columns)
for i = 1:columns
    temp_constraint  = constraint_equation_coefficients(:,i)
    for j = 1:rows
        b = basic_variable_coefficient_matrix(j,1)
        t= temp_constraint(j,1)
        disp(t)
        temp(1,j) =b*t
    end
    crow(1,i) = objective_Coefficient(1,i)-sum(temp)
end
%check in crow is optimal
most_negative = 0

for i =1:columns
    if crow(1,i) < most_negative
        most_negative = crow(1,i)
        most_negative_index = i
    end
end
%for i = 1:rows
    %constraint_equation_coefficients(i,:)/constrai
