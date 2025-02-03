function createGPAInputs() {
    const courseCount = document.getElementById('courseCount').value;
    const gpaInputsDiv = document.getElementById('gpaInputs');
    gpaInputsDiv.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= courseCount; i++) {
        const label = document.createElement('label');
        label.innerText = `GPA for New Course ${i}:`;
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.id = `gpa${i}`;
        input.placeholder = `Enter GPA  ${i}`;

        gpaInputsDiv.appendChild(label);
        gpaInputsDiv.appendChild(input);
    }
}

function calculateUpdatedCGPA() {
    const currentCGPA = parseFloat(document.getElementById('currentCGPA').value);
    const coursesCompleted = parseInt(document.getElementById('coursesCompleted').value);
    const courseCount = parseInt(document.getElementById('courseCount').value);

    // Validate inputs
    if (isNaN(currentCGPA) || isNaN(coursesCompleted) || isNaN(courseCount)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate total grade points from completed courses
    const completedCredits = coursesCompleted * 3; // Each course is 3 credits
    const completedGradePoints = currentCGPA * completedCredits;

    // Calculate grade points from new courses
    let newGradePoints = 0;
    for (let i = 1; i <= courseCount; i++) {
        const gpa = parseFloat(document.getElementById(`gpa${i}`).value);
        if (!isNaN(gpa)) {
            newGradePoints += gpa * 3; // Each course is 3 credits
        }
    }

    // Calculate total credits and total grade points
    const totalCredits = completedCredits + (courseCount * 3); // Total credits (completed + new courses)
    const totalGradePoints = completedGradePoints + newGradePoints;

    // Calculate updated CGPA
    const updatedCGPA = totalGradePoints / totalCredits;

    // Display the result
    document.getElementById('result').innerText = `Your Updated CGPA is: ${updatedCGPA.toFixed(2)}`;
}