"use strict";

document
  .getElementById("patient_info")
  .addEventListener("submit", onsubmit);

document
  .getElementById("chkShowOutPatients")
  .addEventListener("change", filterTableData);

document
  .getElementById("chkElderlyPatients")
  .addEventListener("change", filterTableData);



let patientData = [];

function onsubmit(event) {
  event.preventDefault();
  const inputData = Object.fromEntries(new FormData(event.target));
  console.log(inputData);
  patientData.push(inputData);
  loadTableData();
  document.getElementById("patient_info").reset();
}

function filterTableData() {
  loadTableData();
}

function loadTableData() {
  let tableContainer = document.getElementById("tbodyPatientsList");

  let filteredData = chkShowOutPatients.checked
    ? patientData.filter((patient) => patient.radioIsOutPatient === "Yes")
    : patientData;

    filteredData = chkElderlyPatients.checked
    ? patientData.filter(
        (patient) => calculateAge(patient.dateOfBirth) > 65
      )
    : patientData;

  tableContainer.innerHTML = "";

  filteredData.forEach(function (element) {
    var patientIdRow = document.createElement("tr");

    var patientIdCell = document.createElement("td");
    patientIdCell.textContent = element.patientIdNumber;
    patientIdRow.appendChild(patientIdCell);

    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = element.firstName;
    patientIdRow.appendChild(firstNameCell);

    var middleInitialsCell = document.createElement("td");
    middleInitialsCell.textContent = element.middleInitials;
    patientIdRow.appendChild(middleInitialsCell);

    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = element.lastName;
    patientIdRow.appendChild(lastNameCell);

    var dateOfBirthCell = document.createElement("td");
    dateOfBirthCell.textContent = element.dateOfBirth;
    patientIdRow.appendChild(dateOfBirthCell);

    var ddlDepartmentCell = document.createElement("td");
    ddlDepartmentCell.textContent = element.ddlDepartment;
    patientIdRow.appendChild(ddlDepartmentCell);

    var radioIsOutPatientCell = document.createElement("td");
    radioIsOutPatientCell.textContent = element.radioIsOutPatient;
    patientIdRow.appendChild(radioIsOutPatientCell);

    tableContainer.appendChild(patientIdRow);
  });

  function calculateAge(dateOfBirth) {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}
