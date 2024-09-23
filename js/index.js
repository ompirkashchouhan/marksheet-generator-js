// Get Inputs Step : 1
var nameInp = document.getElementById("name");
var fName = document.getElementById("fatherName");
var surname = document.getElementById("surname1");
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

// Restrict the seat number input to a maximum of 5 digits
seatNumber.addEventListener("input", function () {
  if (seatNumber.value.length > 5) {
    seatNumber.value = seatNumber.value.slice(0, 5);
  }
});

// Function to limit input length and value to 100
function limitInputLengthAndValue(inputField) {
  inputField.addEventListener("input", function () {
    if (inputField.value.length > 3) {
      inputField.value = inputField.value.slice(0, 3);
    }
    if (Number(inputField.value) > 100) {
      inputField.value = 100;
    }
  });
}

// Apply restrictions to subject input fields
limitInputLengthAndValue(englishMark);
limitInputLengthAndValue(physicsMark);
limitInputLengthAndValue(chemistryMark);
limitInputLengthAndValue(mathMark);
limitInputLengthAndValue(urduMark);
limitInputLengthAndValue(csMark);
limitInputLengthAndValue(biologyMark);

// Error Messages
var stepFirstError = document.getElementById("topStepError");
var stepSecondError = document.getElementById("bottomStepError");

// Display error function
function displayError(element, message) {
  element.innerText = message;
  element.style.color = "red";
  setTimeout(() => {
    element.innerText = "";
  }, 2000);
}

