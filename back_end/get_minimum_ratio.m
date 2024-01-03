function minimum_row_index = get_minimum_ratio(ratio_matrix,rows)

 minimum_value = ratio_matrix(1,1)
for i = 1:rows
   if ratio_matrix(i,1) <= minimum_value
       
       minimum_row_index = i
   end
end