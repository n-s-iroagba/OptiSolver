function most_negative_column = get_most_negative_crow_index(columns, crow)
most_negative = crow(1, 1);
most_negative_column = 1; 
for i = 2:columns
    if crow(1, i) <= most_negative
        most_negative = crow(1, i);
        most_negative_column = i;
    end
end