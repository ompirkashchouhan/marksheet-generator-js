// Get Inputs Step : 1
var nameInp = document.getElementById("name");
var fName = document.getElementById("fatherName");
var surname = document.getElementById("surname");
var group = document.getElementById("group");
var seatNumber = document.getElementById("seatNumber");
// Get Inputs Step : 2
var englishMark = document.getElementById("english");
var physicsMark = document.getElementById("physics");
var chemistryMark = document.getElementById("chemistry");
var mathMark = document.getElementById("math");
var urduMark = document.getElementById("urdu");
var csMark = document.getElementById("computerScience");
var biologyMark = document.getElementById("Biology");

// Error Messages
var stepFirstError = document.getElementById("topStepError");
var stepSecondError = document.getElementById("bottomStepError");

// Function OnClick Submit

function submitForm() {
  // Step : 1 //
  if (nameInp.value === "") {
    stepFirstError.innerHTML = "Please Enter Your Name !";
    stepFirstError.style.color = "red";
    setTimeout(() => {
      stepFirstError.innerHTML = "";
    }, 2000);
  } else if (fName.value === "") {
    stepFirstError.innerHTML = "Please Enter Your Father Name !";
    stepFirstError.style.color = "red";
    setTimeout(() => {
      stepFirstError.innerHTML = "";
    }, 2000);
  } else if (surname.value === "") {
    stepFirstError.innerHTML = "Please Enter Your Surname !";
    stepFirstError.style.color = "red";
    setTimeout(() => {
      stepFirstError.innerHTML = "";
    }, 2000);
  } else if (group.value === "") {
    stepFirstError.innerHTML = "Please Enter Your Group !";
    stepFirstError.style.color = "red";
    setTimeout(() => {
      stepFirstError.innerHTML = "";
    }, 2000);
  } else if (seatNumber.value === "") {
    stepFirstError.innerHTML = "Please Enter Your Seat No !";
    stepFirstError.style.color = "red";
    setTimeout(() => {
      stepFirstError.innerHTML = "";
    }, 2000);
  }
  // Step : 2 //
  else if (englishMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your English Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (physicsMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Physics Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (chemistryMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Chemistry Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (mathMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Math Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (urduMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Urdu Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (csMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Computer Science Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else if (biologyMark.value === "") {
    stepSecondError.innerHTML = "Please Enter Your Biology Marks !";
    stepSecondError.style.color = "red";
    setTimeout(() => {
      stepSecondError.innerHTML = "";
    }, 2000);
  } else {
    // Stored All Data In Object
    var subjects = [
      {
        names: "English",
        obtentMarks: englishMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(englishMark.value) / 100) * 100 + "%",
      },
      {
        names: "Physics",
        obtentMarks: physicsMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(physicsMark.value) / 100) * 100 + "%",
      },
      {
        names: "Chemistry",
        obtentMarks: chemistryMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(chemistryMark.value) / 100) * 100 + "%",
      },
      {
        names: "Math",
        obtentMarks: mathMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(mathMark.value) / 100) * 100 + "%",
      },
      {
        names: "Urdu",
        obtentMarks: urduMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(urduMark.value) / 100) * 100 + "%",
      },
      {
        names: "Computer Science",
        obtentMarks: csMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(csMark.value) / 100) * 100 + "%",
      },
      {
        names: "Biology",
        obtentMarks: biologyMark.value,
        totalMarks: 100,
        minMarks: 33,
        percentage: (Number(biologyMark.value) / 100) * 100 + "%",
      },
      {
        names: "Total",
        obtentMarks: Number(englishMark.value) + Number(physicsMark.value) + Number(chemistryMark.value) + Number(mathMark.value) + Number(urduMark.value) + Number(csMark.value) + Number(biologyMark.value),
        totalMarks: 700,
        minMarks: 231,
        percentage: ((Number(englishMark.value) + Number(physicsMark.value) + Number(chemistryMark.value) + Number(mathMark.value) + Number(urduMark.value) + Number(csMark.value) + Number(biologyMark.value) ) / (700) * (100)).toFixed(0) + "%" ,
      },
    ];

    // >>>>>>>>>>>>>>>>>>>>>>... start Marksheet
    // select parent Div
    // Create the marksheet container
    var marksheet = document.createElement("div");
    marksheet.className = "marksheet";

    // Create the caption section
    var caption = document.createElement("div");
    caption.className = "caption";

    // Logo Section
    var logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    var logoImg = document.createElement("img");
    logoImg.src = "/assets/image/logo.png";
    logoImg.width = 170;
    logoImg.alt = "image";
    logoDiv.appendChild(logoImg);

    // Title Section
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    var titleH1 = document.createElement("h1");
    titleH1.innerText = "Marksheet Report";
    var cdnSpan = document.createElement("span");
    cdnSpan.className = "cdn";
    cdnSpan.innerText = "Codenetic Center";
    titleDiv.appendChild(titleH1);
    titleDiv.appendChild(cdnSpan);

    // Append the logo and title to the caption
    caption.appendChild(logoDiv);
    caption.appendChild(titleDiv);
    marksheet.appendChild(caption);

    // Render Student Info
    var containRenderData = document.createElement("div");
    containRenderData.className = "contain_render_data";

    // First Row (Name, Father Name, Surname)
    var flexWrap1 = document.createElement("div");
    flexWrap1.className = "flex-wrap";

    // Name
    var studentName = document.createElement("div");
    studentName.className = "student_name flex-row";
    var studentNameH3 = document.createElement("h3");
    studentNameH3.innerText = "Name:";
    var getNameSpan = document.createElement("span");
    getNameSpan.id = "getName";
    getNameSpan.innerText = "RandomName";
    studentName.appendChild(studentNameH3);
    studentName.appendChild(getNameSpan);

    // Father Name
    var studentFName = document.createElement("div");
    studentFName.className = "student_fName flex-row";
    var studentFNameH3 = document.createElement("h3");
    studentFNameH3.innerText = "Father Name:";
    var getfNameSpan = document.createElement("span");
    getfNameSpan.id = "getfName";
    getfNameSpan.innerText = "RandomName";
    studentFName.appendChild(studentFNameH3);
    studentFName.appendChild(getfNameSpan);

    // Surname
    var studentSurname = document.createElement("div");
    studentSurname.className = "student_surname";
    var studentSurnameH3 = document.createElement("h3");
    studentSurnameH3.innerText = "Surname:";
    var surNameSpan = document.createElement("span");
    surNameSpan.id = "surName";
    surNameSpan.innerText = "RandomName";
    studentSurname.appendChild(studentSurnameH3);
    studentSurname.appendChild(surNameSpan);

    // Append all rows
    flexWrap1.appendChild(studentName);
    flexWrap1.appendChild(studentFName);
    flexWrap1.appendChild(studentSurname);

    // Second Row (Group, Seat No)
    var flexWrap2 = document.createElement("div");
    flexWrap2.className = "flex-wrap";

    // Group
    var studentGroup = document.createElement("div");
    studentGroup.className = "student_group";
    var studentGroupH3 = document.createElement("h3");
    studentGroupH3.innerText = "Group:";
    var groupSpan = document.createElement("span");
    groupSpan.id = "Group";
    groupSpan.innerText = "science";
    studentGroup.appendChild(studentGroupH3);
    studentGroup.appendChild(groupSpan);

    // Seat No
    var studentSeatNum = document.createElement("div");
    studentSeatNum.className = "student_seatnum";
    var studentSeatNumH3 = document.createElement("h3");
    studentSeatNumH3.innerText = "Seat No:";
    var seatNumSpan = document.createElement("span");
    seatNumSpan.id = "seatNum";
    seatNumSpan.innerText = "";
    studentSeatNum.appendChild(studentSeatNumH3);
    studentSeatNum.appendChild(seatNumSpan);

    // Append all rows
    flexWrap2.appendChild(studentGroup);
    flexWrap2.appendChild(studentSeatNum);

    // Add to the render container
    containRenderData.appendChild(flexWrap1);
    containRenderData.appendChild(flexWrap2);
    marksheet.appendChild(containRenderData);

    // Create Table Form
    var mainTab = document.createElement("div");
    mainTab.className = "mainTab";
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    // Create Table Header
    var headerRow1 = document.createElement("tr");
    var headerRowTh = document.createElement("th");
    headerRowTh.innerHTML = "Subject";
    var headerRow2 = document.createElement("tr");
    var headerRowTh1 = document.createElement("th");
    headerRowTh1.innerHTML = "Obtend Marks";
    var headerRow3 = document.createElement("tr");
    var headerRowTh2 = document.createElement("th");
    headerRowTh2.innerHTML = "Total Marks";
    var headerRow4 = document.createElement("tr");
    var headerRowTh3 = document.createElement("th");
    headerRowTh3.innerHTML = "Min Marks";
    var headerRow5 = document.createElement("tr");
    var headerRowTh4 = document.createElement("th");
    headerRowTh4.innerHTML = "Percentage";

    // table header appenchild tbody
    headerRow1.appendChild(headerRowTh);
    headerRow1.appendChild(headerRowTh1);
    headerRow1.appendChild(headerRowTh2);
    headerRow1.appendChild(headerRowTh3);
    headerRow1.appendChild(headerRowTh4);
    tbody.appendChild(headerRow1);

    // Render the subject rows using a for loop
    for (var i = 0; i < subjects.length; i++) {
      var tr = document.createElement("tr");

      // Subject name
      var tdName = document.createElement("td");
      tdName.innerText = subjects[i].names;
      tr.appendChild(tdName);

      // Obtent Marks
      var tdObtent = document.createElement("td");
      tdObtent.innerText = subjects[i].obtentMarks;
      tr.appendChild(tdObtent);

      // Total Marks
      var tdTotal = document.createElement("td");
      tdTotal.innerText = subjects[i].totalMarks;
      tr.appendChild(tdTotal);

      // Min Marks
      var tdMin = document.createElement("td");
      tdMin.innerText = subjects[i].minMarks;
      tr.appendChild(tdMin);

      // Percentage
      var tdPercentage = document.createElement("td");
      tdPercentage.innerText = subjects[i].percentage;
      tr.appendChild(tdPercentage);

      // Add the row to the table body
      tbody.appendChild(tr);
}

    table.appendChild(tbody);
    mainTab.appendChild(table);
    marksheet.appendChild(mainTab);

// Grading Section
var gradingDiv = document.createElement('div');
gradingDiv.className = 'grading';

// Grading Scale Text
var captionGradeText = document.createElement('div');
captionGradeText.className = 'caption_grade_text';
var gradingScaleH3 = document.createElement('h3');
gradingScaleH3.innerText = 'Grading Scale: A = 90% to 100% B = 80%-89% C = 60%-79% D = 0%-59%';
captionGradeText.appendChild(gradingScaleH3);

// Your Grade
var yourGradeDiv = document.createElement('div');
yourGradeDiv.className = 'you_grade';
var gradeH2 = document.createElement('h2');
gradeH2.innerText = 'Grade:';
var gradeSpan = document.createElement('span');
gradeSpan.id = 'grade';
gradeSpan.innerText = '';
yourGradeDiv.appendChild(gradeH2);
yourGradeDiv.appendChild(gradeSpan);

    // Add grading sections to the container
    gradingDiv.appendChild(captionGradeText);
    gradingDiv.appendChild(yourGradeDiv);
    marksheet.appendChild(gradingDiv);

// Append the whole marksheet to the document body or a specific container
document.getElementById('markContainer').appendChild(marksheet);

var storedDataInp = [{
    nam: nameInp.value,
    fNam: fName.value,
    surNam: surname.value,
    groupNam: group.value,
    seatNam: seatNumber.value
}]

for(var i = 0; i < storedDataInp.length; i++){
    getNameSpan.innerHTML = storedDataInp[i].nam
    getfNameSpan.innerHTML = storedDataInp[i].fNam
    surNameSpan.innerHTML = storedDataInp[i].surNam
    groupSpan.innerHTML = storedDataInp[i].groupNam
    seatNumSpan.innerHTML = storedDataInp[i].seatNam
}

var totalPercentage = Number(subjects[7].percentage.slice(0,2))

if(totalPercentage >= 90 && totalPercentage <= 100){
    gradeSpan.innerHTML = "Congratulation's you have a got (A-1) Grade ."
} else if(totalPercentage >= 80 && totalPercentage <= 89){
    gradeSpan.innerHTML = "Congratulation's you have a got (A) Grade ."
} else if(totalPercentage >= 60 && totalPercentage <= 79){
    gradeSpan.innerHTML = "You have a got (B) Grade ."
} else if(totalPercentage >= 33 && totalPercentage <= 59){
    gradeSpan.innerHTML = "You have a got (C) Grade ."
} else if(totalPercentage > 0 && totalPercentage <= 33){
    gradeSpan.innerHTML = "Fail ."
}


// >>>>>>>>>>>>>>>>>>>>>>... end Marksheet 

} 
}