// Function OnClick Submit
function submitForm() {
  // Step : 1 - Personal information validation
  if (nameInp.value === "") {
    displayError(stepFirstError, "Please Enter Your Name !");
    return;
  } else if (fName.value === "") {
    displayError(stepFirstError, "Please Enter Your Father Name !");
    return;
  } else if (surname.value === "") {
    displayError(stepFirstError, "Please Enter Your Surname !");
    return;
  } else if (group.value === "") {
    displayError(stepFirstError, "Please Enter Your Group !");
    return;
  } else if (seatNumber.value === "") {
    displayError(stepFirstError, "Please Enter Your Seat No !");
    return;
  }

  // Step : 2 - Subject marks validation
  if (englishMark.value === "") {
    displayError(stepSecondError, "Please Enter Your English Marks !");
    return;
  } else if (physicsMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Physics Marks !");
    return;
  } else if (chemistryMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Chemistry Marks !");
    return;
  } else if (mathMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Math Marks !");
    return;
  } else if (urduMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Urdu Marks !");
    return;
  } else if (csMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Computer Science Marks !");
    return;
  } else if (biologyMark.value === "") {
    displayError(stepSecondError, "Please Enter Your Biology Marks !");
    return;
  }

  // All data validation passed
  var subjects = [
    {
      names: "English",
      obtentMarks: Number(englishMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(englishMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Physics",
      obtentMarks: Number(physicsMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(physicsMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Chemistry",
      obtentMarks: Number(chemistryMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(chemistryMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Math",
      obtentMarks: Number(mathMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(mathMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Urdu",
      obtentMarks: Number(urduMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(urduMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Computer Science",
      obtentMarks: Number(csMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(csMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Biology",
      obtentMarks: Number(biologyMark.value),
      totalMarks: 100,
      minMarks: 33,
      percentage: ((Number(biologyMark.value) / 100) * 100).toFixed(0) + "%",
    },
    {
      names: "Total",
      obtentMarks:
        Number(englishMark.value) +
        Number(physicsMark.value) +
        Number(chemistryMark.value) +
        Number(mathMark.value) +
        Number(urduMark.value) +
        Number(csMark.value) +
        Number(biologyMark.value),
      totalMarks: 700,
      minMarks: 231,
      percentage:
        (
          ((Number(englishMark.value) +
            Number(physicsMark.value) +
            Number(chemistryMark.value) +
            Number(mathMark.value) +
            Number(urduMark.value) +
            Number(csMark.value) +
            Number(biologyMark.value)) /
            700) *
          100
        ).toFixed(0) + "%",
    },
  ];

  // >>>>>>>>>>>>>>>>>>>>>>... start Marksheet Generation
  var marksheet = document.createElement("div");
  marksheet.className = "marksheet";
  marksheet.id = "marksheet_main_contain";

  var caption = document.createElement("div");
  caption.className = "caption";

  var logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  var logoImg = document.createElement("img");
  logoImg.src = "./assets/image/logo-code-netic-removebg.png";
  logoImg.width = 170;
  logoImg.alt = "image";
  logoDiv.appendChild(logoImg);

  var titleDiv = document.createElement("div");
  titleDiv.className = "title";
  var titleH1 = document.createElement("h1");
  titleH1.innerText = "Marksheet Report";
  var cdnSpan = document.createElement("span");
  cdnSpan.className = "cdn";
  cdnSpan.innerText = "Codenetic Center";
  titleDiv.appendChild(titleH1);
  titleDiv.appendChild(cdnSpan);

  caption.appendChild(logoDiv);
  caption.appendChild(titleDiv);
  marksheet.appendChild(caption);

  // Render Student Info
  var containRenderData = document.createElement("div");
  containRenderData.className = "contain_render_data";

  var flexWrap1 = document.createElement("div");
  flexWrap1.className = "flex-wrap";

  var studentName = document.createElement("div");
  studentName.className = "student_name flex-row";
  var studentNameH3 = document.createElement("h3");
  studentNameH3.innerText = "Name :";
  var getNameSpan = document.createElement("span");
  getNameSpan.id = "getName";
  getNameSpan.innerText = nameInp.value;
  studentName.appendChild(studentNameH3);
  studentName.appendChild(getNameSpan);

  var studentFName = document.createElement("div");
  studentFName.className = "student_fName flex-row";
  var studentFNameH3 = document.createElement("h3");
  studentFNameH3.innerText = "Father Name :";
  var getfNameSpan = document.createElement("span");
  getfNameSpan.id = "getfName";
  getfNameSpan.innerText = fName.value;
  studentFName.appendChild(studentFNameH3);
  studentFName.appendChild(getfNameSpan);

  var studentSurname = document.createElement("div");
  studentSurname.className = "student_surname";
  var studentSurnameH3 = document.createElement("h3");
  studentSurnameH3.innerText = "Surname :";
  var surNameSpan = document.createElement("span");
  surNameSpan.id = "surName";
  surNameSpan.innerText = surname.value;
  studentSurname.appendChild(studentSurnameH3);
  studentSurname.appendChild(surNameSpan);

  flexWrap1.appendChild(studentName);
  flexWrap1.appendChild(studentFName);
  flexWrap1.appendChild(studentSurname);

  var flexWrap2 = document.createElement("div");
  flexWrap2.className = "flex-wrap";

  var studentGroup = document.createElement("div");
  studentGroup.className = "student_group";
  var studentGroupH3 = document.createElement("h3");
  studentGroupH3.innerText = "Group :";
  var groupSpan = document.createElement("span");
  groupSpan.id = "Group";
  groupSpan.innerText = group.value;
  studentGroup.appendChild(studentGroupH3);
  studentGroup.appendChild(groupSpan);

  var studentSeatNum = document.createElement("div");
  studentSeatNum.className = "student_seatnum";
  var studentSeatNumH3 = document.createElement("h3");
  studentSeatNumH3.innerText = "Seat No :";
  var seatNumSpan = document.createElement("span");
  seatNumSpan.id = "seatNum";
  seatNumSpan.innerText = seatNumber.value;
  studentSeatNum.appendChild(studentSeatNumH3);
  studentSeatNum.appendChild(seatNumSpan);

  flexWrap2.appendChild(studentGroup);
  flexWrap2.appendChild(studentSeatNum);

  containRenderData.appendChild(flexWrap1);
  containRenderData.appendChild(flexWrap2);
  marksheet.appendChild(containRenderData);

  // Create Table Form
  var mainTab = document.createElement("div");
  mainTab.className = "mainTab";
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  // Table Header
  var headerRow1 = document.createElement("tr");
  var headerRowTh = document.createElement("th");
  headerRowTh.innerHTML = "Subject";
  var headerRowTh1 = document.createElement("th");
  headerRowTh1.innerHTML = "Obtained Marks";
  var headerRowTh2 = document.createElement("th");
  headerRowTh2.innerHTML = "Total Marks";
  var headerRowTh3 = document.createElement("th");
  headerRowTh3.innerHTML = "Min Marks";
  var headerRowTh4 = document.createElement("th");
  headerRowTh4.innerHTML = "Percentage";

  headerRow1.appendChild(headerRowTh);
  headerRow1.appendChild(headerRowTh1);
  headerRow1.appendChild(headerRowTh2);
  headerRow1.appendChild(headerRowTh3);
  headerRow1.appendChild(headerRowTh4);
  tbody.appendChild(headerRow1);

  // Render subject rows using a loop
  for (var i = 0; i < subjects.length; i++) {
    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.innerText = subjects[i].names;
    tr.appendChild(tdName);

    var tdObtent = document.createElement("td");
    tdObtent.innerText = subjects[i].obtentMarks;
    tr.appendChild(tdObtent);

    var tdTotal = document.createElement("td");
    tdTotal.innerText = subjects[i].totalMarks;
    tr.appendChild(tdTotal);

    var tdMin = document.createElement("td");
    tdMin.innerText = subjects[i].minMarks;
    tr.appendChild(tdMin);

    var tdPercentage = document.createElement("td");
    tdPercentage.innerText = subjects[i].percentage;
    tr.appendChild(tdPercentage);

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  mainTab.appendChild(table);
  marksheet.appendChild(mainTab);

  // Grading Section
  var gradingDiv = document.createElement("div");
  gradingDiv.className = "grading";

  var captionGradeText = document.createElement("div");
  captionGradeText.className = "caption_grade_text";
  var gradingScaleH3 = document.createElement("h3");
  gradingScaleH3.innerText =
    "Grading Scale: A-1 = 90% to 100% A = 80%-89% B = 60%-79% C = 33%-59%";
  captionGradeText.appendChild(gradingScaleH3);

  var yourGradeDiv = document.createElement("div");
  yourGradeDiv.className = "you_grade";
  var gradeH2 = document.createElement("h2");
  gradeH2.innerText = "Grade:";
  var gradeSpan = document.createElement("span");
  gradeSpan.id = "grade";
  gradeSpan.innerText = "";
  yourGradeDiv.appendChild(gradeH2);
  yourGradeDiv.appendChild(gradeSpan);

  gradingDiv.appendChild(captionGradeText);
  gradingDiv.appendChild(yourGradeDiv);
  marksheet.appendChild(gradingDiv);

  // Append the whole marksheet to the document body or a specific container
  document.getElementById("markContainer").appendChild(marksheet);

  var totalPercentage = Number(subjects[7].percentage.slice(0, -1));

  if (totalPercentage >= 90) {
    gradeSpan.innerHTML = "Congratulation's you have got (A-1) Grade .";
  } else if (totalPercentage >= 80) {
    gradeSpan.innerHTML = "Congratulation's you have got (A) Grade .";
  } else if (totalPercentage >= 60) {
    gradeSpan.innerHTML = "You have got (B) Grade .";
  } else if (totalPercentage >= 33) {
    gradeSpan.innerHTML = "You have got (C) Grade .";
  } else {
    gradeSpan.innerHTML = "Fail.";
  }

  nameInp.value = "";
  fName.value = "";
  surname.value = "";
  group.value = "";
  seatNumber.value = "";
  englishMark.value = "";
  physicsMark.value = "";
  chemistryMark.value = "";
  mathMark.value = "";
  urduMark.value = "";
  csMark.value = "";
  biologyMark.value = "";
}
// end program
