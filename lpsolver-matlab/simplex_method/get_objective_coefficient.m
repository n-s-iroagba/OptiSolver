function objective_coefficient = get_objective_coefficient(dimension)
         objective_prompt = {'Enter number of coefficients of objective function separated by a 3space-in-between'};
         objective_prompt_title = 'Objective function coefficient'; 
         inputCell1= inputdlg(objective_prompt,objective_prompt_title,dimension);
         objective_coefficient_in_string_format = inputCell1{1};
         objective_coefficient= str2num(objective_coefficient_in_string_format);
end