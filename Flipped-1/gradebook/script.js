const pageBody = document.querySelector('body');
const container = document.createElement('div');
const studentsContainer = document.createElement('div');
const studentsList = document.createElement('ul');
const addStudentBtn = document.createElement('button');
const removeStudentBtn = document.createElement('button');

const addGradeBtn = document.createElement('button');
const inputForAvg = document.createElement('input');
const btnForAvg = document.createElement('button');
const containerForAvg = document.createElement('div');
const containerForAvgResult = document.createElement('div');
const summaryContainer = document.createElement('div');
const summaryBtn = document.createElement('button');
const summaryResult = document.createElement('div');
const atRiskContainer = document.createElement('div');
const thresholdInput = document.createElement('input');
const thresholdBtn = document.createElement('button');
const atRiskContainerResult = document.createElement('div');
const sortByAverageBtn = document.createElement('button');
const sortByNameBtn = document.createElement('button');
const showStatBtn = document.createElement('button');
const statContainer = document.createElement('div');

const statContainerResult = document.createElement('div');


const searchContainer = document.createElement('div');
const searchInput = document.createElement('input');
const searchBtn = document.createElement('button');
const searchContainerResult = document.createElement('div');
const showTop3StudentsBtn = document.createElement('button');
const showTop5StudentsBtn = document.createElement('button');
const topStudentsContainer = document.createElement('div');
const topStudentsResult = document.createElement('div');

pageBody.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
gap: 20px;
`;

container.style.cssText = `
background-color: #a0bab3ab;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`;

studentsList.style.cssText = `
list-style: none;
padding: 0;
margin: 0;`;

pageBody.appendChild(container);
container.appendChild(studentsContainer);
container.appendChild(studentsList);
container.appendChild(addStudentBtn);
container.appendChild(removeStudentBtn);
container.appendChild(addGradeBtn);
container.appendChild(sortByAverageBtn);
container.appendChild(sortByNameBtn);
pageBody.appendChild(containerForAvg);
containerForAvg.appendChild(inputForAvg);
containerForAvg.appendChild(btnForAvg);
containerForAvg.appendChild(containerForAvgResult);
pageBody.appendChild(summaryContainer);
summaryContainer.appendChild(summaryBtn);
summaryContainer.appendChild(summaryResult);

pageBody.appendChild(atRiskContainer);
atRiskContainer.appendChild(thresholdInput);
atRiskContainer.appendChild(thresholdBtn);
atRiskContainer.appendChild(atRiskContainerResult);


pageBody.appendChild(searchContainer);
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchBtn);
searchContainer.appendChild(searchContainerResult);
pageBody.appendChild(topStudentsContainer);
topStudentsContainer.appendChild(showTop3StudentsBtn);
topStudentsContainer.appendChild(showTop5StudentsBtn);
topStudentsContainer.appendChild(topStudentsResult);

pageBody.appendChild(statContainer);
statContainer.appendChild(showStatBtn);
statContainer.appendChild(statContainerResult);

addStudentBtn.textContent = 'Add Student';
removeStudentBtn.textContent = 'Remove Student';
addStudentBtn.style.cssText = `
padding: 5px 10px;
border: none;
border-radius: 15px;
cursor: pointer`
    ;
removeStudentBtn.style.cssText = `
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer`
    ;

addGradeBtn.textContent = 'Add Grade';
addGradeBtn.style.cssText = `
padding: 5px 10px;
border: none;
border-radius: 15px;
cursor: pointer;`;

btnForAvg.textContent = 'Get Average';
inputForAvg.placeholder = 'Enter student ID';
btnForAvg.style.cssText = `
padding: 5px 10px;
border: none;
cursor: pointer;
`;


containerForAvgResult.style.cssText = `
background-color: #a094b5ab;
margin-top: 15px;
padding: 20px;`;

containerForAvgResult.innerHTML = 'Result will be shown here';

summaryContainer.style.cssText = `
background-color: #ac641deb;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`;

summaryBtn.textContent = 'Class Summary';
summaryBtn.style.cssText = `
border: none;
cursor: pointer;
`;

atRiskContainer.style.cssText = `
background-color: #d30a1fa1;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`;

thresholdInput.placeholder = 'Set threshold...';
thresholdBtn.textContent = 'Show At Risk Students';


searchBtn.textContent = 'Search';
searchInput.placeholder = 'Type student name...';
searchBtn.style.cssText = `
border: none;
cursor: pointer;
`;

showTop3StudentsBtn.textContent = 'Show Top 3 Students';
showTop5StudentsBtn.textContent = 'Show Top 5 Students';

sortByAverageBtn.textContent = 'Sort by Average';
sortByNameBtn.textContent = 'Sort by Name';
sortByAverageBtn.style.cssText = `
max-width: 40%;
margin: 0 auto;
border-radius: 10px;
cursor: pointer;
`;
sortByNameBtn.style.cssText = `
max-width: 40%;
margin: 0 auto;
border-radius: 10px;
cursor: pointer;`;

showStatBtn.textContent = 'Show statistics';
showStatBtn.style.cssText = `
border-radius: 10px;
padding: 10px;
cursor: pointer;`;

