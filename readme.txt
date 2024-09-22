// issue's 
// changes in all code

Sure! I'll compare the original code you shared with the updated code step by step to highlight the changes made and the issues fixed. 

### 1. Input Handling

**Original:**
- Inputs were captured without restrictions on the length or values.

**Updated:**
- **Seat Number:** Now has an event listener to restrict input to a maximum of 5 digits.
- **Subject Marks:** A function (`limitInputLengthAndValue`) is added to limit each subject input to a maximum of 3 digits and ensures values do not exceed 100.

### 2. Error Handling

**Original:**
- The error handling was simpler and didn't provide feedback for every possible empty input.

**Updated:**
- Each input in both steps has its own validation checks, ensuring users are prompted with specific error messages if they leave any fields empty.

### 3. Data Processing

**Original:**
- Subject data might not have been encapsulated in a structured format.

**Updated:**
- An array of objects (`subjects`) is created to store subject data, making it easier to manage and render.

### 4. Marksheet Generation

**Original:**
- The marksheet might not have been well-structured or styled.

**Updated:**
- The marksheet is generated dynamically using JavaScript and includes well-structured HTML elements. It now also shows total marks and a grading system based on the total percentage.

### 5. Grading System

**Original:**
- There was no grading system in place.

**Updated:**
- A grading section has been added to determine and display the grade based on the total percentage calculated from the marks.

### Summary of Fixes
- **Input Restrictions:** Added for seat number and subject marks.
- **Validation Improvements:** More robust error handling for empty fields.
- **Data Structuring:** Used an array of objects for subjects for easier handling.
- **Dynamic Marksheet Creation:** Improved layout and grading system added.

These changes enhance user experience by enforcing input limits, providing clear feedback, and organizing data better. Let me know if you need further details or have specific areas you want to focus on!

