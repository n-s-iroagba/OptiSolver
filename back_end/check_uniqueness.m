function count = check_uniqueness(array_of_objects)
    count = 0;
    for i = 1:length(array_of_objects)
        if array_of_objects(i).optimal
            count = count + 1;
        end
    end
end
