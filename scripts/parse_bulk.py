import os
import json

def extract_cik_entity_pairs(directory_path):
    # List to hold the cik and entityName pairs
    cik_entity_pairs = []

    # Walk through all files in the specified directory
    for filename in os.listdir(directory_path):
        # Construct full file path
        file_path = os.path.join(directory_path, filename)
        # Check if it is a file
        if os.path.isfile(file_path):
            # Open and read the JSON file
            with open(file_path, 'r') as file:
                try:
                    data = json.load(file)
                    # Check if both 'cik' and 'entityName' keys are present
                    if 'cik' in data and 'entityName' in data and (data['entityName'] != ''):
                        # Extract cik and entityName and add to the list
                        cik_entity_pairs.append((data['cik'], data['entityName']))
                    else:
                        # Skip the file if either key is missing
                        print(f"Skipping file {filename} due to missing 'cik' or 'entityName'.")
                except json.JSONDecodeError as e:
                    print(f"Error decoding JSON from file {filename}: {e}")
                except KeyError as e:
                    print(f"Missing expected key {e} in file {filename}")
    
    # Write the pairs to a JSON file
    with open('./data/cik_entity_pairs.json', 'w') as outfile:
        json.dump(cik_entity_pairs, outfile)

    return cik_entity_pairs

# Specify your directory path here
directory_path = '/Users/louis.sanna/Downloads/companyfacts'

# Call the function and print the result
extract_cik_entity_pairs(directory_path)