let students = [
    { id: 1, name: 'Alice', grades: [85, 90, 78] },
    { id: 2, name: 'Bob', grades: [88, 76, 92] },
    { id: 3, name: 'Charlie', grades: [90, 64, 87] },
    { id: 4, name: 'Diana', grades: [95, 93, 89] },
    { id: 5, name: 'Ethan', grades: [60, 65, 40] }
];
let icon = '👩‍🎓 ';

function listStudents() {
    studentsList.innerHTML = '';

    students.forEach(student => {
        const studentsListItem = document.createElement('li');
        const avgGrade = (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2);
        const gradesCount = student.grades.length;
        studentsListItem.textContent = `${icon} (${student.id}) ${student.name} - avg: ${student.grades.length > 0 ? `${avgGrade} (${gradesCount} gardes)` : 'no grades'}`;
        studentsList.appendChild(studentsListItem);
    })
}

listStudents();


function addStudent(name) {
    name = prompt('Enter name: ').trim();
    if (!name || name.length === 0) return alert('Name is required!');

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name: name,
        grades: []
    };
    const updatedList = [...students, newStudent];
    students = updatedList;

    // students.push(newStudent);


    listStudents();
}

addStudentBtn.addEventListener('click', () => addStudent());


function addGrade(id, score) {
    id = prompt('Enter student ID: ').trim();
    Number(id) ? id : alert('Typer a correct id (number)');

    score = prompt('Enter grade (0-100): ').trim()
    Number(score) && score > 0 && score <= 100 ? score : alert('Enter number from 0-100');

    const student = students.find(student => student.id === Number(id));
    if (!student) return alert('Student not found!');

    const updatedList = students.map(student => {
        if (student.id === Number(id)) {
            student.grades.push(Number(score));
        }
        return student;
    });
    students = updatedList;
    listStudents();
}

addGradeBtn.addEventListener('click', () => addGrade());


function studentAverage(id) {
    id = inputForAvg.value.trim();
    let errorMsg = document.createElement('div');
    errorMsg.textContent = 'Enter a correct student ID (number)';

    const student = students.find(student => student.id === Number(id));


    if (!id || isNaN(id)) {
        containerForAvgResult.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 2000);

        return;
    } else if (!student) {
        errorMsg.textContent = 'Student not found!';
        containerForAvgResult.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 2000);

        return;

    }

    const avgGrade = student.grades.length > 0 ? (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2) : '0';
    containerForAvgResult.innerHTML = `${student.name} - avg: ${avgGrade} from ${student.grades.length} grades`;

}

btnForAvg.addEventListener('click', () => studentAverage());

function classSummary() {
    const totalStudents = students.length;
    const totalGrades = students.reduce((acc, student) => acc + student.grades.length, 0);
    const allGradesSum = students.reduce((acc, student) => acc + student.grades.reduce((a, b) => a + b, 0), 0);
    const classAvg = allGradesSum ? allGradesSum / totalGrades : 0;
    const grades = students.map(student => student.grades);
    const highestGrade = Math.max(...grades.flat());
    const lowestGrade = Math.min(...grades.flat());

    console.log(highestGrade, lowestGrade);

    summaryResult.innerHTML = `Students: ${totalStudents} | Grades: ${totalGrades} | Class avg: ${classAvg.toFixed(2)} | High: ${highestGrade} | Low: ${lowestGrade}`;
}

summaryBtn.addEventListener('click', classSummary);


function listAtRisk(threshold) {
    if (threshold === '' || isNaN(threshold)) {
        return;
    }

    threshold = Number(threshold);

    atRiskContainerResult.innerHTML = '';
    const thresholdValue = document.createElement('p');
    thresholdValue.textContent = `Threshold is ${Number(threshold)}`;
    atRiskContainerResult.appendChild(thresholdValue);
    console.log(typeof threshold);


    students.forEach(student => {
        if (student.grades.length === 0) return;

        const avgGrade = Number((student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2));
        console.log(avgGrade, typeof avgGrade);

        if (avgGrade < threshold) {
            const riskStudent = document.createElement('div');
            console.log(riskStudent);
            riskStudent.textContent = `${student.name} at RISK — avg: ${avgGrade} from ${student.grades.length} grades`;
            atRiskContainerResult.appendChild(riskStudent);
        }
    });


    if (atRiskContainerResult.children.length === 1) {
        const noRiskMsg = document.createElement('div');
        noRiskMsg.textContent = 'No at risk students';
        atRiskContainerResult.appendChild(noRiskMsg);
        console.log(atRiskContainerResult);
    }
}

thresholdBtn.addEventListener('click', () => {
    const value = thresholdInput.value.trim();
    listAtRisk(value);
}
);

