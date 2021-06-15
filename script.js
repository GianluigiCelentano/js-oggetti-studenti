var student = {
    description: [
    name = "Gianluigi",
    surname = "Celentano",
    age = "25"
    ] 
}
for(var gr = 0; gr < student.description.length; gr++) {
    document.getElementById("student").innerHTML += " " + student.description[gr]
}


var students = {
    descriptions: [
        names = "Ottavio","Alfredo","Davide",
        surnames = "Fogliata", "Guida", "Voza"
    ]
}
for(var grs = 0; grs < students.descriptions.length; grs++) {
    document.getElementById("students1").innerHTML = " " + students.descriptions[0] + " " + students.descriptions[3]
    document.getElementById("students2").innerHTML = " " + students.descriptions[1] + " " + students.descriptions[4]
    document.getElementById("students3").innerHTML = " " + students.descriptions[2] + " " + students.descriptions[5]
}


var utentStudent = {
    utentStudentDescription: []
}
while (utentStudent.utentStudentDescription.length < 1) {
    var askName = prompt("INSERISCI UN NOME")
    var askSurname = prompt("INSERISCI UN COGNOME")
    var askAge = prompt("INSERISCI L'ETA'")
    utentStudent.utentStudentDescription.push ({
        name:askName,
        surname:askSurname,
        age:askAge
    })
} 

for(var ugr = 0; ugr < utentStudent.utentStudentDescription.length; ugr++) {
    for(var n in utentStudent.utentStudentDescription.length[ugr]) {
        document.getElementById("utentstudent").innerHTML = utentStudent.utentStudentDescription[ugr][n]
    }
}