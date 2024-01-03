function number_of_constraint_equations = get_number_of_constraint_equations(box_dimension);
          number_of_constraints_prompt = {'enter the number of constraint equations'};
          number_of_constraint_prompt_title = 'number of constraint equations';
          inputCell2 = inputdlg(number_of_constraints_prompt,number_of_constraint_prompt_title,box_dimension);
          number_of_constraint_equation_in_string_format = inputCell2{1};
          number_of_constraint_equations = str2num(number_of_constraint_equation_in_string_format);
end