function searchStudents(query) {
    query = searchInput.value.toLowerCase().trim();
    let found = false;


    searchContainerResult.innerHTML = '';

    if (query.length === 0) {
        const errorMsg = document.createElement('div');
        errorMsg.textContent = 'Type something to search';
        searchContainerResult.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 2000);

        return;
    }

    students.forEach(student => {
        if (student.name.toLowerCase().includes(query)) {
            found = true;
            const avgGrade = (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2);
            const gradesCount = student.grades.length;

            const resultItem = document.createElement('p');
            resultItem.textContent = `👩‍🎓 (${student.id}) ${student.name} - avg: ${student.grades.length > 0 ? `${avgGrade} (${gradesCount} gardes)` : 'no grades'}`;
            searchContainerResult.appendChild(resultItem);
        }
    });

    if (!found) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'No results found';
        errorMsg.style.color = 'red';
        searchContainerResult.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
    }
}

searchBtn.addEventListener('click', searchStudents);



function topN(n) {
    topStudentsResult.innerHTML = '';
    const studentsListWithAvg = students.map(student => {
        const avgGrade = student.grades.length ? (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2) : 0;
        return { ...student, avg: Number(avgGrade) }
    });
    const topNList = studentsListWithAvg.slice(0, n);

    studentsListWithAvg.sort((a, b) => b.avg - a.avg);

    topNList.forEach(student => {
        const studentsListItem = document.createElement('p');
        const gradesCount = student.grades.length;
        studentsListItem.textContent = `(${student.id}) ${student.name} - avg: ${student.avg > 0 ? `${student.avg} (from ${gradesCount} gardes)` : 'no grades'}`;
        topStudentsResult.appendChild(studentsListItem);
    });

}

showTop3StudentsBtn.addEventListener('click', () => topN(3));
showTop5StudentsBtn.addEventListener('click', () => topN(5));

// - Sorting helpers:

function sortByAverage() {
    studentsList.innerHTML = '';

    const studentsListWithAvg = students.map(student => {
        const avgGrade = student.grades.length ? (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2) : 0;
        return { ...student, avg: Number(avgGrade) }
    });

    studentsListWithAvg.sort((a, b) => b.avg - a.avg);

    studentsListWithAvg.forEach(student => {
        const studentsListItem = document.createElement('li');
        const gradesCount = student.grades.length;
        studentsListItem.textContent = `${icon} ${student.id}) ${student.name} - avg: ${student.avg > 0 ? `${student.avg} (from ${gradesCount} gardes)` : 'no grades'}`;
        studentsList.appendChild(studentsListItem);
    })

}

sortByAverageBtn.addEventListener('click', sortByAverage);

function sortByName() {
    studentsList.innerHTML = '';

    students.sort();

    students.forEach(student => {
        const studentsListItem = document.createElement('li');
        const gradesCount = student.grades.length;
        const avgGrade = student.grades.length ? (student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2) : 0;
        studentsListItem.textContent = `${icon} (${student.id}) ${student.name} - avg: ${student.grades.length > 0 ? `${avgGrade} (${gradesCount} gardes)` : 'no grades'}`;
        studentsList.appendChild(studentsListItem);
    })
}

sortByNameBtn.addEventListener('click', sortByName);

// - `gradeDistribution()` — bucket counts for `[90–100] [80–89] ... [0–59]` and print a summary line.
function gradeDistribution() {
    statContainerResult.innerHTML = '';
    const summary = document.createElement('p');


    const bestGrades = [];  // number of grades [90–100]
    const excellentGrades = []; // number of grades [80–89]
    const goodGrades = []; // number of grades [70–79]
    const satisfactoryGrades = []; // number of grades [60–69]
    const moderateGrades = []; // number of grades [50–59]
    const weakGrades = [];

    students.forEach(student => {
        student.grades.forEach(grade => {
            if (grade >= 90 && grade <= 100) {
                bestGrades.push(grade);
            } else if (grade >= 80 && grade <= 89) {
                excellentGrades.push(grade);
            } else if (grade >= 70 && grade <= 79) {
                goodGrades.push(grade);
            } else if (grade >= 60 && grade <= 69) {
                satisfactoryGrades.push(grade);
            } else if (grade >= 50 && grade <= 59) {
                moderateGrades.push(grade);
            } else if (grade >= 0 && grade < 50) {
                weakGrades.push(grade);
            }
        });
    });
    summary.innerHTML = '';

    summary.innerHTML = `
    ${bestGrades.length} grades in [90–100] range <br>
    ${excellentGrades.length} grades in [80–89] range <br>
    ${goodGrades.length} grades in [70–79] range <br>
    ${satisfactoryGrades.length} grades in [60–69] range <br>
    ${moderateGrades.length} grades in [50–59] range <br>
    ${weakGrades.length} grades in [40–49] range
  `; 
  statContainerResult.appendChild(summary);


}

showStatBtn.addEventListener('click', gradeDistribution);

// - `removeStudent(id)` and/or `removeGrade(id, index)` (guard against invalid indices).
function removeStudent(id) {
    id = prompt('Enter student ID: ').trim();
    Number(id) ? id : alert('Typer a correct id (number)');

    const studentFound = students.find(student => student.id === Number(id));
    if (!studentFound) return alert('Student not found!');

const cleanedList = students.filter(student => student !== studentFound);
students = cleanedList;
listStudents();
}

removeStudentBtn.addEventListener('click', removeStudent);
