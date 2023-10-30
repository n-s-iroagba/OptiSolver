function most_negative_column = get_most_negative_crow_value(columns,crow)

most_negative = crow(1,1);

for i =1:columns
    if crow(1,i) <= most_negative
        most_negative_column = i
    end
end