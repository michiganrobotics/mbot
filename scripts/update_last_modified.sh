#!/bin/bash
# Script for updating the last modified date of all the files in the documentation
# to the date of the latest commit. Generated by UMGPT.

# Define the directory containing the Markdown files
DOCS_DIR="docs"
# This is a small hack to ignore the initial commit where all the last modified dates were updated.
IGNORE_COMMIT=172d7a

# Function to get the last relevant commit date
get_last_relevant_commit_date() {
    local file=$1
    # Iterate through commits until a relevant one is found
    git log --format="%H %ci" -- "$file" | while read -r hash date time tz; do

        if [[ $hash != $IGNORE_COMMIT* ]]; then
            echo "$date"
            break
        fi
    done
}

# Loop through all Markdown files recursively in the directory and its subdirectories
find "$DOCS_DIR" -type f -name "*.md" | while read -r file; do
    # Get the last relevant commit date of the file in "YYYY-MM-DD" format
    last_modified_date=$(get_last_relevant_commit_date "$file")

    # Use awk to process the frontmatter and determine if an update is needed
    needs_update=$(awk -v date="$last_modified_date" '
    BEGIN { FS=": "; OFS=": "; in_frontmatter = 0; date_set = 0; needs_update = 0; }
    {
        if (NR == 1 && $1 == "---") {
            in_frontmatter = 1
            temp_content = temp_content $0 "\n"
        } else if (in_frontmatter && $1 == "---" && NR != 1) {
            if (date_set == 0) {
                temp_content = temp_content "last_modified_at: " date "\n"
                needs_update = 1
            }
            in_frontmatter = 0
            temp_content = temp_content $0 "\n"
        } else if (in_frontmatter && $1 == "last_modified_at") {
            if ($2 != date) {
                $2 = date
                needs_update = 1
            }
            date_set = 1
            temp_content = temp_content $1 FS $2 "\n"
        } else {
            temp_content = temp_content $0 "\n"
        }
    }
    END {
        if (needs_update == 1) {
            print temp_content > "temp.md"
            print "1"  # Signal that update is needed
        } else {
            print "0"
        }
    }' "$file")

    # Check if an update is needed
    if [[ "$needs_update" -eq 1 ]]; then
        mv temp.md "$file"
        echo "Updated $file with last_modified_at: $last_modified_date"
    fi
done

# Confirmation message
echo
echo "All Markdown files in '$DOCS_DIR' updated with 'last_modified_at'."