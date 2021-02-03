'use strict';
var container = document.getElementById('container');
var formDiv = document.getElementById('form-div');
var tableDiv = document.getElementById('table-div');
var table = document.getElementById('mainTable')
var form = document.getElementById('form');
var arrayOfStudents = [];


table.setAttribute('border','3px solid white');
table.setAttribute('width', '450px');

function randomGrade(){
  return Math.floor(Math.random() * 101)
}

form.addEventListener('submit', addStudentToTable);
var studentName;
var course;
var grade;
function addStudentToTable(event){
  event.preventDefault()
  studentName = event.target.studentName.value;
  course = event.target.studentCourse.value;
  grade = randomGrade();
  arrayOfStudents.push([studentName, course, grade]);
  localStorage.setItem('students', JSON.stringify(arrayOfStudents));
  for(var i=0; i<arrayOfStudents.length; i++){
    addRow(arrayOfStudents[i][0], arrayOfStudents[i][1], arrayOfStudents[i][2]);
  }
}

function tableHeader(){
  var headerRow = document.createElement('tr');
  var nameColumn = document.createElement('th');
  nameColumn.textContent = "Student Name";
  headerRow.appendChild(nameColumn);
  var gradeColumn = document.createElement('th');
  gradeColumn.textContent = "Student Grade";
  headerRow.appendChild(gradeColumn);
  var courseColumn = document.createElement('th');
  courseColumn.textContent = "Course";
  headerRow.appendChild(courseColumn);
  table.appendChild(headerRow);
}
tableHeader();

function addRow(name, grade,course){
  var row = document.createElement('tr');
  var column1 = document.createElement('td');
  column1.textContent = name;
  row.appendChild(column1);
  
  var column2 = document.createElement('td');
  column2.textContent = grade;
  row.appendChild(column2);

  var column3 = document.createElement('td');
  column3.textContent = course;
  row.appendChild(column3);
  table.appendChild(row);

}

if(localStorage.getItem('students') !== null){
  var arr = JSON.parse(localStorage.getItem('students'));
  for(var i=0; i<arr.length; i++){
    addRow(arr[i][0], arr[i][1], arr[i][2]);
  }
}



tableDiv.appendChild(table);